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
  style: {
    '@media only screen and (min-width: 1281px) and (max-height: 820px)': {
      marginTop: `${50 / 16}em`
    }
  },
  image: {
    minWidth: `I1`,
    minHeight: `H`,
    position: 'relative',
    round: 'C',
    background: 'url(' + VERANDA_JPG + ')',
    backgroundSize: '100% 100%',
    backgroundPosition: `center center`,
    style: {
      '@media only screen and (min-width: 1281px)': { backgroundAttachment: 'fixed !important' },
      backgroundRepeat: 'no-repeat',
      zIndex: '2',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },
    '@tabletM': { minWidth: `I`, minHeight: `G3` },
    '@tabletS': { minWidth: `H3`, minHeight: `G3` }
  },

  paragraph: {
    gap: 'Z',
    maxWidth: 'H3',
    style: { fontStyle: 'italic' },
    '@tabletM': { maxWidth: 'H1', textAlign: 'center' },

    title: {
      fontSize: 'D',
      letterSpacing: '-1.5px'
    },
    p: {
      fontSize: 'B',
      gap: 'V'
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
