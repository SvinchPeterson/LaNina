'use strict'

import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/ballerina/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/ballerina/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/ballerina/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/ballerina/bedroom-2.jpg'
import BEDROOM3_JPG from '../../assets/images/ballerina/bedroom2.jpg'
import BEDROOM4_JPG from '../../assets/images/ballerina/bedroom2-2.jpg'
import KITCHEN_JPG from '../../assets/images/ballerina/kitchen.jpg'
import HOLL_JPG from '../../assets/images/ballerina/holl.jpg'
import BATHROOM_JPG from '../../assets/images/ballerina/bathroom.jpg'

const livingroom = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } }
const livingroom2 = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } }
const bedroom = { proto: image, style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } }
const bedroom2 = { proto: image, style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } }
const bedroom3 = { proto: image, style: { backgroundImage: 'url(' + BEDROOM3_JPG + ')' } }
const bedroom4 = { proto: image, style: { backgroundImage: 'url(' + BEDROOM4_JPG + ')' } }
const kitchen = { proto: image, style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } }
const holl = { proto: image, style: { backgroundImage: 'url(' + HOLL_JPG + ')' } }
const bathroom = { proto: image, style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }

export const galleryBallerina = [livingroom, livingroom2, bedroom, bedroom2, bedroom3, bedroom4, kitchen, holl, bathroom]
