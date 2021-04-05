import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.bourbondefi.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.bourbondefi.com/farms'
  },
  {
    label: 'Rare Farms',
    icon: 'FarmIcon',
    href: 'https://farms.bourbondefi.com/farms'
  },
  {
    label: 'Distillery',
    icon: 'PoolIcon',
    href: 'https://www.bourbondefi.com/nests'
  },
  {
    label: 'Rare Distillery',
    icon: 'PoolIcon',
    href: 'https://farms.bourbondefi.com/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.bourbondefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
      },
    //  {
    //    label: 'CoinGecko',
    //    href: '',
    //  },
    //  {
    //    label: 'CoinMarketCap',
    //    href: '',
    //  },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/bourbondefi/",
      },
    //  {
    //    label: "Docs",
    //    href: "",
    //  },
    //  {
    //    label: "Blog",
    //    href: "",
    //  },
    ],
  },
 // {
  //  label: 'Partnerships/IFO',
 //   icon: '',
 //   href: '',
//  },
 // {
 //   label: 'Audit by Hacken',
 //   icon: 'AuditIcon',
 //   href: '',
 // },
 // {
 //   label: 'Audit by CertiK',
 //   icon: 'AuditIcon',
 //   href: '',
 // },
]

export default config
