'use strict'

const props = {
  padding: 'A B',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  border: 'solid, black .5',
  borderWidth: '1px',
  boxSizing: 'border-box',
  // background: 'greenNew .1',
  minHeight: 'G',
  round: 'A',
  minWidth: 'H',
  gap: 'A1',
  position: 'relative',
  style: {
    // '@media only screen and (max-height: 600px)': {
    //   maxHeight: `${250 / 16}em`,
    //   padding: `${15 / 16}em 0`
    // }
  },
  // '@tabletS': { minWidth: '100%' },
  // '@mobileL': { padding: 'B1' },
  // '@mobileS': {
  //   padding: 'B',
  //   gap: 'Z2'
  // },

  name: {
    margin: '0',
    fontWeight: '700',
    color: 'black .85',
    fontSize: 'D',
    alignSelf: 'flex-start',
    style: {
      textTransform: 'capitalize',
      letterSpacing: '-1px'
      // '@media only screen and (max-height: 600px)': { padding: `0 0 ${10 / 12.5}em ${22 / 12.5}em` }
    }
  },

  p: {
    text: `This a must stay n worth every penny. The host was great, the place was great, great ambience, a quiet place but just few minutes walk to all the central points. The hospitality was great and the host was very helpful and accessible for all my needs. Special thanks to Gaia and Tato who actually received me like family and came in person while i was saying my bye too. I would really want to come back for a longer stay. Love the place and love u guys.`,
    color: 'black .65',
    letterSpacing: '.25px',
    style: {
      // '@media only screen and (max-width: 480px)': {
      //   fontSize: `${14 / 16}em`
      // }
    }
  },

  date: {
    text: 'January | 2022',
    color: 'black .85',
    alignSelf: 'flex-end',
    margin: 'auto - - -',
    // position: 'absolute',
    // bottom: 'A1',
    // right: 'B1',
    fontSize: 'Z',
    fontWeight: '700',
    // alignSelf: 'flex-end',
    textTransform: 'uppercase',
    // '@mobileS': {
    //   bottom: 'B',
    //   right: 'B1'
    // },
    style: {
      // '@media only screen and (max-height: 600px)': { bottom: `${15 / 14}em` }
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
    tag: 'h5'
  }
}
