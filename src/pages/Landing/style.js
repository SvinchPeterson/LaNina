'use strict'
import COVER_JPG from '../../assets/images/cover.jpg'
import { fadeUp } from '../../animations'

// backgroundImage: 'url(' + COVER_JPG + ')',

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
    width: `${80 / 16}em`,
    height: `${100/ 16}em`,
    animationName: fadeUp,
    animationDuration: '3s',
  },
  '> div': {
    lineHeight: `${40 / 16}em`,
    opacity: '.65',
    animationName: fadeUp,
    animationDuration: '5s',
  },

  h4: {
    fontSize: `${48 / 16}em`,

  }
}

export const stylePageLink = {
  color: 'white',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  cursor: 'pointer',
  marginLeft: '60px',
  background: 'linear-gradient(rgba(209, 153, 115, .4), rgba(0, 0, 0, .4))',
  color: 'rgba(255, 255, 255, .6)',
  position: 'absolute',
  zIndex: 20,
  // top: '-50px'
}

export default {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  flex: 1
}
