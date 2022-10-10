'use strict'

import { Flex } from 'smbls'
import PORTRAIT_JPG from '../assets/images/travel/portrait.png'

const image = {}

const paragraph = {
  extend: Flex,

  title: { tag: 'H5' },
  p: {}
}

const caption = { tag: 'caption' }

const props = {
  flow: 'column',
  position: 'relative',
  gap: 'Z',

  image: {
    boxSize: 'G F3',
    background: 'purple',
    backgroundImage: 'url(' + PORTRAIT_JPG + ')',
    style: {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  },

  caption: {
    text: 'creative leader',
    position: 'absolute',
    right: '-A1',
    top: 'X',
    style: {
      writingMode: 'vertical-lr',
      letterSpacing: '1px'
    }
  },

  paragraph: {
    flow: 'column',
    gap: 'Z',
    title: {
      text: 'Alex Smith',
      fontWeight: 'bold',
      padding: '0 0 X 0',
      style: { borderBottom: '1px solid rgba(0, 0, 0, .5)' }
    },
    p: {
      fontSize: `${14 / 16}em`,
      maxWidth: 'G',
      padding: '0 0 0 V',
      color: 'black .65',
      text: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.',
      style: { fontStyle: 'italic' }
    }
  }
}

export const TeamMember = {
  extend: Flex,
  props,

  image,
  caption,
  paragraph
}
