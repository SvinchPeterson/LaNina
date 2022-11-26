'use strict'

import { Flex, Img } from 'smbls'

import DOWN_ARROW_PNG from '../assets/icons/downArrow-cream.png'
import { TourGallery } from './TourGallery'
import { TourArticle } from './TourArticle'

const props = {
  gap: 'C1',
  alignItems: 'center',

  article: {
    articleContainer: {
      ':after': {
        content: '""',
        boxSize: '50px 100%',
        position: 'absolute',
        bottom: '0px',
        left: '0',
        // zIndex: '10',
        background: 'linear-gradient(to top, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)'
      }
    },
    button: {
      text: 'more',
      zIndex: '10',
      boxSize: 'C E1',
      cursor: 'pointer',
      fontSize: 'Z',
      fontWeight: '700',
      textTransform: 'uppercase',
      background: 'transparent',
      border: '1px solid black',
      round: 'Y2'
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
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true })
        }
      }
    }
  }
}
