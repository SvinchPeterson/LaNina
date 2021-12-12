'use strict'

import Gallery from './gallery'

import LIVING_ROOM_JPG from '../../assets/images/ballerina/livingroom.jpg'
import LIVING_ROOM2_JPG from '../../assets/images/ballerina/livingroom2.jpg'
import BED_ROOM_JPG from '../../assets/images/ballerina/bedroom.jpg'
import MEAMA_JPG from '../../assets/images/ballerina/meama.jpg'
import HALL_JPG from '../../assets/images/ballerina/hall.jpg'
import BATH_ROOM_JPG from '../../assets/images/ballerina/bathroom.jpg'

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
