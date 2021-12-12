'use strict'

import Gallery from './gallery'

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
