'use strict'

import { Tour } from '../../../../components'

import { canionText } from '../../../../texts'

import { canyonGallery } from '../galleries/canyonGallery'

export const canyonTour = {
  extend: Tour,

  gallery: { extend: canyonGallery },

  article: {
    class: {
      show: (element, state) => state.activeCanyonDescripion
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
