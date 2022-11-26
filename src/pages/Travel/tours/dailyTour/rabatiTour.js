'use strict'

import { Tour } from '../../../../components'

import { rabatiText } from '../../../../texts'

import { rabatiGallery } from '../galleries/rabatiGallery'

export const rabatiTour = {
  extend: Tour,

  gallery: { extend: rabatiGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeRabatDescription
          ? state.update({ activeRabatDescription: false })
          : state.update({ activeRabatDescription: true })
      }
    },

    class: {
      show: (element, state) => state.activeRabatDescription
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
      show: (element, state) => state.activeRabatDescription
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
            childExtend: rabatiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Rabati Castle walking Tour' } }
              ]
            }
          }
        }
      ]
    },

    button: { props: { alignSelf: 'flex-end' } }

  }
}
