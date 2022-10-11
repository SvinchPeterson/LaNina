'use strict'

import { Gallery } from './gallery'
import { image } from './image'

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
  back: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1660208389_6BbXYs64bnru3w3i' } },
  navArrows: {},
  imageContainer: {
    childExtend: image,
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
  },
  description: {
    content: {
      ...[
        {
          icon: {},
          caption: {

            ...[
              { span: '2 ', text: 'bedroom' },
              {
                props: { display: 'flex', gap: 'Y' },
                ...[{ span: '1 ', text: 'king bed / ' }, { span: ' 2 ', text: 'single beds' }]
              }
            ]
          }
        },
        {
          icon: {},
          caption: {
            ...[
              'comfortable for',
              { span: '5 ', text: ' persons' }
            ]
          }
        },
        {
          icon: {},
          caption: {
            ...[
              { tag: 'span', text: '72 m2' },
              'high first floor'
            ]

          }
        }
      ]
    }
  }
}
