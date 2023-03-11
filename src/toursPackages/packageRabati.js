'use strict'

import { TourPackage } from '../../../components'

import { $rabat } from '../texts/travel'

export const packageRabati = {
  extend: TourPackage,

  packageSchedule: {
    ...[
      {
        title: null,
        description: {
          ...[
            {
              extend: $rabat,
              ...[
                {
                  ...[
                    { tag: 'span', text: 'Rabati Castle' },
                    ` lies in the city of Akhaltsikhe, Samtskhe - Javakheti region in Georgia.
                  The city and probably the first castle were founded in the 9th century by Guaram Mampali, In
                  2011-2012 the entire complex was rebuilt in order to attract more tourist to the area;
                  the mosque and the madrasa were renovated, the castle and the 9th/10th century church were rebuilt as was the Jaqeli Palace.
                  `
                  ]
                },
                {
                  ...[
                    `After the restoration a museum, hotel, restaurants and other tourist
                    facilities were installed in the outer bailey. The project was done rather rigorously, a bit too
                    much for my taste because the castle may look original at first glance, but you will find a lot
                    of concrete when you look closer.`
                  ]
                }
              ]
            }
          ]
        },
        places: {
          title: {},
          places: {
            ...[
              { text: 'Rabati Castle walking Tour' }
            ]
          }
        }
      }
    ]
  },

  packageIclusion: null
}
