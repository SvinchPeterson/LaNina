'use strict'

import { Flex } from 'smbls'
import { keyframes } from '@emotion/css'

import {
  galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro
} from '..'

import { RoomDescription } from '../RoomDescription'
import { Amenities } from '../Amenities'

export const opacities = keyframes`
  from {
    opacity: 0;
    transform: scale(.99);
  }
  to {
   opacity: 1;
   transform: scale(1);
  }
`

const Room = {
  extend: Flex,
  props: {
    boxSize: '100% 100%',
    align: 'center center',
    position: 'relative',
    gap: 'C',
    style: {
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
        height: '100%',
        animationName: opacities,
        animationDuration: '.5s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }

      : {
        height: `0`,
        opacity: 0,
        background: 'black',
        pointerEvents: 'none'
      }
  },

  article: {
    props: {
      '@tabletL': {
        display: 'none'
      }
    },

    description: { extend: RoomDescription },
    amenities: { extend: Amenities }
  },

  gallery: {
    props: {
      '@tabletL': { margin: 'auto' }
    }
  }
}

export const roomBallerina = {
  extend: Room,
  attr: { id: 'roomBallerina' },

  article: {},
  gallery: { extend: galleryBallerina }
}

export const roomRedBrick = {
  extend: Room,
  attr: { id: 'roomRedBrick' },

  article: {
    description: {
      props: {
        title: { text: 'Red Brick' },
        paragraph: {
          text: `Studio apartment of 55m2 located on the ground floor, just few steps downstairs, composed of living area with comfortable sofa bed for 1 person and sleeping area with 1 Queen bed, private bathroom with shower, kitchen dining table, making the apartment comfortable for 3 people.`
        }
      }
    },
    amenities: {
      title: {},
      list: {
        ...[
          {},
          {
            ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }]
          }
        ]
      }
    }
  },
  gallery: { extend: galleryRedBrick }
}

export const roomYellowCouch = {
  extend: Room,
  attr: { id: 'roomYellowCouch' },

  article: {
    description: {
      props: {
        title: { text: 'Yellow Couch' },
        paragraph: {
          text: `Cozy and quiet one bedroom apartment of 50 m2 with open terrace, located on high first floor and  composed of living room with comfortable sofa bed for 1 person and bedroom with 1 Queen bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 3 people.`
        }
      }
    },
    amenities: {
      title: {},
      list: {
        ...[
          {},
          {
            ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }]
          }
        ]
      }
    }
  },
  gallery: { extend: galleryYellowCouch }
}

export const roomGreenForest = {
  extend: Room,
  attr: { id: 'roomGreenForest' },
  article: {
    description: {
      props: {
        title: { text: 'Green Forrest' },
        paragraph: {
          text: `One bedroom apartment of 51 m2 with open terrace, located on high first floor and  composed of living room and bedroom with 1 King bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 2 people.`
        }
      }
    },
    amenities: {
      title: {},
      list: {
        ...[
          {},
          {
            ...[{}, {}, {}, {}, { props: { display: 'none' } }, {}, {}, {}, { props: { display: 'none' } }]
          }
        ]
      }
    }
  },
  gallery: { extend: galleryGreenForest }
}

export const roomRetro = {
  extend: Room,
  attr: { id: 'roomRetro' },
  article: {
    description: {
      props: {
        title: { text: 'Retro' },
        paragraph: {
          text: `Cozy and quiet one bedroom apartment of 44 m2 with open terrace, located on high first floor and composed of living room with comfortable sofa bed for 1 person and bedroom with 1 Queen bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 3 people.`
        }
      }
    },
    amenities: {
      title: {},
      list: {
        ...[
          {},
          {
            ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }]
          }
        ]
      }
    }
  },
  gallery: { extend: galleryRetro }
}
