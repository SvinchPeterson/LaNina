'use strict'

// import { Room, galleryRedBrick, galleryBallerina, galleryYellowCouch, galleryGreenForest, galleryRetro } from '../../../../components'
import { Room } from '../../../../components'

import { galleryBallerina } from '../../../../galleries/apartmentsGalleries/galleryBallerina'

import { ballerinaTextEng, redBrickTextEng, yellowCouchTextEng, greenForrestTextEng, retroTextEng } from '../../../../texts/residenceTexts'

export const roomBallerina = {
  extend: Room,
  attr: { id: 'roomBallerina' },

  article: {
    description: {
      title: { text: 'ballerina' },
      p: { extend: ballerinaTextEng }
    }
  },
  galleryContainer: {
    gallery: { extend: galleryBallerina }
  }
  // gallery: { extend: galleryBallerina }
}

export const roomRedBrick = {
  extend: Room,
  attr: { id: 'roomRedBrick' },

  article: {
    description: {
      title: { text: 'Red Brick' },
      p: { extend: redBrickTextEng }
    },
    amenities: {
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
    }
  }

  // gallery: { extend: galleryRedBrick }
}

export const roomYellowCouch = {
  extend: Room,
  attr: { id: 'roomYellowCouch' },

  article: {
    description: {
      title: { text: 'Yellow Couch' },
      p: { extend: yellowCouchTextEng }
    },
    amenities: {
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
    }
  }

  // gallery: { extend: galleryYellowCouch }
}

export const roomGreenForest = {
  extend: Room,
  attr: { id: 'roomGreenForest' },

  article: {
    description: {
      title: { text: 'Green Forrest' },
      p: { extend: greenForrestTextEng }
    },
    amenities: {
      title: {},
      list: {
        ...[{}, { ...[{}, {}, {}, {}, { props: { display: 'none' } }, {}, {}, {}, { props: { display: 'none' } }] }]
      }
    }
  }

  // gallery: { extend: galleryGreenForest }
}

export const roomRetro = {
  extend: Room,
  attr: { id: 'roomRetro' },

  article: {
    description: {
      title: { text: 'Retro' },
      p: { extend: retroTextEng }
    },
    amenities: {
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
    }
  }

  // gallery: { extend: galleryRetro }
}
