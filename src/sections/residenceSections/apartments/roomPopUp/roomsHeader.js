'use strict'

import { Img } from 'smbls'

import DRESS_PNG from '../../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../../assets/icons/qvevri.png'
import MOON_PNG from '../../../../assets/icons/moon.png'

export const roomsHeader = {
  titles: {
    ...[
      { text: 'ballerina' },
      { text: 'red brick' },
      { text: 'yellow couch' },
      { text: 'green forest' },
      { text: 'retro' },
      { text: 'blue lagoon' },
      { text: 'qvevri' },
      { text: 'night sky' }
    ]
  },

  tabs: {
    ...[
      { props: { icon2: { src: DRESS_PNG } } },
      { props: { icon2: { src: BRICKS_PNG } } },
      { props: { icon2: { src: SOFA_PNG } } },
      { props: { icon2: { src: LEAF_PNG } } },
      { props: { icon2: { src: VINYL_PNG } } },
      { props: { icon2: { src: LAGOON_PNG } } },
      { props: { icon2: { src: QVEVRI_PNG } } },
      { props: { icon2: { src: MOON_PNG } } }
    ]
  }
}