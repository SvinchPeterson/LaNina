'use strict'

import { Paragraph } from '../../components'

import { wineTextEng } from '../../texts/residence'

import WINE_JPG from '../../assets/images/residence/sololaki/wine.jpg'

const props = {
  position: 'relative',
  flexAlign: 'center center',
  minHeight: '100%',
  margin: 'F1 0 D 0',

  image: {
    boxSize: `H1 H`,
    padding: '0',
    round: '0 0 G G',
    backgroundSize: 'contain',
    backgroundPosition: `center bottom ${100 / 16}em`,
    zIndex: '2',
    style: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundImage: 'radial-gradient(rgba(60,84, 72, .35), rgba(60,84, 72, .5)), url(' + WINE_JPG + ')'
    }
  },

  paragraph: {
    gap: 'Z',
    maxWidth: 'H1',
    position: 'absolute',
    background: 'cream2',
    margin: '-G -E2 0 0',
    padding: 'A2 E1 E D',
    round: '0 0 0 F',
    align: 'center flex-start',
    title: { fontSize: 'D' }
  }
}

export const wine = {
  tag: 'section',
  props,
  attr: { id: 'wine' },

  image: {},
  paragraph: {
    extend: Paragraph,
    title: { text: 'wine' },
    p: { extend: wineTextEng }
  }
}
