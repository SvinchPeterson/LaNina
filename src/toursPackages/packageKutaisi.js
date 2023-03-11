'use strict'

import { TourPackage } from '../../../components'

import { $kutaisi } from '../texts/travel'

export const kutaisiDescription = {
  ...[
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
    },

    {
      ...[
        {
          ...[
            { tag: 'span', text: `Prometheus Cave ` },
            `may regard as the visit card of Georgia. The magic cave is full with stunning curtains of stalactites and stalagmites. It is possible to walk through the length of 1420 meters in the cave's territory visit the halls and enjoy `,
            { tag: 'span', text: `boat tour ` },
            `by walking the river.`
          ]
        }
      ]
    }
  ]
}

export const kutaisiPlaces = {
  title: {},
  places: {
    ...[
      { text: 'Prometheus Cave' },
      { text: 'Martvili Canyon' }
    ]
  }
}

export const packageKutaisi = {
  extend: TourPackage,

  packageSchedule: {
    ...[
      {
        title: null,
        description: { extend: kutaisiDescription },
        places: { extend: kutaisiPlaces }
      }
    ]
  },

  packageIclusion: null
}
