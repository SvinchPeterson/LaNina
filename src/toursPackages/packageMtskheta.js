'use strict'

import { TourPackage } from '../components'

import { $mtsketa } from '../texts/travel'

export const mtskhetaDescription = {
  ...[
    { extend: $mtsketa },
    {
      ...[
        `It had already been capital of most of eastern Georgia from about the 3rd century
        BC, and remained so to the 5th century AD, when King Vakhtang Gorgasali switched his base to Tbilisi.`
      ]
    },
    {
      ...[
        {
          ...[
            `Mtskheta has always kept its status as a spiritual capital, and its `,
            { tag: 'span', text: `Svetitskhoveli Cathedral ` },
            `is still the setting for important ceremonies of the Georgian Orthodox Church.`
          ]
        }
      ]

    }
  ]
}

export const mtskhetaPlaces = {
  title: {},
  places: {
    ...[
      { text: 'Svetitskhoveli Cathedral 11th' },
      { text: 'Jvari Monastery - 6th' }
    ]
  }
}

export const packageMtskheta = {
  extend: TourPackage,

  content: {
    title: null,
    packageSchedule: {
      ...[
        {
          title: null,
          description: { extend: mtskhetaDescription },
          places: { extend: mtskhetaPlaces }
        }
      ]
    },

    packageIclusion: null
  }
}
