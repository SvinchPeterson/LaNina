'use strict'

import { Flex, Img } from 'smbls'

import PHONE_PNG from '../assets/icons/phone.png'
import MOBILE_PNG from '../assets/icons/mobile.png'

const mailLocation = {
  extend: Flex,
  ...[
    { props: { text: 'info@bbhospitality.ge' } },
    { props: { text: 'Tbilisi, 0105, Lado Asatiani Street #41' } }
  ]
}

const numbers = {
  extend: Flex,
  childExtend: {
    extend: Flex,
    icon: { extend: Img }
  },
  ...[
    {
      props: {
        icon: { src: PHONE_PNG },
        text: '+ 995 322 502 222'
      }
    },

    {
      props: {
        icon: { src: MOBILE_PNG },
        text: '+ 995 579 220 240'
      }
    }
  ]
}

const props = {
  align: 'center center',
  childProps: {
    fontSize: `${12 / 16}em`,
    fontWeight: '700',
    flow: 'column',
    gap: 'Y',
    childProps: { letterSpacing: `${.5 / 12}em`}
  },
  numbers: {
    childProps: {
      align: 'center center',
      gap: 'Y',
      icon: { boxSize: 'A '}
    }
  }
}


export const Contact = {
  extend: Flex,
  props,
  attr: { id: 'contact' },

  mailLocation,
  numbers
}
