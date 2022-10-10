'use strict'

import { Flex } from 'smbls'

const heading = { tag: 'h3' }

const fields = {
  extend: Flex,
  childExtend: {
    tag: 'input',
    props: {
      minWidth: '48%',
      outline: 'none',
      background: 'transparent',
      border: 'none',
      textAlign: 'center',
      padding: '0 B',
      '@mobileS': { padding: '0 A1' },
      style: {
        boxSizing: 'border-box'
      }
    }
  },
  ...[
    { attr: { type: 'date' } },
    { attr: { type: 'number' } }
  ]
}

const footerLabels = {
  extend: Flex,
  childExtend: {
    tag: 'label'
  },
  ...[
    { props: { text: 'start date' } },
    { props: { text: 'number of night' } }
  ]
}

const props = {
  flow: 'column',
  alignItems: 'center',
  gap: '',
  position: 'relative',
  width: 'fit-content',

  heading: {
    fontSize: 'A',
    text: 'when do you plan to travel?',
    padding: '0 0 A 0',
    style: { textTransform: 'uppercase' },
    '@tabletS': { fontSize: 'Z' }
  },

  fields: {
    round: 'B',
    position: 'relative',
    boxSize: 'C G2',
    justifyContent: 'space-between',
    style: {
      border: '1.5px solid rgba(0, 0, 0, .55)',
      overflow: 'hidden'
    },
    ':after': {
      content: '""',
      width: '1px',
      height: '60%',
      borderRadius: '30px',
      background: 'black',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },

    '@mobileS': { width: 'G' }
  },

  footerLabels: {
    minWidth: '100%',
    justifyContent: 'space-between',
    padding: 'X C 0 C',
    fontSize: 'Z',
    color: 'black .55',
    style: { boxSizing: 'border-box' }
  }
}

export const Inputs = {
  extend: Flex,
  props,

  heading,
  fields,
  footerLabels
}
