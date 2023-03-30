
import { Gallery } from '../../components'

import LIVING_ROOM_JPEG from '../../assets/images/residence/rooms/qvevri/living-room.jpg'
import LIVING_ROOM2_JPG from '../../assets/images/residence/rooms/qvevri/living.jpg'
import HOLL_JPG from '../../assets/images/residence/rooms/qvevri/holl.jpg'
import KITCHEN_JPG from '../../assets/images/residence/rooms/qvevri/kitchen.jpg'
import TV_JPG from '../../assets/images/residence/rooms/qvevri/tv.jpg'
import BEDROOM_JPG from '../../assets/images/residence/rooms/qvevri/bed-room.jpg'
import BATHROOM_JPG from '../../assets/images/residence/rooms/qvevri/bath-room.jpg'

export const galleryQvevri = {
  extend: Gallery,
  ...[
    { backgroundImage: 'url(' + LIVING_ROOM_JPEG + ')' },
    { backgroundImage: 'url(' + LIVING_ROOM2_JPG + ')' },
    { backgroundImage: 'url(' + HOLL_JPG + ')' },
    { backgroundImage: 'url(' + KITCHEN_JPG + ')' },
    { backgroundImage: 'url(' + TV_JPG + ')' },
    { backgroundImage: 'url(' + BEDROOM_JPG + ')' },
    { backgroundImage: 'url(' + BATHROOM_JPG + ')' }
  ]
}