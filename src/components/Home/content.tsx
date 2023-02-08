import Image from 'next/image'
import OneInchLogo from '@/public/images/1inch.svg'
import MakerLogo from '@/public/images/maker.svg'
import ENSLogo from '@/public/images/ens.svg'
import ZapperLogo from '@/public/images/zapper.svg'
import AaveLogo from '@/public/images/aave.svg'
import BalancerLogo from '@/public/images/balancer.svg'
import VitalikImage from '@/public/images/vitalik.png'
import PunkImage from '@/public/images/punk.png'
import AdidasLogo from '@/public/images/adidas.svg'
import KPMGLogo from '@/public/images/kpmg.svg'
import StripeLogo from '@/public/images/stripe.svg'
import CodeIcon from '@/public/images/code.svg'
import LockIcon from '@/public/images/lock.svg'
import SafeCoreImage from '@/public/images/safe-core-type.svg'
import SafeWalletImage from '@/public/images/safe-wallet-type.svg'
import MainnetIcon from '@/public/images/networks/mainnet.svg'
import BNBIcon from '@/public/images/networks/bnb.svg'
import OptimismIcon from '@/public/images/networks/optimism.svg'
import ArbitrumIcon from '@/public/images/networks/arbitrum.svg'
import PolygonIcon from '@/public/images/networks/polygon.svg'
import AvalancheIcon from '@/public/images/networks/avalanche.svg'
import GnosisChainIcon from '@/public/images/networks/gnosischain.svg'
import AuroraIcon from '@/public/images/networks/aurora.svg'

import Intro from '@/components/Home/Intro'
import Community from '@/components/Home/Community'
import TrustedBy from '@/components/Home/TrustedBy'
import SafeCoreWallet from '@/components/Home/SafeCoreWallet'
import Networks from '@/components/Home/Networks'
import Ecosystem from '@/components/Home/Ecosystem'
import Security from '@/components/Home/Security'
import Governance from '@/components/Home/Governance'
import Contact from '@/components/Home/Contact'
import WalletDownload from '@/components/common/WalletDownload'

export const homeContent = [
  {
    title: 'Unlock Digital Asset Ownership.',
    text: 'Safe is the most trusted decentralized custody protocol and collective asset management platform on Ethereum.',
    component: Intro,
  },
  {
    caption: 'Safe at scale',
    title: (
      <>
        <i>Safe</i> accounts hold and protect billions of $$$ in assets on EVM.
      </>
    ),
    text: 'Previously called Gnosis Safe, Safe spun out with a mission to build a better standard for ownership with smart contract accounts. Since 2018, Safe has grown to several EVM chains.',
    items: [
      {
        title: '14M+',
        text: 'Total transactions',
      },
      {
        title: '$36B+',
        text: 'Total assets stored',
      },
      {
        title: '1M',
        text: 'Safe accounts deployed',
      },
    ],
    component: Community,
  },
  {
    title: (
      <>
        Trusted by the best in <b>Web3</b>
      </>
    ),
    text: '',
    items: [
      {
        icon: <OneInchLogo />,
      },
      {
        icon: <MakerLogo />,
      },
      {
        icon: <ENSLogo />,
      },
      {
        icon: <ZapperLogo />,
      },
      {
        icon: <AaveLogo />,
      },
      {
        icon: <BalancerLogo />,
      },
      {
        icon: <Image src={VitalikImage} alt="Image of Vitalik" />,
      },
      {
        icon: <Image src={PunkImage} alt="Image of Punk" />,
      },
      {
        icon: <AdidasLogo />,
      },
      {
        icon: <KPMGLogo />,
      },
      {
        icon: <StripeLogo />,
      },
    ],
    component: TrustedBy,
  },
  {
    title: 'Supported Networks',
    text: 'And more networks, including testnets.',
    items: [
      {
        icon: <MainnetIcon />,
      },
      {
        icon: <BNBIcon />,
      },
      {
        icon: <OptimismIcon />,
      },
      {
        icon: <ArbitrumIcon />,
      },
      {
        icon: <PolygonIcon />,
      },
      {
        icon: <AvalancheIcon />,
      },
      {
        icon: <GnosisChainIcon />,
      },
      {
        icon: <AuroraIcon />,
      },
    ],
    component: Networks,
  },
  {
    title: '',
    text: '',
    items: [
      {
        caption: 'Developers',
        title: (
          <>
            Build on the <i>Safest</i> account abstraction stack
          </>
        ),
        text: <SafeCoreImage />,
        icon: <CodeIcon />,
        link: {
          title: 'Learn more',
          href: '#',
        },
      },
      {
        caption: 'Users',
        title: (
          <>
            Use the most secure
            <br />
            multi-sig wallet in web3
          </>
        ),
        text: <SafeWalletImage />,
        icon: <LockIcon />,
        link: {
          title: 'Learn more',
          href: '#',
        },
      },
    ],
    component: SafeCoreWallet,
  },
  {
    title: (
      <>
        Safe {'{CORE} '}
        <b>powers ecosystem projects</b>
        <br />
        in every corner of web3
      </>
    ),
    text: '130+ projects including DAO tools, DeFi, NFT collectives are building on Safe Core.',
    component: Ecosystem,
  },
  {
    caption: 'Security',
    title: (
      <>
        Our contracts are
        <br />
        <b>
          the most
          <br />
          battle-tested
        </b>
      </>
    ),
    text: 'The SafeCORE smart contracts have passed the highest possible security standard in the industry: Formal Verification.',
    link: {
      title: 'Read report',
      href: '#',
    },
    component: Security,
  },
  {
    caption: 'Governance',
    title: (
      <>
        SafeDAO <b>governs</b> the future of <i>Safe</i>
      </>
    ),
    text: 'The Safe is governed by SafeDAO, a decentralized  collective of core contributors, backers, GnosisDAO, users and ecosystem contributors i.e. Safe Guardians.',
    items: [
      {
        title: 'Forum',
        caption: 'Be a part of community',
        link: {
          href: '#',
        },
      },
      {
        title: (
          <>
            Latest
            <br />
            Proposals
          </>
        ),
        caption: 'Follow DAO decisions',
        link: {
          href: '#',
        },
      },
      {
        title: (
          <>
            Safe
            <br />
            Guardians
          </>
        ),
        caption: 'Shape our future',
        link: {
          href: '#',
        },
      },
    ],
    component: Governance,
  },
  {
    title: 'Want ot reach the core team members?',
    text: '',
    link: {
      title: 'Contact us',
      href: '#',
    },
    component: Contact,
  },
  {
    title: 'Use Safe {WALLET} anywhere',
    text: 'Access your assets anywhere without compromising on security on our flagship interfaces built on Safe {Core}.',
    component: WalletDownload,
  },
]