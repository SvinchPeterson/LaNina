'use strict'
import { cream } from '../colors'

export default {
  // border: '10px solid red',
  minHeight: `${700 / 16}em`,
  display: 'flex',
  position: 'relative',
  '> span': { backgroundAttachment: 'fixed' },
  '> p': {
    background: cream,
    color: 'rgba(0, 0, 0, .35)'
  }
}
