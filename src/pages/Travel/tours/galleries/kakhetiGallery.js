'use strict'

import { TourGallery } from '../../../../components'

import SIGNAGI_JPG from '../../../../assets/images/travel/kakheti/signagi3.jpg'
import SIGNAGI2_JPG from '../../../../assets/images/travel/kakheti/signagi2.jpg'
import KVEVRI_JPG from '../../../../assets/images/travel/kakheti/kvevri.jpg'
import BODBE_JPG from '../../../../assets/images/travel/kakheti/bodbe.jpg'
import TELAVI_JPG from '../../../../assets/images/travel/kakheti/telavi.jpg'

export const kakhetiGallery = {
  extend: TourGallery,

  props: { title: { text: 'kakheti tour' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeKakhetiGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: SIGNAGI_JPG } },
      { props: { src: SIGNAGI2_JPG } },
      { props: { src: KVEVRI_JPG } },
      { props: { src: BODBE_JPG } },
      { props: { src: TELAVI_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeKakhetiGalleryImage } = state
              state.update({
                activeKakhetiGalleryImage: activeKakhetiGalleryImage - 1
              })
              if (activeKakhetiGalleryImage <= 0) {
                state.update({ activeKakhetiGalleryImage: 4 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeKakhetiGalleryImage } = state
              state.update({
                activeKakhetiGalleryImage: activeKakhetiGalleryImage + 1
              })
              if (activeKakhetiGalleryImage >= 4) {
                state.update({ activeKakhetiGalleryImage: 0 })
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
            state.active_Kakheti_TourMail
              ? state.update({ active_Kakheti_TourMail: false, active_Kakheti_TourBook: false, active_Kakheti_TourBooked: true })
              : state.update({ active_Kakheti_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Kakheti_TourMail
            ? {
              background: '#0EB393',
              border: 'none'
            }
            : {
              background: 'transparent',
              border: '.8px solid silver'
            },

          show2: (element, state) => state.active_Kakheti_TourBooked
            ? {
              pointerEvents: 'none',
              border: 'none'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Kakheti_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Kakheti_TourBooked
              ? { display: 'flex' } : { display: 'none' }
          }
        }
      },

      form: {
        class: {
          show: (element, state) => state.active_Kakheti_TourMail
            ? { opacity: '1', transition: 'opacity .15s ease-in-out' }
            : { opacity: '0', pointerEvents: 'none' }
        }
      }
    }
  }
}
