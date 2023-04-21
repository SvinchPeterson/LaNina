'use strict'

import { Flex, Img } from 'smbls'

import PHONE_PNG from '../../assets/icons/phone.png'
import MOBILE_PNG from '../../assets/icons/mobile.png'

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
  flow: 'column',
  gap: 'Y2',
  fontWeight: '700',
  fontSize: `Z`,
  letterSpacing: `${0.3 / 13}em`,
  color: 'black .85',
  width: '55%',
  alignSelf: 'center',
  padding: 'E - E2 -',
  '@maxTabletS': {
    width: '70%',
    padding: 'C2 - E2 -'
  },
  '@maxMobileM': {width: '80%'},

  mailLocation: {
    flow: 'column',
    gap: 'X',
    '@maxMobileL': {textAlign: 'center'}
  },
  numbers: {
    flow: 'column',
    padding: 'Z1 - - -',
    gap: 'Z',
    // borderTop: '.5px solid black',
    alignSelf: 'flex-end',
    '@maxMobileL': {
      border: 'solid, black .5',
      borderWidth: '1px 0 0 0',
      width: '100%',
      alignItems: 'center'
    },
    childProps: {
      gap: 'Y2',
      align: 'center flex-start',
      icon: { boxSize: 'A ' }
    }
  }

}

export const contact = {
  extend: Flex,
  props,
  attr: { id: 'contact' },

  mailLocation,
  numbers
}
