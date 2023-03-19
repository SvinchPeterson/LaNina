'use strict'

import { Flex } from 'smbls'

import { ContactItems, Map } from '../../components'

const contacts = {
  childExtend: ContactItems,
  ...[
    {},
    {
      ...[
        { props: { text: '995 322 502 222' } },
        { props: { text: '995 598 502 222' } }
      ]
    }
  ]
}

const props = {
  minWidth: '80%',
  // minHeight: '100%',
  align: 'center center',
  alignSelf: 'center',
  gap: 'A',
  title: {
    text: 'location',
    fontSize: 'Z',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: `${10 / 13}em`,
    transform: 'rotate(180deg)',
    style: {
      alignSelf: 'center',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed'
    }
  },

  content: {
    flexFlow: 'column',
    gap: 'A',
    boxSize: '80% 80%',
    position: 'relative',
    align: 'flex-end center',
    alignSelf: 'center',
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },

    map: {
      minWidth: '100%',
      maxHeight: '70%',
      zIndex: '2',
      position: 'relative',
      overflow: 'hidden',
      round: 'A',
      border: 'none',
      style: {
        boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)',
        backgroundAttachment: 'fixed',
        flex: 1
      }
    },

    contacts: {
      zIndex: '2',
      flexAlign: 'center space-between',
      gap: 'C',
      margin: '- Z - -',
      padding: 'Y2 - - -'
      // border: 'solid, black .5'
      // borderWidth: '.6px 0 0 0'
    }
  }
}

export const location = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'location' },

  title: { tag: 'h5' },
  content: {
    extend: Flex,

    map: { extend: Map },
    contacts
  }
}
