'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'

import { roomTabBallerina, roomTabRedBrick, roomTabYellowCouch } from '../../components/RoomTabs'
import { roomBallerina, roomRedBrick, roomYellowCouch } from './room'

import style from './style'

const roomIcon = {
  proto: Img,
  style: {
    width: '30px',
    height: '30px',
    padding: '14px',
    background: 'rgba(189, 177, 113, .6)',
    // background: 'rgba(255, 255, 255, .2)',
    // border: '2px solid rgba(189, 177, 113, .6)',
    position: 'absolute',
    opacity: 0,
    transition: 'all .3s ease-in-out'
  }
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column'
  },
  style,
  state: {
    active: 0
  },
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      padding: 'E 0 C 0'
    },
    attr: { id: 'apartments' }
  },
  content: {
    tag: 'section',
    proto: Block,
    props: {
      flexFlow: 'column'
    },
    roomTabs: {
      tag: 'header',
      proto: Block,
      props: {
        flexAlign: 'center center',
        gap: 'D'
      },

      childProto: {
        proto: Block,

        on: {
          click: (event, element, state) => {
            state.update({ active: element.key })
          }
        }
      },
      ...[
        {
          proto: roomTabBallerina
        },
        {
          proto: roomTabRedBrick
        },
        {
          proto: roomTabYellowCouch
        }
      ]
    },

    rooms: {
      proto: Block,
      // props: {
      //   flexAlign: 'center center'
      // },
      style: {
        border: '10px solid green',
        display: 'flex'
      },
      childProto: {
        proto: Block,
        props: {
          flexAlign: 'center center'
        },
        style: {
          flex: 0,
          border: '10px solid orange',
          '> nav': {
            flex: 1,
            display: 'flex',
            position: 'relative',
            border: '10px solid blue',
            minHeight: '100%'
          },
          '> nav > div': {
            flex: 1,
            display: 'flex'
          },
          '> nav > button': {
            height: 'fit-content',
            position: 'absolute'
          },
          '> nav > button > img': {
            background: 'red',
            width: '100px',
            height: '150px'

          },
          '> nav > div > span': {
            flex: 1,
            backgroundSize: 'cover'
          }
        },
        class: {
          show: (element, state) => state.active === element.key ? { flex: 1, minHeight: '750px' } : { minHeight: 0, flex: 0 }
        }
      },
      ...[
        {
          proto: roomBallerina
        },
        { proto: roomRedBrick },
        { proto: roomYellowCouch }
      ]
    }
  }
  // roomsContainer: {
  //   style: {
  //     border: '5px solid blue',
  //     display: 'flex',
  //     flexFlow: 'column'
  //   },
  //   class: {
  //     show: (element, state) => state.active ? { opacity: 0, height: 0 } : { height: '750px', opacity: 1 }
  //   },
  //   childProto: {
  //     proto: Block,
  //     style: { border: '5px solid brown', flex: 1 }
  //   },
  //   ...[
  //     {
  //       proto: roomLanina
  //     },
  //     {
  //       proto: roomRedBrick
  //     },
  //     {
  //       proto: roomYellowCouch
  //     }
  //   ]
  // }

  // input: {
  //   attr: {
  //     type: 'radio',
  //     value: 'tab-ballerina',
  //     id: 'tab-ballerina',
  //     name: 'action'
  //   }
  // }

  //   label: {
  //     proto: roomTabBallerina,
  //     attr: { for: 'tab-ballerina' },
  //     style: {
  //       '&::after': {
  //         content: '"Ballerina"',
  //         color: 'rgba(0, 0, 0, .65)',
  //         fontSize: '16px',
  //         position: 'absolute',
  //         bottom: '-60px',
  //         fontFamily: 'Avenir Next',
  //         letterSpacing: '4px',
  //         opacity: 0,
  //         transitionDelay: '.4',
  //         transition: 'all 1s ease-in-out'
  //       }
  //     }
  //   },
  //   room: {
  //     proto: roomLanina
  //   },

  //   input2: {
  //     tag: 'input',
  //     attr: {
  //       type: 'radio',
  //       id: 'tab-redBrick',
  //       name: 'action'
  //     }
  //   },
  //   label2: {
  //     proto: roomTabRedBrick,
  //     attr: { for: 'tab-redBrick' },
  //     style: {
  //       '&::after': {
  //         content: '"Red Brick"',
  //         color: 'rgba(0, 0, 0, .65)',
  //         fontSize: '16px',
  //         position: 'absolute',
  //         bottom: '-60px',
  //         fontFamily: 'Avenir Next',
  //         letterSpacing: '4px',
  //         opacity: 0,
  //         transitionDelay: '.4s',
  //         transition: 'all 1s ease-in-out'
  //       }
  //     }
  //   },
  //   room2: {
  //     proto: roomRedBrick
  //   },

  //   input3: {
  //     tag: 'input',
  //     attr: {
  //       type: 'radio',
  //       id: 'tab-yellowCouch',
  //       name: 'action'
  //     }
  //   },
  //   label3: {
  //     proto: roomTabYellowCouch,
  //     attr: { for: 'tab-yellowCouch' },
  //     style: {
  //       '&::after': {
  //         content: '"Yellow Couch"',
  //         color: 'rgba(0, 0, 0, .65)',
  //         fontSize: '16px',
  //         position: 'absolute',
  //         bottom: '-60px',
  //         fontFamily: 'Avenir Next',
  //         letterSpacing: '4px',
  //         opacity: 0,
  //         transitionDelay: '.4s',
  //         transition: 'all 1s ease-in-out'
  //       }
  //     }
  //   },
  //   room3: {
  //     proto: roomYellowCouch
  // }
}
