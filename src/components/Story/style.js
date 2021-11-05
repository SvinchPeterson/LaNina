'use strict'

import { paragraph } from '../../animations'
export const styleStoryImage = {
  backgroundAttachment: 'fixed',
  filter: 'brightness(50%) grayscale(70%)',
  boxShadow: 'inset 2px 2px 10px 2px rgba(0, 0, 0, .8)'

}

export const styleParagraph = {
  flexFlow: 'column',
  width: `${500 / 16}em`,
  background: 'rgba(206, 197, 177, 1)',
  h6: {
    // color: 'rgba(152, 141, 87, 1)',
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
