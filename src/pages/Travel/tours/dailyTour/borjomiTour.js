'use strict'

import { Tour } from '../../../../components'

import { borjomiText } from '../../../../texts'

import { borjomiGallery } from '../galleries/borjomiGallery'

export const borjomiTour = {
  extend: Tour,

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeBorjomiDescripion
          ? state.update({ activeBorjomiDescripion: false, activeArrow: false })
          : state.update({ activeBorjomiDescripion: true, activeArrow: true })
      }
    },

    class: {
      show: (element, state) => state.activeBorjomiDescripion
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
      show: (element, state) => state.activeBorjomiDescripion
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
            childExtend: borjomiText
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Borjomi Central Park' } },
                { props: { text: '- Mineral Water tasting' } },
                { props: { text: '- Cable Car' } }
              ]
            }
          }
        }
      ]
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, activeBorjomiDescripion: true })
        }
      }
    }
  },

  gallery: {
    extend: borjomiGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F'
      }
    }
  }
}
