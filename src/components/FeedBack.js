'use strict'

const props = {
  padding: 'C',
  flexFlow: 'column',
  flexAlign: 'flex-start flex-start',
  background: 'black .05',
  maxHeight: 'G',
  round: 'Y2',
  minWidth: `${500 / 16}em`,
  gap: 'A',
  position: 'relative',
  '@tabletL': { minWidth: '100%' },
  '@mobileL': { padding: 'B1 B1 C B1' },
  '@mobileM': {
    padding: 'B1 B1 B1 B1',
    maxHeight: 'G'
  },
  '@mobileS': { padding: 'B' },
  css: {
    boxSizing: 'border-box',
    background: 'linear-gradient(rgba(0, 0, 0, .03), rgba(0, 0, 0, .035))',
    height: `${500 / 16}em`,
    maxWidth: 'fit-content',
    '@media only screen and (max-height: 600px)': {
      maxHeight: `${250 / 16}em`,
      padding: `${15 / 16}em 0`
    }
  },

  name: {
    margin: '0',
    fontWeight: '700',
    color: 'black .85',
    css: {
      textTransform: 'uppercase',
      letterSpacing: '.5px',
      fontSize: `${12.5 / 16}em`,
      '@media only screen and (max-height: 600px)': { padding: `0 0 ${10 / 12.5}em ${22 / 12.5}em` }
    }
  },

  p: {
    text: `This a must stay n worth every penny. The host was great, the place was great, great ambience, a quiet place but just few minutes walk to all the central points. The hospitality was great and the host was very helpful and accessible for all my needs. Special thanks to Gaia and Tato who actually received me like family and came in person while i was saying my bye too. I would really want to come back for a longer stay. Love the place and love u guys.`,
    color: 'black .6',
    // fontWeight: '400',
    css: {
      fontSize: `${14.3 / 16}em`,
      letterSpacing: '.8px',
      '@media only screen and (max-width: 480px)': {
        fontSize: `${13.8 / 16}em`
      }
    }
  },

  date: {
    text: 'January | 2022',
    color: 'black .75',
    position: 'absolute',
    bottom: 'C',
    right: 'C',
    '@mobileS': {
      bottom: 'B',
      right: 'B1'
    },
    css: {
      // fontWeight: '500',
      alignSelf: 'flex-end',
      fontSize: `${14 / 16}em`,
      '@media only screen and (max-height: 600px)': { bottom: `${15 / 14}em` }
    }
  }
}

export const FeedBack = {
  props,

  name: {
    tag: 'caption',
    text: 'Ashitha'
  },
  p: {},
  date: {
    tag: 'h5',
    props: { fontWeight: '500' }
  }
}
