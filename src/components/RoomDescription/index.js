'use strict'
import { Block, Text, Flex, SVG } from '@rackai/symbols'
import { heightGallery, opacity2 } from '../../animations'

import iconSVG from '../../assets/instagram2.svg'

// const placeOffers = {
//   proto: Block,
//   props: {
//     flexFlow: 'column',
//     gap: 'Z'
//   },
//   // h5: {
//   //   proto: Text,
//   //   props: {
//   //     text: 'Place offers'
//   //   },
//   //   style: {
//   //     color: 'rgba(213, 176, 56, .5)'
//   //     // border: '1px solid red'
//   //   }
//   // },
//   content: {
//     proto: Block,

//     style: {
//       color: '#F3E7DB',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '10px'
//     },
//     childProto: {
//       proto: Block,
//       props: {
//         flexAlign: 'center flex-start',
//         gap: 'A'
//       },
//       icon: {
//         proto: SVG,
//         src: iconSVG,
//         style: {
//           width: '20px',
//           height: '20px'
//         }
//       },
//       item: {
//         proto: Text,
//         props: {
//           text: 'Wifi'
//         },
//         style: {
//           fontFamily: 'Avenir Next'
//         }
//       }
//     }
//   }
// }
// export default {
//   tag: 'aside',
//   proto: Block,
//   props: {
//     flexFlow: 'column'
//     // padding: 'C'
//   },
//   style: {
//     maxheight: 'fit-content',
//     maxWidth: 'fit-content',
//     background: 'rgba(243, 231, 219, 1)',
//     color: 'rgba(0, 0, 0, .5)',
//     // border: '5px solid red',
//     // background: 'rgba(0, 0, 0, .5)',
//     position: 'absolute',
//     zIndex: 50,
//     bottom: '80px'
//   },
// h3: {
//   proto: [Text, Block],
//   props: {
//     text: 'Ballerina',
//     padding: 'A 0 Y 0',
//     size: 'D'
//   },
//   style: {
//     color: 'rgba(213, 176, 56, .5)'
//     // color: 'rgba(165, 125, 2, .7)'
//   }
// },
// p: {
//   proto: Text,
//   props: {
//     text: `"Ballerina" is a cozy and quite two-bedroom apartment of 72m2 on high first floor with open terrace,  composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower,  kitchen with a dining area, making the apartment comfortable for 5 people
//       Equipped with air-conditioning, smart TV, gas stove, refrigerator, microwave oven, ironing facilities, coffee and tea maker, washing machine, bathroom with shower and toiletries.
//       Parking space available in inner yard.`
//   },
//   style: {
//     fontFamily: 'Bellefair',
//     maxWidth: `${500 / 16}em`,
//     margin: 0,
//     fontSize: '18px',
//     color: '#F3E7DB'
//   }
// },
//   amenities: {
//     proto: placeOffers,
//     props: {
//       padding: 'D 0 0 0'
//     },
//     h5: null,
//     content: {
//       style: {
//         color: 'rgba(0, 0, 0, 8)',
//         // border: '5px solid red',
//         paddingRight: '100px',
//         '> div': {
//           // border: '5px solid red',
//           // padding: '10px 30px'
//         }

//       },
//       ...[
//         {
//           icon: {},
//           item: { props: { text: 'Wifi' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Open terrace' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Private entrance' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Air conditioning (Portable)' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Heating' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Ironing facilities' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Drying rack' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Mosquito net' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Carbon monoxide alarm' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Smoke alarm' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Vinyl Media Player' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Smart TV' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Bed linens' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Clothing storage' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Hangers' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Extra pillows and blankets' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Robes & Slippers' } }
//         },
//         {
//           icon: {},
//           item: { props: { text: 'Books and journals' } }
//         }
//       ]
//     }
//   }
// }

export default {
  tag: 'aside',
  proto: Block,
  props: {
    // flexFlow: 'column',
    // flexAlign: 'flex-start center',
    // gap: 'D',
    padding: 'E D'
  },
  style: {
    boxSizing: 'border-box',
    background: 'rgba(243, 231, 219, 1)',
    // background: 'rgba(0, 0, 0, .9)',
    position: 'absolute',
    display: 'grid',
    columnGap: '50px',
    rowGap: '10px',
    paddingRight: '80px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    opacity: 0,
    transition: 'all 2s ease-in-out',
    transitionDelay: '1s',
    // gridTemplateRowss: 'repeat(1, 1fr)',
    // border: '5px solid green',
    // border: '5px solid green',
    width: 'fit-content',
    height: 'fit-content',
    bottom: '120px',
    zIndex: 50,
    '> div': {
      color: 'rgba(0, 0, 0, .25)',
      // color: 'rgba(243, 231, 219, .45)',
      fontFamily: 'Avenir Next',
      // textAlign: 'center',
      fontWeight: '500',
      fontSize: '14px'
      // border: '5px solid blue'
      // width: 'fit-content'
    }
    // top: 0
  },
  childProto: {
    proto: [Block, Text],
    props: {
      text: ''
    }
  },
  ...[
    { props: { text: 'Wifi' } },
    { props: { text: 'Open terrace' }, style: { with: 'fit-content' } },
    { props: { text: 'Private entrance' } },
    { props: { text: 'Air conditioning (Portable)' } },
    { props: { text: 'Heating' }, style: { with: 'fit-content' } },
    { props: { text: 'Ironing facilities' } },
    { props: { text: 'Drying rack' } },
    { props: { text: 'Mosquito net' }, style: { with: 'fit-content' } },
    { props: { text: 'Carbon monoxide alarm' } },
    { props: { text: 'Smoke alarm' } },
    { props: { text: 'Vinyl Media Player' }, style: { with: 'fit-content' } },
    { props: { text: 'Smart TV' } },
    { props: { text: 'Bed linens' } },
    { props: { text: 'Clothing storage' }, style: { with: 'fit-content' } },
    { props: { text: 'Hangers' } },
    { props: { text: 'Extra pillows and blankets' } },
    { props: { text: 'Robes & Slippers' }, style: { with: 'fit-content' } },
    { props: { text: 'Books and journals' } }
  ]

}
