'use strict'

import { Flex } from 'smbls'

const props = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  flow: 'column',
  gap: '0',
  boxSizing: 'border-box',
  style: { '::-webkit-scrollbar': { display: 'none' } }
}

export const TourContainer = {
  extend: Flex,
  props
}
