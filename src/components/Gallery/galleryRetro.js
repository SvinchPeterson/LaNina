'use strict'

import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/retro/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/retro/livingroom2.jpg'
import KITCHEN_JPG from '../../assets/images/retro/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/retro/kitchen2.jpg'
import BEDROOM_JPG from '../../assets/images/retro/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/retro/bedroom2.jpg'
import BATHROOM_JPG from '../../assets/images/retro/bathroom.jpg'
import HOLL_JPG from '../../assets/images/retro/holl.jpg'

export const galleryRetro = {
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }
  ]
}
