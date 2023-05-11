'use strict'

import { Flex } from 'smbls'

import { RoomTourTab } from '../components'
import { backgroundPosition } from '../animations'

const props = {
  width: '100%',
  backgroundColor: 'orange',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '@minTabletL': { style: { backgroundAttachment: 'fixed' }},
  '@maxTabletL': {
    fontSize: `${14 / 16}em`,
    backgroundSize: 'contain',
    style: {
      animationName: backgroundPosition,
      animationDuration: '120s',
      animatonTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate'
    }
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0'
  },

  title: {
    position: 'absolute',
    '@maxMobileL': {
      right: 'A1'
    },
    '@maxMobileM': { top: 'C', right: 'Z2'},
  },
  contentContainer: {
    zIndex: '10',
    align: 'center center',
    boxSizing: 'border-box',
    content: {
      width: 'fit-content',
      maxWidth: '100%',
      zIndex: '4',
      '@maxTabletL': {
        flow: 'column',
        width: '55%'
      },
      '@maxTabletS': { minWidth: '65%'},
      '@maxMobileM': {
        minWidth: '100%',
        gap: 'E1'
      },
      childProps: {
        '@maxTabletL': {
          width: 'G',
          minHeight: 'H',
          badding: '0',
          align: 'center center',
          ':nth-child(odd)': { alignSelf: 'flex-start' },
          ':nth-child(even)': { alignSelf: 'flex-end' },
          style: {
            boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
          },
        },
        '@maxMobileM': {
          minWidth: '90%',
          minHeight: 'fit-content',
          padding: 'E 0',
          gap: '0'
        },

        title: {
          '@maxTabletL': {
            opacity: '1',
            position: 'absolute',
            bottom: '-C1',
            letterSpacing: '-1px',
            fontSize: 'D'
          }
        }
      }
    }
  }
}

export const RoomTourTabs = {
  extend: Flex,
  props,

  title: { tag: 'h3' },
  contentContainer: {
    extend: Flex,
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
}