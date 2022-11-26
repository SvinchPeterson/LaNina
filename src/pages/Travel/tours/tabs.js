'use strict'
'use strict'

import { Flex } from 'smbls'

import { TourTab, NavHorizontalArrowsBlack } from '../../../components'

import TBILISI_JPG from '../../../assets/images/travel/daily.jpg'
import STANDART_JPG from '../../../assets/images/travel/standart.jpg'
import CAUCASUS_JPG from '../../../assets/images/travel/caucasus.jpg'
import EXCLUSIVE_JPG from '../../../assets/images/travel/exclusive.jpg'
import WINE_JPG from '../../../assets/images/travel/wine.jpg'
import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'

const props = {
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  flow: 'column',
  gap: 'A2',
  padding: '- F',
  style: { overflowX: 'hidden' },
  '@tabletM': { padding: '- D2' },
  '@mobileL': { padding: '- C' },
  '@mobileS': { padding: '- A' },
  '@mobileXS': { padding: '- Y1' },

  title: {
    fontSize: 'D',
    borderBottom: '1px solid black',
    align: 'center space-between',
    padding: '- - Z -',
    '@mobileM': { fontSize: 'C' },
    h5: {
      text: 'tours',
      fontSize: 'A',
      fontWeight: '500',
      textTransform: 'uppercase',
      style: { letterSpacing: '1px' }
    },
    arrows: {
      gap: 'A1',
      zIndex: '100',
      ':after': { display: 'none' },
      childProps: {
        boxSize: 'D D',
        borderRadius: '100%',
        border: '1.5px solid gray',
        '@mobileM': {
          boxSize: 'C2 C2'
        },
        icon: {
          fontSize: 'V'
        }
      }
    }

  },

  content: {
    overflow: 'hidden',
    position: 'relative',
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    tabs: {
      gap: 'Y2',
      maxWidth: '100%',
      style: {
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        '::-webkit-scrollbar': { display: 'none' }
      }
    }
  }
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
              const { tabs } = element.parent.parent.parent.content
              tabs.node.scrollBy({
                top: 0,
                left: -308
              })
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              const { tabs } = element.parent.parent.parent.content
              tabs.node.scrollBy({
                top: 0,
                left: 308
              })
            }
          }
        }
      ]
    }
  },

  content: {
    tabs: {
      extend: Flex,

      childExtend: TourTab,
      ...[
        {
          props: {
            backgroundImage: 'url(' + TBILISI_JPG + ')',
            title: { text: 'daily' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeDailyTour: true, activeFullDescription: false })
            }
          }
        },

        {
          props: {
            title: { text: 'standard' },
            backgroundImage: 'url(' + STANDART_JPG + ')'
          },
          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeStandardTour: true, activeFullDescription: false })
            }
          }
        },

        {
          props: {
            backgroundImage: 'url(' + CAUCASUS_JPG + ')',
            title: { text: 'caucasus' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeArmeniaTour: true, activeFullDescription: false })
            }
          }
        },

        {
          props: {
            backgroundImage: 'url(' + EXCLUSIVE_JPG + ')',
            ':after': { background: 'blue3 .7' },
            title: { text: 'exclusive' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeExclusiveTour: true, activeFullDescription: false })
            }
          }
        },

        {
          props: {
            backgroundImage: 'url(' + WINE_JPG + ')',
            title: { text: 'wine & food' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeArmeniaTour: true, activeFullDescription: false })
            }
          }
        },

        {
          props: {
            backgroundImage: 'url(' + ADVENTURE_JPG + ')',
            title: { text: 'adventure' }
          },

          on: {
            click: (event, element, state) => {
              state.update({ activeTour: true, activeAdventureTour: true, activeFullDescription: false })
            }
          }
        }
      ]
    }
  }
}
