'use strict'
import { Block, Img, Text, Flex, Link, Icon, SVG } from '@rackai/symbols'
import Amenities from '../Amenities'

export default {
  proto: [Block, Flex],
  props: {
    padding: '0 0 0 C',
    gap: 'B'
  },
  style: {
    flexFlow: 'column',
    flex: '.8',
    boxSizing: 'border-box'
  },
  h1: {
    proto: Text,
    props: {
      text: 'Ballerina'
    },
    style: { color: '#BDB171', letterSpacing: '2px' }
  },
  p: {
    proto: Text,
    props: {
      text: `"Ballerina" is a cozy and quite two-bedroom apartment  of 72m2 on high first floor with open terrace,  composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower,  kitchen with a dining area, making the apartment comfortable for 5 people
      Equipped with air-conditioning, smart TV, gas stove, refrigerator, microwave oven, ironing facilities, coffee and tea maker, washing machine, bathroom with shower and toiletries.
      Parking space available in inner yard.`
    },
    style: {
      maxWidth: `${500 / 15}em`,
      marginRight: '-100px',
      color: 'rgba(243, 231, 219, .85)',
      fontFamily: 'Avenir Next'
    }
  },
  Amenities

}
