'use strict'

import { Flex } from 'smbls'

import { RoomsToursPopUp, AmenitiesPopUp } from '../../../../components'

import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro, roomBlueLagoon, roomQvevri } from './rooms'


// import { toursContainer } from '../../../travelSections/tours/toursPopUp'
import ORNAMENTS_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'
import { roomsHeader } from './roomsHeader'

const props = {
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  ':before': { background: 'radial-gradient(rgba(0, 49, 49, .5), rgba(0, 49, 49, 1), rgba(0, 49, 49, 1))' },
  '@maxTabletL': { fontSize: `${14 / 16}em` },
  contentContainer: {
    header: {
      titles: {childProps: {fontSize: 'D'}}
    },
    content: {
      style: {
        boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)',
        '> div:nth-child(odd)': {
          '@media only screen and (min-width: 1025px)': { padding: `0 ${45 / 16}em 0 0` },
          '> div > div': {
            '@media only screen and (min-width: 1025px)': {
              borderRadius: `0 ${30 / 16}em ${30 / 16}em 0`,
              borderTop: '.3px solid rgba(255, 249, 237, .15)',
              borderRight: '.3px solid rgba(255, 249, 237, .15)',
              borderBottom: '.3px solid rgba(255, 249, 237, .15)'
            },
            ':before': {
              background: 'linear-gradient(to right,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)',
              '@media only screen and (max-width: 1024px)': {
                background: 'linear-gradient(to top,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
              }
            }
          },
        },

        '> div:nth-child(even)': {
          '@media only screen and (min-width: 1025px)': { padding: `0 0 0 ${45 / 16}em` },
          '> div > div': {
            '@media only screen and (min-width: 1025px)': {
              borderRadius: `${30 / 16}em 0 0 ${30 / 16}em`,
              borderTop: '.3px solid rgba(255, 249, 237, .15)',
              borderLeft: '.3px solid rgba(255, 249, 237, .15)',
              borderBottom: '.3px solid rgba(255, 249, 237, .15)'
            },
            ':before': {
              background: 'linear-gradient(to left,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)',
              '@media only screen and (max-width: 1024px)': {
                background: 'linear-gradient(to top,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
              }
            }
          },
        },
      },
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

  ameninitiesPopUps: {
    extend: AmenitiesPopUp,
    class: {
      show: (element, state) => state.activeAmenitiesPopUp
        ? { display: 'flex', zIndex: '30' } : { display: 'none', zIndex: '0', pointerEvents: 'none' }
    },
    close: { on: { click: (event, element, state) => { state.update({ activeAmenitiesPopUp: false }) } } }
  },


  logo: {
    class: {
      show: (element, state) => state.activeRoomsPopUp
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}