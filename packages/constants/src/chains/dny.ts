import IceChain from '../ice-chain'

export const dny: IceChain = {
  id: 701322,
  name: 'Dynasty Mainnet Network',
  features: ['swap'],
  network: 'dny',
  rpcUrls: {
    public: { http: ['https://mainnet-rpc.dnyscan.io/'] },
    default: { http: ['https://mainnet-rpc.dnyscan.io/'] },
  },
  blockExplorers: {
    default: { name: 'Dynasty Explorer', url: 'https://dnyscan.io/' },
  },
  nativeCurrency: {
    name: 'Dynasty',
    symbol: 'DNY',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x95220b8a30c7235D31Ef8f9178AE897D332C06BE',
      blockCreated: 1138229,
    },
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0x9829509cc1C745188059F06bd4c79EDa927744aD',
    decimals: 18,
    symbol: 'WDNY',
    name: 'Wrapped Dny',
  },
  iceAddress: '0x1D987a21bdc8c23afAFD5D09B902bf6C13A4953F',
  swap: {
    factoryAddress: '0xEE86b684927FA868c876AC5d1Bc08aC1eBBe9096',
    routerAddress: '0x899Ed05eb1ECD541d3bf2fCc13519167917a86C1',
    initCodeHash: '0x2e6f3ac94d26d7c85a2e214d04bbb6e1adcf41ed4f66082590a85dce539e1b46',
  },
 // smartRouterAddress: '0xA608FF30563cEed3f0BC52eFc4abfc9502F1a71C',
}
