'use strict'

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

const livingroom = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } }
const livingroom2 = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } }
const meama = { proto: image, style: { backgroundImage: 'url(' + MEAMA_JPG + ')' } }
const bedroom = { proto: image, style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } }
const kitchen = { proto: image, style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } }
const kitchen2 = { proto: image, style: { backgroundImage: 'url(' + KITCHEN2_JPG + ')' } }
const kitchen3 = { proto: image, style: { backgroundImage: 'url(' + KITCHEN3_JPG + ')' } }
const bathroom = { proto: image, style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }
const holl = { proto: image, style: { backgroundImage: 'url(' + HOLL_JPG + ')' } }
const crosley = { proto: image, style: { backgroundImage: 'url(' + CROSLEY_JPG + ')' } }

export const galleryGreenForest = [livingroom, livingroom2, meama, bedroom, kitchen, kitchen2, kitchen3, bathroom, holl, crosley]
