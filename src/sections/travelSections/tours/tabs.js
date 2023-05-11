'use strict'

import { Flex } from 'smbls'

import { RoomTourTabs } from '../../../compositions'

import DIAMOND_PNG from '../../../assets/icons/diamond.png'
import TREE_PNG from '../../../assets/icons/tree.png'
import MOUNTAIN_PNG from '../../../assets/icons/mountain.png'
import HIKING_PNG from '../../../assets/icons/hiking.png'
import CUP_PNG from '../../../assets/icons/glass.png'
import PIN_PNG from '../../../assets/icons/location.png'


import TBILISI_JPG from '../../../assets/images/travel/tbilisi2.jpg'
import STANDART_JPG from '../../../assets/images/travel/standart.jpg'
import CAUCASUS_JPG from '../../../assets/images/travel/caucasus.jpg'
import EXCLUSIVE_JPG from '../../../assets/images/travel/exclusive.jpg'
import WINE_JPG from '../../../assets/images/travel/wine.jpg'
import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament.png'
import { backgroundPosition } from "../../../animations"

// function sideScroll (element, direction, speed, distance, step) {
//   var scrollAmount = 0
//   var slideTimer = setInterval(function () {
//     if (direction === 'left') {
//       element.scrollLeft -= step
//     } else {
//       element.scrollLeft += step
//     }
//     scrollAmount += step
//     if (scrollAmount >= distance) {
//       window.clearInterval(slideTimer)
//     }
//   }, speed)
// }

// const navArrows = {
//   extend: NavArrowsCream,
//   ...[
//     {
//       on: {
//         click: (event, element, state) => {
//           const content = document.getElementById('tabsContent')
//           sideScroll(content, 'left', 10, 350, 10)
//         }
//       }
//     },

//     {
//       on: {
//         click: (event, element, state) => {
//           // const { tabs } = element.parent.parent.parent.content
//           const content = document.getElementById('tabsContent')
//           sideScroll(content, 'right', 10, 350, 10)
//         }
//       }
//     }
//   ]
// }


const props = {
  flow: 'column',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  ':after': {
    background: 'radial-gradient(rgba(0, 47, 57, .45), rgba(0, 47, 57, .8), rgba(0, 47, 57, .97), rgba(0, 47, 57, 1))',
    '@maxTabletL': {
      background: 'radial-gradient(rgba(2, 64, 77, .45), rgba(2, 64, 77, .8), rgba(2, 64, 77, .97), rgba(2, 64, 77, 1))',
    }
  },
  title: {
    text: 'tours',
    top: 'D',
    right: 'E',
    zIndex: '10',
    color: 'orange',
    fontSize: 'F',
    textTransform: 'uppercase'
  },
  contentContainer: {
    width: '100%',
    padding: 'F -',
    content: {
      flow: 'column',
      gap: 'D',
      minWidth: '45%',
      childProps: {
        width: 'G',
        minHeight: 'H',
        flex: '1',
        padding: 'D -',
        ':nth-child(odd)': { alignSelf: 'flex-start' },
        ':nth-child(even)': { alignSelf: 'flex-end' },
        style: {
          boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
        },
        '@minTabletL': {
          transition: 'min-height 1s ease',
          ':hover': { minHeight: 'H1' }
        },
        ':after': { background: 'naviBlue .5'}
      }
    }
  }
}

export const tabs = {
  extend: RoomTourTabs,
  props,

  title: {},
  contentContainer: {
    content: {
      childExtend: { p: null },
      ...[
        {
          backImage: { props: { backgroundImage: 'url(' + TBILISI_JPG + ')' }},
          icon: { props: { src: PIN_PNG, boxSize: 'C B1' } },
          title: { props: { text: 'daily' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + STANDART_JPG + ')' }},
          icon: { props:{ src: TREE_PNG, boxSize: 'C B2' }},
          title: { props: { text: 'standard' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + CAUCASUS_JPG + ')' }},
          icon: { props: { src: MOUNTAIN_PNG, boxSize: 'B2 C' }},
          title: { props: { text: 'caucasus' } }
        },
        {
          backImage: { props: { backgroundImage: 'url(' + EXCLUSIVE_JPG + ')' }},
          icon: { props: { src: DIAMOND_PNG, boxSize: 'C C' }},
          title: { props: { text: 'exclusive' }}
        },
        {
          backImage: { props: { backgroundImage: 'url(' + WINE_JPG + ')' }},
          icon: { props: { src: CUP_PNG, boxSize: 'C B1'}},
          title: {
            props: {
              text: 'wine & gastronomy',
              '@maxTabletL': {
                margin: '- - -A -',
                maxWidth: 'E'
              }
            }
          }
        },
        {
          backImage: { props: { backgroundImage: 'url(' + ADVENTURE_JPG + ')' }},
          icon: { props: { src: HIKING_PNG, boxSize: 'C B1' }},
          title: { props: { text: 'adventure' }}
        }
      ]
    }
  }
}