'use strict'

import { Room } from '../../../../components'

import { galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro, galleryBlueLagoon, galleryQvevri } from '../../../../galleries/apartmentsGalleries'

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
    class: {
      show: (element, state) => state.activeBallerina
      ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: {
      extend: galleryBallerina,
    },
    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 8) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
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
    class: {
      show: (element, state) => state.activeRedBrick
      ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: { extend: galleryRedBrick },
    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 8) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
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
    class: {
      show: (element, state) => state.activeYellowCouch
      ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },

    gallery: { extend: galleryYellowCouch },
    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 8) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
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
    class: {
      show: (element, state) => state.activeGreenForest
      ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: { extend: galleryGreenForest },

    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 9 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 9) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
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
    class: {
      show: (element, state) => state.activeRetro
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
    },

    gallery: { extend: galleryRetro },
    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 8 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 8) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}


export const roomBlueLagoon = {
  extend: Room,
  attr: { id: 'roomRetro' },
  class: {
    show: (element, state) => state.activeLagoon
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
    class: {
      show: (element, state) => state.activeLagoon
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
    },

    gallery: { extend: galleryBlueLagoon },
    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 6 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 6) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}





export const roomQvevri = {
  extend: Room,
  attr: { id: 'roomRetro' },
  class: {
    show: (element, state) => state.activeQvevri
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
    class: {
      show: (element, state) => state.activeQvevri
        ? { width: `${608 / 16}em`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
    },
    gallery: { extend: galleryQvevri },

    footer: {
      book: {},
      navArrows: {
        ...[
          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage - 1
                })
                if (activeImage <= 0) {
                  state.update({ activeImage: 6 })
                }
              }
            }
          },

          {
            on: {
              click: (event, element, state) => {
                const { activeImage } = state
                state.update({
                  activeImage: activeImage + 1
                })
                if (activeImage >= 6) {
                  state.update({ activeImage: 0 })
                }
              }
            }
          }
        ]
      }
    }
  }
}


