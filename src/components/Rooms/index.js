'use strict'

import { Box, Link, Img } from 'smbls'

import BACK_PNG from '../../assets/icons/arrowBack.png'

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro
} from '..'

import { RoomDescription } from '../RoomDescription'
import { Amenities } from '../Amenities'

const Room = {
  props: {
    boxSize: '100% 100%',
    flexAlign: 'center spance-between',
    css: {
      zIndex: 10,
      alignSelf: 'center'
    },
    article: {
      flexFlow: 'column',
      padding: '0 0 0 D',
      gap: 'C'
    }
  },

  class: {
    show: (element, state) => state.activeTab === element.key
      ? {
        minWidth: '100%',
        height: '100%'
      }

      : {
        height: `0`,
        opacity: 0
      }
  },

  article: {
    description: { proto: RoomDescription },
    amenities: { proto: Amenities }
  },
  gallery: {}
  // RoomOffers,
  // navButton: {
  //   proto: NavButtons,
  //   props: { '@mobileL': { display: 'none' } }
  // },
  // navButton2: {
  //   proto: NavButtons2,
  //   style: {
  //     display: 'none',
  //     '@media only screen and (max-width: 768px)': {
  //       display: 'flex',
  //       top: '70%',
  //       width: '100%',
  //       '> button': {
  //         background: 'rgba(60, 84, 72, .95)',
  //         '&:first-child': {
  //           marginLeft: `${-1.5 / 16}em`
  //         },
  //         '&:last-child': {
  //           marginRight: `${-1.5 / 16}em`
  //         }
  //       }
  //     },
  //     '@media only screen and (max-width: 560px)': {
  //       top: '85%'
  //     },
  //     '@media only screen and (max-height: 650px)': {
  //       top: '70%'
  //     }
  //   },

  //   ...[
  //     {
  //       on: {
  //         click: (event, element, state) => {
  //           const { activeImage } = state
  //           state.update({
  //             activeImage: activeImage + 1
  //           })
  //           if (activeImage >= 8) {
  //             state.update({ activeImage: 0 })
  //           }
  //         }
  //       }
  //     },

  //     {
  //       on: {
  //         click: (event, element, state) => {
  //           const { activeImage } = state
  //           state.update({
  //             activeImage: activeImage - 1
  //           })
  //           if (activeImage <= 0) {
  //             state.update({ activeImage: 8 })
  //           }
  //         }
  //       },
  //       style: { marginRight: `${-3 / 16}em` }
  //     }
  //   ]
  // }

  // book: { proto: book },
  // back: { proto: back }
}

export const roomBallerina = {
  proto: Room,
  attr: { id: 'roomBallerina' },

  article: {},
  gallery: { proto: galleryBallerina }
  // RoomOffers: {},
  // navButton: {},
  // book: { props: { href: 'https://www.airbnb.com/rooms/52732503?source_impression_id=p3_1649549940_lilV4c5SZhQLXjub' } }
}

export const roomRedBrick = {
  proto: Room,
  attr: { id: 'roomRedBrick' },

  article: {
    description: {
      props: {
        title: { text: 'Red Brick' },
        paragraph: {
          text: `Studio apartment of 55m2 located on the ground floor, just few steps downstairs, composed of living area with comfortable sofa bed for 1 person and sleeping area with 1 Queen bed, private bathroom with shower, kitchen dining table, making the apartment comfortable for 3 people.`
        }
      }
    }
  },
  gallery: { proto: galleryRedBrick },
  book: { props: { href: 'https://www.airbnb.com/rooms/52610522?source_impression_id=p3_1649549944_%2BCos1t1uD845OoWN' } }
}

export const roomYellowCouch = {
  proto: Room,
  attr: { id: 'roomYellowCouch' },

  article: {
    description: {
      props: {
        title: { text: 'Yellow Couch' },
        paragraph: {
          text: `Cozy and quiet one bedroom apartment of 50 m2 with open terrace, located on high first floor and  composed of living room with comfortable sofa bed for 1 person and bedroom with 1 Queen bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 3 people.`
        }
      }
    }
  },
  gallery: { proto: galleryYellowCouch },
  book: { props: { href: 'https://www.airbnb.com/rooms/52611151?source_impression_id=p3_1649549947_6qVLP%2BHZyXqY%2BvrL' } }
}

export const roomGreenForest = {
  proto: Room,
  attr: { id: 'roomGreenForest' },
  article: {
    description: {
      props: {
        title: { text: 'Green Forest' },
        paragraph: {
          text: `One bedroom apartment of 51 m2 with open terrace, located on high first floor and  composed of living room and bedroom with 1 King bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 2 people.`
        }
      }
    }
  },
  gallery: { proto: galleryGreenForest },
  book: { props: { href: 'https://www.airbnb.com/rooms/578777975140256943?source_impression_id=p3_1649549949_GCS4Ixi%2FrxMbApfW' } }
}

export const roomRetro = {
  proto: Room,
  attr: { id: 'roomRetro' },
  article: {
    description: {
      props: {
        title: { text: 'Retro' },
        paragraph: {
          text: `Cozy and quiet one bedroom apartment of 44 m2 with open terrace, located on high first floor and composed of living room with comfortable sofa bed for 1 person and bedroom with 1 Queen bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 3 people.`
        }
      }
    }
  },
  gallery: { proto: galleryRetro },
  book: { props: { href: 'https://www.airbnb.com/rooms/579012726681765152?source_impression_id=p3_1649552000_jBh%2BzYZTB7v6VHUs' } }
}
