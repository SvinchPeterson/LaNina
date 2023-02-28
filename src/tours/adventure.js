'use strict'

import { TourContainer } from '../components'

export const adventure = {
  extend: TourContainer,
  text: 'adventure',

  class: {
    show: (element, state) => state.activeAdventure
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  }
}
