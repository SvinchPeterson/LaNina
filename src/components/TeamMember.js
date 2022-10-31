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
      // backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      // borderTopLeftRadius: '150px',
      // borderTopRightRadius: '150px'
    }
  },

  caption: {
    text: 'creative leader',
    position: 'absolute',
    right: '-A1',
    top: 'X',
    style: {
      writingMode: 'vertical-lr',
      letterSpacing: '1px',
      display: 'none'
    }
  },

  paragraph: {
    flow: 'column',
    padding: '- A1 - -',
    alignItems: 'flex-end',
    title: {
      text: 'Alex Smith',
      fontWeight: '700',
      fontSize: 'A'
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
