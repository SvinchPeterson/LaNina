'use strict'

import Gallery from './gallery'

import LIVINGROOM_JPG from '../../assets/images/ballerina/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/ballerina/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/ballerina/bedroom.jpg'
import MEAMA_JPG from '../../assets/images/ballerina/meama.jpg'
import HALL_JPG from '../../assets/images/ballerina/hall.jpg'
import BATHROOM_JPG from '../../assets/images/ballerina/bathroom.jpg'

const images = [
  { text: 'ballerina1', style: { } },
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

export const galleryBallerina = {
  proto: Gallery,
  state: {},
  images: {
    ...images
  }
}
