'use strict'

import { Block, Img, Text, Flex, Link, Icon, SVG, Grid } from '@rackai/symbols'

import CHECK_PNG from '../../assets/check.png'

const amenityItem = {
  proto: Block,
  props: {
    flexAlign: 'center flex-start',
    gap: 'Z'
  },
  icon: {
    proto: Img,
    props: { src: CHECK_PNG },
    style: { width: '14px' }
  },
  span: {
    proto: Text,
    props: { text: 'Air conditioning' }
  }
}

export default {
  caption: {
    proto: [Block, Text],
    style: { color: '#BDB171' },
    props: {
      text: 'Amenities',
      size: 'D'
    }
  },
  content: {
    proto: [Block, Grid],
    props: {
      columns: 'repeat(2, 1fr)',
      gap: 'B'
    },
    childProto: {
      proto: amenityItem
    },
    ...[
      {},
      {
        icon: {},
        span: { props: { text: 'Cooking basics' } }
      },
      {
        icon: {},
        span: { props: { text: 'Dishes and silverware' } }
      },
      {
        icon: {},
        span: { props: { text: 'Dishes and silverware' } }
      },
      {
        icon: {},
        span: { props: { text: 'Hair dryer' } }
      },
      {
        icon: {},
        span: { props: { text: 'Heating' } }
      },
      {
        icon: {},
        span: { props: { text: 'Kitchen' } }
      },
      {
        icon: {},
        span: { props: { text: 'TV' } }
      },
      {
        icon: {},
        span: { props: { text: 'Washer' } }
      },
      {
        icon: {},
        span: { props: { text: 'Wifi' } }
      },
      {
        icon: {},
        span: { props: { text: 'Hot water' } }
      },
      {
        icon: {},
        span: { props: { text: 'Shampoo' } }
      },
      {
        icon: {},
        span: { props: { text: 'Shower gel' } }
      },
      {
        icon: {},
        span: { props: { text: 'Bed linens' } }
      },
      {
        icon: {},
        span: { props: { text: 'Clothing storage' } }
      },
      {
        icon: {},
        span: { props: { text: 'Drying rack for clothing' } }
      },
      {
        icon: {},
        span: { props: { text: 'Extra pillows and ' } }
      },
      {
        icon: {},
        span: { props: { text: 'blankets' } }
      },
      {
        icon: {},
        span: { props: { text: 'Hangers' } }
      },
      {
        icon: {},
        span: { props: { text: 'Iron' } }
      },
      {
        icon: {},
        span: { props: { text: 'Mosquito net' } }
      },
      {
        icon: {},
        span: { props: { text: 'Books and reading' } }
      },
      {
        icon: {},
        span: { props: { text: 'material' } }
      },
      {
        icon: {},
        span: { props: { text: 'Carbon monoxide alarm' } }
      },
      {
        icon: {},
        span: { props: { text: 'Smoke alarm' } }
      }
      // {
      //   icon: {},
      //   span: { props: { text: 'Coffee' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Coffee maker' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Dining table' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Hot water kettle' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Microwave' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Mini fridge' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Wine glasses' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Private entrance' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Patio or balcony' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Long term stays allowed' } }
      // },
      // {
      //   icon: {},
      //   span: { props: { text: 'Luggage dropoff allowed' } }
      // }
    ]

  }
}
