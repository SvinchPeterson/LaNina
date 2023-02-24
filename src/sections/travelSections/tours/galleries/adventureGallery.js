'use strict'

import { TourGallery } from '../../../../components'

import BIRTVISI_JPG from '../../../../assets/images/travel/adventure/birtvisi.jpg'
import BIRTVISI2_JPG from '../../../../assets/images/travel/adventure/birtvisi2.jpg'
import DEVI_JPG from '../../../../assets/images/travel/adventure/devi.jpg'
import SHEUPOVARI_JPG from '../../../../assets/images/travel/adventure/sheupovari.jpg'
import SHEUPOVARI2_JPG from '../../../../assets/images/travel/adventure/sheupovari2.jpg'

export const adventureGallery = {
  extend: TourGallery,

  props: { title: { text: '' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeAdventureGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: BIRTVISI_JPG } },
      { props: { src: BIRTVISI2_JPG } },
      { props: { src: DEVI_JPG } },
      { props: { src: SHEUPOVARI_JPG } },
      { props: { src: SHEUPOVARI2_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeAdventureGalleryImage } = state
              state.update({
                activeAdventureGalleryImage: activeAdventureGalleryImage - 1
              })
              if (activeAdventureGalleryImage <= 0) {
                state.update({ activeAdventureGalleryImage: 4 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeAdventureGalleryImage } = state
              state.update({
                activeAdventureGalleryImage: activeAdventureGalleryImage + 1
              })
              if (activeAdventureGalleryImage >= 4) {
                state.update({ activeAdventureGalleryImage: 0 })
              }
            }
          }
        }
      ]
    },

    book: {
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeAdventureBooking: true })
        }
      }
    }
  }
}
