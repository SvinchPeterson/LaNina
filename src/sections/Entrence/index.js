'use strict'
import { SectionTitle } from '../../components'
import VERANDA_JPG from '../../assets/images/sololaki/veranda.jpg'

const image = {
  props: {
    minWidth: `${950 / 16}em`,
    position: 'relative',
    minHeight: `${550 / 16}em`,
    padding: '0',
    '@tabletL': { minWidth: '100%' },
    '@mobileL': {
      minHeight: `${450 / 16}em`,
      minWidth: '100%'
    },
    '@mobileS': { minWidth: '100%' },
    style: {
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
    '@mobileS': { padding: '0 A' },

    title: {
      text: 'mission',
      padding: '0 0 A 0',
      fontSize: `${14 / 16}em`,
      fontWeight: '900',
      style: {
        textTransform: 'uppercase',
        fontStyle: 'italic'
      },
      '@mobileM': { padding: '0 0 A 0' }
    },
    p: {
      flexFlow: 'column',
      gap: 'X',
      color: 'black .8',
      style: { fontStyle: 'italic' },
      '@mobileM': {
        maxWidth: 'G2',
        gap: 'Y'
      },
      '@mobileS': {
        fontSize: `${14.7 / 16}em`
      }
    }
  },

  title: {
    extend: SectionTitle,
    props: 'match'
  },
  p: {
    tag: 'p',
    ...[
      '"Providing remarkable lodging facilities and services to our guests.',
      {
        text: 'Emphasizing on customer service and creating an unforgettable in-home experience."',
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
  gap: 'C2',
  style: {
    marginTop: `${200 / 16}em`,
    marginBottom: `${350 / 16}em`,
    '@media only screen and (max-width: 1366px)': { marginTop: `${0 / 16}em`, marginBottom: `${250 / 16}em` }
  }
}
export const Entrence = {
  tag: 'section',
  props,

  image,
  missions
}
