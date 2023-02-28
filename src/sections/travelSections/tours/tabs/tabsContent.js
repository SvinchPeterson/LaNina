'use strict'

import { Flex } from 'smbls'

import { slideHide } from '../../../../animations'

import { TourTab } from '../../../../components'

import TBILISI_JPG from '../../../../assets/images/travel/tbilisi2.jpg'
import STANDART_JPG from '../../../../assets/images/travel/standart.jpg'
import CAUCASUS_JPG from '../../../../assets/images/travel/caucasus.jpg'
import EXCLUSIVE_JPG from '../../../../assets/images/travel/exclusive.jpg'
import WINE_JPG from '../../../../assets/images/travel/wine.jpg'
import ADVENTURE_JPG from '../../../../assets/images/travel/adventure.jpg'

const props = {
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
}

export const tabsContent = {
  extend: Flex,
  props,
  attr: { id: 'tabsContent' },

  content: {
    extend: Flex,
    childExtend: TourTab,
    ...[
      {
        props: {
          content: {
            title: { text: 'daily' },
            image: {
              backgroundImage: 'url(' + TBILISI_JPG + ')'
            }

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
          content: {
            title: { text: 'standard' },
            image: {
              backgroundImage: 'url(' + STANDART_JPG + ')'

            }
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
          content: {
            title: { text: 'caucasus' },
            image: {
              backgroundImage: 'url(' + CAUCASUS_JPG + ')'
            }
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
          content: {
            title: { text: 'exclusive' },
            image: {
              backgroundImage: 'url(' + EXCLUSIVE_JPG + ')'
            }
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
          content: {
            title: { text: 'wine & gastronomy' },
            image: {
              backgroundImage: 'url(' + WINE_JPG + ')'
            }

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
          content: {
            title: { text: 'adventure' },
            image: {
              backgroundImage: 'url(' + ADVENTURE_JPG + ')'
            }
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
          content: {
            title: { text: 'daily' },
            image: {
              backgroundImage: 'url(' + TBILISI_JPG + ')'
            }

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
          content: {
            title: { text: 'standard' },
            image: {
              backgroundImage: 'url(' + STANDART_JPG + ')'
            }
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
          content: {
            title: { text: 'caucasus' },
            image: {
              backgroundImage: 'url(' + CAUCASUS_JPG + ')'

            }
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
          content: {
            title: { text: 'exclusive' },
            image: {
              backgroundImage: 'url(' + EXCLUSIVE_JPG + ')'

            }
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
          content: {
            title: { text: 'wine & gastronomy' },
            image: {
              backgroundImage: 'url(' + WINE_JPG + ')'

            }

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
          content: {
            title: { text: 'adventure' },
            image: {
              backgroundImage: 'url(' + ADVENTURE_JPG + ')'
            }
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
