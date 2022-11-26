'use strict'

import { TourGallery } from '../../../../components'

import BORJOMI_JPG from '../../../../assets/images/travel/borjomi/Borjomi.jpg'
import BORJOMI2_JPG from '../../../../assets/images/travel/borjomi/borjomi2.jpg'
import PARK_JPG from '../../../../assets/images/travel/borjomi/park.jpg'
import BRIDGE_JPG from '../../../../assets/images/travel/borjomi/bridge.jpg'

export const borjomiGallery = {
  extend: TourGallery,

  props: { title: { text: 'borjomi' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeBorjomiGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: BORJOMI_JPG } },
      { props: { src: BORJOMI2_JPG } },
      { props: { src: PARK_JPG } },
      { props: { src: BRIDGE_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeBorjomiGalleryImage } = state
              state.update({
                activeBorjomiGalleryImage: activeBorjomiGalleryImage - 1
              })
              if (activeBorjomiGalleryImage <= 0) {
                state.update({ activeBorjomiGalleryImage: 3 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeBorjomiGalleryImage } = state
              state.update({
                activeBorjomiGalleryImage: activeBorjomiGalleryImage + 1
              })
              if (activeBorjomiGalleryImage >= 3) {
                state.update({ activeBorjomiGalleryImage: 0 })
              }
            }
          }
        }
      ]
    }
  }
}
