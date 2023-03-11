'use strict'

import { TourPackage } from '../../../components'

import { kutaisiDescription, kutaisiPlaces } from './packageKutaisi'
import { $dadianiPalace, $mestia, $kordula } from '../texts/travel'
import { mtskhetaDescription, mtskhetaPlaces } from './packageMtskheta'

export const packageCaucasusMountain = {
  extend: TourPackage,

  title: {
    span: { text: 'Caucasus mountain adventure tour |' },
    text: ' 9 night 10 days'
  },

  packageSchedule: {
    ...[
      {
        title: { text: 'Day 1 - Arrival Kutaisi International Airport' },
        description: null,
        places: null
      },

      {
        title: { text: 'day 2 - Kutaisi . Prometheus cave . Martvili Canyon' },
        description: { extend: kutaisiDescription },
        places: { extend: kutaisiPlaces }
      },

      {
        title: { text: 'day 3 - Transfer Zugdidi _ Dadiani Palace' },
        description: { ...[{ extend: $dadianiPalace }] },
        places: {
          title: {},
          places: { ...[{ text: 'Dadiani Palace Tour' }] }
        }
      },

      {
        title: { text: 'Day 4 - Zugdidi _ Svaneti transfer' },
        description: null,
        places: null
      },

      {
        title: { text: 'Day 5 - Svaneti _ Mestia city' },
        description: { ...[{ extend: $mestia }] },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Historical Museum in Svaneti' },
              { text: 'Hatsvali Cable car' },
              { text: 'Margiani Museum' }
            ]
          }
        }
      },

      {
        title: { text: 'Day 6 - Mestia _ koruldi lake' },
        description: { ...[{ extend: $kordula }] },
        places: {
          title: { text: 'place features' },
          places: {
            props: { childProps: { ':before': { display: 'none' } } },
            ...[
              { text: 'Difficulty: moderate' },
              { text: 'Total distance: 25 km' },
              { text: 'Total timing: 7-8 hours. For horses up to 5 hours.' },
              { text: 'Minimal altitude: 1400 meters' },
              { text: 'Maximal altitude: 2740 meters.' }
            ]
          }
        }
      },

      {
        title: { text: 'Day 7 - departure Mestia - Tbilisi' },
        description: null,
        places: null
      },

      {
        title: { text: 'Day 8 - Mtskheta city Tour' },
        description: { extend: mtskhetaDescription },
        places: { extend: mtskhetaPlaces }
      },

      {
        title: { text: 'Day 9 - Free day Tbilisi' },
        description: null,
        places: null
      },

      {
        title: { text: 'Day 10 - Departure TBS' },
        description: null,
        places: null
      }
    ]
  },

  packageIclusion: {
    title: {},
    content: {
      ...[
        { text: '9 Night Hotel Stay with breakfast' },
        { text: 'Tour According to the Program' },
        { text: 'Comfortable Car with professional driver' },
        { text: '2 Airport Transfer' },
        { text: 'City Transfers' },
        { text: 'English Speaking Guide' }
      ]
    }
  }
}
