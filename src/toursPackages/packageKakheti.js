'use strict'

import { TourPackage } from '../components'

import { $kakheti } from '../texts/travel'

export const kakhetiDescription = {
  ...[
    { extend: $kakheti },
    {
      ...[
        {
          ...[
            `Kakheti is also rich in history. Here you'll find the incredible monastery complex of `,
            { tag: 'span', text: 'Davit Gareji' },
            `, The picturesque hilltop town of `,
            { tag: 'span', text: 'Sighnagi City of Love' },
            `, and Many of beautiful Churches, Castles and mansions around the main town `,
            { tag: 'span', text: 'telavi' },
            `.`
          ]
        }
      ]
    }
  ]
}

export const kakhetiPlaces = {
  title: {},
  places: {
    ...[
      { text: 'Wine Tasting in Traditional Winery' },
      { text: 'Bodbe Monastery' },
      { text: 'ST. Nino Waterfall' },
      { text: 'Signagi City' }
    ]
  }
}

export const packageKakheti = {
  extend: TourPackage,
  packageSchedule: {
    ...[
      {
        title: null,
        description: { extend: kakhetiDescription },
        places: { extend: kakhetiPlaces }
      }
    ]
  },
  packageIclusion: null
}
