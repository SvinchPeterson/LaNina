'use strict'
import { Box } from '@symbo.ls/symbols'

export const Contact = {
  proto: Box,
  props: {
    padding: 'F 0',
    flexAlign: 'center center'
  },
  content: {
    proto: Box,
    props: {
      flexFlow: 'column',
      flexAlign: 'center center',
      gap: 'X2',
      color: 'black .65',
      maxWidth: 'G'
    },
    childProto: {
      proto: Box,
      style: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: `${14 / 16}em`
      }
    },
    ...[
      { props: { text: 'info@bbhospitality.ge' } },
      { props: { text: 'reservations@bbhospitality.ge' } },
      {
        props: {
          text: '+995 322 502222',
          padding: 'A 0 0 0'
        }
      },
      { props: { text: '+995593 345158' } }
    ]

  }

}
