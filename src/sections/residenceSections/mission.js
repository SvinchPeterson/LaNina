'use strict'

import { Paragraph } from '../../components'

import { missionTextEng } from '../../texts/residenceTexts'

import VERANDA_JPG from '../../assets/images/residence/sololaki/veranda.jpg'

const props = {
  width: '100%',
  flexFlow: 'column',
  position: 'relative',
  flexAlign: 'center flex-start',
  gap: 'E',
  margin: 'F 0 G1 0',

  image: {
    minWidth: `I1`,
    minHeight: `H`,
    position: 'relative',
    round: 'C',
    background: 'url(' + VERANDA_JPG + ')',
    backgroundSize: 'contain',
    backgroundPosition: `center center`,
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      zIndex: '2',
      boxShadow: 'inset 0px 0px 2px .2px rgba(0, 0, 0, .7)'
    }
  },

  paragraph: {
    gap: 'Z',
    style: { fontStyle: 'italic' },
    maxWidth: 'H3',
    title: {
      fontSize: 'C',
      padding: '- - - Y1'
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
