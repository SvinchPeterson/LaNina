'use strict'

import { Paragraph } from '../../components'

import { missionTextEng } from '../../texts/residence'

import VERANDA_JPG from '../../assets/images/residence/sololaki/veranda.jpg'

const props = {
  width: '100%',
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'center flex-start',
  gap: 'D',
  margin: 'F1 - - -',
  '@mobileL': { margin: 'E2 - - -', gap: 'B2'},
  image: {
    minWidth: `I1`,
    minHeight: `H`,
    position: 'relative',
    round: 'A2',
    background: 'url(' + VERANDA_JPG + ')',
    backgroundSize: '100% 100%',
    backgroundPosition: `center center`,
    '@mobileL': {},
    '@mobileM': { round: '0' },
    style: {
      '@media only screen and (min-width: 1281px)': {   backgroundAttachment: 'fixed !important' },
      backgroundRepeat: 'no-repeat',
      zIndex: '2',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },

    '@tabletM': { minWidth: `H3`, minHeight: 'G2'},
    '@mobileL': { minWidth: `H`, minHeight: 'G'},
    '@mobileM': { minWidth: `G2`, minHeight: 'F2'},
    '@mobileS': { minWidth: `G1`, minHeight: 'F1'},
    '@mobileXS': { minWidth: `G`, minHeight: 'F1'},

  },

  paragraph: {
    gap: 'Z',
    maxWidth: 'H3',
    style: { fontStyle: 'italic' },
    '@tabletM': { maxWidth: 'H' },
    '@mobileL': {
      textAlign: 'center',
      padding: '- C',
      style: {fontStyle: 'normal'}
    },

    title: {
      fontSize: 'D',
      letterSpacing: '-1.5px',
      '@tabletM': { fontSize: 'C' }
    },
    p: {
      fontSize: 'B',
      gap: 'V',
      '@tabletM': { fontSize: 'A' },
      '@mobileS': { fontSize: `${14 / 16}em`},
    }
  }
}

export const mission = {
  tag: 'section',
  props,

  paragraph: {
    extend: Paragraph,
    title: { text: 'mission' },
    p: { extend: missionTextEng }
  },
  image: {}
}
