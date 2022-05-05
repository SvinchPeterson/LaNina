'use strict'
import { Gallery } from './gallery'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/retro/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/retro/livingroom2.jpg'
import KITCHEN_JPG from '../../assets/images/retro/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/retro/kitchen2.jpg'
import BEDROOM_JPG from '../../assets/images/retro/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/retro/bedroom2.jpg'
import BATHROOM_JPG from '../../assets/images/retro/bathroom.jpg'
import HOLL_JPG from '../../assets/images/retro/holl.jpg'
import APARTMENT_JPG from '../../assets/images/retro/apartment.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/retro/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/retro/tablet/livingroom2.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/retro/tablet/kitchen.jpg'
import KITCHEN2_TABLET_JPG from '../../assets/images/retro/tablet/kitchen2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/retro/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/retro/tablet/bedroom2.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/retro/tablet/bathroom.jpg'
import HOLL_TABLET_JPG from '../../assets/images/retro/tablet/holl.jpg'
import APARTMENT_TABLET_JPG from '../../assets/images/retro/tablet/apartment.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/retro/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/retro/mobile/livingroom2.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/retro/mobile/kitchen.jpg'
import KITCHEN2_MOBILE_JPG from '../../assets/images/retro/mobile/kitchen2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/retro/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/retro/mobile/bedroom2.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/retro/mobile/bathroom.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/retro/mobile/holl.jpg'
import APARTMENT_MOBILE_JPG from '../../assets/images/retro/mobile/apartment.jpg'

export const galleryRetro = {
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
        animation: 'none',
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
        animation: 'none',
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        animation: 'none',
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BATHROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
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
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + HOLL_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + APARTMENT_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + APARTMENT_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + APARTMENT_MOBILE_JPG + ')' }
      }
    }
  ]
}
