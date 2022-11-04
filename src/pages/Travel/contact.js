'use strict'

import { Flex, Img } from 'smbls'

import PHONE_PNG from '../../assets/icons/phone.png'
import MOBILE_PNG from '../../assets/icons/mobile.png'

const props = {
  // flow: 'column',
  justifyContent: 'space-between',
  borderTop: '1px solid black',
  width: '60%',
  margin: '- auto',
  padding: 'A - E -',
  fontSize: `${14.5 / 16}em`,
  '@tabletS': { width: '80%' },
  mailLocation: {
    flow: 'column',
    gap: 'X',
    padding: '- - A -',
    margin: '- - A -',
    style: {
      letterSpacing: '1px'
    },

    childProps: {
      '@mobileS': { maxWidth: 'F1' }
    }
  },

  numbers: {
    flow: 'column',
    gap: 'Y1',
    style: { letterSpacing: '1px', margin: '- - - auto' },
    childProps: {
      gap: 'Y2',
      align: 'center flex-end',
      fontWeight: '400',
      icon: {
        boxSize: 'A1 '
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
      { props: { text: 'Georgia, Tbilisi, 0105, Lado Asatiani Street #41' } }
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
