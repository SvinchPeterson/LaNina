'use strict'

const props = {
  padding: 'C',
  flexFlow: 'column',
  flexAlign: 'flex-start flex-start',
  // border: 'solid, green2',
  // borderWidth: '1px',
  background: 'greenNew .1',
  minHeight: 'G',
  round: 'Y2',
  minWidth: 'H1',
  gap: 'A1',
  position: 'relative',
  style: {
    '@media only screen and (max-height: 600px)': {
      maxHeight: `${250 / 16}em`,
      padding: `${15 / 16}em 0`
    }
  },
  '@tabletS': { minWidth: '100%' },
  '@mobileL': { padding: 'B1' },
  '@mobileS': {
    padding: 'B',
    gap: 'Z2'
  },

  name: {
    margin: '0',
    fontWeight: '700',
    color: 'black .85',
    style: {
      textTransform: 'capitalize',
      letterSpacing: '0px',
      fontSize: `${20 / 16}em`,
      '@media only screen and (max-height: 600px)': { padding: `0 0 ${10 / 12.5}em ${22 / 12.5}em` }
    }
  },

  p: {
    text: `This a must stay n worth every penny. The host was great, the place was great, great ambience, a quiet place but just few minutes walk to all the central points. The hospitality was great and the host was very helpful and accessible for all my needs. Special thanks to Gaia and Tato who actually received me like family and came in person while i was saying my bye too. I would really want to come back for a longer stay. Love the place and love u guys.`,
    color: 'black .7',
    style: {
      fontSize: `${16 / 16}em`,
      '@media only screen and (max-width: 480px)': {
        fontSize: `${14 / 16}em`
      }
    }
  },

  date: {
    text: 'January | 2022',
    color: 'black .85',
    position: 'absolute',
    bottom: 'C',
    right: 'C1',
    fontSize: '14px',
    fontWeight: '700',
    alignSelf: 'flex-end',
    textTransform: 'uppercase',
    '@mobileS': {
      bottom: 'B',
      right: 'B1'
    },
    style: { '@media only screen and (max-height: 600px)': { bottom: `${15 / 14}em` } }
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
    tag: 'h5'
  }
}
