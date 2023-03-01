'use strict'
import { Flex } from 'smbls'

import { PopUpModal } from '../../../../components'

import { daily, standard, caucasus, adventure, exclusive, wineGastronomy } from '../../../../tours'

import { header } from './header'

import ORNAMENT_JPG from '../../../../assets/images/travel/ornament2.png'

// import { dailyTour } from './dailyTour'
// import { standardTour } from './standardTour'
// import { armeniaTour } from './armeniaTour'
// import { exclusive } from './exclusiveTour'
// import { adventure } from './adventureTour'

// import { popUpContainer } from './popUpContainer/popUpContainer'

// import CLOSE_PNG from '../../../assets/icons/closeBlack.png'

// const closeButton = {
//   extend: Button,
//   icon: { extend: Img },

//   on: {
//     click: (event, element, state) => {
//       state.update({ activeTour: false, activeDailyTour: false, activeStandardTour: false, activeArmeniaTour: false, activeExclusiveTour: false, activeAdventureTour: false })
//     }
//   }
// }

// const props = {
//   boxSize: '100% 100%',
//   position: 'fixed',
//   background: 'rgba(229, 249, 252, 1)',
//   justifyContent: 'center',
//   zIndex: '100',
//   top: '0',
//   left: '0',
//   flow: 'column',
//   alignItems: 'center',
//   // overflow: 'hidden',
//   style: { backdropFilter: 'blur(1px)' },

//   ':after': {
//     content: '""',
//     boxSize: '100% 100%',
//     position: 'absolute',
//     top: '0',
//     left: '0'
//   },

//   closeButton: {
//     boxSize: 'fit-content',
//     background: 'transparent',
//     position: 'absolute',
//     zIndex: '3',
//     top: '0',
//     right: '0',
//     padding: 'B',
//     '@mobileS': { padding: 'A' },
//     icon: {
//       src: CLOSE_PNG,
//       boxSize: 'A1 '
//     }
//   }
// }

// export const toursContainer = {
//   extend: Flex,
//   props,
//   class: {
//     show: (element, state) => state.activeTour
//       ? {
//         display: 'block'
//       }
//       : {
//         display: 'none !important'
//       }
//   },

//   closeButton,

//   dailyTour,
//   standardTour,
//   armeniaTour,
//   exclusive,
//   adventure,
//   popUpContainer
// }

// ----------------------

const props = {
  // width: '100%',
  // height: '100%',
  position: 'fixed',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundColor: 'rgba(233, 250, 255, 1)',
  style: { backgroundAttachment: 'fixed' },
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(15, 49, 61, .7), rgba(15, 49, 61, 1), rgba(15, 49, 61, 1))'
  },
  close: { top: 'A2', right: 'A1' },

  content: {
    boxSize: '100% 100%',
    maxWidth: '1200px',
    flow: 'column',
    overflow: 'hidden',
    zIndex: '1',
    tours: {
      flex: '1',
      position: 'relative',
      flow: 'column',
      style: { overflowY: 'auto', '::-webkit-scrollbar': { display: 'none' } }
    }
  },

  logo: { bottom: 'A2', left: 'B' }
}

export const toursContainer = {
  extend: PopUpModal,
  props,
  class: {
    show: (element, state) => state.activeToursContainer
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none' }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activeToursContainer: false,
          activeDaily: false,
          activeStandard: false,
          activeCaucasus: false,
          activeExclusive: false,
          activeAdventure: false,
          activeWineGastronomy: false
        })
      }
    },
    class: {
      show: (element, state) => state.activeToursContainer
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' }
    }
  },

  content: {
    extend: Flex,
    header,
    tours: {
      extend: Flex,

      daily,
      standard,
      caucasus,
      exclusive,
      wineGastronomy,
      adventure
    }
  },

  logo: {
    class: {
      show: (element, state) => state.activeToursContainer
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}
