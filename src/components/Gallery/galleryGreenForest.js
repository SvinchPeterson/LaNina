'use strict'
import { Gallery } from './gallery'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/greenForest/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/greenForest/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/greenForest/bedroom.jpg'
import MEAMA_JPG from '../../assets/images/greenForest/meama.jpg'
import BATHROOM_JPG from '../../assets/images/greenForest/bathroom.jpg'
import KITCHEN_JPG from '../../assets/images/greenForest/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/greenForest/kitchen2.jpg'
import KITCHEN3_JPG from '../../assets/images/greenForest/kitchen3.jpg'
import HOLL_JPG from '../../assets/images/greenForest/holl.jpg'
import CROSLEY_JPG from '../../assets/images/greenForest/crosley.jpg'

import LIVINGROOM_TABLET_JPG from '../../assets/images/greenForest/tablet/livingroom.jpg'
import LIVINGROOM2_TABLET_JPG from '../../assets/images/greenForest/tablet/livingroom2.jpg'
import BEDROOM_TABLET_JPG from '../../assets/images/greenForest/tablet/bedroom.jpg'
import MEAMA_TABLET_JPG from '../../assets/images/greenForest/tablet/meama.jpg'
import BATHROOM_TABLET_JPG from '../../assets/images/greenForest/tablet/bathroom.jpg'
import KITCHEN_TABLET_JPG from '../../assets/images/greenForest/tablet/kitchen.jpg'
import KITCHEN2_TABLET_JPG from '../../assets/images/greenForest/tablet/kitchen2.jpg'
import KITCHEN3_TABLET_JPG from '../../assets/images/greenForest/tablet/kitchen3.jpg'
import HOLL_TABLET_JPG from '../../assets/images/greenForest/tablet/holl.jpg'
import CROSLEY_TABLET_JPG from '../../assets/images/greenForest/tablet/crosley.jpg'

import LIVINGROOM_MOBILE_JPG from '../../assets/images/greenForest/mobile/livingroom.jpg'
import LIVINGROOM2_MOBILE_JPG from '../../assets/images/greenForest/mobile/livingroom2.jpg'
import BEDROOM_MOBILE_JPG from '../../assets/images/greenForest/mobile/bedroom.jpg'
import MEAMA_MOBILE_JPG from '../../assets/images/greenForest/mobile/meama.jpg'
import BATHROOM_MOBILE_JPG from '../../assets/images/greenForest/mobile/bathroom.jpg'
import KITCHEN_MOBILE_JPG from '../../assets/images/greenForest/mobile/kitchen.jpg'
import KITCHEN2_MOBILE_JPG from '../../assets/images/greenForest/mobile/kitchen2.jpg'
import KITCHEN3_MOBILE_JPG from '../../assets/images/greenForest/mobile/kitchen3.jpg'
import HOLL_MOBILE_JPG from '../../assets/images/greenForest/mobile/holl.jpg'
import CROSLEY_MOBILE_JPG from '../../assets/images/greenForest/mobile/crosley.jpg'

export const galleryGreenForest = {
  proto: Gallery,
  imageContainer: {
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
  }
}
