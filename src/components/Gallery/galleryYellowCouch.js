'use strict'
import Gallery from './gallery'

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
