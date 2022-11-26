'use strict'

import { Tour } from '../../../../components'

import { kakhetiText } from '../../../../texts'

import { kakhetiGallery } from '../galleries/kakhetiGallery'

export const kakhetiTour = {
  extend: Tour,

  gallery: { extend: kakhetiGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeKakhetiDescripion
          ? state.update({ activeKakhetiDescripion: false })
          : state.update({ activeKakhetiDescripion: true })
      }
    },

    class: {
      show: (element, state) => state.activeKakhetiDescripion
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
      show: (element, state) => state.activeKakhetiDescripion
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
          paragraphs: {
            childExtend: kakhetiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Wine Tasting in Traditional Winery' } },
                { props: { text: '- Bodbe Monastery' } },
                { props: { text: '- ST. Nino Waterfall' } },
                { props: { text: '- Signagi City' } }
              ]
            }
          }
        }
      ]
    },

    button: { props: { alignSelf: 'flex-end' } }

  }
}
