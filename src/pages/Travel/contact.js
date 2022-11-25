'use strict'

import { Flex, Img } from 'smbls'

import PHONE_PNG from '../../assets/icons/phone.png'
import MOBILE_PNG from '../../assets/icons/mobile.png'

const props = {
  maxWidth: '1440px',
  margin: '- auto',
  flow: 'column',
  padding: 'C - E2 -',
  gap: 'Z1',
  '@mobileXS': {
    padding: 'C B2 E2 B2'
  },
  mailLocation: {
    flow: 'column',
    gap: 'X',
    textAlign: 'center',
    style: { letterSpacing: '.8px' }
  },

  numbers: {
    flow: 'column',
    borderTop: '.5px solid black',
    padding: 'Z1 - - -',
    gap: 'Z',
    textAlign: 'center',
    style: {
      letterSpacing: '.8px'
    },
    childProps: {
      gap: 'Y2',
      align: 'center center',
      icon: {
        boxSize: 'A '
      }
    }
  }

}

export const contact = {
  extend: Flex,
  props,
  attr: { id: 'contact' },

  mailLocation: {
    extend: Flex,
    ...[
      { props: { text: 'info@bbhospitality.ge' } },
      { props: { text: 'Tbilisi, 0105, Lado Asatiani Street #41' } }
    ]
  },

  numbers: {
    extend: Flex,
    childExtend: {
      extend: Flex,
      icon: { extend: Img }
    },
    ...[
      {
        props: {
          icon: { src: PHONE_PNG },
          text: '+995 322 502 222'
        }
      },

      {
        props: {
          icon: { src: MOBILE_PNG },
          text: '+995 579 220 240'
        }
      }
    ]
  }
}
