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
  height: 'fit-content',
  flow: 'column',
  gap: 'C',
  style: { transition: 'max-height .5s ease-in-out, padding-top .5s ease-in-out' },

  articleContainer: {
    boxSizing: 'border-box',
    flow: 'column',
    gap: 'B',
    position: 'relative',
    style: {
      overflowY: 'hidden',
      '::-webkit-scrollbar': { display: 'none' }
      // '@media only screen and (min-width: 1280px)': { maxHeight: `${120 / 16}em` }
    },

    childProps: {
      flow: 'column',
      gap: '0',
      padding: '- - Z -',
      ':not(:last-child)': { borderBottom: '.5px solid black' },

      title: {
        color: 'black',
        fontSize: 'B',
        textTransform: 'capitalize',
        padding: '- - Z2 -',
        fontWeight: '700'
        // '@mobileXS': { fontSize: `A` }
      },

      paragraphs: {
        flow: 'column',
        gap: 'A',

        childProps: {
          fontSize: `${17 / 16}em`,
          maxWidth: `${600 / 17}em`,
          color: 'black .7',
          fontWeight: '400',
          style: {
            letterSpacing: '.38px',
            span: { color: 'black', fontWeight: 700 }
          }
        }
      },

      list: {
        flow: 'column',
        gap: 'Y2',
        color: 'black',
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
            fontSize: `${18 / 16}em`,
            color: 'black .85',
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
