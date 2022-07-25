'use strict'

const props = {
  flexAlign: 'center flex-start',
  gap: 'A',
  position: 'relative',
  css: {
    border: '1px solid red',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '60%',
      background: 'rgba(0, 0, 0, .6)'
    }
  }
}
const item = {
  props: {

  }
}

export const ContactItems = {
  props,

  childProto: {
    proto: item
  },
  ...[
    { props: { text: 'reservations@bbhospitality.ge' } },
    { props: { text: 'info@bbhospitality.ge' } }
  ]
}
