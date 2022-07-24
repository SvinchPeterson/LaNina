'use strict'
import { SVG, Box, Img } from 'smbls'

import LOGO_SVG from '../../assets/icons/logo.svg'
import LOGO2_SVG from '../../assets/icons/logo3.svg'
import LOGO_CREAM_SVG from '../../assets/icons/logoWhite.svg'
import LOGO_BLACK_PNG from '../../assets/icons/logoBlack.png'

export const Logo = {
  proto: [SVG, Box],
  src: LOGO_SVG
}

export const Logo2 = {
  proto: [SVG, Box],
  src: LOGO2_SVG
}

export const Logo3 = {
  proto: [SVG, Box],
  src: LOGO_CREAM_SVG
}

export const Logo4 = {
  proto: [Img, Box],
  props: { src: LOGO_BLACK_PNG }
}
