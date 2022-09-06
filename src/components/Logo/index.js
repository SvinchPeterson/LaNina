'use strict'
import { SVG, Box, Img } from 'smbls'

import LOGO_SVG from '../../assets/icons/logo.svg'
import LOGO2_SVG from '../../assets/icons/logo3.svg'
import LOGO_CREAM_SVG from '../../assets/icons/logoWhite.svg'
import LOGO_BLACK_PNG from '../../assets/icons/logoBlack.png'

export const Logo = {
  extend: [SVG, Box],
  src: LOGO_SVG
}

export const Logo2 = {
  extend: [SVG, Box],
  src: LOGO2_SVG
}

export const Logo3 = {
  extend: [SVG, Box],
  src: LOGO_CREAM_SVG
}

export const Logo4 = {
  extend: [Img, Box],
  props: { src: LOGO_BLACK_PNG }
}
