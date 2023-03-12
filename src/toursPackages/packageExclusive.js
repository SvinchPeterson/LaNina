'use strict'

import { TourPackage } from '../components'
import { $samshvilde, $shaori, $abuli } from '../texts/travel'

export const packageExclusive = {
  extend: TourPackage,

  title: { text: 'exclusive tour' },
  packageSchedule: {
    ...[
      {
        title: { text: 'Day 1 - Samshvilde . Paravani Lake' },
        description: { ...[{ extend: $samshvilde }] },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Samshvilde medieval city' },
              { text: 'Chikiani Menhir' },
              { text: 'Paravani Lake' }
            ]
          }
        }
      },

      {
        title: { text: 'Day 2 - Shaori Megalith Fortress . Bugdasheni Lake . Khanchali Lake . Sagamo Lake' },
        description: { ...[{ extend: $shaori }] },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Shaori Megalith' },
              { text: 'Bugdasheni Lake' },
              { text: 'Sagamo lake' }
            ]
          }
        }
      },

      {
        title: { text: 'Day 3 - Abuli Megalith Fortress . Kaurma Bridge . Kumurdo Church ' },
        description: { ...[{ extend: $abuli }] },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Abuli megalith fortress' },
              { text: 'kaurma bridge' },
              { text: 'kumurdo church' }
            ]
          }
        }
      }
    ]
  },
  packageIclusion: null
}
