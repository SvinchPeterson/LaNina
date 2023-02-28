'use strict'

import { TourContainer } from '../components'

export const caucasus = {
  extend: TourContainer,
  text: 'caucasus',

  class: {
    show: (element, state) => state.activeCaucasus
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  }
}
