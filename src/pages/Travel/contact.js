'use strict'

import { Flex, Img } from 'smbls'

import PHONE_PNG from '../../assets/icons/phone.png'
import MOBILE_PNG from '../../assets/icons/mobile.png'

const props = {
  flow: 'column',
  padding: 'C - - -',
  gap: 'Z1',
  mailLocation: {
    flow: 'column',
    gap: 'X',
    fontSize: `${13.5 / 14.5}em`,
    style: { letterSpacing: '.5px' }
  },

  numbers: {
    flow: 'column',
    borderTop: '.5px solid black',
    padding: 'Z1 - - -',
    gap: 'Z',
    style: {
      letterSpacing: '.5px',
      fontSize: `${13.5 / 14.5}em`
    },
    childProps: {
      gap: 'Y2',
      align: 'center flex-start',
      icon: {
        boxSize: '16px '
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
