'use strict'
import { Box } from '@symbo.ls/symbols'

export const Contact = {
  proto: Box,
  props: {
    padding: 'B B F B',
    flexAlign: 'flex-start space-between',
    minWidth: '100%'
  },
  content: {
    proto: Box,
    props: {
      flexAlign: 'flex-start space-between',
      gap: '0',
      color: 'black .9',
      // maxWidth: 'G',
      width: '100%'
    },
    style: {
      letterSpacing: '1px',
      fontWeight: '500'
    },
    mails: {
      proto: Box,
      props: {
        flexAlign: 'center flex-start',
        gap: 'Z2',
        fontSize: '13px'
      },
      ...[
        {
          proto: Box,
          props: { padding: '0 Z2 0 0' },
          text: 'info@bbhospitality.ge',
          style: { borderRight: '.8px solid rgba(0, 0, 0, .65)' }
        },
        { text: 'reservations@bbhospitality.ge' }
      ]
    },
    numbers: {
      proto: Box,

      props: {
        flexAlign: 'center flex-start',
        gap: 'Z2',
        fontSize: '13px'
      },
      style: { marginLeft: 'auto' },
      ...[
        {
          proto: Box,
          props: { padding: '0 Z2 0 0' },
          style: { borderRight: '.8px solid rgba(0, 0, 0, .65)' },
          text: '995 322 502 222'
        },
        { text: '995 593 345 158' }
      ]
    }
    // childProto: {
    //   proto: Box,
    //   style: {
    //     fontWeight: '500',
    //     textAlign: 'center',
    //     fontSize: `${13.5 / 16}em`,
    //     letterSpacing: '.9px'
    //   },
    //   ...[
    //     {},
    //     {}
    //   ]

    // },
    // ...[
    //   { ...[{ props: { text: 'info@bbhospitality.ge' } }] },
    //   { ...[{ props: { text: 'reservations@bbhospitality.ge' } }] },
    //   {
    //     props: {
    //       text: '995 322 502 222',
    //       padding: 'A2 0 0 0'
    //     }
    //   },
    //   { props: { text: '995 593 345 158' } }
    // ]

  }

}
