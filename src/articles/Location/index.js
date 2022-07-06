'use strict'
import { Box } from '@symbo.ls/symbols'
import { Contact } from '../Contact'

import { locationText, distanceText, transferText } from '../../texts'

const paragraph = {
  tag: 'p',
  proto: [locationText, Box],

  props: {
    maxWidth: 'H1',
    // padding: 'D D D2 D',
    color: 'black .55',
    fontSize: 'Z',
    '@mobileM': {
      padding: '0 C D C',
      color: 'black .55'
    }
  },
  style: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    '@media only screen and (max-width: 560px)': {
      fontWeight: '700'
    }
  }
}

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
    '@tabletL': { minWidth: '80%' },
    '@mobileL': { minWidth: '100%' }
  },
  style: {
    flex: 1,
    border: 'none',
    margin: '0 auto',
    // padding: '100px',
    minHeight: '500px'
  }
}

// const airPort = {
//   proto: distanceText,
//   props: {
//     flexFlow: 'column',
//     '@mobileS': { padding: '0 B' }
//   }
// }

export default {
  tag: 'article',
  proto: Box,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    minHeight: '100%'

    // padding: 'G2 0 0 0',
    // '@tabletL': { padding: 'E2 0 0 0' },
    // '@tabletM': { padding: 'E 0 0 0' }
  },
  attr: { id: 'location' },
  // airPort,
  content: {
    proto: Box,
    props: {
      flexFlow: 'column',
      flexAlign: 'flex-start flex-start',
      minWidth: '60%',
      margin: 'F2 0 0 0',
      padding: 'A2 0 0 0',
      position: 'relative'
    },
    style: {
      borderTop: '.8px solid rgba(0, 0, 0, .65)',
      // borderBottom: '2px solid rgba(0, 0, 0, .75)',
      // boxShadow: 'inset -2px -2px 6px 0px rgba(0, 0, 0, .35)',
      '&:before': {
        content: '"Distance to Tbilisi International airport is 20 km. Central railway station is 11 km away."',
        position: 'absolute',
        maxWidth: '350px',
        background: 'rgba(248, 241, 227, 1)',
        color: 'rgba(0, 0, 0, .85)',
        top: '-60px',
        right: '5px',
        zIndex: '20',
        fontSize: '13px',
        textAlign: 'right',
        fontWeight: '500',
        letterSpacing: '.7px'
      }
      // '&:after': {
      //   content: '""',
      //   position: 'absolute',
      //   width: '100%',
      //   height: '50px',
      //   background: 'rgba(248, 241, 227, 1)',
      //   top: '0',
      //   left: '0',
      //   zIndex: '20'
      // }
      // border: '10px solid red'
    },
    map,
    contact: {
      style: { alignSelf: 'flex-start' },
      proto: Contact
    }
  }
}
