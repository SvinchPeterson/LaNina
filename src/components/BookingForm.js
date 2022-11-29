'use strict'

export const BookingForm = {
  class: {
    show: (element, state) => state.activeBookingForm
      ? { display: 'block' }
      : { display: 'none' }

  },
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    background: 'red',
    zIndex: '1000'
  }
}
