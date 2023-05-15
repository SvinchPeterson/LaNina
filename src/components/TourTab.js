'use strict'

import { Flex } from 'smbls'

const props = {
  maxWidth: 'G1',
  flow: 'column',
  align: 'center center',
  border: 'solid, transparent',
  borderWidth: `0 20px 20px 20px`,
  '@maxHeightN': { height: '55%' },
  '@maxHeightS': { height: 'G2' },
  '@maxHeightXS': { height: 'G1' },

  content: {
    flow: 'column',
    width: 'G',
    gap: 'B2',
    padding: 'C -',
    align: 'center space-between',
    height: '100%',
    round: '0 0 F F',
    cursor: 'pointer',
    position: 'relative',
    style: {
      boxShadow: `rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
    },
    '@minTabletL': {
      ':hover > h3': {
        opacity: '1'
      },
      ':hover > div': {
        style: { backgroundPosition: 'top left' }
      },
      ':hover > div:after': {
        background: 'naviBlue .25'
      }
    },
    title: {
      textAlign: 'center',
      fontSize: 'Z',
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      color: 'cream',
      opacity: '.75',
      letterSpacing: '0px',
      fontWeight: '700',
      padding: '- - - -',
      '@minTabletL': { transition: 'opacity .6s ease-in-out, transform .6s ease-in-out' }
    },
    image: {
      boxSize: 'F F',
      round: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden',
      '@minTabletL': { transition: 'background-position 1s ease-in-out' },
      style: {
        bacgroundRepeat: 'no-repeat',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: '100% 100%',
        background: 'naviBlue .5',
        transition: 'background .6s ease-in-out'
      }
    }
  }
}

export const TourTab = {
  extend: Flex,
  props,
  content: {
    extend: Flex,
    title: {tag: 'h3'},
    image: {}
  }
}