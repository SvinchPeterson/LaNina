'use strict'
import { Block, Text } from '@rackai/symbols'

export default {
  tag: 'h6',
  proto: [Block, Text],
  props: {
    text: 'SOLOLAKI',
    padding: 'A',
    size: 'Z'
  },
  style: {
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    fontWeight: '600',
    // background: 'rgba(165, 125, 2, .65)',
    background: 'linear-gradient(rgba(165, 125, 2, .2), rgba(165, 125, 2, .3), rgba(0, 0, 0, .4))',
    // background: 'linear-gradient(rgba(98, 73, 62, .4), rgba(98, 73, 62, .8), rgba(0, 0, 0, .4))',
    color: 'rgba(243, 231, 219, .85)',
    position: 'absolute',
    zIndex: 20,
    textDecoration: 'none',
    letterSpacing: '4px'
  }
}
