'use strict'

import { Flex } from 'smbls'

import { RoomsToursPopUp } from '../../../components'

import { galleries } from './galleries'
import { navBar } from './navBar'
import { galleryHeader } from './galleryHeader'

const props = {
  background: 'naviBlue',
  height: '0',

  contentContainer: {
    flow: 'row',
    align: 'center center',
    style: { boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)' },
    '@maxMobileL': {
      flow: 'column',
      gap: 'C'
    },
    header: { '@minMobileL': { display: 'none'} },
    content: { '@minMobileL': { display: 'none'}},

    nav: { '@maxMobileL': { display: 'none' } },
    galleries: { '@maxMobileL': { display: 'none' } }
  },

  logo: { zIndex: '20'}
}

export const popUpGallery = {
  extend: RoomsToursPopUp,
  props,
  class: {
    show: (element, state) => state.activePopUpGallery
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none' }
  },
  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activePopUpGallery: false,
          activeTbilisi: false,
          activeBorjomi: false,
          activeMtsketa: false,
          activeKakheti: false,
          activeMartvili: false,
          activeKutaisi: false,
          activeGori: false,
          activeKazbegi: false,
          activeImage: 0
        })
      }
    },
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' }
    }
  },

  contentContainer: {
    header: { extend: galleryHeader},
    content: { extend: galleries },

    nav: { extend: navBar },
    galleries: {extend: galleries}
  },

    logo: {
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}


// export const popUpGallery = {
//   extend: PopUpModal,
//   props,
//   class: {
//     show: (element, state) => state.activePopUpGallery
//       ? { height: '100%' }
//       : { height: '0', pointerEvents: 'none' }
//   },

//   close: {
//     on: {
//       click: (event, element, state) => {
//         state.update({
//           activePopUpGallery: false,
//           activeTbilisi: false,
//           activeBorjomi: false,
//           activeMtsketa: false,
//           activeKakheti: false,
//           activeMartvili: false,
//           activeKutaisi: false,
//           activeGori: false,
//           activeKazbegi: false,
//           activeImage: 0
//         })
//       }
//     },
//     class: {
//       show: (element, state) => state.activePopUpGallery
//         ? { opacity: '1', transform: 'rotate(90deg)' }
//         : { opacity: '0' }
//     }
//   },

//   contentContainer: {
//     extend: Flex,
//     navBar,
//     galleries: { extend: galleries }
//   },

//   logo: {
//     class: {
//       show: (element, state) => state.activePopUpGallery
//         ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
//         : { opacity: '0', transform: 'rotate3d(0)' }
//     }
//   }
// }
