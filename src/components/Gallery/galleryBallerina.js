'use strict'

import { Gallery } from './gallery'
import { position } from '../../animations'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/ballerina/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/ballerina/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/ballerina/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/ballerina/bedroom2.jpg'
import BEDROOM3_JPG from '../../assets/images/ballerina/bedroom3.jpg'
import BEDROOM4_JPG from '../../assets/images/ballerina/bedroom4.jpg'
import KITCHEN_JPG from '../../assets/images/ballerina/kitchen.jpg'
import HOLL_JPG from '../../assets/images/ballerina/holl.jpg'
import BATHROOM_JPG from '../../assets/images/ballerina/bathroom.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/ballerina/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/ballerina/tablet/livingroom2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/ballerina/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/ballerina/tablet/bedroom2.jpg'
import BEDROOM3_TABLET_JPG from '../../assets/images/ballerina/tablet/bedroom3.jpg'
import BEDROOM4_TABLET_JPG from '../../assets/images/ballerina/tablet/bedroom4.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/ballerina/tablet/kitchen.jpg'
import HOLL_TABLET_JPG from '../../assets/images/ballerina/tablet/holl.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/ballerina/tablet/bathroom.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/ballerina/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/ballerina/mobile/livingroom2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/ballerina/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/ballerina/mobile/bedroom2.jpg'
import BEDROOM3_MOBILE_JPG from '../../assets/images/ballerina/mobile/bedroom3.jpg'
import BEDROOM4_MOBILE_JPG from '../../assets/images/ballerina/mobile/bedroom4.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/ballerina/mobile/kitchen.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/ballerina/mobile/holl.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/ballerina/mobile/bathroom.jpg'

export const galleryBallerina = {
  proto: Gallery,
  childProto: image,
  ...[
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + LIVINGROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + LIVINGROOM_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + LIVINGROOM2_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + LIVINGROOM2_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM2_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM2_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM2_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM3_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM3_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM3_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM4_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM4_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM4_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + KITCHEN_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + KITCHEN_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + KITCHEN_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + HOLL_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
      }
    },

    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BATHROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
      }
    }
  ]
}
