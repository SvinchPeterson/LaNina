'use strict'

import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/yellowCouch/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/yellowCouch/livingroom2.jpg'
import LIVINGROOM3_JPG from '../../assets/images/yellowCouch/livingroom3.jpg'
import BEDROOM_JPG from '../../assets/images/yellowCouch/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/yellowCouch/bedroom2.jpg'
import KITCHEN_JPG from '../../assets/images/yellowCouch/kitchen.jpg'
import BATHROOM_JPG from '../../assets/images/yellowCouch/bathroom.jpg'
import CHILL_JPG from '../../assets/images/yellowCouch/chill.jpg'
import HOLL_JPG from '../../assets/images/yellowCouch/holl.jpg'

export const galleryYellowCouch = {
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM3_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + CHILL_JPG + ')' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')' } }
  ]
}
