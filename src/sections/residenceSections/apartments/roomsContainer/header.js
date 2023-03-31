'use strict'

import { Img } from 'smbls'

import { header } from "../../../travelSections/tours/toursContainer./header"

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
      fontWeight: '700',
      textTransform: 'capitalize',
      fontSize: 'E',
      letterSpacing: '-1px',
      span: {display: 'none'}
    }
  },

  tabs: {
    gap: 'B2',
    margin: '- - Z1 -',
    childProps: {
      icon: {
        boxSize: 'B '
      }
    }
  }
}

export const roomsHeader = {
  extend: header,
  props,

  class: {
    show: (element, state) => state.activeRoomsContainer
      ? { opacity: '1' }
      : { opacity: '0' }
  },

  titles: {
    childExtend: {
      tag: 'h2',
      span: null
    },
    ...[
      {
        class: {
          show: (element, state) => state.activeBallerina
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'ballerina' }
      },

      {
        class: {
          show: (element, state) => state.activeRedBrick
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'red brick' }
      },

      {
        class: {
          show: (element, state) => state.activeYellowCouch
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'yellow couch' }
      },

      {
        class: {
          show: (element, state) => state.activeGreenForest
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'green forest' }
      },

      {
        class: {
          show: (element, state) => state.activeRetro
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'retro' }
      },

      {
        class: {
          show: (element, state) => state.activeLagoon
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'blue lagoon' }
      },

      {
        class: {
          show: (element, state) => state.activeQvevri
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
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
              activeQvevri: false
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
              activeQvevri: false
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
              activeQvevri: false
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
              activeQvevri: false
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
              activeQvevri: false
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
              activeQvevri: false
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
              activeBallerina: false
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