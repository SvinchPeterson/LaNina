'use strict'

import { Flex, Img } from 'smbls'

import { properties } from './props'

import { Header, Footer, Menu } from '../components'
import { banner, georgia, gallery, tours, feedBacks, aboutUs, planTrip } from '../sections/travelSections'
import { toursContainer } from '../sections/travelSections/tours/toursContainer./index.js'
import { popUpGallery } from '../sections/travelSections/gallery/popUpGallery'
import CLOSES_PNG from '../assets/icons/reject.png'

const state = {
  activePlanTrip: true,
  // activePlanTrip: false,
  // activeForm: false,
  activeTour: false,
  activeImage: 0,
  activeToursContainer: false,

  activeDescription: false,

  activeDaily: false,
  activeStandard: false,
  activeCaucasus: false,
  activeExclusive: false,
  activeAdventure: false,
  activeWineGastronomy: false,

  activeArrow: false,

  activeTbilisiGalleryImage: 0,
  activeAnanuriGudauriGalleryImage: 0,
  activeDashbashiGalleryImage: 0,
  activeKakhetiGalleryImage: 0,
  activeKutaisiGalleryImage: 0,
  activeGoriGalleryImage: 0,
  activeBorjomiGalleryImage: 0,
  activeRabatiGalleryImage: 0,
  activeMtsketaGalleryImage: 0,
  activeCulturalTourGalleryImage: 0,
  activeCapitalTourdGalleryImage: 0,
  activeHistoricalTourGalleryImage: 0,
  activeRoyalTourGalleryImage: 0,
  activeCaucasusMountainGalleryImage: 0,
  activeCaucasusGalleryImage: 0,
  activeExclusiveGalleryImage: 0,
  activeAdventureGalleryImage: 0,
  activeWineGastronomyGalleryImage: 0,

  activeDailyPackages: false,
  activeStandardPackages: false,
  activePackagesContainer: false,
  activeTbilisiPackage: false,
  activeAnanuriPackage: false,
  activeGoriPackage: false,
  activeKakhetiPackage: false,
  activeCanyonPackage: false,
  activeKutaisiPackage: false,
  activeBorjomiPackage: false,
  activeRabatPackage: false,
  activeMtsketaPackage: false,
  activeCapitalPackage: false,
  activeCulturalPackage: false,
  activeHistoricalPackage: false,
  activeDashbashPackage: false,
  activeRoyalPackage: false,
  acitveCaucasusMountainPackage: false,
  activeCaucasusPackage: false,
  activeExclusivePackage: false,
  activeWineGastronomyPackage: false,
  activeAdventurePackage: false,

  activePopUpContainer: false,
  activePopUpGallery: false,
  activePopUpTour: false,

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
  active10dBooking: false,

  activeTbilisi: false,
  activeBorjomi: false,
  activeMtsketa: false,
  activeKakheti: false,
  activeMartvili: false,
  activeKutaisi: false,
  activeGori: false,
  activeKazbegi: false,

  activeTbilisiImage: 0,
  activeBorjomiImage: 0,
  activeMtsketaImage: 0,
  activeKakhetiImage: 0,
  activeMartviliImage: 0,
  activeKutaisiImage: 0,
  activeGoriImage: 0,
  activeKazbegiImage: 0,

  activeScroll: false,
  activeScroll2: false
}

const menu = {
  extend: Menu,
  navBar: {
    class: {
      show: (element, state) => state.activeMenu
        ? { width: `${400 / 16}em` } : { width: '0' }
    },

    childExtend: {
      on: { click: (event, element, state) => { state.update({ activeMenu: false }) } }
    },
    ...[
      { props: { text: 'gallery', href: '#gallery' } },
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'contact', href: '#contact' } }
    ]
  }
}

export const footer = {
  extend: Footer,
  socialLinks: {
    ...[{ props: { href: `https://www.facebook.com/profile.php?id=100077381466828` } },
      { props: { href: `https://www.instagram.com/bb_travelgeorgia/` } }]
  },

  Book: {
    extend: Flex,
    props: {
      href: '',
      target: 'none',
      cursor: 'pointer',
      span: { text: 'PLAN TRIP' }
    },

    on: {
      click: (event, element, state) => {
        state.activeForm
          ? state.update({ activeForm: false, activeSent: false, activeSend: true })
          : state.update({ activeForm: true })
      }
    },

    span: {
      class: {
        show: (element, state) => state.activeForm
          ? { display: 'none' }
          : { display: 'block' }
      }
    },
    close: {
      extend: Img,
      props: {
        src: CLOSES_PNG,
        boxSize: 'Z2'
      },
      class: {
        show: (element, state) => state.activeForm
          ? { display: 'block' }
          : { display: 'none' }
      }
    }
  }
}

export const Travel = {
  extend: Flex,
  props: { ...properties, background: 'backgroundBlue2' },
  state,

  Header,
  menu,
  banner,
  georgia,
  gallery,
  popUpGallery,
  tours,
  toursContainer,
  feedBacks,
  aboutUs,
  planTrip,
  footer
}
