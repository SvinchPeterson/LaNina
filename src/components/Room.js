'use strict'

import { Flex } from 'smbls'
import { keyframes } from '@emotion/css'

import { Gallery } from './Gallery/gallery'
import { RoomDescription } from './RoomDescription'
import { Amenities } from './Amenities'

export const opacities = keyframes`
  from {
    opacity: 0;
    transform: scale(.99);
  }
  to {
   opacity: 1;
   transform: scale(1);
  }
`

export const Room = {
  extend: Flex,
  props: {
    boxSize: '100% 100%',
    align: 'center center',
    position: 'relative',
    gap: 'C',
    style: {
      zIndex: 10,
      alignSelf: 'center'
    },
    article: {
      flexFlow: 'column',
      padding: '0 0 0 D',
      gap: 'C'
    }
  },

  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        minWidth: '100%',
        height: '100%',
        animationName: opacities,
        animationDuration: '.5s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }

      : {
        height: `0`,
        opacity: 0,
        background: 'black',
        pointerEvents: 'none'
      }
  },

  article: {
    description: { extend: RoomDescription },
    amenities: { extend: Amenities }
  },
  gallery: { extend: Gallery }
}
