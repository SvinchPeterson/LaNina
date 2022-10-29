'use strict'

import { TourGallery } from '../../../../components'

import OLD_TBILISI_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../../../../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../../../../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../../../../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../../../../assets/images/travel/oldTbilisi/metekhi2.jpg'

export const oldTbilisiGallery = {
  extend: TourGallery,
  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeTbilisiGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },

    ...[
      { props: { src: OLD_TBILISI_JPG } },
      { props: { src: ABANOTUBANI_JPG } },
      { props: { src: BRIDGE_JPG } },
      { props: { src: BAZAR_JPG } },
      { props: { src: BRIDGE2_JPG } },
      { props: { src: METEKHI_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              const { activeTbilisiGalleryImage } = state
              state.update({
                activeTbilisiGalleryImage: activeTbilisiGalleryImage - 1
              })
              if (activeTbilisiGalleryImage <= 0) {
                state.update({ activeTbilisiGalleryImage: 5 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              const { activeTbilisiGalleryImage } = state
              state.update({
                activeTbilisiGalleryImage: activeTbilisiGalleryImage + 1
              })
              if (activeTbilisiGalleryImage >= 5) {
                state.update({ activeTbilisiGalleryImage: 0 })
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
            state.active_Tbilisi_TourMail
              ? state.update({ active_Tbilisi_TourMail: false, active_Tbilisi_TourBook: false, active_Tbilisi_TourBooked: true })
              : state.update({ active_Tbilisi_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Tbilisi_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_Tbilisi_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Tbilisi_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Tbilisi_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_Tbilisi_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
