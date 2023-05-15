'use strict'

import { Flex, Img } from 'smbls'

import { properties } from './props'

import { Header, Footer, Menu, MenuMobile } from '../components'
import { banner, georgia, gallery, tours, feedBacks, aboutUs, planTrip, contact } from '../sections/travelSections'
import { tourPopUp } from '../sections/travelSections/tours/tourPopUp/tourPopUp'
import { popUpGallery } from '../sections/travelSections/gallery/popUpGallery'

const state = {
  activeTravelMenu: false,
  activeTravelMobileMenu: false,
  activeImage: 0,
  activeTourPopUp: true,

  // activePopUp: true,
  activePopUp: false,
  activePopUpContent: false,
  activePackage: false,
  activeTour: false,

  activeGallery: false,
  activeScroll: true,

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

  activeButton: false
}



const menu = {
  extend: Menu,
  class: {
    show: (element, state) => state.activeTravelMenu
      ? { height: `90%` } : { height: '48px' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeTravelMenu
        ? {
          '@media only screen and (min-width: 1025px)': {
            width: `${400 / 16}em`
          },
          '@media only screend and (max-width: 1024px)': {
            opacity: '1', transition: 'opacity .75s ease'
          }
        }
        : {
          '@media only screen and (min-width: 1025px)': {
            width: '0'
          },
          '@media only screend and (max-width: 1024px)': {
            opacity: '0', transition: 'opacity .75s ease'
          }
        }
    },

    childExtend: {
       class: {
        show: (element, state) => state.activeTravelMenu
          ? {
            '@media only screen and (max-width: 1024px)': {
              height: `${46 / 13}em`, opacity: '1',
              transition: 'height .75s ease, opacity .75s ease'
            }
          }
          : {
            '@media only screen and (max-width: 1024px)': {
              height: '0', opacity: '0',
              transition: 'height .75s ease, opacity .75s ease'
            }
          }
      },
      on: { click: (event, element, state) => { state.update({ activeTravelMenu: false }) } }
    },
    ...[
      { props: { text: 'gallery', href: '#gallery' } },
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'contact', href: '#contact' } }
    ]
  }
}




const header = {
  extend: Header,
  ...[
    {},
    {},
    {
      menu: {
        menu: {
          on: { click: (event, element, state) => { state.update({ activeTravelMenu: true, activeTravelMobileMenu: true }) } },
          class: {
              show: (element, state) => state.activeTravelMenu
                ? { bottom: `${-30 / 10}em`, transform: 'scale(.9)' }
                : { bottom: '0', transform: 'scale(1)' }
          }
        },
        close: {
          on: { click: (event, element, state) => { state.update({ activeTravelMenu: false, activeTravelMobileMenu: false }) } },
          class: {
            show: (element, state) => state.activeTravelMenu
              ? { bottom: `${0 / 10}em`, transform: 'scale(1)' }
              : { bottom: `${-30 / 10}em`, transform: 'scale(.9)' }
          }
        }
      }
    }
  ]
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
  state,

  menuBackground: {
    class: {
      show: (element, state) => state.activeTravelMenu
        ? { height: '90%', background: 'rgba(0, 47, 57, .95)' }
        : { height: '46px', background: 'rgba(0, 47, 57, 0)' }
    }
  },
  header,
  menu,
  banner,
  georgia,
  gallery,
  popUpGallery,
  tours,
  tourPopUp,
  feedBacks,
  aboutUs,
  contact,
  planTrip,
  footer
}
