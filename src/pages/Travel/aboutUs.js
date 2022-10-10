'use strict'

import { Flex, Grid } from 'smbls'

import { aboutText } from '../../texts'
import { Paragraph, TeamMember } from '../../components'

const paragraph = {
  extend: Paragraph,
  props: { title: { text: 'about us' } },
  title: {},
  p: { extend: aboutText }
}

const team = {
  extend: Flex,
  props: {
    flow: 'column',
    gap: 'A',

    title: {
      text: 'TEAM',
      fontWeight: 'bold',
      padding: '0 0 X 0',
      style: { borderBottom: '1px solid rgba(0, 0, 0, .5)' }
    },

    members: {
      columns: 'repeat(4, 1fr)',
      gap: 'C1',
      '@tabletL': { columns: 'repeat(2, 1fr)' },
      '@mobileL': { columns: 'repeat(1, 1fr)' }
    }
  },

  title: {},
  members: {
    extend: Grid,
    childExtend: TeamMember,
    ...[{}, {}, {}, {}]
  }
}

const props = {
  flow: 'column',
  align: 'center center',
  gap: 'D',
  padding: 'E2 A2 F A2'
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  paragraph,
  team
}
