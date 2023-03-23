'use strict'

import { Gallery } from '../../components'

import LIVINGROOM_JPG from '../../assets/images/residence/rooms/yellowCouch/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/residence/rooms/yellowCouch/livingroom2.jpg'
import LIVINGROOM3_JPG from '../../assets/images/residence/rooms/yellowCouch/livingroom3.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/yellowCouch/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/residence/rooms/yellowCouch/bedroom2.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/yellowCouch/kitchen.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/yellowCouch/bathroom.jpg'
import CHILL_JPG from '../../assets/images/residence/rooms/yellowCouch/chill.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/yellowCouch/holl.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/livingroom2.jpg'
import LIVINGROOM3_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/livingroom3.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/bedroom2.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/kitchen.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/bathroom.jpg'
import CHILL_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/chill.jpg'
import HOLL_TABLET_JPG from '../../assets/images/residence/rooms/yellowCouch/tablet/holl.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/livingroom2.jpg'
import LIVINGROOM3_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/livingroom3.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/bedroom2.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/kitchen.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/bathrooms.jpg'
import CHILL_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/chill.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/residence/rooms/yellowCouch/mobile/holl.jpg'

export const galleryYellowCouch = {
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
        backgroundImage: 'url(' + LIVINGROOM3_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + LIVINGROOM3_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + LIVINGROOM3_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + KITCHEN_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + KITCHEN_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KITCHEN_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + CHILL_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + CHILL_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + CHILL_MOBILE_JPG + ')' }
      }
    },

    {
      props: {
        backgroundImage: 'url(' + HOLL_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
      }
    }
  ]
}
