'use strict'
import { Box } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/balcony2.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    minWidth: `${600 / 16}em`,
    position: 'relative',
    minHeight: `${400 / 16}em`,
    padding: '0',
    '@mobileL': {
      minWidth: `${400 / 16}em`,
      minHeight: `${300 / 16}em`
    }
  },
  style: {
    flex: '1',
    backgroundAttachment: 'fixed',
    backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .8)), url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundPosition: 'bottom 200px center',
    overflow: 'hidden',
    '@media only screen and (max-width: 1366px)': {
      backgroundAttachment: 'initial',
      backgroundPosition: 'bottom 0px center',
      backgroundSize: 'cover',
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .55)), url(' + ENTRENCE_JPG + ')'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '30'
    }
  }
}

const texts = {
  proto: Box,
  props: {
    margin: 'E 0 0 0',
    fontWeight: '400',
    flexFlow: 'column',
    gap: 'Z',
    '@mobileS': {
      padding: '0 D1 0 D1',
      gap: 'A2'
    }
  },
  style: {
    textAlign: 'center',
    letterSpacing: '.7px',
    wordSpacing: '3px',
    fontSize: '13.5px',
    '@media media only screen and (max-width: 480px)': {
      fontSize: '12.7px',
      textAlign: 'left'
    }
  },
  ...[
    { text: 'apartments are designed to match your mood' },
    { text: 'create own atmosphere in any kind of trip' },
    {
      proto: Box,
      props: { margin: 'A2 0 0 0' },
      text: 'you are special for us'
    }
  ]
}

export default {
  proto: Box,
  props: {
    width: '100%',
    flexFlow: 'column',
    position: 'relative',
    flexAlign: 'center flex-start',
    margin: '0 auto',
    gap: 'Z'
  },
  style: {
    fontSize: '22px',
    marginTop: `${200 / 16}em`,
    marginBottom: `${200 / 16}em`,
    fontWeight: '300',
    textTransform: 'uppercase',
    '@media only screen and (max-width: 1366px)': {
      marginTop: `${75 / 16}em`
    }
  },

  yardEntrence,
  texts
}
