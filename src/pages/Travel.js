'use strict'

import { Flex, Img, Link } from 'smbls'

import { properties } from './props'

import { Header, Footer, Menu, MenuMobile } from '../components'
import { banner, georgia, gallery, tours, feedBacks, aboutUs, planTrip, contact } from '../sections/travelSections'
import { tourPopUp } from '../sections/travelSections/tours/tourPopUp/tourPopUp'
import { galleryPopUp } from '../sections/travelSections/gallery/galleryPopUp'

import ORNAMENT_PNG from '../assets/images/travel/ornament.png'

const state = {
  activeImage: 0,
  activeTourPopUp: true,

  activePopUp: false,
  activePopUpContent: false,
  activePackage: false,
  activeTour: false,
  activeScroll: true,
  activeGalleryPopUp: false,
  activeGallery: false,

  activeTbilisiImage: 0,
  activeAnanuriImage: 0,
  activeDashbashiImage: 0,
  activeMtsketaImage: 0,
  activeKakhetiImage: 0,
  activeQutaisiImage: 0,
  activeGoriImage: 0,
  activeBorjobiImage: 0,
  activeRabatiImage: 0,
  activeCapitalImage: 0,
  activeCulturalImage: 0,
  activeHistoricalImage: 0,
  activeRoyalImage: 0,
  activeMountainImage: 0,
  activeCaucasusImage: 0,
  activeExclusiveImage: 0,
  activeWineImage: 0,
  activeAdventureImage: 0,

  activeButton: false,
  deActiveTour: false
}



const menu = {
  extend: Menu,
  navBar: {
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
  props: {
    ...properties
  },

  menuBackground: {
    class: {
      show: (element, state) => state.activeMenu
      ? { height: '90%', transition: 'height .75s ease' }
      : { height: '46px', transition: 'height .55s ease' }
    }
  },

  state,
  Header,
  menu,
  banner,
  georgia,
  gallery,
  galleryPopUp,
  tours,
  tourPopUp,
  feedBacks,
  aboutUs,
  contact,
  planTrip,
  footer
}
