'use strict'
import { Flex } from 'smbls'

import { RoomTourTabs } from '../../../compositions'


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

import ORNAMENT_PNG from '../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  ':after': {
    background: 'radial-gradient(rgba(1, 57, 57, .45), rgba(1, 57, 57, .8), rgba(1, 57, 57, 1))',
    '@maxTabletL': {
      background: 'radial-gradient(rgba(0, 102, 102, .45), rgba(0, 102, 102, .8), rgba(0, 102, 102, .97), rgba(0, 102, 102, 1))',
    }
  },
  boxSizing: 'border-box',
  '@maxTabletL': {flow: 'column'},
  title: {
    position: 'initial',
    text: 'apartments',
    zIndex: '10',
    align: 'center center',
    border: 'solid, transparent',
    borderWidth: '0 0 5px 0',
    padding: 'E2 - E2 -',
    textTransform: 'uppercase',
    fontSize: `${12 / 16}em`,
    letterSpacing: '8px',
    color: 'cream',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)'
    },
    '@maxTabletL': {
      padding: '0',
      position: 'absolute',
      fontSize: 'F',
      top: 'D1',
      right: 'D',
      letterSpacing: '.5px',
      color: 'cream .6',
      textTransform: 'capitalize',
      style: {
        writingMode: 'initial',
        textOrientation: 'initial',
        transform: 'rotate(0)'
      }
    }
  },
  contentContainer: {
    width: 'calc(100% - 120px)',
    padding: '- F3 - D',
    boxSizing: 'border-box',
    flex: '1',
    '@maxTabletL': {
      padding: 'E1 0',
      width: '100%'
    },
    content: {
      padding: 'C2 -',
      width: '100%',
      childProps: {
        maxHeight: 'G1',
        flex: '1',
        width: 'E2',
        padding: 'B1 - A2 -',
        '@minTabletL': {
          transition: 'flex 1s ease',
          ':hover': { flex: '12' }
        },
        ':after': { background: 'naviGreen .5'},
        backImage: {
          // border: 'solid, orange',
          // borderWidth: '1px',
          round: 'F2'
        },
        title: { whiteSpace: 'nowrap' },
        icon: {
          boxSize: 'A1 ',
          '@maxTabletL': {
            boxSize: 'B '
          }
        }
      }
    }
  }
}

export const tabs = {
  extend: RoomTourTabs,
  props,

  title: { extend: Flex },
  contentContainer: {
    content: {
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
        }
      ]
    }
  }
}