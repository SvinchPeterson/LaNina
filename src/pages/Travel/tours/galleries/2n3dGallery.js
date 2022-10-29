'use strict'

import { TourGallery } from '../../../../components'

import OLD_TBILISI_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../../../../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../../../../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../../../../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../../../../assets/images/travel/oldTbilisi/metekhi2.jpg'
import KAZBEGI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../../../../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../../../../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gudauri.jpg'

export const $2n3dGallery = {
  extend: TourGallery,

  props: { title: { text: '2 nights / 3 days - tour' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.active2n3dGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: OLD_TBILISI_JPG } },
      { props: { src: ABANOTUBANI_JPG } },
      { props: { src: BRIDGE_JPG } },
      { props: { src: BAZAR_JPG } },
      { props: { src: BRIDGE2_JPG } },
      { props: { src: METEKHI_JPG } },
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
              const { active2n3dGalleryImage } = state
              state.update({
                active2n3dGalleryImage: active2n3dGalleryImage - 1
              })
              if (active2n3dGalleryImage <= 0) {
                state.update({ active2n3dGalleryImage: 10 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { active2n3dGalleryImage } = state
              state.update({
                active2n3dGalleryImage: active2n3dGalleryImage + 1
              })
              if (active2n3dGalleryImage >= 10) {
                state.update({ active2n3dGalleryImage: 0 })
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
            state.active_3d_TourMail
              ? state.update({ active_3d_TourMail: false, active_3d_TourBook: false, active_3d_TourBooked: true })
              : state.update({ active_3d_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_3d_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_3d_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_3d_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_3d_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_3d_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
