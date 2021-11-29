'use strict'
import { Block, Text, Link, Button, Flex } from '@rackai/symbols'

import { Rooms } from '../../components'
import style from './style'

export default {
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      padding: 'E 0 C 0'
    }
  },
  content: {
    Rooms

  }

  // content: {
  //   tag: 'form',
  //   proto: Block,
  //   props: {
  //     padding: 'D 0',
  //     flexFlow: 'column',
  //     gap: 'E'

  //   },
  //   style: {
  //     background: 'radial-gradient(rgba(98, 73, 62, .8), rgba(98, 73, 62, 1) )',
  //     '#ballerina:checked ~ article': { display: 'flex' },
  //     '#redBrick:checked ~ article': { display: 'flex' }
  //     // 'input[value="ballerina"] ~ #ballerina:checked ~ article': { display: 'flex' }
  //     // 'input[value="ballerina"]:checked ~ #ballerina ~ article': { display: 'flex' }
  //   },
  //   rooms: {
  //     style: {
  //       display: 'flex',
  //       position: 'relative'
  //     },
  //     roomOne: {
  //       radio: {
  //         tag: 'input',
  //         attr: {
  //           type: 'radio',
  //           name: 'action',
  //           id: 'ballerina'
  //         }
  //       },
  //       room1,
  //       apartment: {
  //         tag: 'article',
  //         style: {
  //           display: 'none',
  //           position: 'absolute',
  //           width: '100%'
  //         },
  //         proto: ballerina,
  //         props: {
  //           flexAlign: 'flex-start flex-start',
  //           gap: 'D'
  //         }
  //       }
  //     },
  //     roomTwo: {
  //       radio: {
  //         tag: 'input',
  //         attr: {
  //           type: 'radio',
  //           name: 'action',
  //           id: 'redBrick'
  //         }
  //       },
  //       room2,
  //       apartment: {
  //         tag: 'article',
  //         style: { display: 'none' },
  //         proto: ballerina,
  //         props: {
  //           flexAlign: 'flex-start flex-start',
  //           gap: 'D'
  //         }
  //       }
  //     },
  //     roomThree: {
  //       radio: {
  //         tag: 'input',
  //         attr: {
  //           type: 'radio',
  //           name: 'action',
  //           id: 'yellowCouch'
  //         }
  //       },
  //       room3,
  //       apartment: {
  //         tag: 'article',
  //         style: { display: 'none' },
  //         proto: Block,
  //         props: {
  //           flexAlign: 'flex-start flex-start',
  //           gap: 'D'
  //         },
  //         RoomDescription,
  //         Gallery
  //       }
  //     }
  //   }
  // }
}
