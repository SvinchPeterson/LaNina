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
  margin: 'E1 - B -',
  padding: 'E - - -',
  align: 'center center',
  alignSelf: 'center',
  gap: 'A',
  '@tabletM': { minWidth: '85%' },
  '@tabletS': { flow: 'column' },
  style: {
    '@media only screen and (min-height: 1000px)': {
      marginTop: `${50 / 16}em`,
      marginBottom: `${150 / 16}em`
    }
  },
  title: {
    text: 'location',
    fontSize: 'Z',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: `${10 / 13}em`,
    transform: 'rotate(180deg)',
    '@tabletS': {
      alignSelf: 'flex-start',
      padding: '- - - A'
    },
    style: {
      alignSelf: 'center',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      '@media only screen and (max-width: 1024px)': {
        writingMode: 'horizontal-tb',
        textOrientation: 'initial',
        transform: 'rotate(0deg)'
      }
    }
  },

  content: {
    flexFlow: 'column',
    gap: 'A',
    boxSize: 'H3 I1',
    position: 'relative',
    align: 'flex-end flex-start',
    alignSelf: 'center',
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },
    '@tabletM': { boxSize: 'H2 100%' },
    // '@tabletM': {
    //   boxSize: 'H3 100%',
    //   align: 'center flex-start'
    // },

    map: {
      minWidth: '100%',
      maxHeight: '75%',
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
      // '@tabletM': { round: '0', maxHeight: '85%' }
    },

    contacts: {
      zIndex: '2',
      align: 'center space-between',
      gap: 'C',
      margin: '- Z - -',
      padding: 'Y2 - - -',
      border: 'solid, black .65',
      borderWidth: '.6px 0 0 0',
      '@tabletS': {
        flow: 'column',
        alignSelf: 'center',
        gap: 'Z',
        margin: 'A 0 - -'
      },
      // '@tabletM': {
      //   padding: 'Z - - -',
      //   margin: 'A - - -'
      // },
      // '@tabletS': {
      //   flow: 'column',
      //   flexAlign: 'center flex-start',
      //   gap: 'A'
      // },

      childProps: {
        // '@tabletM': { fontSize: 'B' }
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
