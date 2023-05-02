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

  activePopUp: false,
  activePopUpContent: 0,
  activePackage: false,
  activeTour: false,

  activeGallery: 0,
  activeScroll: true,

  activeImage: 0,
  activeTbilisiImage: 0,
  activeAnanuriImage: 0
}



const menu = {
  extend: Menu,
  class: {
    show: (element, state) => state.activeTravelMenu
      ? { height: `${30 / 16}em` } : { height: '0' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeTravelMenu
        ? { width: `${400 / 16}em` } : { width: '0' }
    },

    childExtend: {
       class: {
        show: (element, state) => state.activeTravelMenu
          ? { opacity: '1' } : { opacity: '0' }
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



const menuMobile = {
  extend: MenuMobile,
  props: {background: 'naviBlueLight .75'},
  class: {
    show: (element, state) => state.activeTravelMobileMenu
      ? {
        height: '80%',
        transition: 'height .75s ease'
      }
      : { height: '0', pointerEvents: 'none', transition: 'height .35s ease' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeTravelMobileMenu
        ? { opacity: '1', transition: 'opacity .75s ease' }
        : { opacity: '0', transition: 'opacity .35s ease' }
    },

    childExtend: {
      class: {
        show: (element, state) => state.activeTravelMobileMenu
          ? { height: `${46 / 13}em`, opacity: '1', transition: 'height .75s ease, opacity .75s ease' }
          : { height: '0', opacity: '0', transition: 'height .35s ease, opacity .35s ease' }
      },
      on: { click: (event, element, state) => { state.update({ activeTravelMenu: false, activeTravelMobileMenu: false }) } }
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
  props: { ...properties },
  state,

  header,
  menu,
  menuMobile,
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
