'use strict'

import { Flex } from 'smbls'

import { tabsHeader } from './tabsHeader'
import { tabsContent } from './tabsContent'

const props = {
  position: 'relative',
  // maxWidth: '80%',
  height: 'fit-content',
  flow: 'column',
  gap: 'A',
  style: { overflowX: 'hidden' },

  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% H1',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    // background: 'red',
    zIndex: '2',
    background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 0%,rgba(15, 49, 61, 0) 100%)'
  }

  // ':after': {
  //   content: '""',
  //   position: 'absolute',
  //   boxSize: '100% H',
  //   top: '0',
  //   right: '0',
  //   zIndex: '2',
  //   pointerEvents: 'none',
  //   background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 0%,rgba(15, 49, 61, 0) 100%)'
  //   // background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 0%, rgba(15, 49, 61, 0) 100%)'
  // }
}

export const tabs = {
  extend: Flex,
  props,

  // tabsHeader,
  tabsContent
}
