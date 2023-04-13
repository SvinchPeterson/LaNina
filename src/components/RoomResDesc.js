'use strict'
import { Img, Flex } from 'smbls'

import BED_PNG from '../assets/icons/bed.png'
import BRACKET_PNG from '../assets/icons/bracket.png'
import USER_PNG from '../assets/icons/user.png'


const props = {
  position: 'relative',
  height: 'fit-content',
  style: {
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '30px',
      background: 'linear-gradient(to top, rgba(25, 63, 55, 1) 0%, rgba(25, 63, 55, 0) 100%)',
      bottom: '-1px',
      display: 'none'
    }
  },
  content: {
    flexAlign: 'center flex-start',
    gap: 'D',
    background: 'rgba(25, 63, 55, 1)',

    childProps: {
      icon: {
        boxSize: 'B1 ',
        margin: '0 0 0 0'
      },
      caption: {
        color: 'cream .65',
        fontSize: `Z`,
        padding: '0 0 0 0',
        flexFlow: 'column',
        lineHeight: '16.8px',
        style: {
          whiteSpace: 'nowrap',
          textAlign: 'left',
          span: {
            fontWeight: '700',
            color: 'rgba(248, 241, 227, 1)'
          }
        }
      }
    }
  }
}

export const RoomResDesc = {
  props,

  content: {
    childExtend: {
      extend: Flex,
      icon: { extend: Img },
      caption: {}
    },
    ...[
      {
        props: {
          icon: { src: BRACKET_PNG },
          caption: {text: '52 m2'}
        }
      },
      {
        props: {
          icon: { src: BED_PNG },
          caption: {

          }
        }
      },
      {
        props: {
          icon: { src: USER_PNG }
        }
      }
    ]
  }
}
