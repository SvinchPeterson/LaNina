'use strict'

import { Flex } from 'smbls'

import { RoomTourTab } from "../components"

const props = {
  width: '100%',
  flow: 'column',
  align: 'center center',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'orange',
  '@minTabletL': { style: { backgroundAttachment: 'fixed' } },
  '@maxTabletL': {
    backgroundImage: 'none',
    background: 'naviGreenLight',
    fontSize: `${14 / 16}em`
  },
  ':after': {
    content: '""',
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2'
  },

  title: {
    fontSize: 'D',
    textTransform: 'uppercase',
    position: 'absolute',
    zIndex: '3',
    top: 'E1',
    right: 'E',
    letterSpacing: '3px',
    color: 'naviGreenLight',
    '@maxTabletS': { right: 'D'},
    '@maxMobileL': {
      fontSize: 'C',
      top: 'D1',
      right: 'B'
    }
  },

  content: {
    minWidth: '50%',
    flow: 'column',
    justifyContent: 'center',
    padding: 'F1 -',
    '@minScreenO': { minWidth: '45%'},
    '@maxTabletM': { minWidth: '55%'},
    '@maxTabletS': { minWidth: '65%'},
    '@maxMobileL': {
      minWidth: '100%',
      gap: 'E1'
    },
    childProps: {
      zIndex: '3',
      '@maxMobileL': {
        ':nth-child(odd)': {
          borderWidth: `A A A B`
        },
        ':nth-child(even)': {
          borderWidth: `A B A A`
        }
      },

      ':nth-child(even)': {
        alignSelf: 'flex-end'
      }
    }
  }
}

export const RoomTourTabs = {
  extend: Flex,
  props,
  title: { tag: 'h5' },
  content: {
    extend: Flex,
    childExtend: {
      extend: RoomTourTab,
      on: {
        click: (event, element, state) => {
          state.update({
            activePopUp: true,
            activePopUpContent: parseInt(element.key)
          })
        }
      }
    }
  }
}