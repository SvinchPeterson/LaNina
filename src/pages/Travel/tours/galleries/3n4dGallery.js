'use strict'

import { TourGallery } from '../../../../components'

import OLD_TBILISI_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../../../../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../../../../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../../../../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../../../../assets/images/travel/oldTbilisi/metekhi2.jpg'

import SIGNAGI_JPG from '../../../../assets/images/travel/kakheti/signagi3.jpg'
import SIGNAGI2_JPG from '../../../../assets/images/travel/kakheti/signagi2.jpg'
import KVEVRI_JPG from '../../../../assets/images/travel/kakheti/kvevri.jpg'
import BODBE_JPG from '../../../../assets/images/travel/kakheti/bodbe.jpg'
import TELAVI_JPG from '../../../../assets/images/travel/kakheti/telavi.jpg'

import KAZBEGI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../../../../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../../../../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gudauri.jpg'

export const $3n4dGallery = {
  extend: TourGallery,

  props: { title: { text: '3 nights / 4 days - tour' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.active3n4dGalleryImage === parseInt(element.key)
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

      { props: { src: SIGNAGI_JPG } },
      { props: { src: SIGNAGI2_JPG } },
      { props: { src: KVEVRI_JPG } },
      { props: { src: BODBE_JPG } },
      { props: { src: TELAVI_JPG } },

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
              const { active3n4dGalleryImage } = state
              state.update({
                active3n4dGalleryImage: active3n4dGalleryImage - 1
              })
              if (active3n4dGalleryImage <= 0) {
                state.update({ active3n4dGalleryImage: 15 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { active3n4dGalleryImage } = state
              state.update({
                active3n4dGalleryImage: active3n4dGalleryImage + 1
              })
              if (active3n4dGalleryImage >= 15) {
                state.update({ active3n4dGalleryImage: 0 })
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
            state.active_4d_TourMail
              ? state.update({ active_4d_TourMail: false, active_4d_TourBook: false, active_4d_TourBooked: true })
              : state.update({ active_4d_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_4d_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_4d_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_4d_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_4d_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_4d_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      },

      paragraph: {
        class: {
          show: (element, state) => state.active_4d_TourBooked
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
