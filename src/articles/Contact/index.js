'use strict'
import { Box, Text } from '@symbo.ls/symbols'

export const Contact = {
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start center',
    padding: 'F 0',
    gap: 'Y',
    color: 'black .65'
  },
  childProto: {
    proto: Text,
    style: {
      fontWeight: '700',
      textAlign: 'right',
      margin: '0 auto'
    }
  },
  ...[
    { props: { text: 'svinchy@gmail.com' } },
    { props: { text: '+995 571 017 170' } }
  ]

}
