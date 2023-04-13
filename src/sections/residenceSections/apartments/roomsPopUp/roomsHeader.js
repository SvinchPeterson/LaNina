'use strict'

import { Img } from 'smbls'

import DRESS_PNG from '../../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../../assets/icons/qvevri.png'


const props = {
  titles: {
    childProps: {
      textTransform: 'capitalize',
      fontSize: 'D'
    }
  },
  tabs: {
    gap: 'A',
    '@maxMobileL': {
      margin: 'X2 - - -'
    },
    '@maxMobileS': { gap: '0'},
    childProps: {
      boxSize: 'C2 C2',
      icon: { boxSize: 'A2 '}
    }
  }
}

export const roomsHeader = {
  props,

  class: {
    show: (element, state) => state.activeRoomsPopUp
      ? { opacity: '1' }
      : { opacity: '0' }
  },

  titles: {
    ...[
      {
        class: {
          show: (element, state) => state.activeBallerina
            ? {
              bottom: `${10 / 28}em`,
              opacity: '1',
              transform: 'scale(1)'
            }
            : {
              bottom: `${-50 / 28}em`,
              opacity: '0',
              transform: 'scale(.95)'
            }
        },

        props: { text: 'ballerina' }
      },

      {
        class: {
          show: (element, state) => state.activeRedBrick
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'red brick' }
      },

      {
        class: {
          show: (element, state) => state.activeYellowCouch
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'yellow couch' }
      },

      {
        class: {
          show: (element, state) => state.activeGreenForest
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'green forest' }
      },

      {
        class: {
          show: (element, state) => state.activeRetro
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0',  transform: 'scale(.95)' }
        },
        props: { text: 'retro' }
      },

      {
        class: {
          show: (element, state) => state.activeLagoon
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'blue lagoon' }
      },

      {
        class: {
          show: (element, state) => state.activeQvevri
            ? { bottom: `${10 / 28}em`, opacity: '1', transform: 'scale(1)' }
            : { bottom: `${-50 / 28}em`, opacity: '0', transform: 'scale(.95)' }
        },
        props: { text: 'qvevri' }
      }
    ]
  },

  tabs: {
    childExtend: { icon: { extend: Img }},
    ...[
      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeBallerina: true,
              activeRedBrick: false,
              activeYellowCouch: false,
              activeGreenForest: false,
              activeRetro: false,
              activeLagoon: false,
              activeQvevri: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeBallerina
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: DRESS_PNG }}
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeRedBrick: true,
              activeBallerina: false,
              activeYellowCouch: false,
              activeGreenForest: false,
              activeRetro: false,
              activeLagoon: false,
              activeQvevri: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeRedBrick
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: BRICKS_PNG }}
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeYellowCouch: true,
              activeRedBrick: false,
              activeBallerina: false,
              activeGreenForest: false,
              activeRetro: false,
              activeLagoon: false,
              activeQvevri: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeYellowCouch
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: SOFA_PNG }}
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeGreenForest: true,
              activeYellowCouch: false,
              activeRedBrick: false,
              activeBallerina: false,
              activeRetro: false,
              activeLagoon: false,
              activeQvevri: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeGreenForest
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: LEAF_PNG }}
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeRetro: true,
              activeGreenForest: false,
              activeYellowCouch: false,
              activeRedBrick: false,
              activeBallerina: false,
              activeLagoon: false,
              activeQvevri: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeRetro
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: VINYL_PNG }}
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeLagoon: true,
              activeRetro: false,
              activeGreenForest: false,
              activeYellowCouch: false,
              activeRedBrick: false,
              activeBallerina: false,
              activeQvevri: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeLagoon
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: LAGOON_PNG }}
      },

      {
        on: {
          click: (event, element, state) => {
            state.update({
              activeQvevri: true,
              activeLagoon: false,
              activeRetro: false,
              activeGreenForest: false,
              activeYellowCouch: false,
              activeRedBrick: false,
              activeBallerina: false,
              activeImage: 0
            })
          }
        },
        class: {
          show: (element, state) => state.activeQvevri
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },
        text: null,
        icon: {props: { src: QVEVRI_PNG }}
      }
    ]

  }
}