'use strict'

import { Flex } from 'smbls'
import { Navbar } from '../../../../components'

const props = {
  titles: {
    childProps: {
      textTransform: 'uppercase',
      fontWeight: '100',
      fontSize: 'C',
    }
  },
  tabs: {
    gap: 'A'
  }

}

export const toursHeader = {
  props,

  class: {
    show: (element, state) => state.activeToursPopUp
      ? { opacity: '1' }
      : { opacity: '0' }
  },

  titles: {
    extend: Flex,
    ...[
      {
        class: {
          show: (element, state) => state.activeDaily
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'tours' },
        span: { text: 'daily ' }
      },

      {
        class: {
          show: (element, state) => state.activeStandard
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'tours' },
        span: { text: 'standard ' }
      },

      {
        class: {
          show: (element, state) => state.activeCaucasus
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'tour' },
        span: { text: 'caucasus ' }
      },

      {
        class: {
          show: (element, state) => state.activeExclusive
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'tour' },
        span: { text: 'exclusive ' }
      },

      {
        class: {
          show: (element, state) => state.activeWineGastronomy
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'tour' },
        span: { text: 'wine & gastronomy ' }
      },

      {
        class: {
          show: (element, state) => state.activeAdventure
            ? { bottom: '0', opacity: '1' } : { bottom: `${-50 / 28}em`, opacity: '0' }
        },
        props: { text: 'tour' },
        span: { text: 'adventure ' }
      }
    ]
  },

  tabs: {
    ...[
      {
        props: { href: '#tbilisi' },
        text: 'daily',

        class: {
          show: (element, state) => state.activeDaily
            ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' }
        },

        on: {
          click: (event, element, state) => {
            state.update({
              activeDaily: true,
              activeStandard: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeAdventure: false,
              activeWineGastronomy: false,

              activeStandardPackages: false,
              activeCapitalPackage: false,
              activeCulturalPackage: false,
              activeHistoricalPackage: false,
              activeRoyalPackage: false,
              acitveCaucasusMountainPackage: false,
              activeCaucasusPackage: false,
              activeExclusivePackage: false,
              activeWineGastronomyPackage: false,
              activeAdventurePackage: false

            })
          }
        }
      },
      {
        props: { href: '#capital' },
        text: 'standard',

        class: { show: (element, state) => state.activeStandard
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeStandard: true,
              activeDaily: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeAdventure: false,
              activeWineGastronomy: false,

              activeDailyPackages: false,
              activeTbilisiPackage: false,
              activeAnanuriPackage: false,
              activeGoriPackage: false,
              activeKakhetiPackage: false,
              activeKutaisiPackage: false,
              activeBorjomiPackage: false,
              activeRabatPackage: false,
              activeMtsketaPackage: false,
              activeDashbashPackage: false,
              activeCaucasusPackage: false,
              activeExclusivePackage: false,
              activeWineGastronomyPackage: false,
              activeAdventurePackage: false
            })
          }
        }
      },

      {
        text: 'caucasus',
        class: { show: (element, state) => state.activeCaucasus
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeCaucasus: true,
              activeDaily: false,
              activeStandard: false,
              activeExclusive: false,
              activeAdventure: false,
              activeWineGastronomy: false,

              activeDailyPackages: false,
              activeTbilisiPackage: false,
              activeAnanuriPackage: false,
              activeGoriPackage: false,
              activeKakhetiPackage: false,
              activeKutaisiPackage: false,
              activeBorjomiPackage: false,
              activeRabatPackage: false,
              activeMtsketaPackage: false,
              activeDashbashPackage: false,
              activeCaucasusPackage: false,
              activeExclusivePackage: false,
              activeWineGastronomyPackage: false,
              activeAdventurePackage: false,
              activeStandardPackages: false,
              activeCapitalPackage: false,
              activeCulturalPackage: false,
              activeHistoricalPackage: false,
              activeRoyalPackage: false,
              acitveCaucasusMountainPackage: false
            })
          }
        }
      },

      {
        text: 'exclusive',
        class: { show: (element, state) => state.activeExclusive
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeExclusive: true,
              activeDaily: false,
              activeStandard: false,
              activeCaucasus: false,
              activeAdventure: false,
              activeWineGastronomy: false,

              activeDailyPackages: false,
              activeTbilisiPackage: false,
              activeAnanuriPackage: false,
              activeGoriPackage: false,
              activeKakhetiPackage: false,
              activeKutaisiPackage: false,
              activeBorjomiPackage: false,
              activeRabatPackage: false,
              activeMtsketaPackage: false,
              activeDashbashPackage: false,
              activeCaucasusPackage: false,
              activeExclusivePackage: false,
              activeWineGastronomyPackage: false,
              activeAdventurePackage: false,

              activeStandardPackages: false,
              activeCapitalPackage: false,
              activeCulturalPackage: false,
              activeHistoricalPackage: false,
              activeRoyalPackage: false,
              acitveCaucasusMountainPackage: false
            })
          }
        }

      },

      {
        text: 'wine & gastronomy',

        class: { show: (element, state) => state.activeWineGastronomy
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeWineGastronomy: true,
              activeDaily: false,
              activeStandard: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeAdventure: false,

              activeDailyPackages: false,
              activeTbilisiPackage: false,
              activeAnanuriPackage: false,
              activeGoriPackage: false,
              activeKakhetiPackage: false,
              activeKutaisiPackage: false,
              activeBorjomiPackage: false,
              activeRabatPackage: false,
              activeMtsketaPackage: false,
              activeDashbashPackage: false,
              activeCaucasusPackage: false,
              activeExclusivePackage: false,
              activeWineGastronomyPackage: false,
              activeAdventurePackage: false,
              activeStandardPackages: false,
              activeCapitalPackage: false,
              activeCulturalPackage: false,
              activeHistoricalPackage: false,
              activeRoyalPackage: false,
              acitveCaucasusMountainPackage: false
            })
          }
        }
      },

      {
        text: 'adventure',
        class: { show: (element, state) => state.activeAdventure
          ? { opacity: '1', pointerEvents: 'none' } : { opacity: '.55' } },
        on: {
          click: (event, element, state) => {
            state.update({
              activeAdventure: true,
              activeDaily: false,
              activeStandard: false,
              activeCaucasus: false,
              activeExclusive: false,
              activeWineGastronomy: false,
              activeDailyPackages: false,
              activeTbilisiPackage: false,
              activeAnanuriPackage: false,
              activeGoriPackage: false,
              activeKakhetiPackage: false,
              activeKutaisiPackage: false,
              activeBorjomiPackage: false,
              activeRabatPackage: false,
              activeMtsketaPackage: false,
              activeDashbashPackage: false,
              activeCaucasusPackage: false,
              activeExclusivePackage: false,
              activeWineGastronomyPackage: false,
              activeAdventurePackage: false,
              activeStandardPackages: false,
              activeCapitalPackage: false,
              activeCulturalPackage: false,
              activeHistoricalPackage: false,
              activeRoyalPackage: false,
              acitveCaucasusMountainPackage: false
            })
          }
        }
      }
    ]
  }
}
