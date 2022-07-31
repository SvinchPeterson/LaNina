'use strict'

const props = {
  flexAlign: 'center flex-start',
  css: {
    '> div:first-child': {
      display: 'flex',
      position: 'relative',
      paddingRight: `${12 / 14}em`,
      '@media only screen and (max-width: 480px)': {
        paddingRight: `0`
      }

    },
    '> div:first-child:after': {
      content: '""',
      position: 'absolute',
      width: '1.5px',
      height: '70%',
      background: 'rgba(0, 0, 0, 1)',
      left: `100%`,
      borderRadius: '100%',
      padding: ''
    },
    '> div:last-child': {
      paddingLeft: `${12 / 14}em`,
      '@media only screen and (max-width: 480px)': {
        paddingLeft: `0`
      }
    }
  }
}

const itemProps = {
  fontSize: `${14 / 16}em`,
  position: 'relative',
  flexAlign: 'center flex-end',
  // fontWeight: '500',
  color: 'black',
  letterSpacing: '.8px'
}

export const ContactItems = {
  props,

  childProto: { props: itemProps },
  ...[
    { props: { text: 'reservations@bbhospitality.ge' } },
    { props: { text: 'info@bbhospitality.ge' } }
  ]
}
