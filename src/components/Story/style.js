'use strict'

export const styleStoryImage = {
  backgroundAttachment: 'fixed',
  filter: 'brightness(60%) grayscale(60%)',
  boxShadow: 'inset 2px 2px 15px 4px rgba(0, 0, 0, .8)'
}

export const styleParagraph = {
  flexFlow: 'column',
  // maxWidth: `${400 / 16}em`,
  background: 'rgba(206, 197, 177, 1)',
  height: '100%',
  h6: {
    color: '#BDB171',
    letterSpacing: `${2 / 16}em`,
    fontSize: `${22 / 16}em`
  },
  p: {
    color: 'rgba(0, 0, 0, .6)',
    fontSize: `${18 / 16}em`,
    lineHeight: `${30 / 18}em`,
    maxWidth: `${400 / 18}em`
  }
}

export const styleCityParagraph = {
  position: 'absolute',
  top: `-${25 / 16}em`,
  right: `0`,
  borderLeft: '2px solid rgba(206, 197, 177, 1)',
  boxShadow: '-3px 0px 4px 0px rgba(0, 0, 0, .16)',
  height: '95%',
  '&::before': {
    content: '""',
    width: '100%',
    height: `${100 / 16}em`,
    background: 'rgba(206, 197, 177, 1)',
    position: 'absolute',
    top: `-${40 / 16}em`,
    left: `-${2 / 16}em`
  },
  '&::after': {
    content: '""',
    width: '100%',
    height: `${100 / 16}em`,
    background: 'rgba(206, 197, 177, 1)',
    position: 'absolute',
    bottom: `-${20 / 16}em`,
    left: `-${2 / 16}em`
  },
  '> h6': {
    textAlign: 'center',
    zIndex: '30',
    marginTop: `${100 / 22}em`
  },
  '> p': {
    margin: '0 auto'
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
