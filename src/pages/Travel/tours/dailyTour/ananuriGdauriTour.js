'use strict'

import { Tour } from '../../../../components'

import { ananuriText, gudauriText, gergetText } from '../../../../texts'

import { ananuriGudauriGallery } from '../galleries/ananuriGudauriGallery'

export const ananuriGudauriTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
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
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, activeAnanuriDescripion: true })
        }
      }
    }
  },

  gallery: {
    extend: ananuriGudauriGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F',
        ':after': { round: 'F 0 0 F' },
        childProps: { round: 'F 0 0 F' }
      }
    }
  }
}
