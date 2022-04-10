'use strict'
import { image } from './image'

import LIVINGROOM_JPG from '../../assets/images/redBrick/livingroom.jpg'
import LIVINGROOM2_JPG from '../../assets/images/redBrick/livingroom2.jpg'
import BEDROOM_JPG from '../../assets/images/redBrick/bedroom.jpg'
import BEDROOM2_JPG from '../../assets/images/redBrick/bedroom2.jpg'
import KITCHEN_JPG from '../../assets/images/redBrick/kitchen.jpg'
import BATHROOM_JPG from '../../assets/images/redBrick/bathroom.jpg'
import BATHROOM2_JPG from '../../assets/images/redBrick/bathroom2.jpg'

const livingroom = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } }
const livingroom2 = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } }
const bedroom = { proto: image, style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } }
const bedroom2 = { proto: image, style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } }
const kitchen = { proto: image, style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } }
const bathroom = { proto: image, style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }
const bathroom2 = { proto: image, style: { backgroundImage: 'url(' + BATHROOM2_JPG + ')' } }

export const galleryRedBrick = [livingroom, livingroom2, bedroom, bedroom2, kitchen, bathroom, bathroom2]
