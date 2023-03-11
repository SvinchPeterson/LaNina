'use strict'

import { TourPackage } from '../../../components'

import { $tbilisi } from '../texts/travel'

import { placesTbilisi } from './packageTbilisi'

import { ananuriDescription, ananuriPlaces } from './packageAnanuri'
import { kakhetiDescription, kakhetiPlaces } from './packageKakheti'

export const packageCaucasus = {
  extend: TourPackage,

  title: {
    span: { text: 'capital tour |' },
    text: ' 2 night 3 days'
  },

  packageSchedule: {
    ...[
      {
        title: { text: 'day 1 - Tbilisi city tour' },
        description: { ...[{ extend: $tbilisi }] },
        places: { extend: placesTbilisi }
      },

      {
        title: { text: 'day 2 - ananuri . gudauri . kazbegi' },
        description: { extend: ananuriDescription },
        places: { extend: ananuriPlaces }
      },

      {
        title: { text: 'Day 3 - Kakheti Tour' },
        description: { extend: kakhetiDescription },
        places: { extend: kakhetiPlaces }
      },

      {
        title: { text: 'Day 4 - Arrival Armenia / Yerevan City Tour' }
        // description: { ...[{ extend: descriptionCaucasusTour }] },
        // places: { extend: kakhetiPlaces }
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
