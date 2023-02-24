'use strict'

import { TourGallery } from '../../../../components'

import KUTAISI_JPG from '../../../../assets/images/travel/kutaisi/kutaisi.jpg'
import CANYON_JPG from '../../../../assets/images/travel/kutaisi/canyon.jpg'
import CANYON2_JPG from '../../../../assets/images/travel/kutaisi/canyon2.jpg'
import CAVE_JPG from '../../../../assets/images/travel/kutaisi/cave2.jpg'
import CAVE2_JPG from '../../../../assets/images/travel/kutaisi/cave.jpg'

export const kutaisiGallery = {
  extend: TourGallery,

  props: { title: { text: 'kutaisi - martvili canyon' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeKutaisiGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: KUTAISI_JPG } },
      { props: { src: CANYON_JPG } },
      { props: { src: CANYON2_JPG } },
      { props: { src: CAVE_JPG } },
      { props: { src: CAVE2_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeKutaisiGalleryImage } = state
              state.update({
                activeKutaisiGalleryImage: activeKutaisiGalleryImage - 1
              })
              if (activeKutaisiGalleryImage <= 0) {
                state.update({ activeKutaisiGalleryImage: 4 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeKutaisiGalleryImage } = state
              state.update({
                activeKutaisiGalleryImage: activeKutaisiGalleryImage + 1
              })
              if (activeKutaisiGalleryImage >= 4) {
                state.update({ activeKutaisiGalleryImage: 0 })
              }
            }
          }
        }
      ]
    },

    book: {
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeKutaisiBooking: true })
        }
      }
    }
  }
}
