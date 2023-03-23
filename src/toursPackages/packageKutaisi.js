'use strict'

import { TourPackage } from '../components'

import { $kutaisi, $prometheusCave } from '../texts/travel'

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
    { extend: $prometheusCave }
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

  content: {
    title: null,
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
}
