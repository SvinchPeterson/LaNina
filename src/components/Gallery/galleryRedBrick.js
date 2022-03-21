'use strict'

import Gallery from './gallery'

import APARTMENT_JPG from '../../assets/images/redBrick/apartment.jpg'
import BEDROOM_JPG from '../../assets/images/redBrick/bedroom.jpg'
import KITCHEN_JPG from '../../assets/images/redBrick/kitchen.jpg'
import LIVINGROOM_JPG from '../../assets/images/redBrick/livingroom.jpg'
import TORSHER_JPG from '../../assets/images/redBrick/torsher.jpg'
import WINE_GLASS_JPG from '../../assets/images/redBrick/wine-glass.jpg'

export const galleryRedBrick = {
  proto: Gallery,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + APARTMENT_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { style: { backgroundImage: 'url(' + TORSHER_JPG + ')' } },
    { style: { backgroundImage: 'url(' + WINE_GLASS_JPG + ')' } }
  ]
}
