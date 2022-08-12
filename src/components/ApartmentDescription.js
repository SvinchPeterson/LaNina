'use strict'
import { Img } from 'smbls'

import BED_PNG from '../assets/icons/bed.png'
import BRACKET_PNG from '../assets/icons/bracket.png'
import USER_PNG from '../assets/icons/user.png'

const iconCaption = {
  props: {
    flexAlign: 'flex-start flex-start',
    gap: 'Z1',
    css: { textAlign: 'left' },
    icon: {
      boxSize: 'B B',
      margin: 'Y 0 0 0'
    },
    caption: {
      color: 'cream2 .65',
      fontSize: 'Z',
      css: {
        whiteSpace: 'nowrap',
        textAlign: 'left',
        span: {
          fontWeight: '700',
          color: 'rgba(248, 241, 227, 1)'
        }
      }
    }
  },

  icon: {
    proto: Img,
    props: 'match'
  },
  caption: {
  }
}

const header = {

  childProto: {
    proto: iconCaption
  },
  ...[
    {
      props: {
        icon: { src: BED_PNG }
      },
      icon: {},
      caption: {
        ...[
          { text: '2 bedroom with' },
          { tag: 'span', text: '1 ' },
          'king size / ',
          { tag: 'span', text: '2 ' },
          'single beds'
        ]
      }
    },

    {
      props: { icon: { src: USER_PNG } },
      icon: {},
      caption: {

        ...[
          'comfortable for',
          {
            props: {
              flexAlign: 'flex-start flex-start',
              gap: 'X'
            },
            span: '5',
            text: ' persons'
          }
        ]
      }
    },
    {
      props: { icon: { src: BRACKET_PNG } },
      icon: {},
      caption: {
        ...[
          {
            tag: 'span',
            text: '72 m2'
          },
          {
            text: 'high first floor'
          }
        ]
      }
    }
  ]
}

const props = {
  header: {
    flexAlign: 'center flex-start',
    gap: 'C'
  }

}

export const ApartmentDescription = {
  props,
  header

}
