'use strict'
import Gallery from './gallery'

import LIVINGROOM_JPG from '../../assets/images/retro/livingRoom.jpg'
import KITCHEN_JPG from '../../assets/images/retro/kitchen.jpg'
import BEDROOM_JPG from '../../assets/images/retro/bedRoom.jpg'
import PHIRI_JPG from '../../assets/images/retro/phiri.jpg'
import BATHROOM_JPG from '../../assets/images/retro/bethroom.jpg'

export const galleryRetro = {
  proto: Gallery,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + PHIRI_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }
  ]
}
