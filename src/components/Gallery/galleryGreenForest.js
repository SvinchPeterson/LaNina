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

export const galleryGreenForest = {
  proto: Gallery,
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + MEAMA_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN3_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + CROSLEY_JPG + ')', display: 'none' } }
  ]
}
