'use strict'

import { Flex } from 'smbls'

import { TourTab } from '../../../components'

import DIAMOND_PNG from '../../../assets/icons/diamond.png'
import TREE_PNG from '../../../assets/icons/tree.png'
import MOUNTAIN_PNG from '../../../assets/icons/mountain.png'
import HIKING_PNG from '../../../assets/icons/hiking.png'
import CUP_PNG from '../../../assets/icons/glass.png'
import FLAG_PNG from '../../../assets/icons/flag.png'


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
  // backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  // ':after': {
  //   background: 'radial-gradient(rgba(0, 47, 57, .45), rgba(0, 47, 57, .8), rgba(0, 47, 57, .97), rgba(0, 47, 57, 1))'
  // }
}

export const tabs = {
  props,

  title: { text: 'tours' },
    content: {
      childExtend: TourTab,
      ...[
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        }
      ]
    }
}