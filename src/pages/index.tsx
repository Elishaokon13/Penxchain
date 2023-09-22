import type { InferGetStaticPropsType, NextPage } from 'next'
import { loadChainsData } from '@/lib/loadChainsData'
import { Wallet } from '@/components/Wallet'
import { fetchTotalAssets, fetchTotalSafesDeployed, fetchTotalTransactions } from '@/hooks/useSafeStats'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Wallet {...props} />
}

export async function getStaticProps() {
  const [chainsData, totalTransactions, totalAssets, totalSafesDeployed] = await Promise.all([
    loadChainsData(),
    fetchTotalTransactions(),
    fetchTotalAssets(),
    fetchTotalSafesDeployed(),
  ])

  return {
    props: {
      chainsData,
      safeStatsData: {
        totalTransactions,
        totalAssets,
        totalSafesDeployed,
      },
    },
  }
}

export default IndexPage
