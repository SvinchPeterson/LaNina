'use strict'

import { TourPackage } from '../../../components'
import { $tbilisi } from '../texts/travel'

export const placesTbilisi = {
  title: {},
  places: {
    ...[
      { text: 'Mtatsminda Park by Train' },
      { text: 'Abanotubani' },
      { text: 'London bridge' },
      { text: 'Legvtakhevi Waterfall' },
      { text: 'I Love Tbilisi Statue' },
      { text: 'Leselidze souvenires streete' },
      { text: 'Meidan bazaar' },
      { text: 'Bridge of Peace' }
    ]
  }
}

export const packageTbilisi = {
  extend: TourPackage,
  title: null,
  packageSchedule: {
    ...[
      {
        title: null,
        description: { ...[{ extend: $tbilisi }] },
        places: { extend: placesTbilisi }
      }
    ]
  },
  packageIclusion: null
}
