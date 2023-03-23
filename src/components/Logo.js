'use strict'

import { Img } from 'smbls'

import LOGO_WHITE_PNG from '../assets/icons/logo-white.png'
import LOGO_CREAM_PNG from '../assets/icons/logoCream.png'

const props = {
}

export const LogoWhite = {
  extend: Img,
  props: {
    ...props,
    src: LOGO_WHITE_PNG
  }
}

export const LogoCream = {
  extend: Img,
  props: {
    ...props,
    src: LOGO_CREAM_PNG
  }
}
