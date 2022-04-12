'use strict'

import { Gallery } from './gallery'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/ballerina/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/ballerina/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/ballerina/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/ballerina/bedroom2.jpg'
import BEDROOM3_JPG from '../../assets/images/ballerina/bedroom3.jpg'
import BEDROOM4_JPG from '../../assets/images/ballerina/bedroom4.jpg'
import KITCHEN_JPG from '../../assets/images/ballerina/kitchen.jpg'
import HOLL_JPG from '../../assets/images/ballerina/holl.jpg'
import BATHROOM_JPG from '../../assets/images/ballerina/bathroom.jpg'

export const galleryBallerina = {
  proto: Gallery,
  childProto: image,
  ...[
    { style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } },
    { style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM3_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BEDROOM4_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + KITCHEN_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + HOLL_JPG + ')', display: 'none' } },
    { style: { backgroundImage: 'url(' + BATHROOM_JPG + ')', display: 'none' } }
  ]
}
