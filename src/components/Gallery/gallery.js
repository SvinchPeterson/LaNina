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
  tag: 'section',
  style: {
    width: '100%',
    height: `100%`,
    // justifyContent: 'flex-end',
    position: 'relative',
    background: 'radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9))'
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
      height: '100%',
      overflow: 'hidden',
      margin: '0 auto',
      position: 'relative',
      // display: 'flex',
      // justifyContent: 'center',
      border: '4px solid red',
      '> div': {
        width: '40%',
        position: 'absolute',
        right: 0,

        border: '4px solid yellow',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        filter: 'grayscale(50%)',
        boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .6)'
      }
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
    ...images
  },

  rightArrow: {
    tag: 'button',
    style: {
      // width: '100px',
      // height: '100px',
      position: 'absolute',
      top: '45%',
      right: '0px',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none'
    },
    icon: {
      proto: Img,
      props: { src: RIGHT_ARROW },
      style: {
        width: '30px'
      }
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
      // width: '100px',
      // height: '100px',
      position: 'absolute',
      top: '45%',
      left: '0px',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      outline: 'none'
    },
    icon: {
      proto: Img,
      props: { src: LEFT_ARROW },
      style: {
        width: '30px'
        // height: '100px'
      }
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
