'use strict'
// import { Block, Text } from '@rackai/symbols'

import BALLERINA_GALLERY_JPG from '../../assets/images/ballerina/ballerina.jpg'

export default {
  style: {
    flex: 1.5,
    height: `${500 / 16}em`,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  image: {
    // proto: Img,
    // props: {
    //   src: MEAMA_JPG
    // },
    style: {
      // display: 'block',
      // maxWidth: '100%',
      // maxHeight: '100%',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + BALLERINA_GALLERY_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: 'inset 2px 2px 5px 2px rgba(0, 0, 0, .6)',
      filter: 'brightness(80%) grayscale(50%)'
    }
  }

}
