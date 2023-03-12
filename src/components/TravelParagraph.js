'use strict'

import { Flex } from 'smbls'

const props = {
  flow: 'column',
  gap: 'Y',
  letterSpacing: '.3px',
  style: { span: { fontWeight: '700' } }
}

export const TravelParagraph = {
  tag: 'p',
  extend: Flex,
  props
}
