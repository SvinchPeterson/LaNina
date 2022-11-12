'use strict'

import { TourGallery } from '../../../../components'

import RABAT_JPG from '../../../../assets/images/travel/rabati/rabat.jpeg'
import RABAT2_JPG from '../../../../assets/images/travel/rabati/rabati3.jpg'
import RABAT3_JPG from '../../../../assets/images/travel/rabati/rabati2.jpg'
import RABAT4_JPG from '../../../../assets/images/travel/rabati/rabat4.jpg'

export const rabatiGallery = {
  extend: TourGallery,

  props: { title: { text: 'rabati castle' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeRabatiGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: RABAT_JPG } },
      { props: { src: RABAT2_JPG } },
      { props: { src: RABAT3_JPG } },
      { props: { src: RABAT4_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeRabatiGalleryImage } = state
              state.update({
                activeRabatiGalleryImage: activeRabatiGalleryImage - 1
              })
              if (activeRabatiGalleryImage <= 0) {
                state.update({ activeRabatiGalleryImage: 3 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeRabatiGalleryImage } = state
              state.update({
                activeRabatiGalleryImage: activeRabatiGalleryImage + 1
              })
              if (activeRabatiGalleryImage >= 3) {
                state.update({ activeRabatiGalleryImage: 0 })
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
            state.active_Rabat_TourMail
              ? state.update({ active_Rabat_TourMail: false, active_Rabat_TourBook: false, active_Rabat_TourBooked: true })
              : state.update({ active_Rabat_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Rabat_TourMail
            ? {
              background: '#0EB393',
              border: 'none'
            }
            : {
              background: 'transparent',
              border: '.8px solid silver'
            },
          show2: (element, state) => state.active_Rabat_TourBooked
            ? {
              pointerEvents: 'none',
              border: 'none'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Rabat_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Rabat_TourBooked
              ? { display: 'flex' } : { display: 'none' }
          }
        }
      },

      form: {
        class: {
          show: (element, state) => state.active_Rabat_TourMail
            ? { opacity: '1', transition: 'opacity .15s ease-in-out' }
            : { opacity: '0', pointerEvents: 'none' }
        }
      }
    }
  }
}
