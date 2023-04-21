'use strict'
import { Flex } from 'smbls'
import { NavArrowsBlack } from '../../../components'

import { feeds } from './feeds'

const navArrows = {
  extend: NavArrowsBlack,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: -feedbacks.node.clientWidth
          })
        }
      }
    },
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: feedbacks.node.clientWidth
          })
        }
      }
    }
  ]
}

const props = {
  flow: 'column',
  alignSelf: 'center',
  align: 'center',
  gap: 'Y2',
  margin: 'F1 -',
  width: `${350 / 16}em`,
  '@maxTabletL': {
    fontSize: `${14 / 16}em`,
    margin: 'E -',
  },
  '@maxMobileXS': { width: `${320/ 16}em` },


  title: {
    fontWeight: '400',
    fontSize: 'A',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    letterSpacing: '10px',
    zIndex: '100',
    opacity: '.85',
    padding: '- - V Z'
  },

  content: {
    position: 'relative',
    width: '100%',
    maxWidth: `100%`,
    overflow: 'hidden',
    round: 'B2',
    border: 'solid, black .35',
    borderWidth: '.3px'
    // border: '3px solid red'
  },

  navArrows: {
    gap: 'Z',
    margin: '- - - -',
    ':after': { display: 'none' },
    childProps: {
      opacity: '1',
      border: 'none',
      arrow: { boxSize: ' Z2' },
    }
  }
}

export const feedBacks = {
  tag: 'section',
  extend: Flex,
  props,

  title: { tag: 'h4', text: 'feedbacks' },
  content: { feedbacks: { extend: feeds } },
  navArrows
}
