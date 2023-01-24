'use strict'

import { Img } from 'smbls'

import { opacity } from '../animations'

import LOGO_WHITE_PNG from '../assets/icons/logo-white.png'

const props = {
}

export const LogoWhite = {
  extend: Img,
  props: {
    ...props,
    src: LOGO_WHITE_PNG
  }
}
