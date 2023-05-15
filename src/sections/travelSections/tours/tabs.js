'use strict'

import { Flex } from 'smbls'

import { TourTab, NavArrowsCream } from '../../../components'
import { backgroundPosition2 } from '../../../animations'


function sideScroll (element, direction, speed, distance, step) {
  var scrollAmount = 0
  var slideTimer = setInterval(function () {
    if (direction === 'left') {
      element.scrollLeft -= step
    } else {
      element.scrollLeft += step
    }
    scrollAmount += step
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer)
    }
  }, speed)
}

const navArrows = {
  extend: NavArrowsCream,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'left', 30, 300, 30)
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'right', 30, 300, 30)
        }
      }
    }
  ]
}


import TBILISI_JPG from '../../../assets/images/travel/tbilisi2.jpg'
import STANDART_JPG from '../../../assets/images/travel/standart.jpg'
import CAUCASUS_JPG from '../../../assets/images/travel/caucasus.jpg'
import EXCLUSIVE_JPG from '../../../assets/images/travel/exclusive.jpg'
import WINE_JPG from '../../../assets/images/travel/wine.jpg'
import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament.png'


const props = {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'orange',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  scrollBehavior: 'smooth',
  '@minTabletL': { style: { backgroundAttachment: 'fixed' }},
  '@maxHeightN': { minHeight: '100%'},
  style: {
    animationName: backgroundPosition2,
    animatonTimingFunction: 'linear',
    animationDuration: '20s',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite'
  },
  ':before': {
    content: '""',
    boxSize: '100% G',
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'linear-gradient(to left,  rgba(0, 47, 57, 1) 5%, rgba(0, 47, 57, 0) 95%)',
    zIndex: '30',
    pointerEvents: 'none',
    '@maxTabletM': { boxSize: '- E'},
    '@maxMobileL': {
      boxSize: '100% D'
    }
  },
  ':after': {
    content: '""',
    boxSize: '100% G',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'red',
    background: 'linear-gradient(to right, rgba(0, 47, 57, 1) 5%, rgba(0, 47, 57, 0) 95%)',
    zIndex: '30',
    pointerEvents: 'none',
    '@maxTabletM': { boxSize: '- E'},
    '@maxMobileL': {
      boxSize: '100% D'
    }
  },

  backColor: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 47, 57, .45), rgba(0, 47, 57, .8), rgba(0, 47, 57, 1))'
  },

  title: {
    align: 'center center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    // textTransform: 'capitalize',
    fontSize: 'D',
    zIndex: '35',
    padding: 'B2 -',
    color: 'cream',
    fontWeight: '100',
    background: 'transparent',
    letterSpacing: '2px',
    '@maxTabletM': { padding: 'B -' },
    '@maxMobileL': { padding: 'Z -' },
    '@maxMobileS': { fontSize: 'C' },
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)'
    }
  },

  content: {
    flex: '1',
    zIndex: '10',
    padding: 'D2 F2 D2 G',
    '@maxHeightN': {
      padding: '0 - 0 -',
      // padding: '0 E',
      align: 'center flex-start'
    },
    '@maxTabletM': { padding: '- F2 - E1'},
    '@maxMobileL': { padding: '- F - D2'},
    '@maxMobileS': { padding: '- C - C'},
    style: { overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' } }
  },

  navButtons: {
    position: 'absolute',
    bottom: 'A1',
    right: 'C',
    zIndex: '30',
    gap: 'Z',
    childProps: { border: 'none'},
    '@maxHeightN': {
      bottom: 'B2',
      right: 'initial',
      left: '50%',
      transform: 'translate(-50%, -50%)'
      // transform: 'trans'
    }
  }
}

export const tabs = {
  props,
  extend: Flex,
  backColor: {},

  title: {
    extend: Flex,
    tag: 'h2',
    text: 'tours'
  },
    content: {
      extend: Flex,
      attr: { id: 'tabsContent' },

      childExtend: {
        extend: TourTab,
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
          content: {
            title: { props: { text: 'daily' }},
            image: { props: { backgroundImage: 'url(' + TBILISI_JPG + ')' }}
          }
        },
        {
          content: {
            title: { props: { text: 'standard' }},
            image: { props: { backgroundImage: 'url(' + STANDART_JPG + ')' }}
          }
        },
        {
          content: {
            title: { props: { text: 'caucasus' }},
            image: { props: { backgroundImage: 'url(' + CAUCASUS_JPG + ')' }}
          }
        },
        {
          content: {
            title: { props: { text: 'exclusive' }},
            image: { props: { backgroundImage: 'url(' + EXCLUSIVE_JPG + ')' }}
          }
        },
        {
          content: {
            title: { props: { text: 'wine & gastronomy' }},
            image: { props: { backgroundImage: 'url(' + WINE_JPG + ')' }}
          }
        },
        {
          content: {
            title: { props: { text: 'adventure' }},
            image: { props: { backgroundImage: 'url(' + ADVENTURE_JPG + ')' }}
          }
        }
      ]
    },
    navButtons: {
      extend: navArrows
    }
}