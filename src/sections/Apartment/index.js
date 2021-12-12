'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'

import { roomTabBallerina, roomTabRedBrick, roomTabYellowCouch } from '../../components/RoomTabs'
import Room from './room'

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
  tag: 'section',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Apartments',
      padding: 'E 0 C 0'
    },
    attr: { id: 'apartments' },
    style: {
      display: 'block'
    }
  },
  content: {
    tag: 'section',

    input: {
      attr: {
        type: 'radio',
        value: 'tab-ballerina',
        id: 'tab-ballerina',
        name: 'action'
      }
    },
    label: {
      proto: roomTabBallerina,
      attr: { for: 'tab-ballerina' }
    },
    article: {
      proto: Room
      // style: { background: 'yellow' }
    },

    input2: {
      tag: 'input',
      attr: {
        type: 'radio',
        value: 'tab-redBrick',
        id: 'tab-redBrick',
        name: 'action'
      }
    },
    label2: {
      proto: roomTabRedBrick,
      attr: { for: 'tab-redBrick' }
    },
    article2: {
      tag: 'article',
      style: { background: 'blue' }
    },

    input3: {
      tag: 'input',
      attr: {
        type: 'radio',
        value: 'tab-yellowCouch',
        id: 'tab-yellowCouch',
        name: 'action'
      }
    },
    label3: {
      proto: roomTabYellowCouch,
      attr: { for: 'tab-yellowCouch' }
    },
    article3: {
      tag: 'article',
      attr: {
        id: 'tab-yellowCouch'
      },
      style: { background: 'red' }
    }
  }
}
