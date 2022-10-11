'use strict'
import { Gallery } from './gallery'
import { image } from './image'

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
  extend: Gallery,
  back: {},
  book: { props: { href: 'https://www.airbnb.com/rooms/578777975140256943?source_impression_id=p3_1660208384_aXrL81DO4CPRWA%2Fy' } },
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
          animation: 'none',
          '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' },
          '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + LIVINGROOM2_TABLET_JPG + ')' },
          '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + LIVINGROOM2_MOBILE_JPG + ')' }
        }
      },

      {
        style: {
          '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + MEAMA_JPG + ')' },
          '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + MEAMA_TABLET_JPG + ')' },
          '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + MEAMA_MOBILE_JPG + ')' }
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
          '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + KITCHEN_JPG + ')' },
          '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + KITCHEN_TABLET_JPG + ')' },
          '@media only screen and (max-width: 1768px)': { backgroundImage: 'url(' + KITCHEN_MOBILE_JPG + ')' }
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
          '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + KITCHEN3_JPG + ')' },
          '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + KITCHEN3_TABLET_JPG + ')' },
          '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + KITCHEN3_MOBILE_JPG + ')' }
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
          animation: 'none',
          '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + HOLL_JPG + ')' },
          '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + HOLL_TABLET_JPG + ')' },
          '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + HOLL_MOBILE_JPG + ')' }
        }
      },

      {
        style: {
          '@media only screen and (min-width: 1226px)': { backgroundImage: 'url(' + CROSLEY_JPG + ')' },
          '@media only screen and (max-width: 1225px)': { backgroundImage: 'url(' + CROSLEY_TABLET_JPG + ')' },
          '@media only screen and (max-width: 768px)': { backgroundImage: 'url(' + CROSLEY_MOBILE_JPG + ')' }
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
              { span: '1 ', text: 'bedroom' },
              {
                props: { display: 'flex', gap: 'Y' },
                ...[{ span: '1 ', text: 'king bed' }]
              }
            ]
          }
        },
        {
          icon: {},
          caption: {
            ...[
              'comfortable for',
              { span: '2 ', text: ' persons' }
            ]
          }
        },
        {
          icon: {},
          caption: {
            ...[
              { tag: 'span', text: '51 m2' },
              'high first floor'
            ]

          }
        }
      ]
    }
  }
}
