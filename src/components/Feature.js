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
  style: {
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .15)',
    zIndex: 10,
    backdropFilter: 'blur(5px)',
    '@media only screen and (max-width: 1366px)': {
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .03)'
    },
    '@media only screen and (max-width: 1366px) and (max-height: 750px)': {
      padding: `${20 / 16}em ${30 / 16}em`
    }
  },

  paragraph: {
    flexFlow: 'column',
    gap: 'W',
    flexAlign: 'flex-start flex-start',
    title: {
      fontWeight: '900',
      color: 'black .95',
      style: {
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
      style: {
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
