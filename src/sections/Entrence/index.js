'use strict'
import { SectionTitle } from '../../components'
import VERANDA_JPG from '../../assets/images/sololaki/veranda.jpg'

const image = {
  props: {
    minWidth: `${950 / 16}em`,
    position: 'relative',
    minHeight: `${550 / 16}em`,
    padding: '0',
    '@mobileL': {
      minHeight: `${450 / 16}em`,
      minWidth: '100%'
    },
    '@mobileS': { minWidth: '100%' },
    css: {
      flex: '1',
      backgroundAttachment: 'fixed',
      backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .8)), url(' + VERANDA_JPG + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      zIndex: 2,
      backgroundPosition: 'bottom 200px center',
      overflow: 'hidden',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        backgroundPosition: 'bottom 0px center',
        backgroundSize: 'cover',
        backgroundImage: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .55)), url(' + VERANDA_JPG + ')'
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

const missions = {
  props: {
    padding: 'D A A C',
    minWidth: `${950 / 16}em`,
    margin: '0 auto',
    css: { alignSelf: 'flex-start' },
    '@mobileM': {
      minWidth: 'fit-content',
      margin: '0 auto 0 0'
    },
    '@mobileS': { padding: 'D A A B1' },

    title: {
      text: 'mission',
      padding: '0 0 A 0',
      fontSize: `${13 / 16}em`,
      fontWeight: '900',
      css: { textTransform: 'uppercase' },
      '@mobileM': { padding: '0 0 A 0' }
    },
    p: {
      flexFlow: 'column',
      gap: 'Y',
      fontSize: `${14.5 / 16}em`,
      color: 'black .8',
      '@mobileM': {
        maxWidth: 'G2'
      },
      '@mobileS': { maxWidth: 'G1' }
    }
  },

  title: {
    proto: SectionTitle,
    props: 'match'
  },
  p: {
    tag: 'p',
    ...[
      'Providing remarkable lodging facilities and services to our guests.',
      {
        text: 'Emphasizing on customer service and creating an unforgettable in-home experience.',
        props: { maxWidth: `${460 / 16}em` }
      }
    ]
  }
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
    marginBottom: `${350 / 16}em`,
    // textTransform: 'uppercase',
    '@media only screen and (max-width: 1366px)': { marginTop: `${75 / 16}em`, marginBottom: `${250 / 16}em` }
  }
}
export const Entrence = {
  tag: 'section',
  props,

  image,
  missions
  // texts
}
