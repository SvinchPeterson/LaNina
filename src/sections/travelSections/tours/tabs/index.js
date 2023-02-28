'use strict'

import { Flex } from 'smbls'

import { HorArrowsCreamBor } from '../../../../components'

import { tabsContent } from './tabsContent'

function sideScroll (element, direction, speed, distance, step) {
  var scrollAmount = 0
  var slideTimer = setInterval(function () {
    if (direction === 'left') {
      element.scrollLeft -= step
    } else {
      element.scrollLeft += step
    }
    scrollAmount += step
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer)
    }
  }, speed)
}

const title = {
  tag: 'h4',
  text: 'tours'
}

const navArrows = {
  extend: HorArrowsCreamBor,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'left', 10, 300, 10)
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          // const { tabs } = element.parent.parent.parent.content
          const content = document.getElementById('tabsContent')
          sideScroll(content, 'right', 10, 300, 10)
        }
      }
    }
  ]
}

const props = {
  position: 'relative',
  // maxWidth: '80%',
  height: 'fit-content',
  flow: 'column',
  gap: '0',
  style: { overflowX: 'hidden' },

  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% H1',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    // background: 'red',
    zIndex: '2',
    background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 0%,rgba(15, 49, 61, 0) 100%)'
  },

  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: '100% H',
    top: '0',
    right: '0',
    zIndex: '2',
    pointerEvents: 'none',
    background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 0%,rgba(15, 49, 61, 0) 100%)'
  },

  title: {
    color: 'cream2',
    zIndex: '5',
    fontSize: 'F',
    padding: '- - Z B2',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: `${-3 / 40}em`,
    alignSelf: 'flex-start'
  },

  navArrows: {
    zIndex: '5',
    alignSelf: 'flex-end',
    padding: 'C E2 - -'
  }
}

export const tabs = {
  extend: Flex,
  props,

  title,
  tabsContent,
  navArrows
}
