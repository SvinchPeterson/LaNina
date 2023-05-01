'use strict'

import { Flex } from 'smbls'

import { RoomTab } from '../../../../components'

import { opacity } from '../../../../animations'

import {
  tabBallerina, tabRedBrick, tabYellowCouch,
  tabGreenForest, tabRetro, tabBlueLagoon,
  tabQvevri
}
from './tabs'

import BALLERINA_JPG from '../../../../assets/images/residence/rooms/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../../../assets/images/residence/rooms/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../../../assets/images/residence/rooms/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../../../assets/images/residence/rooms/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../../../assets/images/residence/rooms/retro/retroTab.jpg'
import BLUE_LAGOON_JPG from '../../../../assets/images/residence/rooms/blueLagoon/blueLagoonTab.jpeg'
import QVEVRI_JPG from '../../../../assets/images/residence/rooms/qvevri/qvevriTab.jpeg'

import DRESS_PNG from '../../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../../assets/icons/qvevri.png'

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  position: 'relative',
  padding: 'E3 -',
  width: `100%`,
  flow: 'column',
  align: 'center center',
  overflow: 'hidden',
  backgroundColor: 'orange',
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@minTabletL': { style: { backgroundAttachment: 'fixed' } },
  '@maxTabletL': {
    backgroundImage: 'none',
    backgroundColor: 'naviGreenLight',
    fontSize: `${15 / 16}em`

  },
  '@maxHeightS': { padding: 'C -' },

  imageBackground: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(1, 57, 57, .35), rgba(1, 57, 57, .95), rgba(1, 57, 57, 1))',
    '@maxTabletL': {
      background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, 1))'
    }
  },
  tabsContainer: {
    padding: 'E -',
    minWidth: `${700 / 16}em`,
    maxWidth: `${1440 / 16}em`,
    flow: 'column',
    gap: 'Z',
    overflow: 'hidden',
    align: 'space-between center',
    '@maxTabletS': {
      maxWidth: '100%',
      gap: '0',
      style: { overflowX: 'auto'},
      padding: '- C',
    },
    '@maxMobileL': {
      minWidth: `100%`,
      padding: 'E2 0',
      gap: 'E',
    },
    style: {
      '> a:nth-child(odd)': {
        '@media only screen and (max-width: 768px)': {
          borderRadius: '0 200px 200px 0'

        }
      },
      '> a:nth-child(even)': {
        alignSelf: 'flex-end',
        '@media only screen and (max-width: 768px)': {
          borderRadius: '200px 0 0 200px'
        }
      },
    },
    childProps: {
      border: 'solid, naviGreenDark 0',
      borderWidth: `A`,
      style: {
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      }
    }
  }
}

export const tabs = {
  extend: Flex,
  props,

  imageBackground: {},

  tabsContainer: {
    tag: 'nav',
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
      },
    },
    ...[
      {
        props: {
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)), url(' + BALLERINA_JPG + ')' } }
          },

          icon: { src: DRESS_PNG },
          p: {
            text: 'Enjoy special atmosphere, delicate and airy',
            maxWidth: 'F2'
          },
          title: { text: 'ballerina' }
        },
      },

      {
        props: {
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)),url(' + REDBRICK_JPG + ')' } }
          },
          icon: { src: BRICKS_PNG },
          p: { text: 'Where traditional Georgian old style meets modernity!' },
          title: { text: 'red brick' }
        }
      },

      {
        props: {
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)),url(' + YELLOWCOUCH_JPG + ')' } }
          },
          icon: { src: SOFA_PNG },
          p: {
            maxWidth: 'F2',
            text: 'Make yourself comfortable on yellow couch'
          },
          title: { text: 'yellow couch' }
        }
      },

      {
        props: {
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)),url(' + GREENFOREST_JPG + ')' } }
          },
          icon: { src: LEAF_PNG },
          p: { text: 'Timeless and elegant, yet modern and fresh, green is your choice!' },
          title: { text: 'green forest' }
        }
      },

      {
        props: {
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)),url(' + RETRO_JPG + ')' } },
          },
          icon: { src: VINYL_PNG },
          p: { text: 'Where contemporary design combine with traditional architecture.' },
          title: { text: 'retro' }
        }
      },

      {
        props: {
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)),url(' + BLUE_LAGOON_JPG + ')' } }
          },
          icon: { src: LAGOON_PNG },
          p: { text: 'Gentle blue brings you balance and inner peace.' },
          title: { text: 'blue lagoon' }
        }
      },

      {
        props: {
          href: '#roomRetro',
          imageContainer: {
            image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .5)),url(' + QVEVRI_JPG + ')' } }
          },
          icon: { src: QVEVRI_PNG },
          p: { text: 'Where contemporary design combine with traditional architecture.' },
          title: { text: 'qvevri' }
        }
      }
    ]
  }
}
