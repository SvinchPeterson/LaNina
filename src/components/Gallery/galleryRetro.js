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

export const galleryRetro = {
  proto: Gallery,
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')', display: 'none' } }
  ]
}
