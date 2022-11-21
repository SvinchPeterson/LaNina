'use strict'
'use strict'

import { Flex } from 'smbls'

import { TourTab, ScrollTitle, NavHorizontalArrowsBlack } from '../../../components'
const props = {
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  flow: 'column',
  gap: 'A2',
  // border: '3px solid red',
  '@tabletS': { padding: '- C' },
  '@mobileM': { padding: '- A' },
  ':before': {
    content: '""',
    boxSize: '100% 250px',
    pointerEvents: 'none',
    // display: 'none',
    // background: 'red',
    zIndex: '4',
    // background: 'linear-gradient(rgba(229, 249, 252, .8),rgba(229, 249, 252, 0) 100%)',
    background: 'linear-gradient(to left, rgba(229, 249, 252, .85) 0%,rgba(229, 249, 252, 0) 100%)',
    position: 'absolute',
    top: '0',
    right: '0',
    opacity: '1',
    '@mobileL': { boxSize: '100% 100px' },
    '@mobileM': { boxSize: '100% 50px' }
    // style: { boxShadow: '-3px 0px 40px 2px rgba(229, 249, 252, .8)' }
    // style: {
    //   transition: 'opacity .5s ease-in-out, backdrop-filter .5s ease-in-out',
    //   backdropFilter: 'blur(.5px)'
    // }
  },
  style: { overflowX: 'hidden' },
  // '@tabletM': { padding: '- D' },
  // '@mobileS': { padding: '- B' },

  title: {
    fontSize: 'D',
    borderBottom: '1px solid black',
    align: 'center space-between',
    padding: '- - Z -',
    // border: '5px solid blue',
    '@mobileM': { fontSize: 'C' },
    // width: '100%',
    // alignSelf: 'flex-end',
    // margin: '- - - -',
    // '@tabletM': {
    //   alignSelf: 'flex-start',
    //   textAlign: 'left',
    //   margin: '- - - A1'
    // },
    // '@mobileL': {
    //   width: '90%',
    //   margin: '0',
    //   alignSelf: 'center'
    // },

    h5: {
      text: 'tours',
      fontSize: 'A',
      fontWeight: '500',
      textTransform: 'uppercase',
      // textAlign: 'right',
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
        // fontSize: 'V'
      }
    }

  },

  content: {
    // border: '5px solid green',
    gap: 'Z',
    width: 'I2',
    // border: '3px solid red',
    // overflow: 'hidden',
    style: {
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      padding: '- D - D',
      '::-webkit-scrollbar': { display: 'none' }
    }
  }
}

export const tabs = {
  extend: Flex,
  props,

  title: {
    extend: Flex,
    h5: {},
    arrows: { extend: NavHorizontalArrowsBlack }
    // scrollTitle
  },

  content: {
    extend: Flex,

    childExtend: TourTab,
    ...[
      {
        props: {
          style: {
            // backgroundImage: 'url(' + TBILISI_JPG + ')'
          },

          title: { text: 'daily' }
        },

        on: {
          click: (event, element, state) => {
            state.activeTour
              ? state.update({ activeTour: false, activeDailyTour: false })
              : state.update({ activeTour: true, activeDailyTour: true })
          }
        }
      },

      {
        props: {
          title: { text: 'standard' },
          style: {
            // backgroundImage: 'url(' + USHGULI_JPG + ')'
          }
        },
        on: {
          click: (event, element, state) => {
            state.activeTour
              ? state.update({ activeTour: false, activeStandardTour: false })
              : state.update({ activeTour: true, activeStandardTour: true })
          }
        }
      },

      {
        props: {
          style: {
            // backgroundImage: 'url(' + SIGNAGI_JPG + ')'
          },
          title: { text: 'caucasus' }
        },

        on: {
          click: (event, element, state) => {
            state.activeTour
              ? state.update({ activeTour: false, activeArmeniaTour: false })
              : state.update({ activeTour: true, activeArmeniaTour: true })
          }
        }
      },

      {
        props: {
          ':after': { background: 'blue3 .7' },
          style: {

            // backgroundImage: 'url(' + USHGULI_JPG + ')'
          },
          title: { text: 'exclusive' }
        },

        on: {
          click: (event, element, state) => {
            state.activeTour
              ? state.update({ activeTour: false, activeArmeniaTour: false })
              : state.update({ activeTour: true, activeArmeniaTour: true })
          }
        }
      },

      {
        props: {
          style: {
            // backgroundImage: 'url(' + WINE_JPG + ')'
          },
          title: { text: 'wine' }
        },

        on: {
          click: (event, element, state) => {
            state.activeTour
              ? state.update({ activeTour: false, activeArmeniaTour: false })
              : state.update({ activeTour: true, activeArmeniaTour: true })
          }
        }
      }
    ]
  }
}
