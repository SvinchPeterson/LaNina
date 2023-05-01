'use strict'

import { RoomTourTabs } from "../../../composites"

import BALLERINA_JPG from '../../../assets/images/residence/rooms/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../../assets/images/residence/rooms/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../../assets/images/residence/rooms/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../../assets/images/residence/rooms/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../../assets/images/residence/rooms/retro/retroTab.jpg'
import BLUE_LAGOON_JPG from '../../../assets/images/residence/rooms/blueLagoon/blueLagoonTab.jpeg'
import QVEVRI_TAB_JPG from '../../../assets/images/residence/rooms/qvevri/qvevriTab.jpeg'

import DRESS_PNG from '../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../assets/icons/qvevri.png'

import ORNAMENT_PNG from '../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  ':after': {
    background: 'radial-gradient(rgba(1, 57, 57, .45), rgba(1, 57, 57, .8), rgba(1, 57, 57, .97), rgba(1, 57, 57, 1))',
    '@maxTabletL': {
      background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, 1))'
    }
  }
}

export const tabs = {
  extend: RoomTourTabs,
  props,

  title: { props: { text: 'apartments' }},
  content: {
    ...[
      {
        image: { props: { backgroundImage: 'url(' + BALLERINA_JPG + ')' }},
        icon: { props: { src: DRESS_PNG }},
        p: { props: { text: 'Enjoy special atmosphere, delicate and airy' }},
        title: { props: { text: 'ballerina' }}
      },
      {
        image: { props: { backgroundImage: 'url(' + REDBRICK_JPG + ')' }},
        icon: { props:{ src: BRICKS_PNG }},
        p: { props: { text: 'Where traditional Georgian old style meets modernity!' }},
        title: { props: { text: 'red brick' }}
      },
      {
        image: { props: { backgroundImage: 'url(' + YELLOWCOUCH_JPG + ')' }},
        icon: { props: { src: SOFA_PNG }},
        p: { props: { text: 'Make yourself comfortable on yellow couch' }},
        title: { props: { text: 'yellow couch' } }
      },
      {
        image: { props: { backgroundImage: 'url(' + GREENFOREST_JPG + ')' }},
        icon: { props: { src: LEAF_PNG }},
        p: { props: { text: 'Timeless and elegant, yet modern and fresh, green is your choice!' }},
        title: { props: { text: 'green forest' }}
      },
      {
        image: { props: { backgroundImage: 'url(' + RETRO_JPG + ')' }},
        icon: { props: { src: VINYL_PNG }},
        p: { props: { text: 'Where contemporary design combine with traditional architecture.' }},
        title: { props: { text: 'retro' }}
      },
      {
        image: { props: { backgroundImage: 'url(' + BLUE_LAGOON_JPG + ')' }},
        icon: { props: { src: LAGOON_PNG }},
        p: { props: { text: 'Gentle blue brings you balance and inner peace.' }},
        title: { props: { text: 'blue lagoon' }}
      },
      {
        image: { props: { backgroundImage: 'url(' + QVEVRI_TAB_JPG + ')' }},
        icon: { props: { src: QVEVRI_PNG }},
        p: { props: { text: 'Where contemporary design combine with traditional architecture.' }},
        title: { props: { text: 'qvevri' }}
      }
    ]
  }
}