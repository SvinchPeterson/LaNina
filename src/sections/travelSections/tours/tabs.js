'use strict'

import { Flex } from 'smbls'

import { slideHide } from '../../../animations'

import { TourTab, NavArrowsCream, ScrollTitle3 } from '../../../components'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament.png'
import TBILISI_JPG from '../../../assets/images/travel/tbilisi2.jpg'
import STANDART_JPG from '../../../assets/images/travel/standart.jpg'
import CAUCASUS_JPG from '../../../assets/images/travel/caucasus.jpg'
import EXCLUSIVE_JPG from '../../../assets/images/travel/exclusive.jpg'
import WINE_JPG from '../../../assets/images/travel/wine.jpg'
import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'

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
          sideScroll(content, 'left', 10, 350, 10)
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          // const { tabs } = element.parent.parent.parent.content
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'right', 10, 350, 10)
        }
      }
    }
  ]
}

const content = {
  extend: Flex,
  attr: { id: 'tabsContent' },

  content: {
    extend: Flex,
    childExtend: TourTab,
    ...[
      {
        props: {
          href: '#tbilisi',
          content: {
            title: { text: 'daily' },
            image: {
              backgroundImage: 'url(' + TBILISI_JPG + ')'
            }

          }

        },

        on: {
          click: (event, element, state) => {
            state.update({ activeToursPopUp: true, activeDaily: true })
          }
        }
      },

      {
        props: {
          href: '#capital',
          content: {
            title: { text: 'standard' },
            image: {
              backgroundImage: 'url(' + STANDART_JPG + ')'

            }
          }
        },
        on: {
          click: (event, element, state) => {
            state.update({ activeToursPopUp: true, activeStandard: true })
          }
        }
      },

      {
        props: {
          content: {
            title: { text: 'caucasus' },
            image: {
              backgroundImage: 'url(' + CAUCASUS_JPG + ')'
            }
          }
        },

        on: {
          click: (event, element, state) => {
            state.update({ activeToursPopUp: true, activeCaucasus: true })
          }
        }
      },

      {
        props: {
          content: {
            background: 'linear-gradient(rgba(220, 187, 140, 0) 30%, rgba(220, 187, 140, .25) 70%)',
            title: { text: 'exclusive' },
            image: {
              backgroundImage: 'url(' + EXCLUSIVE_JPG + ')'
            }
          },
          ':after': { background: 'blue3 .7' }
        },

        on: {
          click: (event, element, state) => {
            state.update({ activeToursPopUp: true, activeExclusive: true })
          }
        }
      },

      {
        props: {
          content: {
            title: { text: 'wine & gastronomy' },
            image: {
              backgroundImage: 'url(' + WINE_JPG + ')'
            }

          }

        },

        on: {
          click: (event, element, state) => {
            state.update({ activeToursPopUp: true, activeWineGastronomy: true })
          }
        }
      },

      {
        props: {
          content: {
            title: { text: 'adventure' },
            image: {
              backgroundImage: 'url(' + ADVENTURE_JPG + ')'
            }
          }
        },

        on: {
          click: (event, element, state) => {
            state.update({ activeToursPopUp: true, activeAdventure: true })
          }
        }
      }
    ]
  }

}

const props = {
  position: 'relative',
  height: 'fit-content',
  flow: 'column',
  align: 'center center',
  gap: '0',
  padding: 'D - C -',
  boxSizing: 'border-box',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  '@minTabletL': { style: { backgroundAttachment: 'fixed' } },
  '@maxTabletM': {
    padding: 'C1 - C -',
  },
  '@maxMobileM': {
    padding: 'C2 - A -',
  },

  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 47, 57, .7),rgba(0, 47, 57, 1), rgba(0, 47, 57, 1))'

  },

  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% G',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    // background: 'red',
    zIndex: '2',
    background: 'linear-gradient(to right, rgba(0, 47, 57, 1) 0%,rgba(0, 47, 57, 0) 100%)',
    '@maxMobileL': { boxSize: '100% D' }
  },

  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% G',
    top: '0',
    right: '0',
    zIndex: '2',
    pointerEvents: 'none',
    background: 'linear-gradient(to left, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)',
    '@maxMobileL': { boxSize: '100% D' }
  },

  content: {
    maxWidth: '100%',
    position: 'relative',
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    // border: '10px solid red',
    style: { overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' } },

    content: {
      padding: '- D2',
      '@maxTabletS': { padding: '- C' },
      '@maxMobileM': { padding: '- A' },
      style: {
        // animationName: slideHide,
        animationDuration: '30s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }
    }
  },

  navArrows: {
    '@maxMobileL': { display: 'none' },
    zIndex: '5',
    alignSelf: 'center',
    childProps: {
      border: 'none'
    }
  },

  scroll: {
    '@minMobileL': { display: 'none' },
    zIndex: '5',
    color: 'cream',
    padding: 'B A - -',
    alignSelf: 'flex-end'
  }
}

export const tabs = {
  extend: Flex,
  props,
  imageBackground: {},
  content,
  navArrows,
  scroll: { extend: ScrollTitle3 }
}
