'use strict'

import { TourPackage } from '../components'

import { ananuriDescription, ananuriPlaces } from './packageAnanuri'
import { kakhetiDescription, kakhetiPlaces } from './packageKakheti'
import { $tbilisi } from '../texts/travel'
import { placesTbilisi } from './packageTbilisi'
import { mtskhetaDescription, mtskhetaPlaces } from './packageMtskheta'

export const packageRoyal = {
  extend: TourPackage,

  content: {
    title: {
      span: { text: 'royal tour' },
      text: '7 night _ 8 days'
    },

    packageSchedule: {
      ...[
        {
          title: { text: 'Day 1 - Arrival TBS Airport / Transfer' },
          description: null,
          places: null
        },

        {
          title: { text: 'day 2 - ananuri . gudauri . kazbegi' },
          description: { extend: ananuriDescription },
          places: { extend: ananuriPlaces }
        },

        {
          title: { text: 'day 3 - kakheti tour' },
          description: { extend: kakhetiDescription },
          places: { extend: kakhetiPlaces }
        },

        {
          title: { text: 'Day 4 - Tbilisi city tour' },
          description: { ...[{ extend: $tbilisi }] },
          places: { extend: placesTbilisi }
        },

        {
          title: { text: 'Day 5 - Mtskheta City Tour' },
          description: { extend: mtskhetaDescription },
          places: { extend: mtskhetaPlaces }
        },

        {
          title: { text: 'Day 6/7 - Tbilisi city free day' },
          description: null,
          places: null
        },

        {
          title: { text: 'Day 8 - departure TBS Airport' },
          description: null,
          places: null
        }
      ]
    },
    packageIclusion: null
  }
}
