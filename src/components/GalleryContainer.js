'use strict'

import { Gallerys } from './Gallerys'

export const GalleryContainer = {
  props: {
    border: '5px solid red',
    boxSize: 'G2 H2'
  },
  gallery: { extend: Gallerys }
}
