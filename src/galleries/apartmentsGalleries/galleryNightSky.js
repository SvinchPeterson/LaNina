'use strict'

import { Gallery } from '../../components'

import LIVINGROOM_JPG from '../../assets/images/residence/rooms/nightSky/livingRoom2.jpg'
import LIVINGROOM2_JPG from '../../assets/images/residence/rooms/nightSky/livingRoom.jpg'
import LIVINGROOM3_JPG from '../../assets/images/residence/rooms/nightSky/livingRoom3.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/nightSky/holl.jpg'
import HOLL2_JPG from '../../assets/images/residence/rooms/nightSky/holl2.jpg'
import TABLE_JPG from '../../assets/images/residence/rooms/nightSky/table.jpg'
import NIGA_JPG from '../../assets/images/residence/rooms/nightSky/niga.jpg'
import BADROOM_JPG from '../../assets/images/residence/rooms/nightSky/badRoom.jpeg'
import BADROOM2_JPG from '../../assets/images/residence/rooms/nightSky/badRoom2.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/nightSky/bathRoom.jpg'


import LIVINGROOM_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/livingRoom2.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/livingRoom.jpg'
import LIVINGROOM3_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/livingRoom3.jpg'
import HOLL_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/holl.jpg'
import HOLL2_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/holl2.jpg'
import TABLE_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/table.jpg'
import NIGA_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/niga.jpg'
import BADROOM_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/badRoom.jpeg'
import BADROOM2_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/badRoom2.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/residence/rooms/nightSky/tablet/bathRoom.jpg'


import LIVINGROOM_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/livingRoom2.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/livingRoom.jpg'
import LIVINGROOM3_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/livingRoom3.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/holl.jpg'
import HOLL2_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/holl2.jpg'
import TABLE_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/table.jpg'
import NIGA_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/niga.jpg'
import BADROOM_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/badRoom.jpeg'
import BADROOM2_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/badRoom2.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/residence/rooms/nightSky/mobile/bathRoom.jpg'





export const galleryNightSky = {
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
        backgroundImage: 'url(' + HOLL_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
      }
    },
    {
      props: {
        backgroundImage: 'url(' + HOLL2_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + HOLL2_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + HOLL2_MOBILE_JPG + ')' }
      }
    },
    {
      props: {
        backgroundImage: 'url(' + TABLE_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + TABLE_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + TABLE_MOBILE_JPG + ')' }
      }
    },
    {
      props: {
        backgroundImage: 'url(' + NIGA_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + NIGA_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + NIGA_MOBILE_JPG + ')' }
      }
    },
    {
      props: {
        backgroundImage: 'url(' + BADROOM_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BADROOM_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BADROOM_MOBILE_JPG + ')' }
      }
    },
    {
      props: {
        backgroundImage: 'url(' + BADROOM2_JPG + ')',
        '@tabletM': { backgroundImage: 'url(' + BADROOM2_TABLET_JPG + ')' },
        '@mobileM': { backgroundImage: 'url(' + BADROOM2_MOBILE_JPG + ')' }
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