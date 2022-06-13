'use strict'
import { Box } from '@symbo.ls/symbols'
import { wineText } from '../../texts'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'

const image = {
  proto: Box,
  props: {
    boxSize: `${450 / 16}em ${600 / 16}em`,
    position: 'absolute'
  },
  style: {
    backgroundImage: 'url(' + WINE_JPG + ')',
    backgroundSize: 'cover',
    zIndex: 2,
    marginRight: `${300 / 16}em`
  }
}

const paragraph = {
  proto: Box,
  props: {
    height: `${800 / 16}em`,
    background: 'green .54',
    position: 'absolute',
    padding: '0 D 0 G',
    top: '0',
    flexAlign: 'center flex-end'
  },
  style: {
    zIndex: 1,
    marginLeft: '400px'
  },
  span: {
    proto: [wineText, Box],
    props: {
      fontSize: `${15 / 16}em`,
      maxWidth: `${300 / 15}em`,
      display: 'block',
      color: 'cream 1'
    }
  }
}

export default {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    maxHeight: `${750 / 16}em`,
    position: 'relative',
    flexAlign: 'center center',
    margin: 'H 0'
  },
  image,
  paragraph
}
