'use strict'

import Gallery from './gallery'

import APARTMENT_JPG from '../../assets/images/redBrick/apartment.jpg'
import BEDROOM_JPG from '../../assets/images/redBrick/bedroom.jpg'
import KITCHEN_JPG from '../../assets/images/redBrick/kitchen.jpg'
import LIVINGROOM_JPG from '../../assets/images/redBrick/livingroom.jpg'
import TORSHER_JPG from '../../assets/images/redBrick/torsher.jpg'
import WINE_GLASS_JPG from '../../assets/images/redBrick/wine-glass.jpg'

const images = [
  { text: 'redBrick1', style: { } },
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

export const galleryRedBrick = {
  proto: Gallery,
  state: {},
  images: {
    ...images
  }
}
