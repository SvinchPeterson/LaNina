'use strict'
import { Block, Text, Flex, SVG } from '@rackai/symbols'

import iconSVG from '../../assets/instagram2.svg'

const amenities = {
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'Z'
  },
  h5: {
    proto: Text,
    props: {
      text: 'Amenities'
    },
    style: {
      color: 'rgba(213, 176, 56, .5)'
      // border: '1px solid red'
    }
  },
  content: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'Y1'
    },
    style: { color: '#F3E7DB' },
    childProto: {
      proto: Block,
      props: {
        flexAlign: 'center flex-start',
        gap: 'Z'
      },
      icon: {
        proto: SVG,
        src: iconSVG,
        style: {
          width: '20px',
          height: '20px'
        }
      },
      item: {
        proto: Text,
        props: {
          text: 'Wifi'
        },
        style: {
          fontFamily: 'Avenir Next'
        }
      }
    }
  }
}
export default {
  tag: 'aside',
  proto: [Block, Flex],
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start'
  },
  style: {
    position: 'absolute',
    // background: 'rgba(206, 197, 177, .9)',
    background: 'rgba(0, 0, 0, .6)',
    height: '690px',
    bottom: 0,
    left: '120px',

    padding: '30px',
    zIndex: '30'
  },
  h3: {
    proto: [Text, Block],
    props: {
      text: 'Ballerina',
      padding: '0 0 Y 0',
      size: 'D'
    },
    style: {
      color: 'rgba(213, 176, 56, .5)'
      // color: 'rgba(165, 125, 2, .7)'
    }
  },
  p: {
    proto: Text,
    props: {
      text: `"Ballerina" is a cozy and quite two-bedroom apartment  of 72m2 on high first floor with open terrace,  composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower,  kitchen with a dining area, making the apartment comfortable for 5 people
        Equipped with air-conditioning, smart TV, gas stove, refrigerator, microwave oven, ironing facilities, coffee and tea maker, washing machine, bathroom with shower and toiletries.
        Parking space available in inner yard.`
    },
    style: {
      fontFamily: 'Bellefair',
      maxWidth: '500px',
      margin: 0,
      fontSize: '18px',
      color: '#F3E7DB'
    }
  },
  amenities: {
    proto: amenities,
    props: {
      padding: 'C 0 0 0'
    },
    h5: {},
    content: {
      ...[
        {
          icon: {},
          item: { props: { text: 'Wifi' } }
        },
        {
          icon: {},
          item: { props: { text: 'TV' } }
        },
        {
          icon: {},
          item: { props: { text: 'Microwave' } }
        },
        {
          icon: {},
          item: { props: { text: 'mini Fridge' } }
        },
        {
          icon: {},
          item: { props: { text: 'Coffee maker' } }
        },
        {
          icon: {},
          item: { props: { text: 'Private entrance with balcony' } }
        },
        {
          icon: {},
          item: { props: { text: 'Iron' } }
        },
        {
          icon: {},
          item: { props: { text: 'Cooking basics' } }
        }
      ]
    }
  }
}
