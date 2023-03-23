'use strict'
import { Flex } from 'smbls'
import { HorArrowsBlack } from '../../../components'

import { feeds } from './feeds'

const navArrows = {
  extend: HorArrowsBlack,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: -feedbacks.node.clientWidth - 16
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
            left: feedbacks.node.clientWidth + 16
          })
        }
      }
    }
  ]
}

const props = {
  width: '100%',
  flow: 'column',
  alignSelf: 'center',
  align: 'center',
  gap: 'Y2',
  padding: 'F3 - E2 -',
  maxWidth: `${350 / 16}em`,

  title: {
    fontWeight: '700',
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
    overflow: 'hidden'
  },

  navArrows: {
    gap: 'B1',
    margin: 'A - - -',
    ':after': { display: 'none' },
    childProps: { arrow: { boxSize: ' Z1' }, opacity: '1' }
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
