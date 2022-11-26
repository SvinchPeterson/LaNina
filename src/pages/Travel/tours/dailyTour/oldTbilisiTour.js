'use strict'

import { Tour } from '../../../../components'
import { tbilisiTravelText } from '../../../../texts'
import { oldTbilisiGallery } from '../galleries/oldTbilisiGallery'

export const oldTbilisiTour = {
  extend: Tour,

  gallery: { extend: oldTbilisiGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeTbilisiDescripion
          ? state.update({ activeTbilisiDescripion: false })
          : state.update({ activeTbilisiDescripion: true })
      }
    },

    class: {
      show: (element, state) => state.activeTbilisiDescripion
        ? {
          '> img': { transform: 'rotate(180deg)' }
        }
        : {
          '> img': { transform: 'rotate(0deg)' }
        }
    }
  },

  article: {
    class: {
      show: (element, state) => state.activeTbilisiDescripion
        ? {
          '@media only screen and (max-width: 1280px)': {
            maxHeight: `${250 / 16}em`,
            overflowY: 'auto',
            paddingTop: `${35 / 16}em`
          }
        }
        : {
          '@media only screen and (max-width: 1280px)': {
            maxHeight: `0`,
            overflowY: 'hidden'
          }
        }
    },

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
    },

    button: { props: { alignSelf: 'flex-end' } }
  }
}
