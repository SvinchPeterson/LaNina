'use strict'

import { Paragraph } from '../../components'

import { missionTextEng } from '../../texts/residence'

import VERANDA_JPG from '../../assets/images/residence/sololaki/veranda.jpg'

const props = {
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'center flex-start',
  gap: 'B2',
  margin: 'G - E -',
  width: 'fit-content',
  alignSelf: 'center',
  '@maxTabletL': { fontSize: `${14 / 16}em` },
  '@maxMobileL': {
    width: '100%',
    margin: 'F2 - F -',
  },
  image: {
    minWidth: `H2`,
    minHeight: `H1`,
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
    '@minTabletL': { style: { backgroundAttachment: 'fixed' }},
    '@maxMobileL': {
      minWidth: `100%`,
      minHeight: 'H',
      round: '0'
    },
    '@maxMobileS': { minHeight: 'G' },
    style: {
      backgroundRepeat: 'no-repeat',
      zIndex: '2',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    },
  },

  paragraph: {
    minWidth: `H3`,
    padding: 'C2 C C C',
    textAlign: 'center',
    margin: '-E1 - - -',
    background: 'cream',
    round: 'A A 0 0',
    align: 'center center',
    gap: 'Z',
    '@maxMobileL': {
      minWidth: '80%',
      maxWidth: '80%'
    },
    '@maxMobileS': {
      minWidth: '90%',
      maxWidth: '90%',
      padding: 'C2 B1 C B1',
      margin: '-D1 - - -',
    },
    zIndex: '30',
    position: 'relative',
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'C 100%',
      background: 'cream',
      bottom: '-B',
    },

    style: {
      fontStyle: 'italic',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px -20px 30px'
    },
    title: {
      fontSize: 'F',
      '@maxMobileM': { fontSize: 'F' }
    },
    p: {
      maxWidth: 'H',
      '@maxMobileL': { maxWidth: 'G3' }
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
