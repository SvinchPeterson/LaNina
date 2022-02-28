'use strict'

const styleImage = {
  flex: 1,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  filter: 'grayscale(50%) brightness(35%)'
}

const styleParagraph = {
  flex: 1,
  background: 'rgba(247, 239, 230, 1)',
  fontSize: '15.5px',
  '> span': {
    fontFamily: 'Avenir Next',
    background: 'rgba(247, 239, 230, 1)',
    fontWeight: 400,
    letterSpacing: '.22',
    transition: 'all 1s ease-in-out',
    boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
    lineHeight: '32px',
    color: 'rgba(0,0, 0, .35)'
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

  '> section': {
    minHeight: `${600 / 16}em`,
    flex: 1,
    position: 'relative',

    '> span': styleImage,
    '> p': styleParagraph
  }
}
