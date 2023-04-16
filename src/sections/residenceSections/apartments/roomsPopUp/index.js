'use strict'

import { Flex } from 'smbls'

import { RoomsToursPopUp, AmenitiesPopUp, RoomDescriptionPopUp } from '../../../../components'

import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro, roomBlueLagoon, roomQvevri } from './rooms'

import {
  ballerinaTextEng, redBrickTextEng, yellowCouchTextEng, greenForrestTextEng,
  retroTextEng, blueLagoonTextEng, qvevriTextEng
} from "../../../../texts/residence"

import ORNAMENTS_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'
import { roomsHeader } from './roomsHeader'

const props = {
  backgroundImage: 'url(' + ORNAMENTS_PNG + ')',
  ':before': { background: 'radial-gradient(rgba(0, 49, 49, .5), rgba(0, 49, 49, 1), rgba(0, 49, 49, 1))' },
  '@maxTabletL': { fontSize: `${14 / 16}em` },
  contentContainer: {
    header: {
      titles: { childProps: {fontSize: 'D'} }
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
        ? { zIndex: '30', opacity: '1' } : { zIndex: '-1', pointerEvents: 'none', opacity: '0' }
    },

    close: { on: { click: (event, element, state) => { state.update({ activeAmenitiesPopUp: false }) } } },
    contentContainer: {
      amenities: {
        class: {
          show: (element, state) => state.activeAmenitiesPopUp
            ? {
              opacity: '1', transform: 'scale(1) translateY(0)',
              transition: 'opacity .4s ease, transform .4s ease'
            }
            : {
              opacity: '0',
              transform: 'scale(.95) translateY(50px)'
            }
        },
       }
    },

    logo: {
      class: {
        show: (element, state) => state.activeAmenitiesPopUp
          ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
          : { opacity: '0', transform: 'rotate3d(0)' }
      }
    }
  },

  roomDescriptionsPopUp: {
    extend: RoomDescriptionPopUp,
    class: {
      show: (element, state) => state.activeDescriptionsPopUp
        ? { zIndex: '30', opacity: '1' } : { zIndex: '-1', pointerEvents: 'none', opacity: '0' }
    },

    close: {
       on: {
        click: (event, element, state) => {
          state.update({
            activeDescriptionsPopUp: false,
            activeBallerinaDescription: false,
            activeRedBrickDescription: false,
            activeYellowCouchDescription: false,
            activeGreenForestDescription: false,
            activeRetroDescription: false,
            activeBlueLagoonDescription: false,
            activeQvevriDescription: false
          })
        }
      },
    },
    contentContainer: {
      ...[
        {
          class: {
            show: (element, state) => state.activeBallerinaDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                zIndex: '-1',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },
          p: { extend: ballerinaTextEng }
        },

        {
          class: {
            show: (element, state) => state.activeRedBrickDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },
          p: { extend: redBrickTextEng }
        },

        {
          class: {
            show: (element, state) => state.activeYellowCouchDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },
          p: { extend: yellowCouchTextEng }
        },

        {
          class: {
            show: (element, state) => state.activeGreenForestDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },
          p: { extend: greenForrestTextEng }
        },

        {
          class: {
            show: (element, state) => state.activeRetroDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },
          p: { extend: retroTextEng }
        },

        {
          class: {
            show: (element, state) => state.activeBlueLagoonDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },
          p: {extend: blueLagoonTextEng }
        },

        {
          class: {
            show: (element, state) => state.activeQvevriDescription
              ? {
                opacity: '1',
                transform: 'scale(1) translate(-50%, -50%)',
                transition: 'opacity .4s ease, transform .4s ease'
              }
              : {
                opacity: '0',
                transform: 'scale(.95) translate(-50%, -45%)'
              }
          },

          p: {extend: qvevriTextEng }
        }
      ]

    },
    logo: {
      class: {
        show: (element, state) => state.activeDescriptionsPopUp
          ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
          : { opacity: '0', transform: 'rotate3d(0)' }
      }
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