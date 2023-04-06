'use strict'

import { Paragraph } from '../../components'

import { missionTextEng } from '../../texts/residence'

import VERANDA_JPG from '../../assets/images/residence/sololaki/veranda.jpg'

const props = {
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'flex-start flex-start',
  gap: 'A2',
  margin: 'F1 - - -',
  width: 'fit-content',
  alignSelf: 'center',
  // '@mobileL': { margin: 'E2 - - -', gap: 'B2'},
  image: {
    minWidth: `H3`,
    minHeight: `G3`,
    position: 'relative',
    round: 'G2 G2 0 0',
    background: 'url(' + VERANDA_JPG + ')',
    backgroundSize: '100% 100%',
    backgroundPosition: `center center`,
    overflow: 'hidden',
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100%',
      background: 'naviGreen .35'

    },
    // '@mobileL': {},
    // '@mobileM': { round: '0' },
    style: {
      '@media only screen and (min-width: 1281px)': { backgroundAttachment: 'fixed !important' },
      backgroundRepeat: 'no-repeat',
      zIndex: '2',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },

    // '@tabletM': { minWidth: `H3`, minHeight: 'G2'},
    // '@mobileL': { minWidth: `H`, minHeight: 'G'},
    // '@mobileM': { minWidth: `G2`, minHeight: 'F2'},
    // '@mobileS': { minWidth: `G1`, minHeight: 'F1'},
    // '@mobileXS': { minWidth: `G`, minHeight: 'F1'},

  },

  paragraph: {
    gap: 'X1',
    maxWidth: `${500 / 16}em`,
    margin: '- - - Y',
    // textAlign: 'right',
    // style: { fontStyle: 'italic' },
    // '@tabletM': { maxWidth: 'H' },
    // '@mobileL': {
    //   textAlign: 'center',
    //   padding: '- C',
    //   style: {fontStyle: 'normal'}
    // },

    title: {
      fontSize: 'B',
      letterSpacing: `${-1 / 19}em`,
      // '@tabletM': { fontSize: 'C' }
    },
    p: {
      fontSize: `${15 / 16}em`,
      gap: 'V',
      // '@tabletM': { fontSize: 'A' },
      // '@mobileS': { fontSize: `${14 / 16}em`},
    }
  }
}

export const mission = {
  tag: 'section',
  props,
  image: {},
  paragraph: {
    extend: Paragraph,
    title: { text: 'mission' },
    p: { extend: missionTextEng }
  }
}
