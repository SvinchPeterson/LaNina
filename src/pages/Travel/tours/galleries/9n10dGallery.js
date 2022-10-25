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

import JVARI_JPG from '../../../../assets/images/travel/mtsketa/mtsketa.jpg'
import MTSKETA_JPG from '../../../../assets/images/travel/mtsketa/mcxeta3.jpg'
import MTSKETA2_JPG from '../../../../assets/images/travel/mtsketa/street.jpg'
import MTSKETA3_JPG from '../../../../assets/images/travel/mtsketa/mtsketa2.jpg'

import BRILIANT_JPG from '../../../../assets/images/travel/canyon/briliant2.jpg'
import BRILIANT2_JPG from '../../../../assets/images/travel/canyon/briliant.jpg'
import CANYON_JPG from '../../../../assets/images/travel/canyon/canyon.jpg'
import CANYON2_JPG from '../../../../assets/images/travel/canyon/canyon2.jpg'

import KUTAISI_JPG from '../../../../assets/images/travel/kutaisi/kutaisi.jpg'
import CANYON3_JPG from '../../../../assets/images/travel/kutaisi/canyon.jpg'
import CANYON4_JPG from '../../../../assets/images/travel/kutaisi/canyon2.jpg'
import CAVE_JPG from '../../../../assets/images/travel/kutaisi/cave2.jpg'
import CAVE2_JPG from '../../../../assets/images/travel/kutaisi/cave.jpg'

import GORI_JPG from '../../../../assets/images/travel/gori/gori.jpg'
import MUSEUM_JPG from '../../../../assets/images/travel/gori/museum.jpg'
import MUSEUM2_JPG from '../../../../assets/images/travel/gori/museum2.jpeg'
import CAVE3_JPG from '../../../../assets/images/travel/gori/cave.jpg'
import CAVE4_JPG from '../../../../assets/images/travel/gori/cave2.jpg'

import BORJOMI_JPG from '../../../../assets/images/travel/borjomi/Borjomi.jpg'
import BORJOMI2_JPG from '../../../../assets/images/travel/borjomi/borjomi2.jpg'
import PARK_JPG from '../../../../assets/images/travel/borjomi/park.jpg'
import BRIDG_JPG from '../../../../assets/images/travel/borjomi/bridge.jpg'

import RABAT_JPG from '../../../../assets/images/travel/rabati/rabat.jpeg'
import RABAT2_JPG from '../../../../assets/images/travel/rabati/rabati3.jpg'
import RABAT3_JPG from '../../../../assets/images/travel/rabati/rabati2.jpg'
import RABAT4_JPG from '../../../../assets/images/travel/rabati/rabat4.jpg'

export const $9n10dGallery = {
  extend: TourGallery,

  props: { title: { text: '9 nights / 10 days - tour' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.active9n10dGalleryImage === parseInt(element.key)
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
      { props: { src: GUDAURI_JPG } },

      { props: { src: BRILIANT_JPG } },
      { props: { src: BRILIANT2_JPG } },
      { props: { src: CANYON_JPG } },
      { props: { src: CANYON2_JPG } },

      { props: { src: SIGNAGI_JPG } },
      { props: { src: SIGNAGI2_JPG } },
      { props: { src: KVEVRI_JPG } },
      { props: { src: BODBE_JPG } },
      { props: { src: TELAVI_JPG } },

      { props: { src: JVARI_JPG } },
      { props: { src: MTSKETA_JPG } },
      { props: { src: MTSKETA2_JPG } },
      { props: { src: MTSKETA3_JPG } },

      { props: { src: KUTAISI_JPG } },
      { props: { src: CANYON3_JPG } },
      { props: { src: CANYON4_JPG } },
      { props: { src: CAVE_JPG } },
      { props: { src: CAVE2_JPG } },

      { props: { src: GORI_JPG } },
      { props: { src: MUSEUM_JPG } },
      { props: { src: MUSEUM2_JPG } },
      { props: { src: CAVE3_JPG } },
      { props: { src: CAVE4_JPG } },

      { props: { src: BORJOMI_JPG } },
      { props: { src: BORJOMI2_JPG } },
      { props: { src: PARK_JPG } },
      { props: { src: BRIDG_JPG } },

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
              const { active9n10dGalleryImage } = state
              state.update({
                active9n10dGalleryImage: active9n10dGalleryImage - 1
              })
              if (active9n10dGalleryImage <= 0) {
                state.update({ active9n10dGalleryImage: 41 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { active9n10dGalleryImage } = state
              state.update({
                active9n10dGalleryImage: active9n10dGalleryImage + 1
              })
              if (active9n10dGalleryImage >= 41) {
                state.update({ active9n10dGalleryImage: 0 })
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
            state.active_10d_TourMail
              ? state.update({ active_10d_TourMail: false, active_10d_TourBook: false, active_10d_TourBooked: true })
              : state.update({ active_10d_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_10d_TourMail
            ? {
              background: '#28819c',
              border: '1px solid rgba(0, 0, 0, 0)'
            }
            : {
              background: 'transparent'
            },

          show2: (element, state) => state.active_10d_TourBooked
            ? {
              pointerEvents: 'none',
              opacity: '.55'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_10d_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_10d_TourBooked
              ? { display: 'block' } : { display: 'none' }
          }
        }
      },

      email: {
        class: {
          show: (element, state) => state.active_10d_TourMail
            ? { display: 'block' } : { display: 'none' }
        }
      },

      paragraph: {
        class: {
          show: (element, state) => state.active_10d_TourBooked
            ? { display: 'block' } : { display: 'none' }
        }
      }
    }
  }
}
