'use strict'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/redBrick/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/redBrick/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/redBrick/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/redBrick/bedroom2.jpg'
import KITCHEN_JPG from '../../assets/images/redBrick/kitchen.jpg'
import BATHROOM_JPG from '../../assets/images/redBrick/bathroom.jpg'
import BATHROOM2_JPG from '../../assets/images/redBrick/bathroom2.jpg'

export const galleryRedBrick = {
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM2_JPG + ')' } }

  ]
}
