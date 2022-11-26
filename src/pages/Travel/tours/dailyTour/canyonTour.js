'use strict'

import { Tour } from '../../../../components'

import { canionText } from '../../../../texts'

import { canyonGallery } from '../galleries/canyonGallery'

export const canyonTour = {
  extend: Tour,

  gallery: { extend: canyonGallery },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-start' } },
    articleContainer: {
      ...[
        {
          title: {},
          paragraphs: {
            childExtend: canionText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Dashabshi Canyon' } },
                { props: { text: '- Brilliant Glass Bridge' } }
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
          state.update({ activeFullDescription: true, activeCanyonDescripion: true })
        }
      }
    }

  }
}
