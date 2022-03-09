'use strict'
import { cream } from '../colors'

export default {
  // border: '10px solid red',
  minHeight: `${600 / 16}em`,
  display: 'flex',
  position: 'relative',
  '> span': { backgroundAttachment: 'fixed' },
  '> p': { background: cream }
}
