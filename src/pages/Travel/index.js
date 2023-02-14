'use strict'

import { Flex, Img } from 'smbls'

import { props } from '../Sololaki'

import { Header, Footer } from '../../components'
import { banner, georgia, gallery, feedBacks } from '../../sections/travelSections'
import { popUpGallery } from '../../sections/travelSections/gallery/popUpGallery'
import CLOSES_PNG from '../../assets/icons/reject.png'

import { headerMobile } from './header'
import { menu } from './menu'
import { aboutUs } from './aboutUs/index'
import { planTrip } from './planTrip'
import { tours } from './tours'
// import { feedBacks } from './feedBacks/feedBacks'
import { contact } from './contact'

const state = {
  activeForm: false,
  activeTour: false,
  activeImage: 0,

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
  activePopUpGallery: false,

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

const header = {
  extend: Header,
  logoMenuButton: { logoLink: {} },
  navigation: {
    back: {},
    nav: {
      ...[
        { props: { text: 'gallery', href: '#gallery' } },
        { props: { text: 'tours', href: '#tours' } },
        { props: { text: 'about us', href: '#about' } },
        { props: { text: 'contact', href: '#contact' } }
      ]
    }
  }
}

export const footer = {
  extend: Footer,
  socialLinks: {
    ...[{
      props: { href: `https://www.facebook.com/profile.php?id=100077381466828` }
    }, {
      props: { href: `https://www.instagram.com/bb_travelgeorgia/` }
    }]
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

  props: {
    ...props,
    background: 'rgba(229, 249, 252, 1)'
  },
  state,

  header,
  headerMobile,
  menu,
  banner,
  georgia,
  gallery,
  popUpGallery,
  // tours,
  feedBacks,
  aboutUs,
  planTrip,
  contact,
  footer
}
