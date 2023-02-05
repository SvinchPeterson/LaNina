'use strict'

import { Gallerys } from '../../components'

import LIVINGROOM_JPG from '../../assets/images/residence/rooms/greenForest/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/residence/rooms/greenForest/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/greenForest/bedroom.jpg'
import MEAMA_JPG from '../../assets/images/residence/rooms/greenForest/meama.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/greenForest/bathroom.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/greenForest/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/residence/rooms/greenForest/kitchen2.jpg'
import KITCHEN3_JPG from '../../assets/images/residence/rooms/greenForest/kitchen3.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/greenForest/holl.jpg'
import CROSLEY_JPG from '../../assets/images/residence/rooms/greenForest/crosley.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/livingroom2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/bedroom.jpg'
import MEAMA_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/meama.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/bathroom.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/kitchen.jpg'
import KITCHEN2_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/kitchen2.jpg'
import KITCHEN3_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/kitchen3.jpg'
import HOLL_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/holl.jpg'
import CROSLEY_TABLET_JPG from '../../assets/images/residence/rooms/greenForest/tablet/crosley.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/livingroom2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/bedroom.jpg'
import MEAMA_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/meama.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/bathroom.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/kitchen.jpg'
import KITCHEN2_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/kitchen2.jpg'
import KITCHEN3_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/kitchen3.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/holl.jpg'
import CROSLEY_MOBILE_JPG from '../../assets/images/residence/rooms/greenForest/mobile/crosley.jpg'

export const galleryGreenForest = {
  extend: Gallerys,

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
        backgroundImage: 'url(' + MEAMA_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + MEAMA_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + MEAMA_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + KITCHEN3_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + KITCHEN3_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + KITCHEN3_MOBILE_JPG + ')' }
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
        backgroundImage: 'url(' + CROSLEY_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + CROSLEY_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + CROSLEY_MOBILE_JPG + ')' }
      }
    }
  ]
}
