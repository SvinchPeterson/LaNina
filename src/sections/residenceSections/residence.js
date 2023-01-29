'use strict'

import { Flex } from 'smbls'

import { ResidenceText } from '../../texts'

import { Paragraph } from '../../components'
// import BB_JPG from '../assets/images/residence/sololaki/b.jpg'
import BB_JPG from '../../assets/images/residence/sololaki/b.jpg'

const props = {
  width: '70%',
  minHeight: '100%',
  gap: 'B',
  position: 'relative',
  maxWidth: '1440px',
  flow: 'column',
  margin: 'G auto',
  round: 'J J 0 0',
  // overflow: 'hidden',
  imageContainer: {
    alignSelf: 'center',
    boxSize: '100% 100%',
    position: 'relative',
    round: 'J J 0 0',
    overflow: 'hidden',
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .85), rgba(0, 0, 0, 1))'
    },

    image: {
      boxSize: '100% 100%',
      backgroundImage: 'url(' + BB_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      style: {
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  paragraph: {
    position: 'absolute',
    background: 'cream2',
    padding: 'D2 D2 - Y',
    left: '0',
    bottom: '-E',
    alignSelf: 'flex-start',
    zIndex: '5',
    round: '0 F2 0 0',
    fontSize: `${16 / 16}em`,
    style: { boxShadow: '0px 0px 300px 0px rgba(248, 241, 227, .2)' }
  }
}

export const residence = {
  tag: 'section',
  attr: { id: 'residence' },
  extend: Flex,
  props,

  imageContainer: {
    image: {}
  },
  paragraph: {
    extend: Paragraph,
    title: { text: 'residence' },
    p: { extend: ResidenceText }
  }
}
