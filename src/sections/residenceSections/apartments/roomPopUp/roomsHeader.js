'use strict'

import { Img } from 'smbls'

import DRESS_PNG from '../../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../../assets/icons/qvevri.png'

export const roomsHeader = {
  titles: {
    ...[
      { text: 'ballerina' },
      { text: 'red brick' },
      { text: 'yellow couch' },
      { text: 'green forest' },
      { text: 'retro' },
      { text: 'blue lagoon' },
      { text: 'qvevri' }
    ]
  },

  tabs: {
    ...[
      { props: { icon: { src: DRESS_PNG } } },
      { props: { icon: { src: BRICKS_PNG } } },
      { props: { icon: { src: SOFA_PNG } } },
      { props: { icon: { src: LEAF_PNG } } },
      { props: { icon: { src: VINYL_PNG } } },
      { props: { icon: { src: LAGOON_PNG } } },
      { props: { icon: { src: QVEVRI_PNG } } }
    ]
  }
}