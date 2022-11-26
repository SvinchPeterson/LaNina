'use strict'

import { TourGallery } from '../../../../components'

import PARAVANI_JPG from '../../../../assets/images/travel/exclusive/paravani.jpg'
import ABULI_JPG from '../../../../assets/images/travel/exclusive/abuli.jpeg'
import BUGDASHENI_JPG from '../../../../assets/images/travel/exclusive/bugdasheni.jpg'
import KHANCHALI_JPG from '../../../../assets/images/travel/exclusive/khanchali.jpg'
import KUMURDO_JPG from '../../../../assets/images/travel/exclusive/kumurdo.jpg'
import SAGAMO_JPG from '../../../../assets/images/travel/exclusive/sagamo.jpg'
import SAMSHVILDE_JPG from '../../../../assets/images/travel/exclusive/samshvilde.jpeg'
import SHAORI_JPG from '../../../../assets/images/travel/exclusive/shaori.jpeg'

export const exclusiveGallery = {
  extend: TourGallery,

  props: { title: { text: '' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeExclusiveGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: PARAVANI_JPG } },
      { props: { src: ABULI_JPG } },
      { props: { src: BUGDASHENI_JPG } },
      { props: { src: KHANCHALI_JPG } },
      { props: { src: KUMURDO_JPG } },
      { props: { src: SAMSHVILDE_JPG } },
      { props: { src: SHAORI_JPG } },
      { props: { src: SAGAMO_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeExclusiveGalleryImage } = state
              state.update({
                activeExclusiveGalleryImage: activeExclusiveGalleryImage - 1
              })
              if (activeExclusiveGalleryImage <= 0) {
                state.update({ activeExclusiveGalleryImage: 7 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeExclusiveGalleryImage } = state
              state.update({
                activeExclusiveGalleryImage: activeExclusiveGalleryImage + 1
              })
              if (activeExclusiveGalleryImage >= 7) {
                state.update({ activeExclusiveGalleryImage: 0 })
              }
            }
          }
        }
      ]
    }
  }
}
