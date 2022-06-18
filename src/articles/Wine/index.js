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
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .35)),url(' + WINE_JPG + ')',
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'left 300px bottom 150px',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    marginRight: `${300 / 16}em`,
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '100%',
      left: 0,
      width: '600px',
      height: '3px'
      // background: 'rgba(168, 98, 63, 1)'
    }
  }
}

const paragraph = {
  proto: Box,
  props: {
    height: `${800 / 16}em`,
    position: 'absolute',
    padding: '0 D 0 E',
    top: '0',
    flexAlign: 'center flex-end'
  },
  style: {
    zIndex: 1,
    marginLeft: '500px',
    background: 'linear-gradient(rgba(248, 241, 227, 0), rgba(248, 241, 227, 0),rgba(42, 81, 61, .35))',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom 200px center'
  },
  span: {
    proto: [wineText, Box],
    props: {
      fontSize: `${14 / 16}em`,
      maxWidth: `${300 / 14}em`,
      display: 'block',
      color: 'black .35'
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
    margin: 'G2 0 G 0'
  },
  attr: { id: 'wine' },
  image,
  paragraph
}
