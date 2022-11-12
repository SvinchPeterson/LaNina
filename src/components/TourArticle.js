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
  boxSizing: 'border-box',
  style: { transition: 'max-height .5s ease-in-out, padding-top .5s ease-in-out' },
  ':before': {
    content: '""',
    boxSize: '50px 100%',
    position: 'absolute',
    top: '0px',
    left: '0',
    zIndex: '3',
    background: 'linear-gradient(to bottom, rgba(30, 98, 123, 1) 0%,rgba(30, 98, 123, 0) 100%)',
    '@tabletM': { display: 'block' }
  },
  ':after': {
    content: '""',
    boxSize: '50px 100%',
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    background: 'linear-gradient(to top, rgba(30, 98, 123, 1) 0%,rgba(30, 98, 123, 0) 100%)',
    '@tabletM': { display: 'block' }
  },
  '@tabletM': { padding: '- A' },

  articleContainer: {
    boxSizing: 'border-box',
    padding: 'C2 - C1 -',
    flow: 'column',
    gap: 'B',
    '@tabletM': { padding: 'A - C1 -' },
    style: {
      overflowY: 'auto',
      scrollBehavior: 'smooth',
      '::-webkit-scrollbar': { display: 'none' },
      '@media only screen and (min-width: 1280px)': { maxHeight: `${350 / 16}em` }
    },

    childProps: {
      flow: 'column',
      gap: '0',
      padding: '- - Z -',
      ':not(:last-child)': { borderBottom: '.5px solid gray' },

      title: {
        color: 'cream2 .55',
        fontSize: 'B',
        textTransform: 'capitalize',
        padding: '- - Z2 -',
        fontWeight: '700',
        '@mobileXS': { fontSize: `A` }
      },

      paragraphs: {
        flow: 'column',
        gap: 'A',

        childProps: {
          fontSize: `${20 / 16}em`,
          maxWidth: `${500 / 15.5}em`,
          color: 'cream2 .7',
          fontWeight: '400',
          '@mobileL': { maxWidth: 'H' },
          '@mobileM': { maxWidth: 'G3' },
          '@mobileS': { fontSize: `${15 / 16}em`, maxWidth: 'G2' },
          // '@mobileS': { maxWidth: 'G2' },
          style: {
            letterSpacing: '.38px',
            span: { color: 'rgba(248, 241, 227, 1)', fontWeight: 700 },
            '@media only screen and (max-width: 400px)': { fontSize: `${13.5 / 16}em` }
          }
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
            fontSize: `${20 / 16}em`,
            color: 'cream2 .85',
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

  // class: {
  //   show: (element, state) => state.activeDescription
  //     ? {
  //       '@media only screen and (max-width: 1280px)': {
  //         maxHeight: `${250 / 16}em`,
  //         overflowY: 'auto',
  //         paddingTop: `${35 / 16}em`
  //       }
  //     }
  //     : {
  //       '@media only screen and (max-width: 1280px)': {
  //         maxHeight: `0`,
  //         overflowY: 'hidden'
  //       }
  //     }
  // },

  articleContainer: {
    extend: Flex,
    childExtend: {
      extend: Flex,
      title: { tag: 'h3' },
      paragraphs: {
        extend: Flex,
        childProps: { tag: 'p' }
      },
      list: { extend: placesList }
    }
  }
}
