'use strict'
'use strict'

import { Flex } from 'smbls'

import { slideHide, opacityTransforms2, flexFlow } from '../../../animations'

import { TourTab, NavHorizontalArrowsBlack } from '../../../components'

import TBILISI_JPG from '../../../assets/images/travel/daily.jpg'
import STANDART_JPG from '../../../assets/images/travel/standart.jpg'
import CAUCASUS_JPG from '../../../assets/images/travel/caucasus.jpg'
import EXCLUSIVE_JPG from '../../../assets/images/travel/exclusive.jpg'
import WINE_JPG from '../../../assets/images/travel/wine.jpg'
import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'

const props = {
  position: 'relative',
  maxWidth: '70%',
  height: 'fit-content',
  flow: 'column',
  gap: 'A',
  padding: '- -',
  style: { overflowX: 'hidden' },
  // '@tabletM': { padding: '- D2' },
  // '@mobileL': { padding: '- C' },
  // '@mobileS': { padding: '- A' },
  // '@mobileXS': { padding: '- Y1' },

  ':before': {
    content: '""',
    top: '0',
    left: '0',
    boxSize: '100% 300px',
    style: { pointerEvents: 'none' },
    position: 'absolute',
    zIndex: '10',
    background: 'linear-gradient(to right, rgba(229, 249, 252,1) 0%,rgba(229, 249, 252,0) 100%)'
  },
  ':after': {
    content: '""',
    boxSize: '100% 300px',
    style: { pointerEvents: 'none' },
    position: 'absolute',
    zIndex: '',
    right: '0',
    top: '0',
    background: 'linear-gradient(to left, rgba(229, 249, 252,1) 0%,rgba(229, 249, 252,0) 100%)'
  },

  title: {
    fontSize: 'D',
    lineHeight: '0',
    borderBottom: '1px solid silver',
    position: 'relative',
    align: 'flex-end space-between',
    padding: '- D Z D',
    '@mobileM': { fontSize: 'C' },
    h5: {
      text: 'tours',
      fontSize: 'A',
      fontWeight: '500',
      textTransform: 'uppercase',
      zIndex: '55',
      style: { letterSpacing: '0px' }
    },
    arrows: {
      gap: 'A1',
      zIndex: '100',
      // display: 'none',
      ':after': { display: 'none' },
      childProps: {
        boxSize: 'D D',
        zIndex: '55',
        borderRadius: '100%',
        border: '1.5px solid gray',
        arrow: { fontSize: 'A' },
        icon: {
          fontSize: ''
        }
      }
    }
  },

  content: {
    minWidth: 'calc(300 * 12)',
    position: 'relative',
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    gap: '',
    width: 'auto',
    style: { overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' } },

    tabs: {
      width: '100%',
      gap: '',
      style: {
        // overflowX: 'auto'
        animationName: slideHide,
        animationDuration: '30s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }
    }
  }
}

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

export const tabs = {
  extend: Flex,
  props,

  title: {
    extend: Flex,
    h5: {},
    arrows: {
      extend: NavHorizontalArrowsBlack,
      ...[
        {
          on: {
            click: (event, element, state) => {
              const content = document.getElementById('content')
              sideScroll(content, 'left', 10, 300, 10)
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              // const { tabs } = element.parent.parent.parent.content
              const content = document.getElementById('content')
              sideScroll(content, 'right', 10, 300, 10)
            }
          }
        }
      ]
    }
  },

  content: {
    extend: Flex,
    attr: { id: 'content' },
    tabs: {
      extend: Flex,
      childExtend: TourTab,
      ...[
        {
          props: {

            image: {
              backgroundImage: 'url(' + TBILISI_JPG + ')',
              title: { text: 'daily' }
            }

          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeDailyTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + STANDART_JPG + ')',
              title: { text: 'standard' }
            }
          },
          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeStandardTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + CAUCASUS_JPG + ')',
              title: { text: 'caucasus' }
            }

          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeArmeniaTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + EXCLUSIVE_JPG + ')',
              title: { text: 'exclusive', color: 'orange3' }
            },
            ':after': { background: 'blue3 .7' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeExclusiveTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + WINE_JPG + ')',
              title: { text: 'wine & gastronomy' }
            }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeArmeniaTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + ADVENTURE_JPG + ')',
              title: { text: 'adventure' }
            }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeAdventureTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + TBILISI_JPG + ')',
              title: { text: 'daily' }
            }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeDailyTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + STANDART_JPG + ')',
              title: { text: 'standard' }
            }
          },
          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeStandardTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + CAUCASUS_JPG + ')',
              title: { text: 'caucasus' }
            }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeArmeniaTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + EXCLUSIVE_JPG + ')',
              title: { text: 'exclusive', color: 'gold' }
            },
            ':after': { background: 'blue3 .7' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeExclusiveTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + WINE_JPG + ')',
              title: { text: 'wine & gastronomy' }
            }

          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeArmeniaTour: true })
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + ADVENTURE_JPG + ')',
              title: { text: 'adventure' }
            }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeAdventureTour: true })
            }
          }
        }
      ]
    }
  }
}
