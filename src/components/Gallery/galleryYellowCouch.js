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
  { text: 'yellowCouch1', style: { } },
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

export const galleryYellowCouch = {
  proto: Gallery,
  state: {},
  images: {
    ...images
  }
}
