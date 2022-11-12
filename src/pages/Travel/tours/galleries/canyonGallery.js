'use strict'

import { TourGallery } from '../../../../components'

import BRILIANT_JPG from '../../../../assets/images/travel/canyon/briliant2.jpg'
import BRILIANT2_JPG from '../../../../assets/images/travel/canyon/briliant.jpg'
import CANYON_JPG from '../../../../assets/images/travel/canyon/canyon.jpg'
import CANYON2_JPG from '../../../../assets/images/travel/canyon/canyon2.jpg'

export const canyonGallery = {
  extend: TourGallery,

  props: { title: { text: 'Dashbashi Canyon' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeCanyonGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: BRILIANT_JPG } },
      { props: { src: BRILIANT2_JPG } },
      { props: { src: CANYON_JPG } },
      { props: { src: CANYON2_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeCanyonGalleryImage } = state
              state.update({
                activeCanyonGalleryImage: activeCanyonGalleryImage - 1
              })
              if (activeCanyonGalleryImage <= 0) {
                state.update({ activeCanyonGalleryImage: 3 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeCanyonGalleryImage } = state
              state.update({
                activeCanyonGalleryImage: activeCanyonGalleryImage + 1
              })
              if (activeCanyonGalleryImage >= 3) {
                state.update({ activeCanyonGalleryImage: 0 })
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
            state.active_Canyon_TourMail
              ? state.update({ active_Canyon_TourMail: false, active_Canyon_TourBook: false, active_Canyon_TourBooked: true })
              : state.update({ active_Canyon_TourMail: true })
          }
        },

        class: {
          show: (element, state) => state.active_Canyon_TourMail
            ? {
              background: '#0EB393',
              border: 'none'
            }
            : {
              background: 'transparent',
              border: '.8px solid silver'
            },

          show2: (element, state) => state.active_Canyon_TourBooked
            ? {
              pointerEvents: 'none',
              border: 'none'
            }
            : {
            }
        },

        span: {
          class: {
            show: (element, state) => state.active_Canyon_TourBook
              ? { display: 'block' } : { display: 'none' }
          }
        },
        booked: {
          class: {
            show: (element, state) => state.active_Canyon_TourBooked
              ? { display: 'flex' } : { display: 'none' }
          }
        }
      },

      form: {
        class: {
          show: (element, state) => state.active_Canyon_TourMail
            ? { opacity: '1', transition: 'opacity .15s ease-in-out' }
            : { opacity: '0', pointerEvents: 'none' }
        }
      }

      // paragraph: {
      //   class: {
      //     show: (element, state) => state.active_Canyon_TourBooked
      //       ? { display: 'block' } : { display: 'none' }
      //   }
      // }
    }
  }
}
