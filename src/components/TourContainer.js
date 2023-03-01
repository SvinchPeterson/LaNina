'use strict'

import { Flex } from 'smbls'

const props = {
  boxSize: '100% 100%',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'opacity .5s ease, transform .5s ease',
  padding: 'C2 - - -',
  flow: 'column',
  gap: 'D1'
}

export const TourContainer = {
  extend: Flex,
  props
}
