'use strict'
import { Block, Text } from '@rackai/symbols'

import { movingLeft } from '../../animations'

import BALLERINA_GALLERY_JPG from '../../assets/images/ballerina/ballerina.jpg'

const images = [
  { text: 'one', style: { background: 'red' } },
  { text: 'two', style: { background: 'yellow' } },
  { text: 'three', style: { background: 'blue' } },
  { text: 'four', style: { background: 'blue' } },
  { text: 'five', style: { background: 'blue' } },
  { text: 'six', style: { background: 'blue' } },
  { text: 'seven', style: { background: 'blue' } },
  { text: 'eight', style: { background: 'blue' } },
  { text: 'nine', style: { background: 'blue' } },
  { text: 'ten', style: { background: 'blue' } }
]

// var sliderIndex = 1

// // var slideIndex = 1

// function showDivs (n) {
//   var i
//   var x = document.getElementsByClassName('mySlides')
//   if (n > x.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = x.length }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = 'none'
//   }
//   x[slideIndex - 1].style.display = 'block'
// }

// showDivs(slideIndex)

// function plusDivs (n) {
//   showDivs(slideIndex += n)
// }

export default {
  tag: 'section',
  style: {
    width: '100%',
    height: `100%`,
    justifyContent: 'flex-end',
    position: 'relative',
    border: '3px solid green'
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
  //   // backgroundImage: 'url(' + BALLERINA_GALLERY_JPG + ')',
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
      border: '10px solid orange',
      overflow: 'hidden',
      display: 'flex'
    },

    childProto: {
      proto: Block,
      attr: {
        id: 'image'
      },
      style: {
        width: '100%',
        height: '100%',
        fontSize: '30px',
        border: '2px solid red',
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
