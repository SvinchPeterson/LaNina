'use strict'

import { Room } from '../../../../components'

import { galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro } from '../../../../galleries/apartmentsGalleries'

import { ballerinaTextEng, redBrickTextEng, yellowCouchTextEng, greenForrestTextEng, retroTextEng } from '../../../../texts/residence'

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
    book: {},
    gallery: { extend: galleryBallerina },
    navArrows: {}
  }
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
  },

  galleryContainer: {
    book: {},
    gallery: { extend: galleryRedBrick },
    navArrows: {}
  }
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
  },

  galleryContainer: {
    book: {},
    gallery: { extend: galleryYellowCouch },
    navArrows: {}
  }
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
  },

  galleryContainer: {
    book: {},
    gallery: { extend: galleryGreenForest },
    navArrows: {}
  }
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
  },

  galleryContainer: {
    book: {},
    gallery: { extend: galleryRetro },
    navArrows: {}
  }
}
