'use strict'

import { Flex } from 'smbls'

import { ContactItems, Map } from '../../components'

const contacts = {
  extend: Flex,
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
  margin: 'E2 - - -',
  padding: 'D - E -',
  align: 'center center',
  alignSelf: 'center',
  gap: 'A',
  '@tabletM': {
    minWidth: '100%',
    flow: 'column',
    round: '0',
    padding: 'E2 - E -',
    margin: 'D2 - - -',
    gap: 'A1'
  },
  style: {
    '@media only screen and (max-height: 820px)': {
      minHeight: '100%',
      paddingTop: `${100 / 16}em`,
      '> div': {
        height: '100%',
        iframe: { maxHeight: '80%' }
      }
    }
  },
  title: {
    text: 'location',
    fontSize: 'Z',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: `${10 / 13}em`,
    transform: 'rotate(180deg)',
    '@tabletM': {
      fontSize: 'A',
      alignSelf: 'flex-start',
      padding: '- - - C'
    },
    style: {
      alignSelf: 'center',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      '@media only screen and (max-width: 1280px)': {
        writingMode: 'horizontal-tb',
        textOrientation: 'initial',
        transform: 'rotate(0deg)'
      }
    }
  },

  content: {
    flexFlow: 'column',
    gap: 'A',
    boxSize: 'I 80%',
    position: 'relative',
    align: 'flex-end center',
    alignSelf: 'center',
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },
    '@tabletM': {
      boxSize: 'I 100%',
      align: 'center flex-start'
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
      },
      '@tabletM': { round: '0' }
    },

    contacts: {
      zIndex: '2',
      align: 'center space-between',
      gap: 'C',
      margin: '- Z - -',
      padding: 'Y2 - - -',
      border: 'solid, black .65',
      borderWidth: '.6px 0 0 0',
      '@tabletM': {
        padding: 'Z - - -',
        margin: 'A - - -'
      },
      '@tabletS': {
        flow: 'column',
        flexAlign: 'center flex-start',
        gap: 'A'
      },

      childProps: {
        '@tabletM': { fontSize: 'B' }
      }
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
