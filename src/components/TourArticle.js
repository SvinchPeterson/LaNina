'use strict'
import { Flex } from 'smbls'

const placesList = {
  extend: Flex,
  title: { tag: 'h5' },
  list: {
    extend: Flex,
    childExtend: {
      extend: Flex,
      tag: 'span'
    }
  }
}

const props = {
  position: 'relative',
  boxSizing: 'border-box',
  height: 'fit-content',
  flow: 'column',
  gap: 'C',
  style: { transition: 'max-height .5s ease-in-out, padding-top .5s ease-in-out' },

  articleContent: {
    boxSizing: 'border-box',
    flow: 'column',
    gap: 'B',
    position: 'relative',
    style: {
      overflowY: 'hidden',
      '::-webkit-scrollbar': { display: 'none' }
    },

    paragraphs: {
      flow: 'column',
      gap: 'A',
      border: 'solid, cream2 .55',
      borderWidth: '0 0 .75px 0',
      padding: '- - Z -',
      childProps: {
        fontSize: `1em`,
        maxWidth: `${450 / 16}em`,
        color: 'cream2 .65',
        fontWeight: '400',
        letterSpacing: `${0.38 / 16}em`,
        style: { span: { fontWeight: '700', color: 'rgba(248, 241, 227, 1)' } }
      }
    },

    tourPlaces: {
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
          align: 'center flex-start',
          fontSize: `${15 / 16}em`,
          color: 'cream2 .85',
          letterSpacing: `${0.5 / 16}em`,
          gap: 'Y2',
          ':before': {
            content: '""',
            boxSize: 'V1 V1',
            background: 'cream2',
            borderRadius: '100%'
          }
        }
      }
    }
  }
}

export const TourArticle = {
  props,
  extend: Flex,

  articleContent: {
    paragraphs: {
      extend: Flex,
      childExtend: { tag: 'p' }
    },
    tourPlaces: { extend: placesList }
  }
}
