'use strict'

import { Block, Img } from '@rackai/symbols'

import LEFT_ARROW from '../../assets/left.png'
import RIGHT_ARROW from '../../assets/right.png'

export const images = [

  // { text: 'one', style: { } },
  // { text: 'two', style: { } },
  // { text: 'three', style: { } }
  // { text: 'four', style: { } },
  // { text: 'five', style: { } }
  // { text: 'six', style: { } },
  // { text: 'seven', style: { } },
  // { text: 'eight', style: { } },
  // { text: 'nine', style: { } },
  // { text: 'ten', style: { } }
]

export default {
  style: {
    position: 'relative'
    // background: 'radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9))'
  },
  state: {
    activeImage: 0
  },
  images: {
    childProto: {
      tag: 'span',
      proto: Block,
      style: {
        transition: 'all 1s ease-in-out'
      },
      class: {
        show: (element, state) => state.activeImage === parseInt(element.key) ? { display: 'block' } : { display: 'none' }
      }
    },
    ...images
  },

  rightArrow: {
    tag: 'button',
    style: {
      right: '30px'
    },
    icon: {
      proto: Img,
      props: { src: RIGHT_ARROW }
    },
    on: {
      click: (event, element, state) => {
        console.log(event)
        console.log(element)
        console.log(state)
        const { activeImage } = state
        state.update({
          activeImage: activeImage > (images.length - 2) ? 0 : activeImage + 1
        })
      }
    }
  },
  leftArrow: {
    tag: 'button',
    style: {
      left: '30px'
    },
    icon: {
      proto: Img,
      props: { src: LEFT_ARROW }
    },
    on: {
      click: (event, element, state) => {
        console.log(event)
        console.log(element)
        console.log(state)
        const { activeImage } = state
        state.update({
          activeImage: activeImage < 1 ? (images.length - 1) : activeImage - 1
        })
      }
    }
  }
}
