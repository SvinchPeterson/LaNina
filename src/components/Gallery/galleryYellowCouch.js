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

const livingroom = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM_JPG + ')' } }
const livingroom2 = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM2_JPG + ')' } }
const livingroom3 = { proto: image, style: { backgroundImage: 'url(' + LIVINGROOM3_JPG + ')' } }
const bedroom = { proto: image, style: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } }
const bedroom2 = { proto: image, style: { backgroundImage: 'url(' + BEDROOM2_JPG + ')' } }
const kitchen = { proto: image, style: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } }
const bathroom = { proto: image, style: { backgroundImage: 'url(' + BATHROOM_JPG + ')' } }
const chill = { proto: image, style: { backgroundImage: 'url(' + CHILL_JPG + ')' } }
const holl = { proto: image, style: { backgroundImage: 'url(' + HOLL_JPG + ')' } }

export const galleryYellowCouch = [livingroom, livingroom2, livingroom3, bedroom, bedroom2, kitchen, bathroom, chill, holl]
