'use strict'
import COVER_JPG from '../../assets/images/cover.jpg'

export const stylePages = {
  width: '100%',
  position: 'relative',
  '> div:last-child': {
    top: 0,
    right: 0
  }
}

export const stylePageCover = {
  width: '50%',
  height: '100%',
  position: 'absolute',
  backgroundImage: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 1)), url(' + COVER_JPG + ')',
  backgroundSize: 'cover'
}

export const styleLaninaBanner = {
  flexDirection: 'column',
  position: 'absolute',
  zIndex: '20',
  color: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems: 'center',
  textAlign: 'center',
  '> img': {
    width: '120px',
    height: '150px',
    opacity: '.7'
  },
  '> div': {
    lineHeight: '50px',
    color: 'rgba(255, 255, 255, .7)'
  },

  h4: {
    fontSize: `${60 / 16}em`
  }
}

export default {
  width: '100%',
  height: '100%',
  position: 'relative',
  boxSizing: 'border-box'
}
