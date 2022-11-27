'use strict'

export const MailInput = {
  tag: 'input',
  props: {
    boxSize: 'C G2',
    background: 'transparent',
    // round: 'B',
    border: 'none',
    borderBottom: '1.3px solid gray',
    placeholder: 'ergreg',
    color: 'black',
    outline: 'none',
    textAlign: 'center',
    '@mobileM': { width: 'G' },
    // textTransform: 'uppercase',
    style: {
      fontStyle: 'italic',
      letterSpacing: '.5px'
    }
  },

  attr: { type: 'email', placeholder: 'type your email' }
}
