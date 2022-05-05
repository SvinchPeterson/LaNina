'use strict'
import { Gallery } from './gallery'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/redBrick/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/redBrick/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/redBrick/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/redBrick/bedroom2.jpg'
import BEDROOM3_JPG from '../../assets/images/redBrick/bedroom3.jpg'
import KITCHEN_JPG from '../../assets/images/redBrick/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/redBrick/kitchen2.jpg'
import BATHROOM_JPG from '../../assets/images/redBrick/bathroom.jpg'
import BATHROOM2_JPG from '../../assets/images/redBrick/bathroom2.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/redBrick/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/redBrick/tablet/livingroom2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/redBrick/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/redBrick/tablet/bedroom2.jpg'
import BEDROOM3_TABLET_JPG from '../../assets/images/redBrick/tablet/bedroom3.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/redBrick/tablet/kitchen.jpg'
import KITCHEN2_TABLET_JPG from '../../assets/images/redBrick/tablet/kitchen2.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/redBrick/tablet/bathroom.jpg'
import BATHROOM2_TABLET_JPG from '../../assets/images/redBrick/tablet/bathroom2.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/redBrick/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/redBrick/mobile/livingroom2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/redBrick/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/redBrick/mobile/bedroom2.jpg'
import BEDROOM3_MOBILE_JPG from '../../assets/images/redBrick/mobile/bedroom3.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/redBrick/mobile/kitchen.jpg'
import KITCHEN2_MOBILE_JPG from '../../assets/images/redBrick/mobile/kitchen2.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/redBrick/mobile/bathroom.jpg'
import BATHROOM2_MOBILE_JPG from '../../assets/images/redBrick/mobile/bathroom2.jpg'

export const galleryRedBrick = {
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
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + KITCHEN_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + KITCHEN_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + KITCHEN_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + KITCHEN2_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + KITCHEN2_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + KITCHEN2_MOBILE_JPG + ')' }
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
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BATHROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        animationDuration: '2s',
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BATHROOM2_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BATHROOM2_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BATHROOM2_MOBILE_JPG + ')' }
      }
    }
  ]
}
