'use strict'

import { TourPackage } from '../../../components'
import { $borjomi } from '../texts/travel'

export const borjomiDescription = {
  ...[
    {
      extend: $borjomi,
      ...[
        {},
        {
          ...[
            `Its accessible
            location in the beautiful Lesser
            Caucasus Mountains attracts tourists in
            search of nature, escape and
            enlightenment tourism opportunities
            year-round. Borjomi's mineral waters
            were first mentioned as early as the 15th century.`
          ]
        }
      ]
    }
  ]
}

export const borjomiPlaces = {
  title: {},
  places: {
    ...[
      { text: 'Borjomi Central Park' },
      { text: 'Mineral Water tasting' },
      { text: 'Cable Car' }
    ]
  }
}

export const packageBorjomi = {
  extend: TourPackage,

  packageSchedule: {
    ...[
      {
        title: null,
        description: { extend: borjomiDescription },
        places: { extend: borjomiPlaces }
      }
    ]
  },

  packageIclusion: null
}
