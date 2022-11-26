'use strict'

import { Tour } from '../../../../components'

import { ananuriText, gudauriText, gergetText } from '../../../../texts'

import { ananuriGudauriGallery } from '../galleries/ananuriGudauriGallery'

export const ananuriGudauriTour = {
  extend: Tour,

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.activeAnanuriDescripion
          ? state.update({ activeAnanuriDescripion: false })
          : state.update({ activeAnanuriDescripion: true })
      }
    },

    class: {
      show: (element, state) => state.activeAnanuriDescripion
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
      show: (element, state) => state.activeAnanuriDescripion
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
            ...[
              { extend: ananuriText },
              { extend: gudauriText },
              { extend: gergetText }
            ]
          },
          list: {
            title: { },
            list: {
              ...[
                { props: { text: '- Zhinvali Water Reservoir' } },
                { props: { text: '- Ananuri Fortress' } },
                { props: { text: '- Gudauri Panorama' } },
                { props: { text: '- Spring Water Mountain' } },
                { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
              ]
            }
          }
        }
      ]
    }
  },

  gallery: {
    extend: ananuriGudauriGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F'
      }
    }
  }
}
