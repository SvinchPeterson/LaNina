'use strict'

import { TourPackage } from '../../../components'
import { $ananuri, $gudauri, $gergeti } from '../texts/travel'

export const ananuriPlaces = {
  title: {},
  places: {
    ...[
      { text: 'Zhinvali Water Reservoir' },
      { text: 'Ananuri Fortress' },
      { text: 'Gudauri Panorama' },
      { text: 'Spring Water Mountain' },
      { text: 'Kazbegi city ( Gergeti church extra charge)' }
    ]
  }
}

export const ananuriDescription = {
  ...[
    { extend: $ananuri },
    { extend: $gudauri },
    { extend: $gergeti }
  ]
}

export const packageAnanuri = {
  extend: TourPackage,

  title: null,
  packageSchedule: {
    ...[
      {
        title: null,
        description: { extend: ananuriDescription },
        places: { extend: ananuriPlaces }
      }
    ]
  },
  packageIclusion: null
}
