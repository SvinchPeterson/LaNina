'use strict'

import { TourPackage } from '../components'
import {
  $tbilisi, $wineTesting, $chavchavadzeMuseum, $sioni,
  $borjomi2, $rabat2, $gelati, $kutaisi, $racha, $wyaltubo,
  $martvili, $batumi
}
from '../texts/travel'
import { placesTbilisi } from './packageTbilisi'

export const packageWineGastronomy = {
  extend: TourPackage,

  content: {
    title: { span: { text: 'Wine & Gastronomy tour' } },
    packageSchedule: {
      ...[
        {
          title: { text: 'day 1 - Tbilisi city tour' },
          description: { ...[{ extend: $tbilisi }] },
          places: {
            extend: placesTbilisi,
            title: {},
            places: {
              ...[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                { text: 'Wine degustation and lunch at pholiponia' },
                { text: `Dinner at ''Barbare Restaurant'' ` }
              ]
            }
          }
        },

        {
          title: { text: 'day 2 - Giuaani Winery . Gurjaani _ Telavi' },
          description: { ...[{ extend: $wineTesting }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at hotel' },
                { text: 'Transfer Tbilisi - Manavi' },
                { text: 'Degustation and excursion in Giuaani Winery' },
                { text: 'Georgian Home-Made Family Wine and Traditional Lunch at signagi city' },
                { text: 'Overnight in Telavi' }
              ]
            }
          }
        },

        {
          title: { text: 'day 3 - Tsinandali . Kvareli city' },
          description: { ...[{ extend: $chavchavadzeMuseum }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at hotel' },
                { text: 'Visit Alexander Chavchavadze museum in Tsinandali (Wine Degustation)' },
                { text: 'Khareba Winery - degustation and excursion in Tunnel' },
                { text: 'Lunch at Khareba Winery Restaurant' },
                { text: 'Overnight in Tbilisi' }
              ]
            }
          }
        },

        {
          title: { text: 'day 4 - Tbilisi . Kartli Region' },
          description: { ...[{ extend: $sioni }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at hotel' },
                { text: 'Transfer -Tbilisi - Ateni' },
                { text: 'Ateni sioni Church' },
                { text: 'Ateni Valley' },
                { text: 'Iagos Winery' },
                { text: 'Nika Vacheishvilis Winery' },
                { text: 'Overnight in Ateni' }
              ]
            }
          }
        },

        {
          title: { text: 'day 5 - Borjomi . Rabati' },
          description: {
            ...[
              { extend: $borjomi2 },
              { extend: $rabat2 }
            ]
          },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at hotel' },
                { text: 'Borjomi Central Park' },
                { text: 'Mineral Water tasting' },
                { text: 'Rabati Castle' },
                { text: 'Giorgi Natenadze Winery' },
                { text: 'Overnight in Akhaltsikhe' }
              ]
            }
          }
        },

        {
          title: { text: 'day 6 - Akhaltsikhe . Kutaisi' },
          description: {
            ...[
              { extend: $gelati },
              { extend: $kutaisi },
              {
                ...[
                  `The city has
                  been inhabited since ancient times. The
                  existence of colchian culture is confirmed here
                  from the XV-XIII centuries BC. Kutaisi and its
                  surrounding areas are
                  distinguished by the beautiful nature and
                  abundance of cultural monuments.`
                ]
              }
            ]
          },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at hotel' },
                { text: 'Transfer - Akhaltsikhe to Kutaisi' },
                { text: 'Gelaty Complex' },
                { text: 'Wine Genues Winery' },
                { text: 'Overnight Kutaisi' }
              ]
            }
          }
        },

        {
          title: { text: 'day 7 - Terjola region (families wineries)' },
          description: null,
          places: null
        },

        {
          title: { text: 'day 8 - Terjola _ Racha Region' },
          description: { ...[{ extend: $racha }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at Hotel' },
                { text: 'Transfer - Terjola - Racha Region' },
                { text: 'Royal Khvanchkara winery' },
                { text: 'Overnight Ambrolauri' }
              ]
            }
          }
        },

        {
          title: { text: 'day 9 - Lechkhumi _ Tskhaltubo' },
          description: { ...[{ extend: $wyaltubo }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at Hotel' },
                { text: 'Okhureshi Village (giobrelidze winery)' },
                { text: 'Tskhaltubo Termal Spa' },
                { text: 'Overnight in Tskhaltubo' }
              ]
            }
          }
        },

        {
          title: { text: 'day 10 - Samegrelo Region . Martvili Canyon' },
          description: { ...[{ extend: $martvili }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at Hotel' },
                { text: 'Transfer to Martvili' },
                { text: 'Martvili canyon' },
                { text: 'Balda Canyon' },
                { text: 'Megrelian Traditional Table with Folklore' },
                { text: `Salkhino winery` },
                { text: 'Ojaleshi wines' },
                { text: 'Dadiani Palace' },
                { text: 'Overnight in salkhino' }
              ]
            }
          }
        },

        {
          title: { text: 'day 11 - Salkhino _ Guria' },
          description: null,
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at Hotel' },
                { text: 'Transfer - Salkhino - Guria ' },
                { text: `Datos 'wines and menabde` },
                { text: 'Skijis sakhli (home) stay' },
                { text: 'Overnight in Guria' }
              ]
            }
          }
        },

        {
          title: { text: 'day 12 - Guria _ Adjara' },
          description: { ...[{ extend: $batumi }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at Hotel' },
                { text: 'Transfer Guria- Batumi' },
                { text: `City Walking` },
                { text: 'Kvirike Winery' },
                { text: 'Overnight in Batumi' }
              ]
            }
          }
        },

        {
          title: { text: 'day 13 - Adjara _ Tbilisi' },
          description: null,
          places: {
            title: {},
            places: {
              ...[
                { text: 'Breakfast at Hotel' },
                { text: 'Transfer Batumi - Tbilisi' },
                { text: `Check in hotel` },
                { text: 'Gala Dinner at Tsiskhvili Restaurant with Dance Show ' }
              ]
            }
          }
        },

        {
          title: { text: 'day 14 - Departure TBS Airport' },
          description: null,
          places: null
        }
      ]
    },
    packageIclusion: null
  }
}
