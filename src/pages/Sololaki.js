'use strict'

import { Flex } from 'smbls'

import { Menu, MenuMobile, Header, Footer } from '../components'

import { banner, residence, servicesFacilities, mission, apartments, wine, feedBacks, location } from '../sections/residenceSections'

import { roomPopUp } from '../sections/residenceSections/apartments/roomPopUp/roomPopUp'

import { properties } from './props'

const state = {
  activeImage: 0,
  activeHeader: false,
  activePopUp: false,
  activePopUpContent: 0,
  activeRoomTour: 0,

  activeBallerinaImage: 0,
  activeRedBrickImage: 0,
  activeYellowCouchImage: 0,
  activeGreenForestImage: 0,
  activeRetroImage: 0,
  activeBlueLagoonImage: 0,
  activeQvevriImage: 0,
  activeRoomDescription: false,
  activeRoomAmenities: false,
  activeButton: false,

  activeGallery: false
}

const menu = {
  extend: Menu,
  class: {
    show: (element, state) => state.activeResidenceMenu
      ? { height: `90%`}
      : { height: '48px' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeResidenceMenu
        ? {
          '@media only screen and (min-width: 1025px)': {
            width: `${700 / 16}em`, '> a':{ transform:'scale(1)', transition: 'transform 1s ease' }
          },
          '@media only screend and (max-width: 1024px)': {
            opacity: '1', transition: 'opacity .75s ease'
          }
        }
        : {
          '@media only screen and (min-width: 1025px)': {
            width: '0', '> a':{ transform:'scale(1.5)', transition: 'transform 1s ease' }
          },
          '@media only screend and (max-width: 1024px)': {
            opacity: '0', transition: 'opacity .75s ease'
          }
        }
    },
    childExtend: {
       on: { click: (event, element, state) => { state.update({ activeResidenceMenu: false }) } },
       class: {
        show: (element, state) => state.activeResidenceMenu
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
      },
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'services & facilities', href: '#service&facilities' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'location', href: '#location' } }
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
        on: {
          click: (event, element, state) => {
            state.activeResidenceMenu
          ? state.update({ activeResidenceMenu: false })
          : state.update({ activeResidenceMenu: true })
          }
        },
        menu: {
          on: { click: (event, element, state) => { state.update({ activeResidenceMenu: true, activeResidenceMobileMenu: true }) } },
          class: {
              show: (element, state) => state.activeResidenceMenu
                ? { bottom: `${-30 / 10}em`, transform: 'scale(.9)' }
                : { bottom: `0`, transform: 'scale(1)' }
          }
        },

        close: {
           on: { click: (event, element, state) => { state.update({ activeResidenceMenu: false, activeResidenceMobileMenu: false }) } },
            class: {
              show: (element, state) => state.activeResidenceMenu
                ? { bottom: `${0 / 10}em`, transform: 'scale(1)' }
                : { bottom: `${-30 / 10}em`, transform: 'scale(.9)' }
            }
        }
      }
    }
  ]
}

const footer = {
  extend: Footer,
  socialLinks: {
    ...[
      { props: { href: `https://www.facebook.com/BBResidenceTbilisi` } },
      { props: { href: `https://www.instagram.com/bbresidence.georgia` } }
    ]
  }
}

export const Sololaki = {
  extend: Flex,
  state,
  props: {
    ...properties
  },

  class: {
    show: (element, state) => state.activeHeader
    ? {
     display: 'none'
    }
    : {}

  },

  menuBackground: {
    class: {
      show: (element, state) => state.activeResidenceMenu
        ? { height: '90%', background: 'rgba(1, 57, 57, .95)' }
        : { height: '46px', background: 'rgba(1, 57, 57, 0)' }
    }
  },
  header,
  menu,
  banner,
  residence,
  servicesFacilities,
  mission,
  apartments,
  roomPopUp,
  wine,
  feedBacks,
  location,
  footer
}
