'use strict'
import { roomBallerina, roomRedBrick, roomYellowCouch, roomGreenForest, roomRetro } from '../../components'

export const rooms = {
  tag: 'section',
  props: {
    round: 'B',
    minheight: '100%',
    maxWidth: `${1440 / 16}em`,
    css: {
      alignSelf: 'center',
      margin: '0 auto'
    }
  },

  ...[
    roomBallerina,
    roomRedBrick,
    roomYellowCouch,
    roomGreenForest,
    roomRetro
  ]
}
