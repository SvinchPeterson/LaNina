'use strict'

import { Flex } from 'smbls'

import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro, roomBlueLagoon, roomQvevri } from './rooms'

// import { toursContainer } from '../../../travelSections/tours/toursPopUp'
import ORNAMENTS_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'
// import { roomsHeader } from './header'
// import { PopUpModal } from '../../../../components'

const props = {
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  ':before': { background: 'radial-gradient(rgba(1, 57, 57, .8), rgba(1, 57, 57, 1), rgba(1, 57, 57, 1))'},
  ':after': {display: 'none'},
  content: {
    rooms: {
      overflow: 'hidden',
      // border: '5px solid yellow',
      align: 'flex-start center',
      width: '100%',
      height: 'calc(100% - 94px)',
      position: 'relative',

      childProps: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

      }

    }
  }
  // width: '100%',
  // height: `100%`,
  // position: 'relative',
  // maxWidth: `${1440 / 16}em`,
  // margin: 'auto'
  // border: '10px solid purple'
}

// export const roomsPopUp = {
//   extend: toursContainer,
//   props,
//   class: {
//     show: (element, state) => state.activeRoomsContainer
//       ? { height: '100%' }
//       : { height: '0', pointerEvents: 'none' }
//   },

//   close: {
//     on: {
//       click: (event, element, state) => {
//         state.update({
//           activeRoomsContainer: false,
//           activeBallerina: false,
//           activeRedBrick: false,
//           activeYellowCouch: false,
//           activeGreenForest: false,
//           activeRetro: false,
//           activeLagoon: false,
//           activeQvevri: false
//         })
//       }
//     },
//     class: {
//       show: (element, state) => state.activeRoomsContainer
//         ? { opacity: '1', transform: 'rotate(90deg)' }
//         : { opacity: '0' },

//       // show2: (element, state) => state.activePackagesContainer
//       //   ? { pointerEvents: 'none' }
//       //   : { }
//     }
//   },

//   content: {
//     header: null,
//     tours: null,
//     roomsHeader,
//     rooms: {
//       extend: Flex,
//       roomBallerina,
//       roomRedBrick,
//       roomYellowCouch,
//       roomGreenForest,
//       roomRetro,
//       roomBlueLagoon,
//       roomQvevri
//     }
//   },

//   logo: {
//     class: {
//       show: (element, state) => state.activeRoomsContainer
//         ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
//         : { opacity: '0', transform: 'rotate3d(0)' }
//     }
//   }
//   // // class: {
//   // //   show: (element, state) => state.activeTab
//   // //     ? { display: 'block' } : { display: 'none' }
//   // // },

//   // ...[
//   //   roomBallerina,
//   //   roomRedBrick,
//   //   roomYellowCouch,
//   //   roomGreenForest,
//   //   roomRetro
//   // ]
// }

export const roomsPopUp = {

}