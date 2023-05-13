'use strict'
import { Flex } from 'smbls'

import { RoomTab } from '../../../components'
import { backgroundPosition } from '../../../animations'


import BALLERINA_JPG from '../../../assets/images/residence/rooms/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../../assets/images/residence/rooms/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../../assets/images/residence/rooms/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../../assets/images/residence/rooms/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../../assets/images/residence/rooms/retro/retroTab.jpg'
import BLUE_LAGOON_JPG from '../../../assets/images/residence/rooms/blueLagoon/blueLagoonTab.jpeg'
import QVEVRI_TAB_JPG from '../../../assets/images/residence/rooms/qvevri/qvevriTab.jpeg'

import DRESS_PNG from '../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../assets/icons/qvevri.png'
import MOON_PNG from '../../../assets/icons/moon.png'

import ORNAMENT_PNG from '../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  width: '100%',
  backgroundColor: 'orange',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  '@minTabletL': { style: {backgroundAttachment: 'fixed'} },
  '@maxTabletL': {
    style: {
      animationName: backgroundPosition,
      animatonTimingFunction: 'linear',
      animationDuration: '15s',
      animationDirection: 'alternate',
      animationIterationCount: 'infinite'
    },
  },
  ':before': {
    content: '""',
    boxSize: '100% F',
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'linear-gradient(to left, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
    zIndex: '20',
    pointerEvents: 'none',
    '@maxMobileL': {
      boxSize: '100% D'
    }
  },
  ':after': {
    content: '""',
    boxSize: '100% F',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'linear-gradient(to right, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
    zIndex: '20',
    pointerEvents: 'none',
    '@maxMobileL': {
      boxSize: '100% D'
    }

  },
  boxSizing: 'border-box',
  backColor: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(1, 57, 57, .45), rgba(1, 57, 57, .8), rgba(1, 57, 57, 1))'
  },
  title: {
    position: 'initial',
    text: 'apartments',
    align: 'center center',
    padding: 'B1 -',
    textTransform: 'capitalize',
    fontSize: `D`,
    fontWeight: '700',
    // letterSpacing: '8px',
    color: 'cream',
    zIndex: '30',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)'
    },
    '@maxTabletL': {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      style: { '::-webkit-scrollbar': { display: 'none' } }
    },
    '@maxMobileL': { padding: 'A -'}
  },
  content: {
    padding: 'C2 E',
    zIndex: '10',
    align: 'center center',
    flex: '1',
    '@minScreenD': { padding: 'C F' },
    '@minScreenL': { padding: 'C F2' },
    '@maxTabletL': {
      padding: 'C2 E C2 F',
      align: 'center flex-start',
      style: { overflowX: 'auto' }
    },
    '@maxMobileL': { padding: 'C E C E'},
    '@maxMobileS': { padding: 'C E C D1'}
  }
}

export const tabs = {
  extend: Flex,
  props,

  backColor: {

  },

  title: { extend: Flex },
    content: {
      extend: Flex,
      childExtend: {
        extend: RoomTab,
        on: {
          click: (event, element, state) => {
            state.update({
              activePopUp: true,
              activePopUpContent: parseInt(element.key)
            })
          }
        }
      },
      ...[
        {
          backImage: { props: { backgroundImage: 'url(' + BALLERINA_JPG + ')' }},
          icon: { props: { src: DRESS_PNG }},
          p: { props: { text: 'Enjoy special atmosphere, delicate and airy' }},
          title: { props: { text: 'ballerina' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + REDBRICK_JPG + ')' }},
          icon: { props:{ src: BRICKS_PNG }},
          p: { props: { text: 'Where traditional Georgian old style meets modernity!' }},
          title: { props: { text: 'red brick' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')' }},
          icon: { props: { src: SOFA_PNG }},
          p: { props: { text: 'Make yourself comfortable on yellow couch' }},
          title: { props: { text: 'yellow couch' } }
        },
        {
          backImage: { props: { backgroundImage: 'url(' + GREENFOREST_JPG + ')' }},
          icon: { props: { src: LEAF_PNG }},
          p: { props: { text: 'Timeless and elegant, yet modern and fresh, green is your choice!' }},
          title: { props: { text: 'green forest' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + RETRO_JPG + ')' }},
          icon: { props: { src: VINYL_PNG }},
          p: { props: { text: 'Where contemporary design combine with traditional architecture.' }},
          title: { props: { text: 'retro' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + BLUE_LAGOON_JPG + ')' }},
          icon: { props: { src: LAGOON_PNG }},
          p: { props: { text: 'Gentle blue brings you balance and inner peace.' }},
          title: { props: { text: 'blue lagoon' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + QVEVRI_TAB_JPG + ')' }},
          icon: { props: { src: QVEVRI_PNG }},
          p: { props: { text: 'Where contemporary design combine with traditional architecture.' }},
          title: { props: { text: 'qvevri' }}
        },
        {
          on: { click: (event, element, state) => { element.style({ pointerEvents: 'none'}) } },
          props: { '@minTabletL':{':hover > p': { opacity: '.6'}}},
          backImage: { },
          icon: { props: { src: MOON_PNG, opacity: '.6'}},
          p: { props: { text: 'coming soon' }},
          title: { props: { text: 'night sky' }}
        }
      ]
    }
}