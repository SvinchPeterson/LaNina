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
  title: {
    attr: { for: 'TBILISI CITY TOUR' }
  },

  images: {
    props: { style: { overflow: 'hidden' } },
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

    book: {
      on: {
        click: (event, element, state) => {
          state.update({ activePopUpContainer: true, activeTbilisiBooking: true })
        }
      }
    }
  }
}
