'use strict'

import { TourPackage } from '../components'

import { $tbilisi, $yerevan, $khorVirap, $noravank, $savane, $savaneMonastry, $dilijan } from '../texts/travel'

import { placesTbilisi } from './packageTbilisi'

import { ananuriDescription, ananuriPlaces } from './packageAnanuri'
import { kakhetiDescription, kakhetiPlaces } from './packageKakheti'

export const packageCaucasus = {
  extend: TourPackage,

  content: {
    title: { span: { text: 'caucasus tour' } },
    packageSchedule: {
      ...[
        {
          title: { text: 'day 1 - Tbilisi city tour' },
          description: { ...[{ extend: $tbilisi }] },
          places: { extend: placesTbilisi }
        },

        {
          title: { text: 'day 2 - ananuri . gudauri . kazbegi' },
          description: { extend: ananuriDescription },
          places: { extend: ananuriPlaces }
        },

        {
          title: { text: 'Day 3 - Kakheti Tour' },
          description: { extend: kakhetiDescription },
          places: { extend: kakhetiPlaces }
        },

        {
          title: { text: 'Day 4 - Arrival Armenia / Yerevan City Tour' },
          description: { ...[{ extend: $yerevan }] },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Garni' },
                { text: 'Geghard' },
                { text: 'Symphony of the stone city walking tour around the country' },
                { text: 'Armenian Historical Museum' }
              ]
            }
          }
        },

        {
          title: { text: 'Day 5 - Armenia tour' },
          description: {
            ...[{ extend: $khorVirap }, { extend: $noravank }]
          },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Khor Virap' },
                { text: 'Novaravank' },
                { text: 'Ararat Valley' }
              ]
            }
          }
        },

        {
          title: { text: 'Day 6 - Sevan . Sevanavank' },
          description: {
            ...[{ extend: $savane }, { extend: $savaneMonastry }, { extend: $dilijan }]
          },
          places: {
            title: {},
            places: {
              ...[
                { text: 'Dilijan' },
                { text: 'Sevan lake' },
                { text: 'Sevanavank' },
                { text: 'Parz Park' }
              ]
            }
          }
        },

        {
          title: { text: 'Day 7 - Departure AM Airport' },
          description: null,
          places: null
        }
      ]
    },

    packageIclusion: {
      title: { },
      content: {
        ...[
          { text: '3 Night hotel stay with breakfast' },
          { text: '3 Days Private Tour' },
          { text: 'Comfortable Car with professional driver' },
          { text: 'English Speaking Guide' },
          { text: 'Wine Tasting + excursion included' },
          { text: '2 Airport Transfer' }
        ]
      }
    }
  }
}
