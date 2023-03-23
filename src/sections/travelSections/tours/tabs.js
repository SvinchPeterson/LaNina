'use strict'

import { Flex } from 'smbls'

import { slideHide } from '../../../animations'

import { TourTab, HorArrowsCreamBor } from '../../../components'

// import { tabsContent } from './tabsContent'

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
  extend: HorArrowsCreamBor,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'left', 10, 300, 10)
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          // const { tabs } = element.parent.parent.parent.content
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'right', 10, 300, 10)
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
            state.update({ activeToursContainer: true, activeDaily: true })
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
            state.update({ activeToursContainer: true, activeStandard: true })
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
            state.update({ activeToursContainer: true, activeCaucasus: true })
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
            state.update({ activeToursContainer: true, activeExclusive: true })
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
            state.update({ activeToursContainer: true, activeWineGastronomy: true })
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
            state.update({ activeToursContainer: true, activeAdventure: true })
          }
        }
      },

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
            state.update({ activeToursContainer: true, activeDaily: true })
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
            state.update({ activeToursContainer: true, activeStandard: true })
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
            state.update({ activeToursContainer: true, activeCaucasus: true })
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
            state.update({ activeToursContainer: true, activeExclusive: true })
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
            state.update({ activeToursContainer: true, activeWineGastronomy: true })
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
            state.update({ activeToursContainer: true, activeAdventure: true })
          }
        }
      }
    ]
  }

}

const props = {
  position: 'relative',
  // maxWidth: '80%',
  height: 'fit-content',
  flow: 'column',
  gap: '0',
  style: { overflowX: 'hidden' },

  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% H1',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    // background: 'red',
    zIndex: '2',
    background: 'linear-gradient(to right, rgba(0, 47, 57, 1) 0%,rgba(0, 47, 57, 0) 100%)'
  },

  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% H',
    top: '0',
    right: '0',
    zIndex: '2',
    pointerEvents: 'none',
    background: 'linear-gradient(to left, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)'
  },

  content: {
    minWidth: 'calc(355 * 12)',
    position: 'relative',
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    gap: '',
    width: 'auto',
    style: { overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' } },

    content: {
      width: '100%',
      style: {
        animationName: slideHide,
        animationDuration: '30s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }
    }
  },

  navArrows: {
    zIndex: '5',
    alignSelf: 'center',
    padding: 'C - - -'
  }
}

export const tabs = {
  extend: Flex,
  props,
  content,
  navArrows
}
