'use strict'

import { Flex, Grid } from 'smbls'

import { Inputs, TextArea, Book } from '../../components'

const title = { tag: 'h1' }

const sendButton = {
  tag: 'button',
  extend: Book,
  props: {
    boxSize: 'C2 F1',
    background: 'black',
    round: 'C',
    border: 'none',
    outline: 'none',
    style: {
      cursor: 'pointer',
      border: 'none',
      justifySelf: 'center',
      alignSelf: 'center'
    },
    span: {
      text: 'SEND',
      fontSize: 'B',
      fontWeight: 'bold'
    }
  }
}

const content = {
  extend: Flex,
  heading: {
    extend: Flex,
    p: {},
    tourOperator: {}
  },

  gridForm: {
    extend: Grid,
    dates: { extend: Inputs },
    persons: {
      extend: Inputs,
      heading: {},
      fields: {
        ...[
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
    send: { extend: sendButton }

  }
}

const props = {
  padding: 'C E C E',
  width: '100%',
  height: '100%',
  flow: 'column',
  gap: 'D',
  position: 'fixed',
  background: 'radial-gradient(rgba(255, 255, 255, 1), rgba(233, 250, 255, 1), rgba(208, 224, 228, 1))',
  zIndex: '100',
  top: '0',
  left: '0',
  style: {
    transition: 'opacity .4s ease-in-out, pointer-events .4s ease-in-out, z-index .4s ease-in-out',
    '@media only screen and (max-height: 700px)': { overflowY: 'auto' }
  },
  '@tabletS': { style: { overflowY: 'auto' } },
  '@mobileL': { padding: 'D2 C' },
  '@mobileS': { padding: 'D2 A' },

  title: {
    text: 'planing trip',
    fontSize: 'D',
    style: { textTransform: 'uppercase' },
    '@tabletS': { textAlign: 'center' }
  },

  content: {
    flow: 'column',
    gap: 'D2',
    '@tabletS': { gap: 'D2' },

    heading: {
      fontSize: `${14 / 16}em`,
      align: 'center space-between',
      padding: '0 0 A 0',
      position: 'relative',
      style: { borderBottom: '1px solid rgba(0, 0, 0, .5)' },
      '@tabletS': { flow: 'column' },
      p: {
        text: 'We have best guides , drivers, tour operators, hosts, travel partners and etc.',
        maxWidth: 'G2',
        padding: '0 A',
        '@tabletS': {
          alignSelf: 'center',
          style: { textAlign: 'center' }
        }
      },
      tourOperator: {
        fontWeight: 'bold',
        text: 'Talk tour operator / 995 571 017 170',
        '@tabletS': {
          position: 'absolute',
          bottom: '-B1'
        }
      }
    },

    gridForm: {
      columns: 'repeat(2, 1fr)',
      width: 'fit-content',
      gap: 'D',
      margin: '0 auto',
      '@tabletS': {
        columns: '1fr',
        gap: 'C',
        justifyitems: 'center'
      },
      persons: {
        heading: { text: 'number of persons?' }
      }
    }
  }
}

export const planTrip = {
  extend: Flex,
  props,
  class: {
    show: (element, state) => state.activeForm
      ? { opacity: 1 }
      : { opacity: 0, pointerEvents: 'none', zIndex: '-1' }
  },

  title,
  content
}
