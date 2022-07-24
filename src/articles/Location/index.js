'use strict'
import { Box } from 'smbls'
import { Contact } from '../Contact'

const map = {
  tag: 'iframe',
  proto: Box,
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=BB+Residence',
    allowfullscreen: true
  },

  props: {
    display: 'block',
    minWidth: '100%',
    position: 'relative',
    round: 'Y2'
  },
  style: {
    flex: 1,
    border: 'none',
    margin: '0 auto',
    boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)',
    minHeight: `${500 / 16}em`,
    '@media only screen and (max-width: 560px)': {
      minHeight: `${300 / 16}em`,
      marginTop: `${50 / 16}em`
    }
  }
}

export default {
  tag: 'article',
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center'
  },
  attr: { id: 'location' },
  content: {
    proto: Box,
    props: {
      flexFlow: 'column',
      flexAlign: 'flex-start flex-start',
      minWidth: '60%',
      margin: '0 0 0 0',
      padding: 'B 0 0 0',
      position: 'relative',
      '@tabletL': {
        minWidth: '85%',
        padding: 'D 0 E1 0'
      },
      '@mobileM': { padding: 'D 0 C 0' }
    },
    style: {
      '&:before': {
        content: '"Distance to Tbilisi International airport is 20 km. Central railway station is 11 km away."',
        fontSize: `${13 / 16}em`,
        position: 'absolute',
        maxWidth: `${350 / 13}em`,
        background: 'rgba(248, 241, 227, 1)',
        color: 'rgba(0, 0, 0, .85)',
        top: `${-120 / 13}em`,
        right: `${5 / 13}em`,
        zIndex: '20',
        textAlign: 'right',
        fontWeight: '500',
        letterSpacing: '.7px',
        lineHeight: `${22 / 13}em`,
        '@media only screen and (max-width: 1366px)': { top: `${-50 / 13}em` }
      }
    },
    map,
    contact: {
      style: {
        alignSelf: 'flex-start',
        borderTop: '.8px solid rgba(0, 0, 0, .65)'
      },
      proto: Contact
    }
  }
}
