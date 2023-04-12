'use strict'

import { Flex } from 'smbls'

import { RoomsToursPopUp } from '../../../../components'

import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro, roomBlueLagoon, roomQvevri } from './rooms'


// import { toursContainer } from '../../../travelSections/tours/toursPopUp'
import ORNAMENTS_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'
import { roomsHeader } from './roomsHeader'

const props = {
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  ':before': { background: 'radial-gradient(rgba(0, 49, 49, .5), rgba(0, 49, 49, 1), rgba(0, 49, 49, 1))' },
  contentContainer: {
    header: {
      titles: {childProps: {fontSize: 'D'}}
    },
    content: {
      style: { boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)'},
      childProps: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  }
}

export const roomsPopUp = {
  extend: RoomsToursPopUp,
  props,
  class: {
    show: (element, state) => state.activeRoomsPopUp
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none' }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activeRoomsPopUp: false,
          activeRoomsContainer: false,
          activeBallerina: false,
          activeRedBrick: false,
          activeYellowCouch: false,
          activeGreenForest: false,
          activeRetro: false,
          activeLagoon: false,
          activeQvevri: false
        })
      }
    },
    class: {
      show: (element, state) => state.activeRoomsPopUp
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' },
    }
  },

  contentContainer: {
    header: { extend: roomsHeader },
    content: {
      roomBallerina,
      roomRedBrick,
      roomYellowCouch,
      roomGreenForest,
      roomRetro,
      roomBlueLagoon,
      roomQvevri
    }
  },

  logo: {
    class: {
      show: (element, state) => state.activeRoomsPopUp
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}