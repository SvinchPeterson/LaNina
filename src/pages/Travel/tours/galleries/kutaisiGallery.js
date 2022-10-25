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

    bookContainer: {
      book: {
        on: {
          click: (event, element, state) => {
            state.active_Kutaisi_TourMail
              ? state.update({ active_Kutaisi_TourMail: false, active_Kutaisi_TourBook: false, active_Kutaisi_TourBooked: true })
              : state.update({ active_Kutaisi_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Kutaisi_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_Kutaisi_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Kutaisi_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Kutaisi_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_Kutaisi_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      },

      paragraph: {
        class: {
          show: (element, state) => state.active_Kutaisi_TourBooked
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
