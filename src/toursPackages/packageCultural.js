'use strict'

import { TourPackage } from '../components'

import { kakhetiDescription, kakhetiPlaces } from './packageKakheti'

import { goriDescription, goriPlaces } from './packageGori'

export const packageCultural = {
  extend: TourPackage,

  title: {
    span: { text: 'culrural tour' },
    text: ' 3 night _ 4 days'
  },

  packageSchedule: {
    ...[
      {
        title: { text: 'day 1 - arrival _ transfer' },
        description: null,
        places: null
      },

      {
        title: { text: 'day 2 - Kakheti traditional wine . Bodbe, Signagi City' },
        description: { extend: kakhetiDescription },
        places: { extend: kakhetiPlaces }
      },

      {
        title: { text: 'Day 3 - uplistsikhe cave' },
        description: { extend: goriDescription },
        places: { extend: goriPlaces }
      },

      {
        title: { text: 'Day 4 - departure airport' },
        description: null,
        places: null
      }
    ]
  },

  packageIclusion: {
    title: { },
    content: {
      ...[
        { text: '3 star hotel in Tbilisi 3 night including breakfast' },
        { text: 'daily Tours according to program' },
        { text: 'comfortable car with professional driver' },
        { text: 'wine tasting & excursion' },
        { text: 'private guide' }
      ]
    }
  }
}
