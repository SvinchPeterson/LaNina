'use strict'
import Gallery from './gallery'

import BEDROOM_JPG from '../../assets/images/yellowCouch/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/yellowCouch/bedroom2.jpg'
import BEDROOM3_JPG from '../../assets/images/yellowCouch/bedroom3.jpg'
import BOOK_JPG from '../../assets/images/yellowCouch/book.jpg'
import HALL_JPG from '../../assets/images/yellowCouch/hall.jpg'
import KITCHEN_JPG from '../../assets/images/yellowCouch/kitchen.jpg'
import LIVINGROOM_JPG from '../../assets/images/yellowCouch/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/yellowCouch/livingroom2.jpg'

const images = [
  { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
  { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } },
  { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
  { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
  { style: { backgroundImage: 'url(' + BEDROOM3_JPG + ')' } },
  { style: { backgroundImage: 'url(' + BOOK_JPG + ')' } },
  { style: { backgroundImage: 'url(' + HALL_JPG + ')' } },
  { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } }
]

export const galleryYellowCouch = {
  proto: Gallery,
  state: {},
  images: {
    ...images
  }
  // rightArrow: {
  //   on: {
  //     click: (event, element, state) => {
  //       console.log(event)
  //       console.log(element)
  //       console.log(state)
  //       const { activeImage } = state
  //       state.update({
  //         activeImage: activeImage > (images.length - 2) ? 0 : activeImage + 1
  //       })
  //     }
  //   }
  // },
  // leftArrow: {
  //   on: {
  //     click: (event, element, state) => {
  //       console.log(event)
  //       console.log(element)
  //       console.log(state)
  //       const { activeImage } = state
  //       state.update({
  //         activeImage: activeImage < 1 ? (images.length - 1) : activeImage - 1
  //       })
  //     }
  //   }
  // }
}
