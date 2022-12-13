'use strict'
import { Flex } from 'smbls'
import { NavHorizontalArrowsBlack } from '../../../components'

import { feeds } from './feeds'

const navArrows = {
  extend: NavHorizontalArrowsBlack,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: -450
          })
        }
      }
    },
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: 450

          })
        }
      }
    }
  ]
}

const header = {
  props: {
    flexAlign: 'center space-between',
    width: '83%',
    margin: '- - A -',
    alignSelf: 'center',
    zIndex: '20',
    border: 'solid, silver',
    borderWidth: '0 0 1px 0',
    padding: '- - Z -',
    navArrows: {
      ':after': { display: 'none' },
      childProps: { arrow: { boxSize: ' A' } }
    }
  },

  title: {
    tag: 'caption',
    text: 'Feedbacks',
    props: {
      fontWeight: '700',
      fontSize: 'B',
      style: {
        whiteSpace: 'nowrap',
        letterSpacing: '.3px',
        zIndex: '100',
        opacity: '.85'
      }
    }
  },

  navArrows
}

const props = {
  maxWidth: '1440px',
  width: '100%',
  flow: 'column',
  alignSelf: 'center',
  padding: 'F2 - E2 -',
  header: {
    navArrows: { ':after': { display: 'none' } }
  },
  content: {
    position: 'relative',
    ':before': {
      content: '""',
      boxSize: '100% D',
      position: 'absolute',
      left: '0px',
      top: 0,
      zIndex: '2',
      background: 'linear-gradient(to right, rgba(229, 249, 252, 1) 0%, rgba(229, 249, 252, 0) 100%)'
    },
    ':after': {
      content: '""',
      boxSize: '100% D',
      position: 'absolute',
      right: '0',
      top: '0',
      background: 'linear-gradient(to left, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)',
      zIndex: '2'
    },

    feedbacks: {

    }
  }
}

export const feedBacks = {
  tag: 'section',
  extend: Flex,
  props,

  heading: { extend: header },
  content: { feedbacks: { extend: feeds } }
}
