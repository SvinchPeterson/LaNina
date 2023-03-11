'use strict'

import { Button, Flex, Img } from 'smbls'

import { packageTbilisi, packageAdventure, packageAnanuri, packageBorjomi, packageCapital, packageCaucasus,
  packageCaucasusMountain, packageDashbashi, packageExclusive, packageGori, packageHistorical,
  packageKakheti, packageCultural, packageKutaisi, packageMtskheta, packageRabati, packageRoyal,
  packageWineGastronomy
} from '../../../../toursPackages'

import CLOSE_PNG from '../../../../assets/icons/close.png'

const props = {
  boxSize: '100% 100%',
  position: 'absolute',
  zIndex: '12',
  top: '0',
  left: '0',
  background: 'black .35',
  style: { backdropFilter: 'blur(1px)' },

  close: {
    position: 'absolute',
    top: 'A',
    right: 'A',
    boxSize: 'C C',
    // border: '3px solid yellow',
    background: 'transparent',
    icon: { boxSize: 'A2 A2' }
  },

  content: {

    boxSize: '100% 100%',
    border: '3px solid yellow'
  }

}

export const packages = {
  // extend: Flex,
  props,
  class: {
    show: (element, state) => state.activePackagesContainer
      ? { opacity: '1', transition: 'opacity .5s ease-in-out' }
      : { opacity: '0', pointerEvents: 'none', transition: 'opacity .5  s ease-in-out' }
  },
  close: {
    extend: Button,
    on: {
      click: (event, element, state) => {
        state.update({
          activePackagesContainer: false,
          activeTbilisiPackage: false,
          activeAnanuriPackage: false,
          activeGoriPackage: false,
          activeKakhetiPackage: false,
          activeCanyonPackage: false,
          activeKutaisiPackage: false,
          activeBorjomiPackage: false,
          activeRabatPackage: false,
          activeMtsketaPackage: false,
          activeCapitalPackage: false,
          activeCulturalPackage: false,
          activeHistoricalPackage: false,
          activeDashbashPackage: false,
          activeRoyalPackage: false,
          acitveCaucasusMountainPackage: false,
          activeCaucasusPackage: false,
          activeExclusivePackage: false,
          activeWineGastronomyPackage: false,
          activeAdventurePackage: false
        })
      }
    },
    icon: {
      extend: Img,
      props: { src: CLOSE_PNG }
    }
  },
  content: {
    extend: Flex,
    class: {
      show: (element, state) => state.activePackagesContainer
        ? { transform: 'scale(1)', transition: 'transform .8s ease-in-out' }
        : { transform: 'scale(.85)', transition: 'transform .8s ease-in-out' }
    },

    packageTbilisi,
    packageAdventure,
    packageAnanuri,
    packageBorjomi,
    packageCapital,
    packageCaucasus,
    packageCaucasusMountain,
    packageDashbashi,
    packageExclusive,
    packageGori,
    packageHistorical,
    packageKakheti,
    packageCultural,
    packageKutaisi,
    packageMtskheta,
    packageRabati,
    packageRoyal,
    packageWineGastronomy
  }
}
