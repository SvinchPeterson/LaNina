'use strict'
import { Flex } from 'smbls'

import { PopUpModal } from '../../../../components'

import { daily, standard, caucasus, adventure, exclusive, wineGastronomy } from '../../../../tours'

import { header } from './header'

import ORNAMENT_JPG from '../../../../assets/images/travel/ornaments2.png'

const props = {
  // border: '1px solid red',
  position: 'fixed',
  backgroundImage: 'url(' + ORNAMENT_JPG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundColor: 'rgba(233, 250, 255, 1)',
  style: { backgroundAttachment: 'fixed' },
  transition: 'height .85s ease-in-out',
  ':before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'radial-gradient(rgba(0, 47, 57, .8), rgba(0, 47, 57, 1), rgba(0, 47, 57, 1))'
  },
  ':after': {
    content: '""',
    width: '100%',
    height: 'F',
    position: 'absolute',
    bottom: '0',
    left: '0',
    pointerEvents: 'none',
    zIndex: '5',
    background: 'linear-gradient(to top, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)'
  },
  close: {
    top: 'A',
    right: 'Y2',
    opacity: '.65',
    icon: { boxSize: 'A1 ' },
    ':hover': { opacity: '.85' }
  },

  content: {
    boxSize: '100% 80%',
    flow: 'column',
    // border: '1px solid yellow',
    zIndex: '1',
    // header: { border: '1px solid lightblue' },
    tours: {
      width: '100%',
      height: 'calc(100% - 94px)',
      // flex: '1',
      position: 'relative',
      flow: 'column',
      // border: '5px solid lightgreen',
      boxSizing: 'border-box'
    }
  },

  logo: {
    bottom: 'A2',
    left: 'C',
    boxSize: '- C2'
  }
}

export const toursContainer = {
  extend: PopUpModal,
  props,
  class: {
    show: (element, state) => state.activeToursContainer
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none' }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activeToursContainer: false,
          activeDaily: false,
          activeStandard: false,
          activeCaucasus: false,
          activeExclusive: false,
          activeAdventure: false,
          activeWineGastronomy: false
        })
      }
    },
    class: {
      show: (element, state) => state.activeToursContainer
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' },

      show2: (element, state) => state.activePackagesContainer
        ? { pointerEvents: 'none' }
        : { }
    }
  },

  content: {
    extend: Flex,
    header,
    tours: {
      extend: Flex,
      daily,
      standard,
      caucasus,
      exclusive,
      wineGastronomy,
      adventure
    }
  },

  logo: {
    class: {
      show: (element, state) => state.activeToursContainer
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}
