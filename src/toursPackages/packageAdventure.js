'use strict'

import { TourPackage } from '../components'
import { $birtvisi } from '../texts/travel'

export const packageAdventure = {
  extend: TourPackage,
  title: { text: 'adventure tour' },
  packageSchedule: {
    ...[
      {
        title: { text: 'Birtvisi Fortress . Sheuopovari . Devi Canyon' },
        description: { ...[{ extend: $birtvisi }] },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Birtvisi Fortress' },
              { text: 'Sheupovari' },
              { text: 'Devi Canyon' }
            ]
          }
        }
      }
    ]
  },
  packageIclusion: null
}
