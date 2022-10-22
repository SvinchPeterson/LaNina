'use strict'
import { Flex } from 'smbls'

const placesList = {
  extend: Flex,
  title: { tag: 'h5' },
  list: {
    extend: Flex,
    childExtend: { tag: 'span' }
  }
}

const props = {
  position: 'relative',
  ':after': {
    content: '""',
    boxSize: '0px 100%',
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    // boxShadow: '0px 0px 50px 30px #283d4f',
    '@tabletM': { display: 'block' }
  },
  '@mobileXS': { padding: '- X2' },

  articleContainer: {
    boxSizing: 'border-box',
    padding: '- - C1 -',
    style: {
      overflowY: 'auto',
      '@media only screen and (min-width: 1280px)': { maxHeight: `${350 / 16}em` }
    },

    childProps: {
      flow: 'column',
      gap: '0',

      paragraphs: {
        flow: 'column',
        gap: 'A',

        childProps: {
          fontSize: `${15.5 / 16}em`,
          maxWidth: `${500 / 15.5}em`,
          color: 'cream2 .75',
          fontWeight: '400',
          '@tabletM': { maxWidth: 'H' },
          // '@mobileL': { maxWidth: 'G3' },
          '@mobileM': { maxWidth: 'G3' },
          '@mobileS': { maxWidth: 'G1' },
          style: {
            span: { color: 'rgba(248, 241, 227, 1)', fontWeight: 700 },
            '@media only screen and (max-width: 400px)': { fontSize: `${13.5 / 16}em` }
          }
          // span: { fontWeight: '700', color: 'cream2 1' }
        }
      },

      list: {
        flow: 'column',
        gap: 'Y2',
        color: 'cream2',
        padding: 'A - - -',

        title: {
          text: 'Places',
          fontWeight: '700',
          fontSize: 'Z',
          textTransform: 'uppercase'
        },

        list: {
          flow: 'column',
          gap: 'X',
          padding: '- - - Y',
          childProps: {
            fontSize: 'Z',
            color: 'cream2 .75',
            style: { letterSpacing: '.5px' }
          }
        }
      }
    }
  }
}

export const TourArticle = {
  props,
  extend: Flex,

  class: {
    show: (element, state) => state.activeDescription
      ? {
        '@media only screen and (max-width: 1280px)': {
          maxHeight: `${250 / 16}em`,
          overflowY: 'auto',
          paddingTop: `${35 / 16}em`
        }
      }
      : {
        '@media only screen and (max-width: 1280px)': {
          maxHeight: `0`,
          overflowY: 'hidden'
        }
      }
  },

  articleContainer: {
    childExtend: {
      extend: Flex,
      title: { },
      paragraphs: {
        extend: Flex,
        childProps: { tag: 'p' }
      },
      list: { extend: placesList }
    }
  }
}
