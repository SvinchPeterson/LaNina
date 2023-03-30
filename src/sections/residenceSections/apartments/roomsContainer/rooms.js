'use strict'

import { Room } from '../../../../components'

import { galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro } from '../../../../galleries/apartmentsGalleries'

import { ballerinaTextEng, redBrickTextEng, yellowCouchTextEng, greenForrestTextEng, retroTextEng } from '../../../../texts/residence'

export const roomBallerina = {
  extend: Room,
  attr: { id: 'roomBallerina' },

  class: {
    show: (element, state) => state.activeBallerina
      ? {
        opacity: '1',
        zIndex: '3',
        transition: 'opacity 1s ease-in-out',
      }
      : {
        opacity: '0',
        zIndex: '0',
        transition: 'opacity .3s ease-in-out',
      }
  },

  article: {
    description: {
      title: { text: 'ballerina' },
      p: { extend: ballerinaTextEng }
    }
  },

  galleryContainer: {
    book: {},
    gallery: {
      extend: galleryBallerina,
      class: {
        show: (element, state) => state.activeBallerina
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
      }
    },
    navArrows: {}
  }
}

export const roomRedBrick = {
  extend: Room,
  attr: { id: 'roomRedBrick' },
  class: {
    show: (element, state) => state.activeRedBrick
    ? {
      opacity: '1',
      zIndex: '3',
      transition: 'opacity 1s ease-in-out',
    }
    : {
      opacity: '0',
      zIndex: '0',
      transition: 'opacity .3s ease-in-out',
    }
  },

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
    gallery: {
      extend: galleryRedBrick,
      class: {
        show: (element, state) => state.activeRedBrick
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
      }
    },
    navArrows: {}
  }
}

export const roomYellowCouch = {
  extend: Room,
  attr: { id: 'roomYellowCouch' },
  class: {
    show: (element, state) => state.activeYellowCouch
    ? {
      opacity: '1',
      zIndex: '3',
      transition: 'opacity 1s ease-in-out',
    }
    : {
      opacity: '0',
      zIndex: '0',
      transition: 'opacity .3s ease-in-out',
    }
  },

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
    gallery: {
      extend: galleryYellowCouch,
      class: {
        show: (element, state) => state.activeYellowCouch
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
      }
    },
    navArrows: {}
  }
}

export const roomGreenForest = {
  extend: Room,
  attr: { id: 'roomGreenForest' },
  class: {
    show: (element, state) => state.activeGreenForest
    ? {
      opacity: '1',
      zIndex: '3',
      transition: 'opacity 1s ease-in-out',
    }
    : {
      opacity: '0',
      zIndex: '0',
      transition: 'opacity .3s ease-in-out',
    }
  },

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
    gallery: {
      extend: galleryGreenForest,
      class: {
        show: (element, state) => state.activeGreenForest
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
      }
    },
    navArrows: {}
  }
}

export const roomRetro = {
  extend: Room,
  attr: { id: 'roomRetro' },
  class: {
    show: (element, state) => state.activeRetro
    ? {
      opacity: '1',
      zIndex: '3',
      transition: 'opacity 1s ease-in-out',
    }
    : {
      opacity: '0',
      zIndex: '0',
      transition: 'opacity .3s ease-in-out',
    }
  },

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
    gallery: {
      extend: galleryRetro,
      class: {
        show: (element, state) => state.activeRetro
          ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
          : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
      }
    },
    navArrows: {}
  }
}
