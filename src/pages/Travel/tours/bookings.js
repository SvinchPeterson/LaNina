'use strict'

import { BookingForm } from '../../../components/BookingForm'

export const tbilisiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeTbilisiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const ananuriBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeAnanuriBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const borjomiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeBorjomiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const canyonBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeCanyonBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const goriBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeGoriBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const kakhetiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKakhetiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const kutaisiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKutaisiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const mtsketaBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeMtsketaBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const rabatBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeRabatBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const caucasusBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeCaucasusBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const adventureBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeAdventureBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const exclusiveBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeExclusiveBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const $3dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active3dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const $4dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active4dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const $5dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active5dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const $8dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active8dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}

export const $10dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active10dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  }
}
