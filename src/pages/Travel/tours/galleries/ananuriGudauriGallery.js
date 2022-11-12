'use strict'

import { TourGallery } from '../../../../components'

import KAZBEGI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../../../../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../../../../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gudauri.jpg'

export const ananuriGudauriGallery = {
  extend: TourGallery,

  props: { title: { text: 'ananuri - gudauri - kazbegi' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeAnanuriGudauriGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: KAZBEGI_JPG } },
      { props: { src: GERGET_JPG } },
      { props: { src: JINVALI_JPG } },
      { props: { src: ANANURI_JPG } },
      { props: { src: GUDAURI_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeAnanuriGudauriGalleryImage } = state
              state.update({
                activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage - 1
              })
              if (activeAnanuriGudauriGalleryImage <= 0) {
                state.update({ activeAnanuriGudauriGalleryImage: 4 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeAnanuriGudauriGalleryImage } = state
              state.update({
                activeAnanuriGudauriGalleryImage: activeAnanuriGudauriGalleryImage + 1
              })
              if (activeAnanuriGudauriGalleryImage >= 4) {
                state.update({ activeAnanuriGudauriGalleryImage: 0 })
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
            state.active_Ananuri_TourMail
              ? state.update({ active_Ananuri_TourMail: false, active_Ananuri_TourBook: false, active_Ananuri_TourBooked: true })
              : state.update({ active_Ananuri_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Ananuri_TourMail
            ? {
              background: '#0EB393',
              border: 'none'
            }
            : {
              background: 'transparent',
              border: '.8px solid silver'
            },

          show2: (element, state) => state.active_Ananuri_TourBooked
            ? {
              pointerEvents: 'none',
              border: 'none'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Ananuri_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Ananuri_TourBooked
              ? { display: 'flex' } : { display: 'none' }
          }
        }
      },

      form: {
        class: {
          show: (element, state) => state.active_Ananuri_TourMail
            ? { opacity: '1', transition: 'opacity .15s ease-in-out' }
            : { opacity: '0', pointerEvents: 'none' }
        }
      }
    }
  }
}
