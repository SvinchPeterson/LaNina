'use strict'
'use strict'

import { Flex } from 'smbls'

import { TourTab, ScrollTitle } from '../../../components'

const scrollTitle = {
  extend: ScrollTitle
}

const props = {
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  flow: 'column',
  gap: 'A',
  style: { overflowX: 'hidden' },
  '@tabletM': { padding: '- D' },
  '@mobileS': { padding: '- B' },

  title: {
    borderBottom: '.8px solid black',
    justifyContent: 'space-between',
    padding: '- - Y -',
    width: '50%',
    alignSelf: 'flex-end',
    margin: '- D1 - -',
    '@tabletM': {
      alignSelf: 'flex-start',
      textAlign: 'left',
      margin: '- - - A1'
    },
    '@mobileL': {
      width: '90%',
      margin: '0',
      alignSelf: 'center'
    },

    h5: {
      text: 'tours',
      fontSize: 'A',
      fontWeight: '500',
      textTransform: 'uppercase',
      textAlign: 'right',
      style: { letterSpacing: '1px' }
    },

    scrollTitle: {
      display: 'none',
      '@tabletM': { display: 'flex' }
    }

  },

  content: {
    gap: '0',
    style: {
      overflowX: 'auto',
      scrollBehavior: 'smooth',
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
    scrollTitle
  },

  content: {
    extend: Flex,

    childExtend: TourTab,
    ...[
      {
        props: {
          style: {
            borderTopLeftRadius: `${200 / 16}em`,
            borderBottomLeftRadius: `${200 / 16}em`,
            '@media only screen and (max-width: 1366px)': {
              borderTopLeftRadius: `0`,
              borderBottomLeftRadius: `0`
            }
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
        props: { title: { text: 'standard' } },
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
            '@media only screen and (max-width: 1366px)': {
              borderTopRightRadius: `0`,
              borderBottomRightRadius: `0`
            }
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
          style: {
            borderTopRightRadius: `${200 / 16}em`,
            borderBottomRightRadius: `${200 / 16}em`,
            '@media only screen and (max-width: 1366px)': {
              borderTopRightRadius: `0`,
              borderBottomRightRadius: `0`
            }
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
      }
    ]
  }
}
