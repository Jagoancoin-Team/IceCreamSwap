import { SerializedFarmConfig } from '@pancakeswap/farms'
import { xodexTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'ICE-XODEX LP',
        lpAddress: '0x77f83eacb9e66e79a82671b12714dd97364434cb',
        token: xodexTokens.ice,
        quoteToken: xodexTokens.wxodex,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
