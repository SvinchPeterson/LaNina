'use strict'

import { TourPackage } from '../components'

import { $gori, $Uplistsikhe } from '../texts/travel'

export const goriPlaces = {
  title: {},
  places: {
    ...[
      { text: 'Stalin Museum' },
      { text: 'Uplistsikhe Cave City' }
    ]
  }
}

export const goriDescription = {
  ...[
    {
      extend: $gori,
      ...[
        {
          ...[
            { tag: 'span', text: `Joseph Stalin's Museum` },
            ` in Gori - Stalin
            originally Georgian, was the secretary
            general of the Communist Party during
            second world war and one of the most
            influential dictators of modern times.
            Museum features Stalin's house - a hut
            where he was born; his armor plated railway carriage and a statue that was controversially standing in the main square of Gori up until 2010.`
          ]
        },
        {
          ...[
            `In addition, many items owned by Stalin, including
            some of his
            office furniture, his personal belongings and gifts made to him over the years.
            There is also
            much illustration by way of documentation, photographs, paintings and

            newspaper articles.`
          ]
        },
        { extend: $Uplistsikhe }
      ]
    }
  ]
}

export const packageGori = {
  extend: TourPackage,

  packageSchedule: {
    ...[
      {
        title: null,
        description: { extend: goriDescription },
        places: { extend: goriPlaces }
      }
    ]
  },

  packageIclusion: null
}
