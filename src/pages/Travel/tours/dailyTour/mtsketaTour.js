'use strict'

import { Tour } from '../../../../components'

import { mtsketaText } from '../../../../texts'

import { mtsketaGallery } from '../galleries/mtsketaGallery'

export const mtsketaTour = {
  extend: Tour,

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeMtsketaDescription
          ? state.update({ activeMtsketaDescription: false })
          : state.update({ activeMtsketaDescription: true })
      }
    },

    class: {
      show: (element, state) => state.activeMtsketaDescription
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
      show: (element, state) => state.activeMtsketaDescription
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
            childExtend: mtsketaText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Svetitskhoveli Cathedral 11th' } },
                { props: { text: '- Jvari Monastery - 6th' } }
              ]
            }
          }
        }
      ]
    }
  },

  gallery: {
    extend: mtsketaGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F'
      }
    }
  }
}
