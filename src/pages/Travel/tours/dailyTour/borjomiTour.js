'use strict'

import { Tour } from '../../../../components'

import { borjomiText } from '../../../../texts'

import { borjomiGallery } from '../galleries/borjomiGallery'

export const borjomiTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },
  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
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
        round: 'F 0 0 F',
        ':after': { round: 'F 0 0 F' },
        childProps: { round: 'F 0 0 F' }
      }

    }
  }
}
