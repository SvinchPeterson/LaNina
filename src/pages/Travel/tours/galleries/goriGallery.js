'use strict'

import { TourGallery } from '../../../../components'

import GORI_JPG from '../../../../assets/images/travel/gori/gori.jpg'
import MUSEUM_JPG from '../../../../assets/images/travel/gori/museum.jpg'
import MUSEUM2_JPG from '../../../../assets/images/travel/gori/museum2.jpeg'
import CAVE_JPG from '../../../../assets/images/travel/gori/cave.jpg'
import CAVE2_JPG from '../../../../assets/images/travel/gori/cave2.jpg'

export const goriGallery = {
  extend: TourGallery,

  props: { title: { text: 'Gori City - Uplistsikhe Cave' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeGoriGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: GORI_JPG } },
      { props: { src: MUSEUM_JPG } },
      { props: { src: MUSEUM2_JPG } },
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
              const { activeGoriGalleryImage } = state
              state.update({
                activeGoriGalleryImage: activeGoriGalleryImage - 1
              })
              if (activeGoriGalleryImage <= 0) {
                state.update({ activeGoriGalleryImage: 4 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeGoriGalleryImage } = state
              state.update({
                activeGoriGalleryImage: activeGoriGalleryImage + 1
              })
              if (activeGoriGalleryImage >= 4) {
                state.update({ activeGoriGalleryImage: 0 })
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
            state.active_Gori_TourMail
              ? state.update({ active_Gori_TourMail: false, active_Gori_TourBook: false, active_Gori_TourBooked: true })
              : state.update({ active_Gori_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Gori_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_Gori_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Gori_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Gori_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_Gori_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      },

      paragraph: {
        class: {
          show: (element, state) => state.active_Gori_TourBooked
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
