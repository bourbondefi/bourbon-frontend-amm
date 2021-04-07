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
    label: 'Bourbon Barrel Token',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x1b30e60130b364DDfC0267525d7D8039d795FB33',
      },
      {
        label: 'Contract',
        href: 'https://bscscan.com/token/0xcbe73dd7E8FC74011136b837a59205801c45e6A1#readContract',
      },
    //  {
    //    label: 'CoinMarketCap',
    //    href: '',
    //  },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x1b30e60130b364DDfC0267525d7D8039d795FB33',
      },
    ],
  },
  {
    label: 'Rare Bourbon Token',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x6392aC63A851497Fc1F86946923a365162518E30',
      },
     {
        label: 'Contract',
        href: 'https://bscscan.com/token/0x1Aca521795CAc924f78145Fe99B1E7735b690864#readContract',
      },
    //  {
    //    label: 'CoinMarketCap',
    //    href: '',
    //  },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x6392aC63A851497Fc1F86946923a365162518E30',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bourbondefi/',
      },
      {
        label: 'Docs',
        href: 'https://bourbondefi.medium.com/',
      },
     // {
     //   label: 'Blog',
     //   href: '',
     // },
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
