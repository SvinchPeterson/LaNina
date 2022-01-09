'use strict'

const styleStory = {
  border: '5px solid red'
}

export default {
  h4: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .55)',
    letterSpacing: '10px',
    fontWeight: '500'
  },
  '> div': {
    border: '5px solid green'
  },
  '> div > div': styleStory
}
