'use strict'

import { Flex } from 'smbls'


const props = {
  fontSize: `${15 / 16}em`,
  flow: 'column',
  gap: 'Y',
  letterSpacing: '.3px',
  color: 'cream .75',
  style: { span: { color: 'rgba(255, 249, 237, 1)', fontWeight: '700' } }
}

export const Description = {
  tag: 'P',
  extend: Flex,
  props
}