'use strict'

import { TourContainer } from '../components'

export const exclusive = {
  extend: TourContainer,
  text: 'exclusive',

  class: {
    show: (element, state) => state.activeExclusive
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  }
}
