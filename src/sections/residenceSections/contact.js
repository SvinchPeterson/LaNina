'use strict'

import { Contact } from "../../components"

export const contact = {
  extend: Contact,

  mailLocation: {
    ...[
      { props: { text: 'reservations@bbhospitality.ge' } },
      { props: { text: 'info@bbhospitality.ge' } }
    ]
  },
  numbers: {
    ...[
      {
        props: { text: '995 322 502 222' },
        props: { text: '995 598 502 222' }
      }
    ]
  }
}