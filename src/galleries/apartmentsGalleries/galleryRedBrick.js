'use strict'

import { Gallery } from '../../components'

import LIVINGROOM_JPG from '../../assets/images/residence/rooms/redBrick/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/residence/rooms/redBrick/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/redBrick/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/residence/rooms/redBrick/bedroom2.jpg'
import BEDROOM3_JPG from '../../assets/images/residence/rooms/redBrick/bedroom3.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/redBrick/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/residence/rooms/redBrick/kitchen2.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/redBrick/bathroom.jpg'
import BATHROOM2_JPG from '../../assets/images/residence/rooms/redBrick/bathroom2.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/livingroom2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/bedroom2.jpg'
import BEDROOM3_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/bedroom3.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/kitchen.jpg'
import KITCHEN2_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/kitchen2.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/bathroom.jpg'
import BATHROOM2_TABLET_JPG from '../../assets/images/residence/rooms/redBrick/tablet/bathroom2.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/livingroom2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/bedroom2.jpg'
import BEDROOM3_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/bedroom3.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/kitchen.jpg'
import KITCHEN2_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/kitchen2.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/bathroom.jpg'
import BATHROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/redBrick/mobile/bathroom2.jpg'

export const galleryRedBrick = {
  extend: Gallery,

  ...[
    {
      props: {
        backgroundImage: 'url(' + LIVINGROOM_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + LIVINGROOM_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + LIVINGROOM_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + LIVINGROOM2_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + LIVINGROOM2_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + LIVINGROOM2_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + BEDROOM_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BEDROOM_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BEDROOM_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + BEDROOM2_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BEDROOM2_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BEDROOM2_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + BEDROOM3_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BEDROOM3_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BEDROOM3_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + KITCHEN_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + KITCHEN_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KITCHEN_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + KITCHEN2_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + KITCHEN2_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KITCHEN2_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + BATHROOM_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + BATHROOM2_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BATHROOM2_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BATHROOM2_MOBILE_JPG + ')' }
      }
    }
  ]
}
