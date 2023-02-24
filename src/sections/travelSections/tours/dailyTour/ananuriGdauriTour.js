'use strict'

import { Tour } from '../../../../components'

import { ananuriText } from '../../../../texts'

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
          paragraphs: { ...[{ extend: ananuriText }] },
          list: null
        }
      ]
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeAnanuriArticle: true })
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
