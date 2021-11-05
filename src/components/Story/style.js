'use strict'

export const styleStoryImage = {
  width: '80%',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  filter: 'brightness(70%) grayscale(70%)',
  boxShadow: 'inset -5px 2px 10px 1px rgba(0, 0, 0, .6)'

}

export const styleParagraph = {
  flexFlow: 'column',
  width: `${400 / 16}em`,
  background: 'rgba(206, 197, 177, 1)',
  position: 'absolute',
  h6: {
    // color: 'rgba(152, 141, 87, 1)',
    textAlign: 'center',
    color: '#BDB171',
    letterSpacing: '2px'
  },
  p: {
    color: 'rgba(0, 0, 0, .6)',
    lineHeight: '30px'
  }
}
export default {
  h4: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .55)',
    letterSpacing: '10px',
    fontWeight: '500'
  }

}
