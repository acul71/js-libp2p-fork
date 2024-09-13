# Changelog

## [2.0.1](https://github.com/libp2p/js-libp2p/compare/pnet-v2.0.0...pnet-v2.0.1) (2024-09-12)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @libp2p/crypto bumped from ^5.0.0 to ^5.0.1
    * @libp2p/interface bumped from ^2.0.0 to ^2.0.1
  * devDependencies
    * @libp2p/interface-compliance-tests bumped from ^6.0.0 to ^6.0.1
    * @libp2p/logger bumped from ^5.0.0 to ^5.0.1
    * @libp2p/peer-id bumped from ^5.0.0 to ^5.0.1

## [2.0.0](https://github.com/libp2p/js-libp2p/compare/pnet-v1.0.0...pnet-v2.0.0) (2024-09-11)


### ⚠ BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* the `minSendBytes` option has been removed from Mplex since the transport can now decide how to optimise sending data
* imports from `libp2p/dcutr` now need to be from `@libp2p/dcutr`
* the `isStarted` method has been removed from the `Startable` interface

### Features

* allow stream muxers and connection encrypters to yield lists ([#2256](https://github.com/libp2p/js-libp2p/issues/2256)) ([4a474d5](https://github.com/libp2p/js-libp2p/commit/4a474d54d3299e0ac30fa143b57436b3cf45e426))
* check service dependencies on startup ([#2586](https://github.com/libp2p/js-libp2p/issues/2586)) ([d1f1c2b](https://github.com/libp2p/js-libp2p/commit/d1f1c2be78bd195f404e62627c2c9f545845e5f5))
* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add @libp2p/record module to monorepo ([#2466](https://github.com/libp2p/js-libp2p/issues/2466)) ([3ffecc5](https://github.com/libp2p/js-libp2p/commit/3ffecc5bfe806a678c1b0228ff830f1811630718))
* align dependency versions and update project config ([#2357](https://github.com/libp2p/js-libp2p/issues/2357)) ([8bbd436](https://github.com/libp2p/js-libp2p/commit/8bbd43628343f995804eea3102d0571ddcebc5c4))
* do not wait for stream reads and writes at the same time ([#2290](https://github.com/libp2p/js-libp2p/issues/2290)) ([10ea197](https://github.com/libp2p/js-libp2p/commit/10ea19700ae0c464734c88eb5922e2faeb27446a))
* mark all packages side-effect free ([#2360](https://github.com/libp2p/js-libp2p/issues/2360)) ([3c96210](https://github.com/libp2p/js-libp2p/commit/3c96210cf6343b21199996918bae3a0f60220046))
* remove extra deps ([#2340](https://github.com/libp2p/js-libp2p/issues/2340)) ([53e83ee](https://github.com/libp2p/js-libp2p/commit/53e83eea50410391ec9cff4cd8097210b93894ff))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* restore lost commits ([#2268](https://github.com/libp2p/js-libp2p/issues/2268)) ([5775f1d](https://github.com/libp2p/js-libp2p/commit/5775f1df4f5561500e622dc0788fdacbc74e2755))
* update patch versions of deps ([#2397](https://github.com/libp2p/js-libp2p/issues/2397)) ([0321812](https://github.com/libp2p/js-libp2p/commit/0321812e731515558f35ae2d53242035a343a21a))
* update project config ([48444f7](https://github.com/libp2p/js-libp2p/commit/48444f750ebe3f03290bf70e84d7590edc030ea4))
* use logging component everywhere ([#2228](https://github.com/libp2p/js-libp2p/issues/2228)) ([e5dfde0](https://github.com/libp2p/js-libp2p/commit/e5dfde0883191c93903ca552433f177d48adf0b3))


### Documentation

* add doc-check to all modules ([#2419](https://github.com/libp2p/js-libp2p/issues/2419)) ([6cdb243](https://github.com/libp2p/js-libp2p/commit/6cdb24362de9991e749f76b16fcd4c130e8106a0))
* fix broken links in docs site ([#2497](https://github.com/libp2p/js-libp2p/issues/2497)) ([fd1f834](https://github.com/libp2p/js-libp2p/commit/fd1f8343db030d74cd08bca6a0cffda93532765f)), closes [#2423](https://github.com/libp2p/js-libp2p/issues/2423)


### Dependencies

* bump aegir from 42.2.11 to 43.0.1 ([#2571](https://github.com/libp2p/js-libp2p/issues/2571)) ([757fb26](https://github.com/libp2p/js-libp2p/commit/757fb2674f0a3e06fd46d3ff63f7f461c32d47d2))
* bump aegir from 43.0.3 to 44.0.1 ([#2603](https://github.com/libp2p/js-libp2p/issues/2603)) ([944935f](https://github.com/libp2p/js-libp2p/commit/944935f8dbcc1083e4cb4a02b49a0aab3083d3d9))
* bump uint8arrays from 4.0.10 to 5.0.0 ([#2307](https://github.com/libp2p/js-libp2p/issues/2307)) ([6d11e82](https://github.com/libp2p/js-libp2p/commit/6d11e8268b16e0bf4bc520f42abb71a228d5dc57))
* update sibling dependencies ([178fe26](https://github.com/libp2p/js-libp2p/commit/178fe2671a7af9870bdd111de9073843a2a29b34))
## [2.0.0](https://github.com/libp2p/js-libp2p/compare/pnet-v1.0.0...pnet-v2.0.0) (2024-09-11)


### ⚠ BREAKING CHANGES

* - `@libp2p/peer-id-factory` has been removed, use `generateKeyPair` and `peerIdFromPrivateKey` instead
* The `.code` property has been removed from most errors, use `.name` instead
* the `minSendBytes` option has been removed from Mplex since the transport can now decide how to optimise sending data
* imports from `libp2p/dcutr` now need to be from `@libp2p/dcutr`
* the `isStarted` method has been removed from the `Startable` interface

### Features

* allow stream muxers and connection encrypters to yield lists ([#2256](https://github.com/libp2p/js-libp2p/issues/2256)) ([4a474d5](https://github.com/libp2p/js-libp2p/commit/4a474d54d3299e0ac30fa143b57436b3cf45e426))
* check service dependencies on startup ([#2586](https://github.com/libp2p/js-libp2p/issues/2586)) ([d1f1c2b](https://github.com/libp2p/js-libp2p/commit/d1f1c2be78bd195f404e62627c2c9f545845e5f5))
* use `.name` property instead of `.code` for errors ([#2655](https://github.com/libp2p/js-libp2p/issues/2655)) ([0d20426](https://github.com/libp2p/js-libp2p/commit/0d20426fd5ea19b03345c70289bbd692e4348e1f))


### Bug Fixes

* add @libp2p/record module to monorepo ([#2466](https://github.com/libp2p/js-libp2p/issues/2466)) ([3ffecc5](https://github.com/libp2p/js-libp2p/commit/3ffecc5bfe806a678c1b0228ff830f1811630718))
* align dependency versions and update project config ([#2357](https://github.com/libp2p/js-libp2p/issues/2357)) ([8bbd436](https://github.com/libp2p/js-libp2p/commit/8bbd43628343f995804eea3102d0571ddcebc5c4))
* do not wait for stream reads and writes at the same time ([#2290](https://github.com/libp2p/js-libp2p/issues/2290)) ([10ea197](https://github.com/libp2p/js-libp2p/commit/10ea19700ae0c464734c88eb5922e2faeb27446a))
* mark all packages side-effect free ([#2360](https://github.com/libp2p/js-libp2p/issues/2360)) ([3c96210](https://github.com/libp2p/js-libp2p/commit/3c96210cf6343b21199996918bae3a0f60220046))
* remove extra deps ([#2340](https://github.com/libp2p/js-libp2p/issues/2340)) ([53e83ee](https://github.com/libp2p/js-libp2p/commit/53e83eea50410391ec9cff4cd8097210b93894ff))
* remove private key field from peer id ([#2660](https://github.com/libp2p/js-libp2p/issues/2660)) ([3eeb0c7](https://github.com/libp2p/js-libp2p/commit/3eeb0c705bd58285a6e1ec9fcbb6987c5959d504)), closes [#2659](https://github.com/libp2p/js-libp2p/issues/2659)
* restore lost commits ([#2268](https://github.com/libp2p/js-libp2p/issues/2268)) ([5775f1d](https://github.com/libp2p/js-libp2p/commit/5775f1df4f5561500e622dc0788fdacbc74e2755))
* update patch versions of deps ([#2397](https://github.com/libp2p/js-libp2p/issues/2397)) ([0321812](https://github.com/libp2p/js-libp2p/commit/0321812e731515558f35ae2d53242035a343a21a))
* update project config ([48444f7](https://github.com/libp2p/js-libp2p/commit/48444f750ebe3f03290bf70e84d7590edc030ea4))
* use logging component everywhere ([#2228](https://github.com/libp2p/js-libp2p/issues/2228)) ([e5dfde0](https://github.com/libp2p/js-libp2p/commit/e5dfde0883191c93903ca552433f177d48adf0b3))


### Documentation

* add doc-check to all modules ([#2419](https://github.com/libp2p/js-libp2p/issues/2419)) ([6cdb243](https://github.com/libp2p/js-libp2p/commit/6cdb24362de9991e749f76b16fcd4c130e8106a0))
* fix broken links in docs site ([#2497](https://github.com/libp2p/js-libp2p/issues/2497)) ([fd1f834](https://github.com/libp2p/js-libp2p/commit/fd1f8343db030d74cd08bca6a0cffda93532765f)), closes [#2423](https://github.com/libp2p/js-libp2p/issues/2423)


### Dependencies

* bump aegir from 42.2.11 to 43.0.1 ([#2571](https://github.com/libp2p/js-libp2p/issues/2571)) ([757fb26](https://github.com/libp2p/js-libp2p/commit/757fb2674f0a3e06fd46d3ff63f7f461c32d47d2))
* bump aegir from 43.0.3 to 44.0.1 ([#2603](https://github.com/libp2p/js-libp2p/issues/2603)) ([944935f](https://github.com/libp2p/js-libp2p/commit/944935f8dbcc1083e4cb4a02b49a0aab3083d3d9))
* bump uint8arrays from 4.0.10 to 5.0.0 ([#2307](https://github.com/libp2p/js-libp2p/issues/2307)) ([6d11e82](https://github.com/libp2p/js-libp2p/commit/6d11e8268b16e0bf4bc520f42abb71a228d5dc57))
* update sibling dependencies ([178fe26](https://github.com/libp2p/js-libp2p/commit/178fe2671a7af9870bdd111de9073843a2a29b34))


### Refactors

* extract DCUtR into separate module ([#2220](https://github.com/libp2p/js-libp2p/issues/2220)) ([d2c3e72](https://github.com/libp2p/js-libp2p/commit/d2c3e7235b64558c6cace414c54a42659fee2970))
* remove isStarted method from Startable ([#2145](https://github.com/libp2p/js-libp2p/issues/2145)) ([fca208f](https://github.com/libp2p/js-libp2p/commit/fca208f3763af041aa37b1cb915d2bc777acb96d))


### Refactors

* extract DCUtR into separate module ([#2220](https://github.com/libp2p/js-libp2p/issues/2220)) ([d2c3e72](https://github.com/libp2p/js-libp2p/commit/d2c3e7235b64558c6cace414c54a42659fee2970))
* remove isStarted method from Startable ([#2145](https://github.com/libp2p/js-libp2p/issues/2145)) ([fca208f](https://github.com/libp2p/js-libp2p/commit/fca208f3763af041aa37b1cb915d2bc777acb96d))