'use strict'

import { Flex } from 'smbls'

const props = {
  display: 'flex',
  flexAlign: 'center space-between',
  gap: 'B',
  position: 'relative',
  childProps: {
    fontSize: 'Z',
    fontWeight: '700',
    letterSpacing: '.5px',
    ':first-child': {
      position: 'relative',
      ':after': {
        content: '""',
        boxSize: '65% 1px',
        round: 'B',
        position: 'absolute',
        top: '50%',
        transform: 'translate(50%, -50%)',
        right: '-13px',
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
