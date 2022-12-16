'use strict'

import { BookingForm } from '../../../components/BookingForm'

export const tbilisiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeTbilisiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },

  tour: { attr: { id: 'TBILISI CITY TOUR', value: 'TBILISI CITY TOUR' } }
}

export const ananuriBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeAnanuriBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },

  tour: { attr: { id: 'ANANURI - GUDAURI - KAZBEGI', value: 'ANANURI . GUDAURI . KAZBEGI' } }
}

export const borjomiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeBorjomiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },

  tour: { attr: { id: 'BORJOMI', value: 'BORJOMI' } }
}

export const canyonBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeCanyonBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { id: 'DASHBASHI CANYON', value: 'DASHBASHI CANYON' } }
}

export const goriBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeGoriBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },

  tour: { attr: { value: 'GORI . UPLISTSIKHE CAVE' } }
}

export const kakhetiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKakhetiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'KAKHETI' } }
}

export const kutaisiBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKutaisiBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'KUTAISI . MARTVILI CANYON' } }
}

export const mtsketaBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeMtsketaBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'MTSKETA' } }
}

export const rabatBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeRabatBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'RABATI CASTLE' } }
}

export const caucasusBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeCaucasusBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'CAUCASUS TOUR' } }
}

export const adventureBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeAdventureBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'CAUCASUS TOUR' } }
}

export const exclusiveBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeExclusiveBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: 'ADVENTURE TOUR' } }
}

export const $3dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active3dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: '2 NIGHTS / 3 DAYS' } }
}

export const $4dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active4dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: '3 NIGHTS / 4 DAYS' } }
}

export const $5dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active5dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: '4 NIGHTS / 5 DAYS' } }
}

export const $8dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active8dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: '7 NIGHTS / 8 DAYS' } }

}

export const $10dBooking = {
  extend: BookingForm,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.active10dBooking
      ? { display: 'flex' }
      : { display: 'none' }
  },
  tour: { attr: { value: '9 NIGHTS / 10 DAYS' } }
}
