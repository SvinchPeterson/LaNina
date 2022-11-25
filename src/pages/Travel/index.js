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
  activeGeoArmGalleryImage: 0,

  active_Tbilisi_TourMail: false,
  active_Tbilisi_TourBook: true,
  active_Tbilisi_TourBooked: false,

  active_Ananuri_TourMail: false,
  active_Ananuri_TourBook: true,
  active_Ananuri_TourBooked: false,

  active_Borjomi_TourMail: false,
  active_Borjomi_TourBook: true,
  active_Borjomi_TourBooked: false,

  active_Kakheti_TourMail: false,
  active_Kakheti_TourBook: true,
  active_Kakheti_TourBooked: false,

  active_Kutaisi_TourMail: false,
  active_Kutaisi_TourBook: true,
  active_Kutaisi_TourBooked: false,

  active_Gori_TourMail: false,
  active_Gori_TourBook: true,
  active_Gori_TourBooked: false,

  active_Mtsketa_TourMail: false,
  active_Mtsketa_TourBook: true,
  active_Mtsketa_TourBooked: false,

  active_Canyon_TourMail: false,
  active_Canyon_TourBook: true,
  active_Canyon_TourBooked: false,

  active_Rabat_TourMail: false,
  active_Rabat_TourBook: true,
  active_Rabat_TourBooked: false,

  active_3d_TourMail: false,
  active_3d_TourBook: true,
  active_3d_TourBooked: false,

  active_4d_TourMail: false,
  active_4d_TourBook: true,
  active_4d_TourBooked: false,

  active_5d_TourMail: false,
  active_5d_TourBook: true,
  active_5d_TourBooked: false,

  active_8d_TourMail: false,
  active_8d_TourBook: true,
  active_8d_TourBooked: false,

  active_10d_TourMail: false,
  active_10d_TourBook: true,
  active_10d_TourBooked: false,

  active_arm_TourMail: false,
  active_arm_TourBook: true,
  active_arm_TourBooked: false,

  activeTbilisiDescripion: false,
  activeAnanuriDescripion: false,
  activeGoriDescripion: false,
  activeKakhetiDescripion: false,
  activeCanyonDescripion: false,
  activeKutaisiDescripion: false,
  activeBorjomiDescripion: false,
  activeRabatDescription: false,
  activeMtsketaDescription: false,
  active_3d_Description: false,
  active_4d_Description: false,
  active_5d_Description: false,
  active_8d_Description: false,
  active_10d_Description: false,
  active_Armenia_Description: false
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
  footer
}
