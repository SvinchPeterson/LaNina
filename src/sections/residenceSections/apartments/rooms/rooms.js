'use strict'

import { Room, galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro } from '../../../../components'

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
