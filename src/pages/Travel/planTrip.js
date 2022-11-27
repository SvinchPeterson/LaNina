'use strict'

import { Flex, Grid } from 'smbls'

import { Inputs, TextArea, Book, MailInput } from '../../components'

const sendButton = {
  tag: 'button',
  extend: Book,
  props: {
    boxSize: 'C2 F1',
    background: 'black',
    border: 'none',
    outline: 'none',
    style: {
      cursor: 'pointer',
      border: 'none',
      justifySelf: 'center',
      alignSelf: 'center',
      borderRadius: '30px',
      borderRight: '1.5px solid rgba(245, 245, 245, 0)',
      borderBottom: '1.5px solid rgba(245, 245, 245, 0)',
      borderBottomRightRadius: '30px'
    },
    span: {
      text: 'SEND',
      fontSize: 'B',
      fontWeight: 'bold'
    }
  }
}

const gridForm = {
  extend: Grid,
  dates: { extend: Inputs },
  persons: {
    extend: Inputs,
    heading: {},
    fields: {
      ...[
        { attr: { type: 'number' } },
        { attr: { type: 'number' } }

      ]
    },
    footerLabels: {
      ...[
        { props: { text: 'adult' } },
        { props: { text: 'children' } }
      ]
    }
  },

  textField: { extend: TextArea },
  mailSend: {
    extend: Flex,
    mail: { extend: MailInput },
    send: { extend: sendButton }
  }
  // send: { extend: sendButton }
}

const props = {
  padding: 'D E C E',
  width: '100%',
  height: '100%',
  flow: 'column',
  gap: 'D1',
  align: 'center flex-start',
  position: 'fixed',
  background: 'radial-gradient(rgba(255, 255, 255, 1), rgba(233, 250, 255, 1), rgba(208, 224, 228, 1))',
  zIndex: '30',
  top: '0',
  left: '0',
  style: {
    transition: 'opacity .4s ease-in-out, pointer-events .4s ease-in-out, z-index .4s ease-in-out',
    '@media only screen and (max-height: 700px)': { overflowY: 'auto' }
  },
  '@tabletS': {
    padding: 'D E C E',
    gap: 'C',
    style: { overflowY: 'auto' }
  },
  '@mobileL': { padding: 'D A' },

  title: {
    text: 'planing trip',
    fontSize: 'D',
    fontWeight: '700',
    style: { textTransform: 'uppercase' }
  },
  gridForm: {
    columns: 'repeat(2, 1fr)',
    width: 'fit-content',
    gap: 'D',
    margin: '0 auto',
    style: { justifyItems: 'center' },
    '@tabletS': {
      columns: '1fr',
      gap: 'C'
    },
    persons: { heading: { text: 'number of persons?' } },
    mailSend: {
      flow: 'column',
      align: 'center center',
      gap: 'C'
    }
  }
}

export const planTrip = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeForm
      ? { opacity: 1, zIndex: '100' }
      : { opacity: 0, pointerEvents: 'none', zIndex: '-1' }
  },

  title: {},
  gridForm
}
