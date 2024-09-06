/* eslint-env mocha */

import { generateKeyPair } from '@libp2p/crypto/keys'
import { KEEP_ALIVE, TypedEventEmitter, start, stop } from '@libp2p/interface'
import { peerLogger } from '@libp2p/logger'
import { peerIdFromPrivateKey } from '@libp2p/peer-id'
import { expect } from 'aegir/chai'
import delay from 'delay'
import pRetry from 'p-retry'
import sinon from 'sinon'
import { type StubbedInstance, stubInterface } from 'sinon-ts'
import { ReconnectQueue } from '../../src/connection-manager/reconnect-queue.js'
import type { ComponentLogger, Libp2pEvents, PeerStore, TypedEventTarget, Peer } from '@libp2p/interface'
import type { ConnectionManager } from '@libp2p/interface-internal'

describe('reconnect queue', () => {
  let components: {
    connectionManager: StubbedInstance<ConnectionManager>
    events: TypedEventTarget<Libp2pEvents>
    peerStore: StubbedInstance<PeerStore>
    logger: ComponentLogger
  }
  let queue: ReconnectQueue

  beforeEach(async () => {
    const peerId = peerIdFromPrivateKey(await generateKeyPair('Ed25519'))

    components = {
      connectionManager: stubInterface(),
      events: new TypedEventEmitter<Libp2pEvents>(),
      peerStore: stubInterface<PeerStore>(),
      logger: peerLogger(peerId)
    }
  })

  afterEach(async () => {
    await stop(queue)

    sinon.reset()
  })

  it('should reconnect to KEEP_ALIVE peers on startup', async () => {
    queue = new ReconnectQueue(components)

    const keepAlivePeer = peerIdFromPrivateKey(await generateKeyPair('Ed25519'))

    components.peerStore.all.resolves([
      stubInterface<Peer>({
        id: keepAlivePeer,
        tags: new Map([[KEEP_ALIVE, {
          value: 1
        }]])
      })
    ])

    await start(queue)

    await pRetry(() => {
      expect(components.connectionManager.openConnection.calledWith(keepAlivePeer)).to.be.true()
    }, {
      retries: 5,
      factor: 1
    })
  })

  it('should reconnect to KEEP_ALIVE peers on disconnect', async () => {
    queue = new ReconnectQueue(components)

    const keepAlivePeer = peerIdFromPrivateKey(await generateKeyPair('Ed25519'))

    components.peerStore.all.resolves([])
    components.peerStore.get.withArgs(keepAlivePeer).resolves(
      stubInterface<Peer>({
        id: keepAlivePeer,
        tags: new Map([[KEEP_ALIVE, {
          value: 1
        }]])
      })
    )

    await start(queue)

    components.events.safeDispatchEvent('peer:disconnect', new CustomEvent('peer:disconnect', {
      detail: keepAlivePeer
    }))

    await pRetry(() => {
      expect(components.connectionManager.openConnection.calledWith(keepAlivePeer)).to.be.true()
    }, {
      retries: 5,
      factor: 1
    })
  })

  it('should not reconnect to non-KEEP_ALIVE peers on disconnect', async () => {
    queue = new ReconnectQueue(components)

    const nonKeepAlivePeer = peerIdFromPrivateKey(await generateKeyPair('Ed25519'))

    components.peerStore.all.resolves([])
    components.peerStore.get.withArgs(nonKeepAlivePeer).resolves(
      stubInterface<Peer>({
        id: nonKeepAlivePeer,
        tags: new Map()
      })
    )

    await start(queue)

    components.events.safeDispatchEvent('peer:disconnect', new CustomEvent('peer:disconnect', {
      detail: nonKeepAlivePeer
    }))

    await delay(1000)

    expect(components.connectionManager.openConnection.calledWith(nonKeepAlivePeer)).to.be.false()
  })
})