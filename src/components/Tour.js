'use strict'

import { Flex } from 'smbls'

import { TourGallery } from './TourGallery'
import { TourArticle } from './TourArticle'

const props = {
  gap: 'C1',
  alignItems: 'center',
  '@tabletS': {
    flow: 'column',
    gap: 'B'
  },

  gallery: {
    images: {
      '@mobileL': { boxSize: 'G H' },
      '@mobileM': { boxSize: 'F3 G3' },
      '@mobileS': { boxSize: 'F3 G1' },
      style: {
        '@media only screen and (max-width: 400px)': {
          width: '320px !important'
        },
        '@media only screen and (max-width: 350px)': {
          width: '300px !important'
        }
      }
    },

    footer: {
      '@mobileS': {
        width: '95%'
      }
    }

  },

  article: {
    articleContainer: {
      ':after': {
        content: '""',
        boxSize: '50px 100%',
        position: 'absolute',
        bottom: '0px',
        left: '0',
        background: 'linear-gradient(to top, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)'
      },
      '@tabletS': { display: 'none' }
    },
    button: {
      zIndex: '10',
      boxSize: 'C E1',
      cursor: 'pointer',
      fontSize: 'Z',
      fontWeight: '700',
      textTransform: 'uppercase',
      background: 'transparent',
      border: '1px solid black',
      round: 'Y2',
      more: {
        text: 'more',
        color: 'black',
        '@tabletS': { display: 'none' }
      },
      description: {
        text: 'description',
        display: 'none',
        color: 'black',
        '@tabletS': { display: 'block' }
      }
    }
  }
}

export const Tour = {
  extend: Flex,
  props,

  gallery: { extend: TourGallery },

  article: {
    extend: TourArticle,
    props: {
      articleContainer: {
        maxHeight: 'E1'
      }
    },

    articleContainer: {},
    button: {
      more: {},
      description: {}
    }
  }
}
