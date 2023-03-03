'use strict'

import { Flex } from 'smbls'

const props = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'opacity .45s ease-in-out, transform .45s ease',
  padding: 'C2 - E -',
  flow: 'column',
  gap: 'C1',
  boxSizing: 'border-box',
  style: { overflowY: 'auto', '::-webkit-scrollbar': { display: 'none' } }
}

export const TourContainer = {
  extend: Flex,
  props
}
