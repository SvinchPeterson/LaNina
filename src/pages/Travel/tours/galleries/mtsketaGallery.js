'use strict'

import { TourGallery } from '../../../../components'

import JVARI_JPG from '../../../../assets/images/travel/mtsketa/mtsketa.jpg'
import MTSKETA_JPG from '../../../../assets/images/travel/mtsketa/mcxeta3.jpg'
import MTSKETA2_JPG from '../../../../assets/images/travel/mtsketa/street.jpg'
import MTSKETA3_JPG from '../../../../assets/images/travel/mtsketa/mtsketa2.jpg'

export const mtsketaGallery = {
  extend: TourGallery,

  props: { title: { text: 'Mtsketa' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeMtsketaGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: JVARI_JPG } },
      { props: { src: MTSKETA_JPG } },
      { props: { src: MTSKETA2_JPG } },
      { props: { src: MTSKETA3_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeMtsketaGalleryImage } = state
              state.update({
                activeMtsketaGalleryImage: activeMtsketaGalleryImage - 1
              })
              if (activeMtsketaGalleryImage <= 0) {
                state.update({ activeMtsketaGalleryImage: 3 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeMtsketaGalleryImage } = state
              state.update({
                activeMtsketaGalleryImage: activeMtsketaGalleryImage + 1
              })
              if (activeMtsketaGalleryImage >= 3) {
                state.update({ activeMtsketaGalleryImage: 0 })
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
            state.active_Mtsketa_TourMail
              ? state.update({ active_Mtsketa_TourMail: false, active_Mtsketa_TourBook: false, active_Mtsketa_TourBooked: true })
              : state.update({ active_Mtsketa_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Mtsketa_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_Mtsketa_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Mtsketa_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Mtsketa_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_Mtsketa_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      },

      paragraph: {
        class: {
          show: (element, state) => state.active_Mtsketa_TourBooked
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
