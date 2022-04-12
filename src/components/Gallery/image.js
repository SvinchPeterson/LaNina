'use strict'

import { Box } from '@symbo.ls/symbols'

export const image = {
  proto: Box,
  tag: 'span',
  define: { url: param => param },
  style: { backgroundSize: 'cover' }
  // class: {
  //   show: (element, state) => state.activeImage === parseInt(element.key) ? { zIndex: '30', opacity: 1, backgroundPosition: 'center right' } : { zIndex: 0, opacity: 0 }
  // }
}
