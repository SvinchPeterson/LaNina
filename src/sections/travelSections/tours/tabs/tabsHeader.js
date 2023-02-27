'use strict'

import { Flex } from 'smbls'

import { HorArrowsWhiteBor } from '../../../../components'

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

const props = {
  lineHeight: '0',
  borderBottom: '1px solid silver',
  position: 'relative',
  align: 'flex-end space-between',
  padding: '- - Z -',

  title: {
    text: 'tours',
    fontSize: 'A',
    fontWeight: '700',
    textTransform: 'uppercase',
    zIndex: '55',
    color: 'white',
    style: { letterSpacing: '-1px' }
  },
  arrows: {
    gap: 'A1',
    zIndex: '100',
    ':after': { display: 'none' },
    childProps: {
      boxSize: 'D D',
      zIndex: '55',
      borderRadius: '100%',
      border: '1.5px solid gray',
      arrow: { fontSize: 'A' },
      icon: {
        fontSize: ''
      }
    }
  }
}

export const tabsHeader = {
  extend: Flex,
  props,

  title: { tag: 'h3' },

  arrows: {
    extend: HorArrowsWhiteBor,
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
}
