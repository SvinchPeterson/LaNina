'use strict'

import { Flex } from 'smbls'

// import { tabs } from './tabs'
import { HorArrowsWhiteBor } from '../../../components'

import { tabs } from './tabs/index'

// import { toursContainer } from './toursContainer'

import ORNAMENT_JPG from '../../../assets/images/travel/ornament2.png'

const header = {
  extend: Flex,
  title: { tag: 'h3', text: 'tours' },
  navArrows: { extend: HorArrowsWhiteBor }

}

const props = {
  boxSize: '100% 100%',
  minHeight: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  align: 'center center',
  margin: 'G auto',
  position: 'relative',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  overflow: 'hidden',
  style: { backgroundAttachment: 'fixed' },
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(15, 49, 61, .7), rgba(15, 49, 61, 1), rgba(15, 49, 61, 1))'
  },

  header: {
    boxSize: '100% G2',
    position: 'absolute',
    flow: 'column',
    top: '0',
    right: '0',
    gap: '0',
    background: 'naviBlue',
    zIndex: '3',
    align: 'center center',
    boxSizing: 'border-box',
    padding: '- - - A',
    style: { boxShadow: '0 0 30px .5px rgba(0, 0, 0, .85)' },

    title: {
      fontSize: 'H',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: '100',
      // letterSpacing: '10px',
      style: {
        // writingMode: ' vertical-rl',
        // textOrientation: 'mixed'
      }
    }
  }
}

export const tours = {
  extend: Flex,
  props,
  attr: { id: 'tours' },
  header,
  tabs
  // toursContainer
}
