'use strict'
import { SVG, Img } from '@rackai/symbols'

import LOGO_SVG from '../../assets/icons/logo.svg'
import LOGO_PNG from '../../assets/icons/logo.png'

import LOGOB_SVG from '../../assets/icons/logo2.svg'

export const logoB = {
  proto: SVG,
  src: LOGOB_SVG
}
export const logoPng = {
  proto: Img,
  props: { src: LOGO_PNG }
}
export default {
  proto: SVG,
  src: LOGO_SVG
}
