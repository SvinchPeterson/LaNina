'use strict'
import { Gallery } from './gallery'
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
  proto: Gallery,
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM3_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + CHILL_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')', display: 'none' } }
  ]
}
