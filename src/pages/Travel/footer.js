'use strict'

import { Flex, Img, Box } from 'smbls'

import { Footer } from '../../components'

import CLOSES_PNG from '../../assets/icons/reject.png'

export const footer = {
  extend: Footer,
  props: { style: { zIndex: '200' } },
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
      align: 'center space-between',
      style: { cursor: 'pointer' },
      href: '',
      span: { text: 'PLAN TRIP' }
    },
    on: {
      click: (event, element, state) => {
        state.activeForm
          ? state.update({ activeForm: false })
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
      extend: [Img, Box],
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
