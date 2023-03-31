'use strict'

import { Gallery } from '../../components'

import LIVING_ROOM_JPEG from '../../assets/images/residence/rooms/blueLagoon/living-room.jpeg'
import LIVING_ROOM2_JPG from '../../assets/images/residence/rooms/blueLagoon/living-room3.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/blueLagoon/holl.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/blueLagoon/kitchen.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/blueLagoon/bed-room.jpg'
import BEDROOM2_JPG from '../../assets/images/residence/rooms/blueLagoon/bed-room2.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/blueLagoon/bethroom.jpg'

export const galleryBlueLagoon = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + LIVING_ROOM_JPEG + ')' } },
    { props: { backgroundImage: 'url(' + LIVING_ROOM2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + HOLL_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BEDROOM_JPG + ')' } },
    { props: {backgroundImage: 'url(' + BEDROOM2_JPG + ')'} },
    { props: {backgroundImage: 'url(' + BATHROOM_JPG + ')'} }
  ]
}