'use strict'
import { Box } from 'smbls'
import ENTRENCE_JPG from '../../assets/images/sololaki/balcony2.jpg'

const image = {
  props: {
    minWidth: `${800 / 16}em`,
    position: 'relative',
    minHeight: `${400 / 16}em`,
    padding: '0',
    '@mobileL': {
      // minWidth: `${400 / 16}em`,
      minHeight: `${300 / 16}em`,
      minWidth: '90%'
    },
    '@mobileS': { minWidth: '100%' },
    css: {
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
}

const texts = {
  proto: Box,
  props: {
    margin: 'E 0 0 0',
    // fontWeight: '400',
    flexFlow: 'column',
    maxWidth: `${750 / 16}em`,
    fontSize: 'A',
    '@mobileS': {
      padding: '0 D1 0 D1',
      gap: 'Y2',
      width: `${430 / 16}em`
    },
    css: {
      textAlign: 'center',
      letterSpacing: '.2px'
    }
  },
  ...[
    { text: 'apartments are designed to match your mood' },
    { text: 'create own atmosphere regardless of trip reason' },
    {
      proto: Box,
      props: { margin: 'A2 0 0 0' },
      text: 'you are special for us'
    }
  ]
}

const props = {
  width: '100%',
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'center flex-start',
  margin: '0 auto',
  gap: 'Z',
  // fontWeight: '300',
  css: {
    marginTop: `${200 / 16}em`,
    marginBottom: `${200 / 16}em`,
    // textTransform: 'uppercase',
    '@media only screen and (max-width: 1366px)': { marginTop: `${75 / 16}em` }
  }
}
export const Entrence = {
  props,

  image,
  texts
}
