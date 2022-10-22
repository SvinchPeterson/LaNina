'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText } from '../../../../texts'
import { oldTbilisiGallery } from '../galleries/oldTbilisiGallery'

export const oldTbilisiTour = {
  extend: Tour,

  gallery: { extend: oldTbilisiGallery },

  article: {
    articleContainer: {
      ...[
        {
          captionButton: {},
          title: {},
          paragraphs: { childExtend: tbilisiTravelText },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Mtatsminda Park by Train' } },
                { props: { text: '- Abanotubani' } },
                { props: { text: '- London bridge' } },
                { props: { text: '- Legvtakhevi Waterfall' } },
                { props: { text: '- I Love Tbilisi Statue' } },
                { props: { text: '- Leselidze souvenires streete' } },
                { props: { text: '- Meidan bazaar' } },
                { props: { text: '- Bridge of Peace' } }
              ]
            }
          }
        }
      ]
    }
  }
}
