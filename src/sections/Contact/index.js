'use strict'
import { Box } from 'smbls'

const props = {
  padding: 'B W D W',
  minWidth: '85%',
  css: {
    margin: '0 auto',
    marginTop: `${50 / 16}em`
  },
  '@tabletL': { flexFlow: 'column' }
}

export const Contact = {
  proto: Box,
  props,
  content: {
    proto: Box,
    props: {
      flexAlign: 'flex-start space-between',
      color: 'black .9',
      width: '100%',
      '@tabletL': {
        flexFlow: 'column',
        flexAlign: 'flex-start flex-start',
        gap: 'A'
      },
      '@mobileM': {
        gap: 'C'
      }
    },
    style: {
      letterSpacing: '.9px',
      fontWeight: '500'
    },
    mails: {
      proto: Box,
      props: {
        flexAlign: 'center flex-start',
        gap: 'Z2',
        fontSize: `${13 / 16}em`,
        '@mobileM': {
          flexFlow: 'column',
          flexAlign: 'flex-start flex-start'
        }
      },
      ...[
        {
          proto: Box,
          props: {
            padding: '0 Z2 0 0',
            position: 'relative',
            flexAlign: 'center flex-start'
          },
          text: 'info@bbhospitality.ge',
          style: {
            '&:before': {
              content: '""',
              position: 'absolute',
              right: '0',
              width: `${2.5 / 13}em`,
              height: `${2.5 / 13}em`,
              background: 'rgba(0, 0, 0, .85)',
              borderRadius: '100%',
              '@media only screen and (max-width: 560px)': { display: 'none' }
            }
          }
        },
        { text: 'reservations@bbhospitality.ge' }
      ]
    },
    numbers: {
      proto: Box,

      props: {
        flexAlign: 'center flex-start',
        gap: 'Z2',
        fontSize: `${13 / 16}em`,
        '@mobileM': {
          flexFlow: 'column',
          flexAlign: 'flex-start flex-start'
        }
      },
      style: {
        marginLeft: 'auto',
        '@media only screen and (max-width: 1366px)': { marginLeft: '0' }
      },
      ...[
        {
          proto: Box,
          props: {
            padding: '0 Z2 0 0',
            position: 'relative',
            flexAlign: 'center flex-start'
          },
          text: '995 322 502 222',

          style: {
            '&:before': {
              content: '""',
              position: 'absolute',
              right: '0',
              width: `${2.5 / 13}em`,
              height: `${2.5 / 13}em`,
              background: 'rgba(0, 0, 0, .85)',
              borderRadius: '100%',
              '@media only screen and (max-width: 560px)': { display: 'none' }
            }
          }
        },

        { text: '995 593 345 158' }
      ]
    }
  }

}
