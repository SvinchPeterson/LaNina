'use strict'
import { Block, Text, Link, Button, Flex, Img } from '@rackai/symbols'

import { roomTabBallerina, roomTabRedBrick, roomTabYellowCouch } from '../../components/RoomTabs'
import { roomLanina, roomRedBrick, roomYellowCouch } from './room'

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
      },
      style: { left: 0 }
    },
    label: {
      proto: roomTabBallerina,
      attr: { for: 'tab-ballerina' }
    },
    article: {
      proto: roomLanina
    },

    input2: {
      tag: 'input',
      attr: {
        type: 'radio',
        // value: 'tab-redBrick',
        id: 'tab-redBrick',
        name: 'action'
      },
      style: { left: '100px' }
    },
    label2: {
      proto: roomTabRedBrick,
      attr: { for: 'tab-redBrick' }
    },
    article2: {
      tag: 'article',
      proto: roomRedBrick
    },

    input3: {
      tag: 'input',
      attr: {
        type: 'radio',
        // value: 'tab-yellowCouch',
        id: 'tab-yellowCouch',
        name: 'action'
      },
      style: { left: '200px' }
    },
    label3: {
      proto: roomTabYellowCouch,
      attr: { for: 'tab-yellowCouch' }
    },
    article3: {
      tag: 'article',
      proto: roomYellowCouch
    }
  }
}
