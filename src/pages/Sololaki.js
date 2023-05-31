'use strict'

import { Flex, Link } from 'smbls'

import { Menu, MenuMobile, Header, Footer } from '../components'

import { banner, residence, servicesFacilities, mission, apartments, wine, feedBacks, location } from '../sections/residenceSections'

import { roomPopUp } from '../sections/residenceSections/apartments/roomPopUp/roomPopUp'

import { properties } from './props'

const state = {
  activeImage: 0,
  activePopUp: false,
  activePopUpContent: false,
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
  activeRoomAmenity: false,
  activeButton: false,

  activeGallery: false
}

const menu = {
  extend: Menu,
  navBar: {
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'services & facilities', href: '#service&facilities' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'location', href: '#location' } }
    ]
  }
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
      show: (element, state) => state.activeMenu
      ? { height: '90%', transition: 'height .75s ease' }
      : { height: '46px', transition: 'height .55s ease' }
    }
  },

  Header,
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
