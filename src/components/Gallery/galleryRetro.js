'use strict'

import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/retro/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/retro/livingroom2.jpg'
import KITCHEN_JPG from '../../assets/images/retro/kitchen.jpg'
import KITCHEN2_JPG from '../../assets/images/retro/kitchen2.jpg'
import BEDROOM_JPG from '../../assets/images/retro/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/retro/bedroom2.jpg'
import BATHROOM_JPG from '../../assets/images/retro/bathroom.jpg'
import HOLL_JPG from '../../assets/images/retro/holl.jpg'

const livingroom = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } }
const livingroom2 = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } }
const bedroom = { proto: image, style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } }
const bedroom2 = { proto: image, style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } }
const kitchen = { proto: image, style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } }
const kitchen2 = { proto: image, style: { backgroundImage: 'url(' + KITCHEN2_JPG + ')' } }
const holl = { proto: image, style: { backgroundImage: 'url(' + HOLL_JPG + ')' } }
const bathroom = { proto: image, style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }

export const galleryRetro = [livingroom, livingroom2, bedroom, bedroom2, kitchen, kitchen2, holl, bathroom]
