'use strict'

import { Gallery } from '../../components'

import LIVINGROOM_JPG from '../../assets/images/residence/rooms/retro/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/residence/rooms/retro/livingroom2.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/retro/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/residence/rooms/retro/kitchen2.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/retro/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/residence/rooms/retro/bedroom2.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/retro/bathroom.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/retro/holl.jpg'
import APARTMENT_JPG from '../../assets/images/residence/rooms/retro/apartment.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/livingroom2.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/kitchen.jpg'
import KITCHEN2_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/kitchen2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/bedroom.jpg'
import BEDROOM2_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/bedroom2.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/bathroom.jpg'
import HOLL_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/holl.jpg'
import APARTMENT_TABLET_JPG from '../../assets/images/residence/rooms/retro/tablet/apartment.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/livingroom2.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/kitchen.jpg'
import KITCHEN2_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/kitchen2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/bedroom.jpg'
import BEDROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/bedroom2.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/bathroom.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/holl.jpg'
import APARTMENT_MOBILE_JPG from '../../assets/images/residence/rooms/retro/mobile/apartment.jpg'

export const galleryRetro = {
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
        backgroundImage: 'url(' + BATHROOM_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BATHROOM_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BATHROOM_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + APARTMENT_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + APARTMENT_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + APARTMENT_MOBILE_JPG + ')' }
      }
    }
  ]
}
