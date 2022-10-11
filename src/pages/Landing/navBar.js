'use strict'

import { Navbar } from '../../components'

import { opacity } from './animations'

const props = {
  gap: 'D',
  style: {
    animationName: opacity,
    animationDuration: '5s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)'
  },
  '@mobileL': {
    flow: 'column',
    align: 'center center',
    gap: 'B1'
  },

  childProps: { '@mobileL': { fontSize: 'A' } }
}

export default {
  props,
  extend: Navbar,

  ...[
    { props: { text: 'residence', href: '/Sololaki' } },
    { props: { text: 'travel', href: '/Travel' } },
    {
      props: {
        text: 'rental',
        opacity: '.5',
        pointerEvents: 'none'
      }
    }
  ]
}
