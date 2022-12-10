'use strict'

import { Flex } from 'smbls'

import { ContactItems, Map, SectionTitle } from '../components'
const title = {
  extend: SectionTitle,
  props: {
    padding: '0 0 Z2 A',
    minWidth: '60%',
    text: 'location',
    fontSize: 'B',
    fontWeight: '500',
    letterSpacing: '0',
    '@tabletS': {
      minWidth: '50%',
      textAlign: 'center',
      padding: '0 0 Z2 0'
    },
    style: {
      alignSelf: 'center',
      '@media only screen and (max-height: 650px)': { fontSize: `${16 / 19}em` }
    }
  }
}

const map = {
  extend: Map,
  props: {
    width: '100%',
    margin: '0 auto',
    minHeight: 'G3',
    '@mobileM': { minHeight: 'G' },
    '@mobileS': { minHeight: 'F3' },
    style: {
      flex: 1,
      border: 'none',
      boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .05)',
      '@media only screen and (max-height: 700px)': { minHeight: `${300 / 16}em` },
      '@media only screen and (max-height: 600px)': { minHeight: `${300 / 16}em` },
      '@media only screen and (max-height: 550px)': { minHeight: `${250 / 16}em` }
    }
  }
}

const contacts = {
  childExtend: {
    extend: ContactItems,
    props: {
      style: {
        '@media only screen and (max-width: 480px)': {
          display: 'block',
          width: '100%',
          '> div:after': { display: 'none' },
          '> div:last-child': { justifySelf: 'flex-end' }
        }
      }
    }
  },
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
  width: `${1440 / 16}em`,
  minHeight: '100%',
  flow: 'column',
  align: 'center center',
  alignSelf: 'center',
  content: {
    flexFlow: 'column',
    gap: 'A',
    minWidth: '60%',
    positioan: 'relative',
    '@tabletS': { padding: '0 C2' },
    '@mobileL': { padding: '0 E2' },
    '@mobileM': { padding: '0 F1' },
    '@mobileS': {
      padding: '0 G'
    },
    style: { '@media only screen and (max-height: 650px)': { gap: `${10 / 16}em` } },

    contacts: {
      flexAlign: 'center space-between',
      padding: 'A Z 0 Z',
      width: '90%',
      margin: 'auto',
      '@tabletS': {
        flexFlow: 'column',
        flexAlign: 'center center',
        gap: 'A'
      }
    }
  }
}

export const Location = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'location' },

  title,
  content: {
    map,
    contacts
  }
}
