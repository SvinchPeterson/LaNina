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
  activeTour: false,
  activeDailyTour: false,
  activeStandardTour: false,
  activeArmeniaTour: false,
  activeDescription: false,
  activeTbilisiGalleryImage: 0,
  activeAnanuriGudauriGalleryImage: 0,
  activeCanyonGalleryImage: 0,
  activeArrow: false,

  activeKakhetiGalleryImage: 0,
  activeKutaisiGalleryImage: 0,
  activeGoriGalleryImage: 0,
  activeBorjomiGalleryImage: 0,
  activeRabatiGalleryImage: 0,
  activeMtsketaGalleryImage: 0,

  active2n3dGalleryImage: 0,
  active3n4dGalleryImage: 0,
  active4n5dGalleryImage: 0,
  active5n6dGalleryImage: 0,
  active6n7dGalleryImage: 0,
  active7n8dGalleryImage: 0,
  active9n10dGalleryImage: 0,

  activeGeoArmGalleryImage: 0

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
