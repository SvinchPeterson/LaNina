'use strict'

import { Block } from '@rackai/symbols'

const images = [
  { text: 'one', style: { } },
  { text: 'two', style: { } },
  { text: 'three', style: { } },
  { text: 'four', style: { } },
  { text: 'five', style: { } },
  { text: 'six', style: { } },
  { text: 'seven', style: { } },
  { text: 'eight', style: { } },
  { text: 'nine', style: { } },
  { text: 'ten', style: { } }
]

export default {
  tag: 'section',
  style: {
    width: '100%',
    height: `100%`,
    justifyContent: 'flex-end',
    position: 'relative'
  },
  state: {
    activeImage: 0
  },
  // proto: Img,
  // props: {
  //   src: MEAMA_JPG
  // },
  // style: {
  //   // display: 'block',
  //   // maxWidth: '100%',
  //   // maxHeight: '100%',
  //   position: 'relative',
  //   width: '100%',
  //   height: '100%',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .6)',
  //   filter: 'brightness(80%) grayscale(50%)'
  //   // backgroundAttachment: 'fixed'
  // },
  images: {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex'
    },

    childProto: {
      proto: Block,
      style: {
        width: '100%',
        height: '100%',
        fontSize: '30px',
        color: 'black',
        position: 'absolute',
        top: 0,
        left: 0
      },
      class: {
        show: (element, state) => state.activeImage === parseInt(element.key) ? { display: 'block' } : { display: 'none' }
      }
    },
    ...[
      {}
    ]
  },

  rightArrow: {
    tag: 'button',
    text: 'right',
    style: {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: '45%',
      right: 0,
      cursor: 'pointer'
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
    text: 'left',
    style: {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: '45%',
      left: 0,
      cursor: 'pointer'
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
