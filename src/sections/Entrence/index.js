'use strict'
import { Box } from 'smbls'
import ENTRENCE_JPG from '../../assets/images/sololaki/balcony2.jpg'

const yardEntrence = {
  props: {
    minWidth: `${700 / 16}em`,
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
    maxWidth: `${750 / 16}em`,
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
    fontSize: `${13 / 16}em`,
    lineHeight: `${25 / 13.5}em`,
    '> div': {
      lineHeight: `${25 / 13.5}em`
    },
    '@media media only screen and (max-width: 480px)': {
      fontSize: `${12.5 / 16}em`,
      textAlign: 'left'
    }
  },
  // text: `Each of our guests is valued and special.
  // if you’re looking for a comfortable vacation rental, regardless of why you are visiting Tbilisi - for a short leisure trip, sightseeing holidays, an extended stay or business trip, - book now with us!`
  ...[
    { text: 'apartments are designed to match your mood' },
    { text: 'create own atmosphere regardless of trip reason' },
    {
      proto: Box,
      props: { margin: 'A2 0 0 0' },
      text: 'you are special for us'
    }
    // { text: 'apartments are designed to match your mood' },
    // { text: 'create own atmosphere in any kind of trip' },
    // {
    //   proto: Box,
    //   props: { margin: 'A2 0 0 0' },
    //   text: 'you are special for us'
    // }
  ]
}

export const Entrence = {
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
