'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { residenceTextEng } from '../../texts/residence'

import BB_JPG from '../../assets/images/residence/sololaki/b.jpg'

const props = {
  width: '100%',
  padding: 'E2 - - -',
  margin: 'D1 - - -',
  align: 'center center',
  position: 'relative',
  boxSizing: 'content-box',

  imageContainer: {
    alignSelf: 'center',
    width: 'I',
    height: 'H2',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',

    '@tabletS': {
      width: 'H1'

    },

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
        '@media only screen and (min-width: 1281px)': { backgroundAttachment: 'fixed' },
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0px 0px 500px 60px rgba(0, 0, 0, .9)'
      }
    }
  },

  paragraph: {
    position: 'absolute',
    margin: '- - -H2 -F2',
    background: 'cream2',
    gap: 'Z2',
    padding: 'C2 E - D',
    zIndex: '5',
    round: '0 F2 0 0',
    boxSizing: 'border-box',
    style: { float: 'left' },
    '@tabletM': { margin: '- - -I -F2' },
    '@tabletS': {
      margin: '- - -I -E3',
      padding: 'C2 E - D2'
    },
    p: {
      maxWidth: 'H',

      '@tabletS': { width: 'G2' }
    }
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
