'use strict'
import { SectionTitle } from '../../components'
import VERANDA_JPG from '../../assets/images/residence/sololaki/veranda.jpg'

const image = {
  props: {
    minWidth: `I1`,
    minHeight: `H1`,
    position: 'relative',
    padding: '0',
    background: 'radial-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .8)), url(' + VERANDA_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: `bottom ${200 / 16}em center`,
    '@tabletL': {
      minWidth: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom 0px center'
    },
    '@mobileL': {
      minHeight: 'H',
      minWidth: '100%'
    },
    style: {
      flex: '1',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      zIndex: 2,
      overflow: 'hidden',
      '@media only screen and (max-width: 1366px)': { backgroundAttachment: 'initial' }
    }
  }
}

const missions = {
  props: {
    '@mobileS': { padding: '0 A' },
    title: {
      text: 'mission',
      padding: '0 0 A 0',
      fontSize: `Z`,
      fontWeight: '700',
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
      '@mobileS': { fontSize: 'Z' }
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
        props: { maxWidth: 'H' }
      }
    ]
  }
}

const props = {
  width: '100%',
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'center flex-start',
  gap: 'C2',
  margin: 'F1 0 G1 0',
  '@tabletL': { margin: '0 0 F3 0' }
}
export const Entrence = {
  tag: 'section',
  props,

  image,
  missions
}
