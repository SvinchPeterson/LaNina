'use strict'

import { Gallery } from '../../components'

import LIVINGROOM_JPG from '../../assets/images/residence/rooms/ballerina/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/residence/rooms/ballerina/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/ballerina/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/residence/rooms/ballerina/bedroom2.jpg'
import BEDROOM3_JPG from '../../assets/images/residence/rooms/ballerina/bedroom3.jpg'
import BEDROOM4_JPG from '../../assets/images/residence/rooms/ballerina/bedroom4.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/ballerina/kitchen.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/ballerina/holl.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/ballerina/bathroom.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/livingroom2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/bedroom2.jpg'
import BEDROOM3_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/bedroom3.jpg'
import BEDROOM4_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/bedroom4.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/kitchen.jpg'
import HOLL_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/holl.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/residence/rooms/ballerina/tablet/bathroom.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/livingroom2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/bedroom2.jpg'
import BEDROOM3_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/bedroom3.jpg'
import BEDROOM4_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/bedroom4.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/kitchen.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/holl.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/residence/rooms/ballerina/mobile/bathroom.jpg'

export const galleryBallerina = {
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
        backgroundImage: 'url(' + BEDROOM4_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BEDROOM4_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BEDROOM4_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + HOLL_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + BATHROOM_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
      }
    }
  ]
}
