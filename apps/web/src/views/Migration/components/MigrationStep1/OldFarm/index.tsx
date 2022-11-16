import React, { useMemo, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@pancakeswap/wagmi'
import { getFarmApr } from 'utils/apr'
import { useTranslation } from '@pancakeswap/localization'
import { CAKE_PER_YEAR } from 'config'
import { useFarmsV1, usePriceCakeBusd } from 'state/farmsV1/hooks'
import { DeserializedFarm } from '@pancakeswap/farms'
import { FarmWithStakedValue } from 'views/Farms/components/types'
import MigrationFarmTable from '../../MigrationFarmTable'
import { DesktopColumnSchema } from '../../types'

const OldFarmStep1: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { data: farmsLP, userDataLoaded } = useFarmsV1()
  const cakePrice = usePriceCakeBusd()

  const userDataReady = !account || (!!account && userDataLoaded)

  const farms = farmsLP

  const stakedOrHasTokenBalance = farms.filter((farm) => {
    return (
      farm.userData &&
      (new BigNumber(farm.userData.stakedBalance).isGreaterThan(0) ||
        new BigNumber(farm.userData.tokenBalance).isGreaterThan(0))
    )
  })

  const farmsList = useCallback(
    (farmsToDisplay: DeserializedFarm[]): FarmWithStakedValue[] => {
      const farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteTokenPriceBusd) {
          return farm
        }
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceBusd)
        const { cakeRewardsApr, lpRewardsApr } = getFarmApr(
          56,
          new BigNumber(farm.poolWeight),
          cakePrice,
          totalLiquidity,
          farm.lpAddress,
          CAKE_PER_YEAR,
        )
        return { ...farm, apr: cakeRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
      })

      return farmsToDisplayWithAPR
    },
    [cakePrice],
  )

  const chosenFarmsMemoized = useMemo(() => {
    return farmsList(stakedOrHasTokenBalance)
  }, [stakedOrHasTokenBalance, farmsList])

  return (
    <MigrationFarmTable
      title={t('Old Farms')}
      noStakedFarmText={t('You are not currently staking in any v1 farms.')}
      account={account}
      cakePrice={cakePrice}
      columnSchema={DesktopColumnSchema}
      farms={chosenFarmsMemoized}
      userDataReady={userDataReady}
    />
  )
}

export default OldFarmStep1
