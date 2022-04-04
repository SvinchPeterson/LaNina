'use strict'

import Gallery from './gallery'

import LIVINGROOM_JPG from '../../assets/images/ballerina/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/ballerina/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/ballerina/bedroom.jpg'
import BEDROOM_2_JPG from '../../assets/images/ballerina/bedroom-2.jpg'
import BEDROOM2_JPG from '../../assets/images/ballerina/bedroom2.jpg'
import BEDROOM_22_JPG from '../../assets/images/ballerina/bedroom2-2.jpg'
import KITCHEN_JPG from '../../assets/images/ballerina/kitchen.jpg'
import HOLL_JPG from '../../assets/images/ballerina/holl.jpg'
import BATHROOM_JPG from '../../assets/images/ballerina/bathroom.jpg'

export const galleryBallerina = {
  proto: Gallery,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BEDROOM_22_JPG + ')' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } }
  ]
}
