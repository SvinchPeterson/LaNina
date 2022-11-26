'use strict'

import { Tour } from '../../../../components'

import { goriText } from '../../../../texts'

import { goriGallery } from '../galleries/goriGallery'

export const goriTour = {
  extend: Tour,

  gallery: { extend: goriGallery },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-start' } },
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
