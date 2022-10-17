'use strict'

import { Flex } from 'smbls'

import { props } from '../Sololaki'

import { header, headerMobile } from './header'
import { menu } from './menu'
import { travelBanner } from './banner'
import { country } from './country'
import { gallery } from './gallery/gallery'
import { aboutUs } from './aboutUs'
import { planTrip } from './planTrip'
import { tours } from './tours'
import { footer } from './footer'

const state = {
  activeForm: false,
  activeTour: false
}

export default {
  extend: Flex,

  props: {
    ...props,
    background: 'radial-gradient(rgba(233, 250, 255, 1), rgba(208, 224, 228, 1))'
  },
  state,

  header,
  headerMobile,
  menu,
  travelBanner,
  country,
  gallery,
  tours,
  aboutUs,
  planTrip,
  footer
}
