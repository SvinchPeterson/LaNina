'use strict'

import { TourContainer } from '../../components'

export const daily = {
  extend: TourContainer,
  text: 'daily',

  class: {
    show: (element, state) => state.activeDaily
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  }
}
