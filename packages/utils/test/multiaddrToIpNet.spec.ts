/* eslint-env mocha */

import { expect } from 'aegir/chai'
import { multiaddrToIpNet } from '../src/multiaddrToIpNet.js'

describe('multiaddrToIpNet', () => {
  it('should convert a simple multiaddr to an IpNet', () => {
    const ma = '/ip4/127.0.0.1'
    const ipNet = multiaddrToIpNet(ma)
    expect(ipNet.toString()).to.equal('127.0.0.1/32')
  })

  it('should convert a multiaddr with a ipcidr to an IpNet', () => {
    const ma = '/ip4/127.0.0.1/ipcidr/32'
    const ipNet = multiaddrToIpNet(ma)
    expect(ipNet.toString()).to.equal('127.0.0.1/32')
  })
})
