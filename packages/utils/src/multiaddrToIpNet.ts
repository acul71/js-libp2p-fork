import { multiaddr } from '@multiformats/multiaddr'
import { convertToIpNet } from '@multiformats/multiaddr/convert'
import type { IpNet } from '@chainsafe/netmask'
import type { Multiaddr } from '@multiformats/multiaddr'

/**
 * Converts a multiaddr string or object to an IpNet object.
 * If the multiaddr doesn't include /ipcidr/32, it will encapsulate with /ipcidr/32.
 *
 * @param {string | Multiaddr} ma - The multiaddr string or object to convert.
 * @returns {IpNet} The converted IpNet object.
 * @throws {Error} Throws an error if the multiaddr is not valid.
 */
export function multiaddrToIpNet (ma: string | Multiaddr): IpNet {
  try {
    let parsedMa: Multiaddr
    if (typeof ma === 'string') {
      parsedMa = multiaddr(ma)
    } else {
      parsedMa = ma
    }

    // Check if /ipcidr is already present, if not encapsulate with /ipcidr/32
    if (!parsedMa.protoNames().includes('ipcidr')) {
      parsedMa = parsedMa.encapsulate('/ipcidr/32')
    }

    return convertToIpNet(parsedMa)
  } catch (error) {
    throw new Error(`Can't convert to IpNet, Invalid multiaddr format: ${ma}`)
  }
}
