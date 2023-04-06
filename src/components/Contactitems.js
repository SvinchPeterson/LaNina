'use strict'

import { Flex } from 'smbls'

const props = {
  display: 'flex',
  flexAlign: 'center space-between',
  gap: 'B',
  position: 'relative',
  childProps: {
    fontSize: `${12.5 / 16}em`,
    fontWeight: '400',
    letterSpacing: `${1 / 12.5}em`,
    color: 'black',
    ':first-child': {
      position: 'relative',
      ':after': {
        content: '""',
        boxSize: 'V2 V2',
        round: '100%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(50%, -50%)',
        right: `${-13 / 16}em`,
        background: 'black 1'
      }
    }
  }
}

export const ContactItems = {
  extend: Flex,
  props,
  ...[
    { props: { text: 'reservations@bbhospitality.ge' } },
    { props: { text: 'info@bbhospitality.ge' } }
  ]
}
