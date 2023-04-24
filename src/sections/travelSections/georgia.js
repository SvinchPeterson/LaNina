'use strict'

import { Paragraph } from '../../components'
import { $georgia } from '../../texts/travel'

const props = {
  // alignSelf: 'center',
  // margin: 'G - - -',
  // align: 'flex-start flex-start',
  // maxWidth: 'H',
  // '@maxTabletM': { fontSize: `${15 / 16}em` },
  // '@maxMobileL': {
  //   margin: 'E2 - - -',
  //   padding: '- B1'
  // },
  // p: {
  //   childProps: {
  //     fontSize: `${15 / 16}em`,
  //     childProps: {
  //       fontSize: 'D',
  //       letterSpacing: `${-1 / 23}em`
  //     }
  //   }
  // }
}

export const georgia = {
  extend: Paragraph,
  title: null,
  p: { extend: $georgia }
  // p: { extend: $georgia }
}
