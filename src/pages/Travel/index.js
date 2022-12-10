'use strict'

import { Flex } from 'smbls'

import { props } from '../Sololaki'

import { header, headerMobile } from './header'
import { menu } from './menu'
import { travelBanner } from './banner'
import { country } from './country'
import { gallery } from './gallery'
import { aboutUs } from './aboutUs/index'
import { planTrip } from './planTrip'
import { tours } from './tours'
import { contact } from './contact'
import { footer } from './footer'

const state = {
  activeForm: false,
  activeTour: false,

  activeDailyTour: false,
  activeStandardTour: false,
  activeArmeniaTour: false,
  activeExclusiveTour: false,
  activeAdventureTour: false,
  activeArrow: false,

  activeTbilisiGalleryImage: 0,
  activeAnanuriGudauriGalleryImage: 0,
  activeCanyonGalleryImage: 0,
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
  activeGeoArmGalleryImage: 0,
  activeExclusiveGalleryImage: 0,
  activeAdventureGalleryImage: 0,

  activeTbilisiArticle: false,
  activeAnanuriArticle: false,
  activeGoriArticle: false,
  activeKakhetiArticle: false,
  activeCanyonArticle: false,
  activeKutaisiArticle: false,
  activeBorjomiArticle: false,
  activeRabatArticle: false,
  activeMtsketaArticle: false,

  active_3d_Article: false,
  active_4d_Article: false,
  active_5d_Article: false,
  active_8d_Article: false,
  active_10d_Article: false,
  active_Armenia_Article: false,
  activeExclusiveArticle: false,
  activeAdventureArticle: false,

  activePopUpContainer: false,

  activePlandSend: true,
  activePlanSent: false,

  activeBookSend: true,
  activeBookSent: false,

  activeTbilisiBooking: false,
  activeAnanuriBooking: false,
  activeBorjomiBooking: false,
  activeCanyonBooking: false,
  activeGoriBooking: false,
  activeKakhetiBooking: false,
  activeKutaisiBooking: false,
  activeMtsketaBooking: false,
  activeRabatBooking: false,
  activeCaucasusBooking: false,
  activeAdventureBooking: false,
  activeExclusiveBooking: false,
  active3dBooking: false,
  active4dBooking: false,
  active5dBooking: false,
  active8dBooking: false,
  active10dBooking: false

}

export default {
  extend: Flex,

  props: {
    ...props,
    background: 'rgba(229, 249, 252, 1)'
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
  contact,
  footer
}
