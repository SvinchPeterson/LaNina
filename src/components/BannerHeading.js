'use strict'

import { Flex } from 'smbls'

import { PageTitle } from './PageTitle'

const props = {
  flow: 'column',
  align: 'center center',
  gap: 'B',
  zIndex: '2',
  title: {
    overflow: 'hidden',
    minWidth: 'fit-content',
    padding: '- V',
  },
  subTitle: {
    fontSize: 'Y',
    textTransform: 'uppercase',
    letterSpacing: `${10 / 11}em`,
    color: 'cream',
    position: 'relative',
    flow: 'column',
    alignItems: 'center',
    gap: 'Z2',
    textAlign: 'center',
    padding: '- C',
    lineHeight: `${20 / 11}em`,
    ':after': {
      content: '""',
      boxSize: 'U2 D2',
      background: 'orange'
    }
  }
}

export const BannerHeading = {
  extend: Flex,
  props,
  title: { extend: PageTitle },
  subTitle: { tag: 'h6', extend: Flex }
}