'use strict'

import { Flex, Grid } from 'smbls'

import { Inputs, TextArea, Book, MailInput } from '../../components'

const sendButton = {
  tag: 'button',
  extend: Book,
  on: {
    click: (event, element, state) => {
      state.update({ activePlandSent: true, activePlandSend: false })
    }
  },

  class: {
    show: (element, state) => state.activePlandSent
      ? { pointerEvents: 'none', background: 'transparent', '> div': { color: 'black' } }
      : { },

    show2: (element, state) => state.activePlandSend
      ? { transition: 'background 1.5s ease-in-out' }
      : { }
  },

  span: {
    class: {
      show: (element, state) => state.activePlandSend
        ? { display: 'block' }
        : { display: 'none' }
    }
  },

  sent: {
    class: {
      show: (element, state) => state.activePlandSent
        ? { display: 'block' }
        : { display: 'none' }
    }
  },

  props: {
    boxSize: 'C2 F1',
    color: 'white',
    outline: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    background: 'black',
    style: {
      cursor: 'pointer',
      justifySelf: 'center',
      alignSelf: 'center',
      borderRadius: '30px'
      // border: '1px solid black'
    },

    span: {
      text: 'send',
      textTransform: 'uppercase',
      fontSize: 'B',
      fontWeight: 'bold'
    },
    sent: {
      text: 'request sent',
      textTransform: 'uppercase',
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
  // padding: 'D E C E',
  width: '100%',
  height: '100%',
  flow: 'column',
  display: 'none',
  gap: 'D1',
  align: 'center center',
  position: 'fixed',
  background: 'rgba(233, 250, 255, 1)',
  // background: 'radial-gradient(rgba(255, 255, 255, 1), rgba(233, 250, 255, 1), rgba(208, 224, 228, 1))',
  zIndex: '30',
  top: '0',
  left: '0',
  style: {
    transition: 'opacity .15s ease-in-out, pointer-events .15s ease-in-out, z-index .15s ease-in-out'
  },

  title: {
    fontSize: 'F',
    fontWeight: '700',
    alignSelf: 'center',
    letterSpacing: `${-1 / 40}em`,
    margin: '- B - -',
    textTransform: 'capitalize'
    // style: { textTransform: 'uppercase' }
  },

  gridForm: {
    columns: 'repeat(2, 1fr)',
    width: 'fit-content',
    gap: 'D',
    margin: '0 auto',
    style: { justifyItems: 'center' },
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
    show: (element, state) => state.activePlanTrip
      ? { opacity: 1, zIndex: '100' }
      : { opacity: 0, pointerEvents: 'none', zIndex: '-1' }
  },

  title: { text: 'planing trip' },
  gridForm
}
