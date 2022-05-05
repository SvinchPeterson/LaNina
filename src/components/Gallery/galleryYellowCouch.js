'use strict'
import { Gallery } from './gallery'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/yellowCouch/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/yellowCouch/livingroom2.jpg'
import LIVINGROOM3_JPG from '../../assets/images/yellowCouch/livingroom3.jpg'
import BEDROOM_JPG from '../../assets/images/yellowCouch/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/yellowCouch/bedroom2.jpg'
import KITCHEN_JPG from '../../assets/images/yellowCouch/kitchen.jpg'
import BATHROOM_JPG from '../../assets/images/yellowCouch/bathroom.jpg'
import CHILL_JPG from '../../assets/images/yellowCouch/chill.jpg'
import HOLL_JPG from '../../assets/images/yellowCouch/holl.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/yellowCouch/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/yellowCouch/tablet/livingroom2.jpg'
import LIVINGROOM3_TABLET_JPG from '../../assets/images/yellowCouch/tablet/livingroom3.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/yellowCouch/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/yellowCouch/tablet/bedroom2.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/yellowCouch/tablet/kitchen.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/yellowCouch/tablet/bathroom.jpg'
import CHILL_TABLET_JPG from '../../assets/images/yellowCouch/tablet/chill.jpg'
import HOLL_TABLET_JPG from '../../assets/images/yellowCouch/tablet/holl.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/livingroom2.jpg'
import LIVINGROOM3_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/livingroom3.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/bedroom2.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/kitchen.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/bathroom.jpg'
import CHILL_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/chill.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/yellowCouch/mobile/holl.jpg'

export const galleryYellowCouch = {
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
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + LIVINGROOM3_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + LIVINGROOM3_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + LIVINGROOM3_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        animation: 'none',
        backgroundSize: 'contain',
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BEDROOM2_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BEDROOM2_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BEDROOM2_MOBILE_JPG + ')', display: 'none' }
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
        backgroundSize: 'contain',
        animation: 'none',
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + BATHROOM_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + CHILL_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + CHILL_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + CHILL_MOBILE_JPG + ')' }
      }
    },
    {
      style: {
        '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + HOLL_JPG + ')' },
        '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
        '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
      }
    }
  ]
}
