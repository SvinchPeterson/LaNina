'use strict'

import { Tour } from '../../../../components'

import { goriText } from '../../../../texts'

import { goriGallery } from '../galleries/goriGallery'

export const goriTour = {
  extend: Tour,

  gallery: { extend: goriGallery },

  article: {
    class: {
      show: (element, state) => state.activeGoriDescripion
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
            childExtend: goriText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Stalin Museum' } },
                { props: { text: '- Uplistsikhe Cave City' } }
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
          state.update({ activeFullDescription: true, activeGoriDescripion: true })
        }
      }
    }
  }
}
