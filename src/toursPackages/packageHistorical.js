'use strict'

import { TourPackage } from '../components'

import { mtskhetaDescription, mtskhetaPlaces } from './packageMtskheta'
import { kakhetiPlaces } from './packageKakheti'
import { $kakheti, $bakuriani, $davitGareji } from '../texts/travel'
import { borjomiDescription, borjomiPlaces } from './packageBorjomi'

export const packageHistorical = {
  extend: TourPackage,
  title: {
    span: { text: 'historical tour' },
    text: '4 night _ 5 days'
  },

  packageSchedule: {
    ...[
      {
        title: { text: 'day 1 - arrival _ transfer' },
        description: null,
        places: null
      },

      {
        title: { text: 'day 2 - Mtskheta city tour' },
        description: { extend: mtskhetaDescription },
        places: {
          extend: mtskhetaPlaces,
          title: { text: 'tour plan' },
          places: {
            ...[
              { text: 'Transfer from Tbilisi to Mtskheta' },
              { text: 'Jvari Monastery 6th' },
              { text: 'Svetitskhoveli Cathedral 11th' },
              { text: 'Street Market' },
              { text: 'Chateau Mukhrani winery (Excursion, Degustation)' },
              { text: 'Back to Tbilisi' }
            ]
          }
        }
      },

      {
        title: { text: 'Day 3 - Kakheti Tour _ Davit Gareji . Giuaani Winery' },
        description: {
          ...[
            { extend: $kakheti },
            { extend: $davitGareji },
            {
              ...[
                {
                  ...[
                    `Also you'll find The picturesque hilltop town of `,
                    { tag: 'span', text: 'Sighnagi City of Love' },
                    ', and Many of beautiful Churches, Castles and mansions around the main town ',
                    { tag: 'span', text: 'Telavi' },
                    '.'
                  ]
                }
              ]
            }
          ]
        },

        places: {
          extend: kakhetiPlaces,
          title: { text: 'tour plan' },
          places: {
            ...[
              { text: 'Transfer from Tbilisi to Davit-Gareji' },
              { text: 'Davit Gareji Complex 6th' },
              { text: 'Giuaani Winery ( Excursion,Winetasting)' },
              { text: 'Signagi City of Love' },
              { text: 'Bodbe Monastery' }
            ]
          }
        }
      },

      {
        title: { text: 'Day 4 - borjomi . bakuriani' },
        description: {
          ...[
            { extend: borjomiDescription },
            { extend: $bakuriani }
          ]
        },
        places: {
          extend: borjomiPlaces,
          title: {},
          places: {
            ...[{}, {}, {}, { text: 'Bakuriani Ski Resort' }]
          }
        }
      },

      {
        title: { text: 'Day 5 - Departure TBS Airport' },
        description: null,
        places: null
      }
    ]
  },
  packageIclusion: {
    title: { },
    content: {
      ...[
        { text: '2 Night Hotel Stay city center' },
        { text: '2 Days Private tour' },
        { text: 'comfortable car with professional driver' },
        { text: '2 transfers from to airport' }
      ]
    }
  }
}
