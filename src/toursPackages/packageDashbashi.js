'use strict'

import { TourPackage } from '../../../components'
import { $dashbashi } from '../texts/travel'

export const packageDashbashi = {
  extend: TourPackage,
  title: null,
  packageSchedule: {
    ...[
      {
        title: null,
        description: {
          ...[
            { extend: $dashbashi },
            {
              ...[
                'The venue has reportedly been submitted to the Guinness World Records.',
                ` also includes a zip line, where visitors can bike across the canyon and a cliff &quot;swing&quot;`
              ]
            }
          ]
        },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Dashabshi Canyon' },
              { text: 'Brilliant Glass Bridge' }
            ]
          }
        }
      }
    ]
  },
  packageIclusion: null
}
