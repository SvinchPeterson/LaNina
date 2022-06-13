'use strict'
import { Box } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  // props: {
  //   width: 'I',
  //   height: 'J'
  // },
  style: {
    width: '650px',
    height: '450px',
    backgroundImage: 'linear-gradient(rgba(42, 81, 61, .25), rgba(0, 0, 0, .5)),url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
}

export default {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    padding: '0 F'
  },
  // style: { border: '5px solid red' },

  yardEntrence
}
