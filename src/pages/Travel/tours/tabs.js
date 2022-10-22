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
  gap: 'A2',
  style: { overflowX: 'hidden' },
  '@tabletM': { padding: '- D' },
  '@mobileS': { padding: '- B' },

  title: {
    borderBottom: '1.5px solid #1e2831',
    justifyContent: 'space-between',
    padding: '- - Y -',
    width: '50%',
    alignSelf: 'flex-end',
    margin: '- E - -',
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
      color: 'blue3',
      fontSize: 'B',
      fontWeight: '500',
      textTransform: 'uppercase',
      textAlign: 'right'
    },

    scrollTitle: {
      display: 'none',
      '@tabletM': { display: 'flex' }
    }

  },

  content: {
    gap: 'X',
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

          title: { text: 'daily tours' }
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
        props: { title: { text: 'standard tours' } },
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
            borderTopRightRadius: `${200 / 16}em`,
            borderBottomRightRadius: `${200 / 16}em`,
            '@media only screen and (max-width: 1366px)': {
              borderTopRightRadius: `0`,
              borderBottomRightRadius: `0`
            }
          },
          title: { text: 'Georgia & Armenia tour' }
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
