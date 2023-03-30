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
  boxSizing: 'border-box',
  '@mobileL': {
    minHeight: '100%',
    padding: '0',
    margin: 'Y2 - B2 -',
  },

  imageContainer: {
    alignSelf: 'center',
    width: 'I',
    height: 'H2',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',
    '@tabletM': { width: 'H3' },
    '@tabletS': { width: 'H2' },
    '@mobileL': {
      boxSize: '100% 100%',
      round: '0',
      '&:before': {
        background: 'linear-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, .5), rgba(1, 57, 57, .65), rgba(1, 57, 57, .75), rgba(1, 57, 57, 1), rgba(1, 57, 57, 1))'
      }
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
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: 'D 100%',
      zIndex: '10',
      background: 'linear-gradient(to top, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
      bottom: '-2px',
      left: '0',
      pointerEvents: 'none',
      style: {
        display: 'none',
        '@media only screen and (max-width: 768px) and (max-height: 800px)': {
          display: 'block'
        }
      }
    },
    '@tabletM': { margin: '- - -I -F2' },
    '@tabletS': { margin: '- - -I -F' },
     '@mobileL': {
      margin: '0',
      round: '0',
      padding: '0 C',
      background: 'transparent',
      color: 'cream2',
      gap: '0',
    },
    '@mobileS': { padding: '0 B1'},

    style: {
      '@media only screen and (max-width: 768px) and (max-height: 800px)': {
        overflow: 'hidden',
        maxHeight: '400px'
      },
      '@media only screen and (max-width: 768px) and (max-height: 600px)': {
        maxHeight: '300px'
      }
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
      '@tabletM': {maxWidth: 'G2'},
      '@mobileL': { padding: 'A - A2 -' },
      style: {
        '@media only screen and (max-width: 768px) and (max-height: 800px)': {
          maxHeight: '350px',
          overflowY: 'auto'
        },
        '@media only screen and (max-width: 768px) and (max-height: 600px)': {
          maxHeight: '250px'
        }
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
