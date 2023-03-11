'use strict'

import { $georgia } from '../../texts/travel'

const props = {
  alignSelf: 'center',
  margin: 'G - - -',
  align: 'flex-start flex-start',
  maxWidth: 'H1',
  gap: 'A',
  title: { color: 'naviBlue' },
  p: {
    childProps: {
      childProps: { fontSize: 'C' }
    }
  }
}

export const georgia = {
  tag: 'section',
  props,

  p: { extend: $georgia }
}
