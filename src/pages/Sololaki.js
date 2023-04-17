'use strict'

import { Flex } from 'smbls'

import { Menu, MenuMobile, Header, Footer } from '../components'

import { banner, residence, servicesFacilities, mission, apartments, wine, feedBacks, location } from '../sections/residenceSections'

import { roomsPopUp } from '../sections/residenceSections/apartments/roomsPopUp'

import { properties } from './props'

const state = {
  activeResidenceMenu: false,
  activeResidenceMobileMenu: false,

  activeTab: 0,
  activeImage: 0,
  offers: false,
  back: true,
  tabs: 0,
  activeRoomsPopUp: false,

  activeBallerina: false,
  activeRedBrick: false,
  activeYellowCouch: false,
  activeGreenForest: false,
  activeRetro: false,
  activeLagoon: false,
  activeQvevri: false,

  activeAmenitiesPopUp: false,
  activeDescriptionsPopUp: false,

  activeBallerinaDescription: false,
  activeRedBrickDescription: false,
  activeYellowCouchDescription: false,
  activeGreenForestDescription: false,
  activeRetroDescription: false,
  activeBlueLagoonDescription: false,
  activeQvevriDescription: false,

  activeHeader: false
}

const menu = {
  extend: Menu,
  class: {
    show: (element, state) => state.activeResidenceMenu
      ? { height: `${30 / 16}em` } : { height: '0' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeResidenceMenu
        ? { width: `${550 / 16}em`, '> a':{ transform:'scale(1)', transition: 'transform 1s ease', } }
        : { width: '0', '> a':{ transform:'scale(1.5)', transition: 'transform 1s ease', }}
    },
    childExtend: { on: { click: (event, element, state) => { state.update({ activeResidenceMenu: false }) } } },
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'services & facilities', href: '#service&facilities' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'location', href: '#location' } }
    ]
  }
}


const menuMobile = {
  extend: MenuMobile,
  props: {background: 'naviGreenLight .75'},
  class: {
    show: (element, state) => state.activeResidenceMobileMenu
      ? {
        height: '80%',
        transition: 'height .75s ease'
      }
      : { height: '0', pointerEvents: 'none', transition: 'height .35s ease' }
  },

  navBar: {
    class: {
      show: (element, state) => state.activeResidenceMobileMenu
        ? { opacity: '1', transition: 'opacity .75s ease' }
        : { opacity: '0', transition: 'opacity .35s ease' }
    },

    childExtend: {
       class: {
        show: (element, state) => state.activeResidenceMobileMenu
          ? { height: `${46 / 13}em`, opacity: '1', transition: 'height .75s ease, opacity .75s ease' }
          : { height: '0', opacity: '0', transition: 'height .35s ease, opacity .35s ease' }
      },
      on: {
        click: (event, element, state) => { state.update({ activeResidenceMenu: false, activeResidenceMobileMenu: false }) }
      }
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


// function sideScroll (element, direction, speed, distance, step) {
//   var scrollAmount = 0
//   var slideTimer = setInterval(function () {
//     if (direction === 'left') {
//       element.scrollLeft -= step
//     } else {
//       element.scrollLeft += step
//     }
//     scrollAmount += step
//     if (scrollAmount >= distance) {
//       window.clearInterval(slideTimer)
//     }
//   }, speed)
// }

// on: {
//   click: (event, element, state) => {
//     const content = document.getElementById('feedbacks')
//     sideScroll(content, 'left', 10, 300, 10)
//   }
// }

// / window.addEventListener("scroll", function() {
//   //   var header = document.querySelector("header");
//   //   header.classList.toggle("scrolled", window.scrollY > 0);
//   // });

export const Sololaki = {
  extend: Flex,
  state,
  props: {
    ...properties
  },

  on: {
    // click: (event, element, state) => { state.update({ activeResidenceMenu: false, activeResidenceMobileMenu: false }) }
    // scroll: (element, state) => {
    //   state.update({activeHeader: true})

    // }
  },

  class: {
    show: (element, state) => state.activeHeader
    ? {
     display: 'none'
    }
    : {}

  },


  header,
  menu,
  menuMobile,
  banner,
  residence,
  servicesFacilities,
  mission,
  apartments,
  roomsPopUp,
  wine,
  feedBacks,
  location,
  footer
}
