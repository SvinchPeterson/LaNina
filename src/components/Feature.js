'use strict'

const props = {
  flexAlign: 'center flex-start',
  padding: 'C B1',
  round: 'Y',
  background: 'cream2',
  '@tabletL': {
    maxHeight: 'E'
  },
  '@mobileL': {
    width: 'G',
    maxHeight: 'D2'
  },
  '@mobileS': {
    padding: 'C A2',
    width: 'F2'
  },
  css: {
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .15)',
    zIndex: 10,
    backdropFilter: 'blur(5px)',
    '@media only screen and (max-width: 1366px)': {
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .03)'
    }
  },

  paragraph: {
    flexFlow: 'column',
    gap: 'W',
    flexAlign: 'flex-start flex-start',
    title: {
      fontWeight: '900',
      color: 'black .95',
      css: {
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        fontSize: `${12 / 16}em`,
        letterSpacing: '.1px'
      }
    },
    p: {
      padding: '0 0 0 U',
      color: 'black .85',
      fontSize: `${14 / 16}em`,
      css: {
        letterSpacing: '.1px'
      }
    }
  }

}
export const Feature = {
  props,

  paragraph: {
    title: { tag: 'caption' },
    p: {}
  }
}
