'use strict'

import { Contact } from '../../components'

export const contact = {
  extend: Contact,
  mailLocation: {
    ...[
      { props: { text: 'info@bbhospitality.ge' } },
      { props: { text: 'Tbilisi, 0105, Lado Asatiani Street #41' } }
    ]
  },

  numbers: {
    ...[
      {
        props: { text: '+ 995 322 502 222' },
        props: { text: '+ 995 579 220 240' }
      }
    ]
  }
}
