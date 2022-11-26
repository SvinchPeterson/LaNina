'use strict'

import { Tour } from '../../../../components'

import { kakhetiText } from '../../../../texts'

import { kakhetiGallery } from '../galleries/kakhetiGallery'

export const kakhetiTour = {
  extend: Tour,

  gallery: {
    extend: kakhetiGallery,
    props: {
      images: {
        round: '0 F F 0',
        ':after': { round: '0 F F 0' },
        childProps: { round: '0 F F 0' }
      }
    }
  },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-start' } },
    articleContainer: {
      ...[
        {
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

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, activeKakhetiDescripion: true })
        }
      }
    }

  }
}
