'use strict'

import { Paragraph } from '../../components'

import { missionTextEng } from '../../texts/residence'

import VERANDA_JPG from '../../assets/images/residence/sololaki/veranda.jpg'

const props = {
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'center flex-start',
  gap: 'B2',
  margin: 'F1 - - -',
  width: 'fit-content',
  alignSelf: 'center',
  '@maxTabletM': { fontSize: `${15 / 16}em` },
  '@maxMobileM': { margin: 'E2 - - -', },
  '@maxMobileO': { minWidth: `100%` },
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
    '@minTabletL': { style: {backgroundAttachment: 'fixed' }},
    '@maxMobileL': { minWidth: `H` },
    '@maxMobileS': { minWidth: `G3` },
    '@maxMobileO': {
      minWidth: `100%`,
      minHeight: 'G',
      round: '0'
    },
    style: {
      backgroundRepeat: 'no-repeat',
      zIndex: '2',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },

  },

  paragraph: {
    gap: 'X1',
    maxWidth: `${500 / 16}em`,
    textAlign: 'center',
    style: { fontStyle: 'italic' },
    '@maxMobileL': { maxWidth: `H` },
    '@maxMobileS': { maxWidth: `G2` },
    '@maxMobileO': {padding: '- Z1' },
    title: {
      fontSize: 'B',
      letterSpacing: `${-1 / 19}em`,
    },
    p: {
      fontSize: `${15 / 16}em`,
      gap: 'V'
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
