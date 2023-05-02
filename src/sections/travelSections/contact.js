'use strict'

import { Contact } from '../../components'

const props = {
  alignSelf: 'center',
  padding: 'E -',
  flow: 'column',
  gap: 'A',
  mailLocation: {
    textAlign: 'center',
    border: 'solid, black',
    borderWidth: '0 0 1px 0',
    padding: '- - A -'
  }

}

export const contact = {
  extend: Contact,
  props,

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
