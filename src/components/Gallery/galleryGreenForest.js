'use strict'

import Gallery from './gallery'

import LIVINGROOM_JPG from '../../assets/images/greenForest/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/greenForest/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/greenForest/bedroom.jpg'
import MEAMA_JPG from '../../assets/images/greenForest/meama.jpg'
// import HALL_JPG from '../../assets/images/ballerina/hall.jpg'
import BATHROOM_JPG from '../../assets/images/greenForest/bathroom.jpg'

export const galleryGreenForest = {
  proto: Gallery,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + MEAMA_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }
  ]
}
