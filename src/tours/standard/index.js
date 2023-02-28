'use strict'

import { TourContainer } from '../../components'

export const standard = {
  extend: TourContainer,
  text: 'standard',
  class: {
    show: (element, state) => state.activeStandard
      ? { opacity: '1' }
      : { opacity: '0', zIndex: '-1' }
  }
}
