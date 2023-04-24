'use strict'
import { Flex } from 'smbls'

import { RoomsToursPopUp } from '../../../../components'

import { daily, standard, caucasus, adventure, exclusive, wineGastronomy } from '../../../../tours'

import { toursHeader } from './toursHeader'

import ORNAMENT_PNG from '../../../../assets/images/travel/ornament.png'

const props = {
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  '@maxTabletL': { fontSize: `${14 / 16}em` },
  ':before': { background: 'radial-gradient(rgba(0, 47, 57, .5), rgba(0, 47, 57, 1), rgba(0, 47, 57, 1))' },
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

  contentContainer: {
    style: { boxShadow: '0px 60px 30px 15px rgba(0, 0, 0, .25)' },
    content: {
      '@maxTabletM': {
        width: '95%',
        alignSelf: 'center'
      }
    }
  }
}

export const toursPopUp = {
  extend: RoomsToursPopUp,
  props,
  class: {
    show: (element, state) => state.activeToursPopUp
      ? { height: '100%' }
      : { height: '0', pointerEvents: 'none' }
  },

  close: {
    on: {
      click: (event, element, state) => {
        state.update({
          activeToursPopUp: false,
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
      show: (element, state) => state.activeToursPopUp
        ? { opacity: '1', transform: 'rotate(90deg)' }
        : { opacity: '0' },

      show2: (element, state) => state.activePackagesContainer
        ? { pointerEvents: 'none' }
        : { }
    }
  },

  contentContainer: {
    header: {
      extend: toursHeader
    },
    content: {
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
      show: (element, state) => state.activeToursPopUp
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}