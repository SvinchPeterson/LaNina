'use strict'

const props = {
  flexAlign: 'center flex-start',
  padding: 'C B1',
  round: 'Y',
  background: 'cream2',
  css: {
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .15)',
    zIndex: 10,
    backdropFilter: 'blur(5px)',
    '@media only screen and (max-width: 1366px)': {
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .05)'
    }
  },

  paragraph: {
    flexFlow: 'column',
    gap: 'W',
    flexAlign: 'flex-start flex-start',
    title: {
      fontWeight: '900',
      color: 'black .85',
      css: {
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        fontSize: `${12.3 / 16}em`,
        letterSpacing: '.3px'
      }

    }

  }

}
export const Feature = {
  props,

  paragraph: {
    title: { tag: 'caption' },
    p: {
      props: {
        padding: '0 0 0 U',
        color: 'black .6'
      },
      style: {
        letterSpacing: '.1px',
        fontSize: `${14.4 / 16}em`
      }
    }
  }

}
