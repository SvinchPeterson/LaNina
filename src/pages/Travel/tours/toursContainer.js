'use strict'

const props = {
  position: 'relative',
  boxSize: '100% 100%',
  background: 'blue'

}

const tourContainer = {

}

export const toursContainer = {
  props,
  class: {
    show: (element, state) => state.activeTour
      ? {
        display: 'block'
      }
      : {
        display: 'none !important'
      }
  }
}
