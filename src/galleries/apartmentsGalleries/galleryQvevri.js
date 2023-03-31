
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
    { props: { backgroundImage: 'url(' + LIVING_ROOM_JPEG + ')' } },
    { props: { backgroundImage: 'url(' + LIVING_ROOM2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + HOLL_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KITCHEN_JPG + ')' } },
    { props: { backgroundImage: 'url(' + TV_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BEDROOM_JPG + ')'} },
    { props: { backgroundImage: 'url(' + BATHROOM_JPG + ')' }}
  ]
}