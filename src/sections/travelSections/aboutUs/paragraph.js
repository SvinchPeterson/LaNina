'use strict'

import { $aboutUs } from '../../../texts/travel'

import { Paragraph } from '../../../components'

import { contact } from '../contact'

const props = {
  // align: 'flex-start flex-start',
  // minWidth: 'G1',
  // maxWidth: 'H',
  // gap: 'A1',
  // position: 'relative',
  // padding: 'B - - -',
  // margin: '- C1 - -',
  // '@maxTabletS': {
  //   textAlign: 'center',
  //   margin: '0'
  // },

  // '@maxMobileM': { padding: 'B A - A' },
}

export const paragraph = {
  extend: Paragraph,
  props,

  title: { text: 'about us' },
  p: { extend: $aboutUs }
}
