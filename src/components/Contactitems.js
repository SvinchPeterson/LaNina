'use strict'

const props = {
  display: 'flex',
  flexAlign: 'center space-between',
  round: 'C',
  padding: 'Y1 A2',
  position: 'relative',
  '@mobileS': {
    flexFlow: 'column',
    flexAlign: 'center center',
    padding: '0',
    round: '0',
    background: 'black 0',
    gap: 'A'
  },
  css: {
    border: '.5px solid rgba(0, 0, 0, .7)',
    '@media only screen and (max-width: 480px)': {
      border: 'none'
    },
    '@media only screen and (max-height: 650px)': {
      gap: '10px !important'
    },
    '> div:first-child': {
      position: 'relative',
      marginRight: `${10 / 14}em`,
      paddingRight: `${10 / 14}em`,
      '@media only screen and (max-width: 480px)': {
        marginRight: `0`,
        paddingRight: `0`
      },

      '&:before': {
        content: '""',
        position: 'absolute',
        width: '1.5px',
        height: '85%',
        borderRadius: '100%',
        background: 'rgba(0, 0, 0, .75)',
        top: '50%',
        right: '0',
        transform: 'translate(-50%, -50%)',
        '@media only screen and (max-width: 480px)': {
          display: 'none'
        }
      }
    }

  }
}

const itemProps = {
  fontSize: `${14 / 16}em`,
  position: 'relative',
  flexAlign: 'center center',
  fontWeight: '500',
  color: 'black',
  letterSpacing: '.8px',
  '@mobileS': {
    width: `${240 / 13}em`,
    height: `${45 / 13}em`,
    padding: '0',
    fontSize: `${13 / 16}em`,
    round: 'C'
    // background: 'rgba(0, 0, 0, .05)'
  },
  css: {
    '@media only screen and (max-width: 480px)': {
      border: '.5px solid rgba(0, 0, 0, .75)'
    }
  }
}

export const ContactItems = {
  props,

  childProto: { props: itemProps },
  ...[
    { props: { text: 'reservations@bbhospitality.ge' } },
    { props: { text: 'info@bbhospitality.ge' } }
  ]
}
