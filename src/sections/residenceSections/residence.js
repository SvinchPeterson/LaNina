'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { residenceTextEng } from '../../texts/residenceTexts'

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
      background: 'black .4'
    },

    image: {
      boxSize: '100% 100%',
      backgroundImage: 'url(' + BB_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      style: {
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0px 0px 500px 60px rgba(0, 0, 0, .9)'
      }
    }
  },

  paragraph: {
    position: 'absolute',
    background: 'cream2',
    padding: 'D2 D1 - B',
    left: '0',
    bottom: '-E',
    alignSelf: 'flex-start',
    zIndex: '5',
    round: '0 F2 0 0',
    maxWidth: 'H1'
  }
}

export const residence = {
  tag: 'section',
  extend: Flex,
  attr: { id: 'residence' },
  props,

  imageContainer: { image: {} },

  paragraph: {
    extend: Paragraph,
    title: { text: 'residence' },
    p: { extend: residenceTextEng }
  }
}
