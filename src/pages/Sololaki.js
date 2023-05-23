'use strict'

import { Flex, Link } from 'smbls'

import { Menu, MenuMobile, Header, Footer } from '../components'

import { banner, residence, servicesFacilities, mission, apartments, wine, feedBacks, location } from '../sections/residenceSections'

import { roomPopUp } from '../sections/residenceSections/apartments/roomPopUp/roomPopUp'

import ORNAMENT_PNG from '../assets/images/residence/sololaki/ornaments.png'

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
  activeNightSkyImage: 0,
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
      : { height: '46px' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeResidenceMenu
        ? {
          '@media only screen and (min-width: 1025px)': {
            width: `${700 / 16}em`,
            transition: 'width .35s ease',
            '> a': {
              transform: 'scale(1)',
              opacity: '.7',
              transition: 'transform .75s ease, opacity .75s ease'
            }
          },
          '@media only screen and (max-width: 1024px)': {
            '> a': {
              height: `${46 / 13}em`,
              opacity: '1',
              transition: 'height .75s ease, opacity .75s ease'
            }
          }
        }
        : {
          '@media only screen and (min-width: 1025px)': {
            width: `0`,
            transition: 'width .35s ease',
            '> a': {
              transform: 'scale(1.3)',
              opacity: '0',
              transition: 'transform .75s ease, opacity .75s ease'
            }
          },
          '@media only screen and (max-width: 1024px)': {
            '> a': {
              height: `0`,
              opacity: '0',
              transition: 'height .35s ease, opacity .35s ease'
            }
          }
        }
    },
    childExtend: {
       on: {
        click: (event, element, state, ctx) => {
          state.update({ activeResidenceMenu: false })
          Link.on.click(event, element, state, ctx)
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

  menuBackground: {
    class: {
      show: (element, state) => state.activeResidenceMenu
      ? {
        height: '90%',
        transition: 'height .75s ease'
      }
      : {
        height: '46px',
        backdropFilter: 'blur(3px)',
        transition: 'height .55s ease, backdrop-filter 1s ease'
      }
    }
  },

  menuBackImage: {
    props: {
      backgroundImage: 'url(' + ORNAMENT_PNG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      style: { backgroundAttachment: 'fixed'},
      ':after': { background: 'naviGreen .9' }
    },
    class: {
      show: (element, state) => state.activeResidenceMenu
      ? {
        height: '90%',
        opacity: '1',
        transition: 'height .75s ease, opacity .75s ease',
      }
      : {
        height: '46px',
        opacity: '0',
        transition: 'height .55s ease, opacity .55s ease',
      }
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
