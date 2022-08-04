'use strict'

import { ContactItems, Map, SectionTitle } from '../../components'
const title = {
  proto: SectionTitle,
  props: {
    text: 'location',
    padding: '0 0 B Z',
    maxWidth: '65%',
    margin: '0 auto',
    '@tabletS': { maxWidth: `${730 / 16}em` },
    '@mobileL': { maxWidth: `${550 / 16}em` },
    '@mobileM': {
      maxWidth: `${470 / 16}em`
    },
    '@mobileS': { maxWidth: `${350 / 16}em` },
    css: {
      // border: '2px solid red',
      textAlign: 'left'
    }
  }
}

const map = {
  proto: Map,
  props: {
    width: '100%',
    '@mobileM': {
      minHeight: 'G'
      // margin: 'C1 0 0 0'
    },
    css: {
      flex: 1,
      border: 'none',
      margin: '0 auto',
      boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .05)',
      minHeight: `${500 / 16}em`,
      backgroundAttachment: 'fixed'
    }
  }
}

const contacts = {
  childProto: {
    proto: ContactItems,
    props: {
      '@mobileS': {
        flexFlow: 'column',
        flexAlign: 'flex-end flex-end',
        padding: '0 0 0 0'
      },
      // '@mobileXS': { fontWeight: '400' },
      css: {
        '@media only screen and (max-width: 768px)': {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          '> div:last-child': {
            // background: 'red',
            justifySelf: 'start'
          }
        },
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
  padding: '0 0 E 0',
  '@mobileS': {
    padding: 'C 0 C 0'
  },
  css: { alignSelf: 'center' },

  content: {
    flexFlow: 'column',
    gap: 'B',
    maxWidth: '65%',
    position: 'relative',
    css: {
      margin: 'auto'
    },
    '@tabletS': { maxWidth: `${730 / 16}em` },
    '@mobileL': {
      maxWidth: `${550 / 16}em`,
      gap: 'C',
      padding: '0 0 D1 0'
    },
    '@mobileM': { maxWidth: `${470 / 16}em` },
    '@mobileS': {
      maxWidth: `${350 / 16}em`,
      flexAlign: 'flex-end flex-end',
      padding: '0 0 C1 0'
    },
    '@mobileXS': {
      maxWidth: `${310 / 16}em`
    },

    contacts: {
      flexAlign: 'center space-between',
      padding: 'A Z 0 Z',
      '@mobileL': {
        flexFlow: 'column',
        flexAlign: 'center flex-start',
        gap: 'A',
        margin: '0 0 0 C'
      },
      '@mobileM': {
        margin: '0 0 0 B'
      },
      '@mobileS': {
        margin: '0 A 0 0',
        width: '90%',
        padding: 'B Z 0 Z'
      },

      css: {

        '@media only screen and (max-width: 480px)': { borderTop: '1px solid black' }
      }
    }
  }
}

export const Location = {
  tag: 'section',
  props,
  attr: { id: 'location' },

  title,
  content: {
    // paragraph,
    map,
    contacts
  }
}
