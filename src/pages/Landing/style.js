'use strict'
import COVER_JPG from '../../assets/images/cover.jpg'
import { fadeUp, spacing } from '../../animations'

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
    height: `${100 / 16}em`
    // animationName: fadeUp,
    // animationDuration: '3s'
  },
  '> div': {
    lineHeight: `${40 / 16}em`,
    opacity: '.65'
    // animationName: fadeUp,
    // animationDuration: '4s'
  },

  h4: {
    fontSize: `${48 / 16}em`
  }
}
export default {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  flex: 1
}
