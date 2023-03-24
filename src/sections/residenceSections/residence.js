'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { residenceTextEng } from '../../texts/residence'

import BB_JPG from '../../assets/images/residence/sololaki/b.jpg'

const props = {
  width: '100%',
  padding: 'E2 - - -',
  margin: 'D2 - B2 -',
  align: 'center center',
  position: 'relative',
  boxSizing: 'content-box',
  '@mobileL': {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100%',
    padding: '0',
    margin: 'Y2 - - -'
  },

  imageContainer: {
    alignSelf: 'center',
    width: 'I',
    height: 'H2',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',

    '@tabletS': { width: 'H1' },
    '@mobileL': {
      boxSize: '100% 100%',
      round: '0',
      margin: '- - - -',
      '&:before': { background: 'linear-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, 1))' }
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
    style: {

    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'D 100%',
      background: 'linear-gradient(to top, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
      bottom: '0',
      left: '0',
      display: 'none',
      '@mobileL': { display: 'none' }
    },
    '@tabletM': { margin: '- - -I -F2' },
    '@tabletS': {
      margin: '- - -I -E3',
      padding: 'C2 E - D2'
    },
    '@mobileL': {
      margin: '0',
      round: '0',
      padding: '0 C',
      background: 'transparent',
      color: 'cream2',
      gap: '0'
    },
    title: {
      '@mobileL': {
        border: 'solid, cream2 .7',
        borderWidth: '0 0 1px 0',
        maxWidth: '90%'
      }
    },

    p: {
      maxWidth: 'H',
      '@tabletS': { maxWidth: 'G2' },
      '@mobileL': {
        maxWidth: 'H'
      }
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
