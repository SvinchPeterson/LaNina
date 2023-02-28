'use strict'

import { TourContainer } from '../components'

export const wineGastronomy = {
  extend: TourContainer,
  text: 'wine',

  class: {
    show: (element, state) => state.activeWineGastronomy
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  }
}
