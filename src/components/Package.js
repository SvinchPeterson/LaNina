'use strict'

import { Flex } from 'smbls'
import { Description } from './Description'
import { List } from './List'

export const Package = {
  extend: Flex,

  contentContainer: {
    header: {
      title: { tag: 'h1' },
      subTitle: {tag: 'h3'}
    },

    packageSchedule: {
      extend: Flex,
      childExtend: {
        extend: Flex,
        caption: {},
        description: { extend: Flex, childExtend: Description },
        places: { extend: List }
      }
    },

    packageIclusion: { extend: List }
  }
}