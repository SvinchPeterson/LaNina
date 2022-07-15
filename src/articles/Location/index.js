'use strict'
import { Box } from '@symbo.ls/symbols'
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
    // '@tabletL': { minWidth: '80%' },
    // '@mobileL': { minWidth: '100%' }
  },
  style: {
    flex: 1,
    border: 'none',
    margin: '0 auto',
    boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)',
    // padding: '100px',
    minHeight: `${500 / 16}em`,
    '@media only screen and (max-width: 560px)': {
      minHeight: `${300 / 16}em`,
      marginTop: `${50 / 16}em`
    }
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
    flexAlign: 'center center'
    // minHeight: '100%'

    // padding: 'G2 0 0 0',
    // '@tabletL': { padding: 'E2 0 0 0' },
    // '@tabletM': { padding: 'E 0 0 0' }
  },
  // style: { border: '3px solid red' },
  attr: { id: 'location' },
  // airPort,
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
      '@mobileM': {
        padding: 'D 0 C 0'
      }
    },
    style: {
      // borderTop: '.8px solid rgba(0, 0, 0, .65)',
      // borderBottom: '2px solid rgba(0, 0, 0, .75)',
      // boxShadow: 'inset -2px -2px 6px 0px rgba(0, 0, 0, .35)',
      '&:before': {
        content: '"Distance to Tbilisi International airport is 20 km. Central railway station is 11 km away."',
        position: 'absolute',
        maxWidth: '350px',
        background: 'rgba(248, 241, 227, 1)',
        color: 'rgba(0, 0, 0, .85)',
        top: '-120px',
        right: '5px',
        zIndex: '20',
        fontSize: '13px',
        textAlign: 'right',
        fontWeight: '500',
        letterSpacing: '.7px',
        lineHeight: '22px'
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
      style: {
        alignSelf: 'flex-start',
        borderTop: '.8px solid rgba(0, 0, 0, .65)'
      },
      proto: Contact
    }
  }
}
