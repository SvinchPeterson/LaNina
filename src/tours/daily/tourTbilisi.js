'use strict'

import { Tour } from '../../components'
import { galleryTbilisi } from '../../galleries/travelGalleries'
import { $tbilisi } from '../../texts/travel'
import { packageTbilisi } from '../../toursPackages'

export const tourTbilisi = {
  extend: Tour,
  props: { padding: 'C2 - - -' },
  // attr: { id: 'daily' },
  // class: {
  //   show2: (element, state) => state.activeDescription
  //     ? {
  //       transition: 'min-width 3s ease-in-out, min-height 3s ease-in-out',
  //       minWidth: '100%',
  //       minHeight: '100%'
  //       // position: 'absolute',
  //       // background: 'red',
  //       // clear: 'both'
  //     }
  //     : {}
  // },
  gallery: {
    // class: {
    //   show: (element, state) => state.activeDescription
    //     ? {
    //       transform: 'scale(.8) translateX(-50px)',
    //       transition: 'all 1s ease-in-out'
    //     }
    //     : {

    //     }
    // },
    title: { text: 'tbilisi city tour' },
    gallery: {
      extend: galleryTbilisi,
      childExtend: {
        class: {
          show: (element, state) => state.activeTbilisiGalleryImage === parseInt(element.key)
            ? { opacity: 1 } : { opacity: 0 }
        }
      }
    },

    footer: {
      book: {},
      navArrows: {
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
      }
    }
  },

  article: {
    description: { extend: $tbilisi },
    package: { extend: packageTbilisi }
    // class: {
    //   show: (element, state) => state.activeDescription
    //     ? {
    //       // position: 'absolute',
    //       transition: 'all 1s ease-in-out',
    //       background: 'rgba(15, 49, 61, .85)',
    //       backdropFilter: 'blur(2px)',
    //       zIndex: '100',
    //       boxShadow: '0 0 2px 0 rgba(0, 0, 0, .4)',
    //       transform: 'scale(1.1) translate(-100px, 50px)',
    //       p: {
    //         transform: 'scale(.85)',
    //         transition: 'all 1s ease-in-out'
    //       },
    //       height: '100%',
    //       width: '300%',
    //       '> div': { transform: 'scale(.8)' }
    //     }
    //     : {

    //     }
    // },
  }

}
