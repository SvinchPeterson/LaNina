'use strict'
import { cream } from '../../colors'

const styleImage = {
  flex: 1,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  filter: 'grayscale(50%) brightness(35%)'
}

const styleParagraph = {
  flex: 1,
  background: cream,
  // fontSize: `${15.5 / 16}em`,
  boxSizing: 'border-box',
  '> span': {
    fontFamily: 'Avenir Next',
    // fontWeight: 400,
    letterSpacing: '.22',
    transition: 'all 1s ease-in-out',
    background: cream
    // '@media only screen and (max-width: 1024px)': {
    //   lineHeight: '28px',
    //   // fontSize: '15px',
    //   padding: '50px 70px'

    // }
  }
}

export const styleEntranceItem = {
  fontFamily: 'Avenir Next',
  '> div': {
    background: 'rgba(0, 0, 0, .35)',
    display: 'block',
    borderRadius: '100%',
    width: '3px',
    height: '3px'
  },
  '> span': {
    fontWeight: 500,
    color: 'rgba(0, 0, 0, .25)'
  }
}

export default {
  boxSizing: 'border-box',
  padding: '0px 100px',
  '@media only screen and (max-width: 1100px)': {
    padding: '0 30px'
  },
  // '@media only screen and (max-width: 1024px)': {
  //   padding: '0',
  //   '> section > span': {
  //     backgroundSize: 'cover',
  //     minWidth: '100%',
  //     border: '10px solid red'
  //   },
  //   '> span > p': {
  //     background: 'transparent'
  //   }
  // },

  '> section': {
    minHeight: `${600 / 16}em`,
    flex: 1,
    position: 'relative',

    '> span': styleImage,
    '> p': styleParagraph
  }
}
