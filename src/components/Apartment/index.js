'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import BALLERINA_JPG from '../../assets/images/ballerina.jpg'
import RED_BRICK_JPG from '../../assets/images/redBrick.jpg'
import YELLOW_COACH_JPG from '../../assets/images/yellowCoach.jpg'

import style from './style'

export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      spacing: 'E 0 A 0'
    }
  },

  content: {
    apartments: {
      proto: [Block, Flex],
      props: { gap: 'C' },
      style: {
        position: 'relative',
        height: `${800 / 16}em`,
        background: 'rgba(98, 73, 62, 1)',
        alignItems: 'center',
        paddingLeft: `${100 / 16}em`
      },
      childProto: {
        proto: Block,
        style: {
          width: `${350 / 16}em`,
          height: `${500 / 16}em`,
          position: 'absolute',
          // transition: 'all 2s ease-in-out',
          boxShadow: '-2px 2px 10px 1px rgba(0, 0, 0, .8)',
          // top: `${100 / 16}em`,
          cursor: 'pointer'
          // '&:hover': {
          //   zIndex: 10
          //   // left: '400px'
          // }
        },
        image: {
          tag: 'nav',
          style: {
            width: '100%',
            height: '100%',
            filter: 'brightness(60%) grayscale(80%)',
            // backgroundImage: 'url(' + BALLERINA_JPG + ')',
            backgroundSize: 'cover',
            transition: 'all .5s ease-in-out'
          }
        }
      },
      ...[
        {
          style: { left: `${300 / 16}em` },
          image: { style: { backgroundImage: 'url(' + BALLERINA_JPG + ')' } }
        },
        {
          style: { left: `${200 / 16}em` },
          image: { style: { backgroundImage: 'url(' + RED_BRICK_JPG + ')' } }
        },
        {
          // style: { left: `${200 / 16}em` },
          image: { style: { backgroundImage: 'url(' + YELLOW_COACH_JPG + ')' } }
          // style: {
          //   left: '150px',
          //   transition: 'all .2s ease-in-out',
          //   // overflow: 'hidden',
          //   '&::before': {
          //     content: '"the city of Tbilisi, a forgotten classical building has been transformed into a brand new 5-star hotel.In the interior, the traditional designs have been replaced by a minimalist aesthetic, projecting the power of imagination during the process of architectural transformation."',
          //     position: 'absolute',
          //     width: `${350 / 16}em`,
          //     height: '350px',
          //     left: '110%',
          //     opacity: 0,
          //     transition: 'all .5s ease-in-out',
          //     fontSize: '20px',
          //     fontFamily: 'Avenir Next',
          //     paddingLeft: '50px',
          //     paddingTop: '100px'
          //   },
          //   '&::after': {
          //     content: '"Ballerina"',
          //     position: 'absolute',
          //     bottom: '100px',
          //     right: '-50px',
          //     color: 'black',
          //     padding: '10px 20px',
          //     background: 'rgba(98, 73, 62, 1)',
          //     fontSize: '26px',
          //     opacity: 0,
          //     transition: 'all .5s ease-in-out',
          //     zIndex: 30
          //   },

          //   '&:hover::before': { opacity: 1 },
          //   '&:hover::after': { opacity: 1 },
          //   '&:hover > nav': { transform: 'scale(1.1)', filter: 'brightness(80%) grayscale(40%)' }

          // },
        }
      ]
    }

  }
  // content: {
  //   proto: Block,
  //   apartments: {
  //     style: {
  //       position: 'relative',
  //       display: 'flex',
  //       justifyContent: 'space-between'
  //     },
  //     childProto: {
  //       proto: Block,
  //       style: {
  //         width: `${400 / 16}em`,
  //         height: `${600 / 16}em`,
  //         boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, .8)',
  //         position: 'absolute',
  //         cursor: 'pointer',
  //         transition: 'all 1s ease-in-out',
  //         overflow: 'hidden',
  //         '&:hover': {
  //           zIndex: 6,
  //           '> div': { transform: 'scale(1.1)' }
  //         }
  //       },
  //       image: {
  //         style: {
  //           width: '100%',
  //           height: '100%',
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center'
  //         }
  //       }
  //     },
  //     ...[
  //       {
  //         style: { left: '100px', zIndex: 0 },
  //         image: { style: { backgroundImage: 'url(' + BALLERINA_JPG + ')' } }
  //       },
  //       {
  //         style: { left: '200px', zIndex: 2 },
  //         image: { style: { backgroundImage: 'url(' + RED_BRICK_JPG + ')' } }
  //       },
  //       {
  //         style: { left: '300px', zIndex: 4 },
  //         image: { style: { backgroundImage: 'url(' + YELLOW_COACH_JPG + ')' } }
  //       }
  //     ]
  //   }
  // }

}
