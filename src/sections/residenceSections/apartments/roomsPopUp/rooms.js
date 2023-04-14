'use strict'

import { Room } from '../../../../components'

import { roomDescription } from '../../../../animations'

import { galleryBallerina, galleryRedBrick, galleryYellowCouch, galleryGreenForest, galleryRetro, galleryBlueLagoon, galleryQvevri } from '../../../../galleries/apartmentsGalleries'

import {
  ballerinaTextEng, redBrickTextEng, yellowCouchTextEng, greenForrestTextEng,
  retroTextEng, blueLagoonTextEng, qvevriTextEng
} from '../../../../texts/residence'

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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeBallerinaDescription: true
          }) }
        },

      },
      {}
    ]
  },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeBallerina
      ? {
        width: `calc(100% - 430px)`,
        transition: 'width .75s ease-in-out',
        '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
      }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: { extend: galleryBallerina },
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
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeBallerina
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
      },

      title: { text: 'ballerina' },
      p: { extend: ballerinaTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeBallerina
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
    }
  },
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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeRedBrickDescription: true
          }) }
        },
      },
      {}
    ]
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeRedBrick
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: { text: 'Red Brick' },
      p: { extend: redBrickTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeRedBrick
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
    }
  },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeRedBrick
      ? {
        width: `calc(100% - 430px)`,
        transition: 'width .75s ease-in-out',
        '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
      }
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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeYellowCouchDescription: true
          }) }
        },
      }
    ]
  },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeYellowCouch
      ? {
        width: `calc(100% - 430px)`,
        transition: 'width .75s ease-in-out',
        '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
      }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },

    gallery: {
      extend: galleryYellowCouch
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
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeYellowCouch
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: { text: 'Yellow Couch' },
      p: { extend: yellowCouchTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeYellowCouch
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeGreenForestDescription: true
          }) }
        },
      }
    ]
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeGreenForest
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: { text: 'Green Forrest' },
      p: { extend: greenForrestTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeGreenForest
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: {},
      list: {
        ...[{}, { ...[{}, {}, {}, {}, { props: { display: 'none' } }, {}, {}, {}, { props: { display: 'none' } }] }]
      }
    }
  },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeGreenForest
      ? {
        width: `calc(100% - 430px)`,
        transition: 'width .75s ease-in-out',
        '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
      }
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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeRetroDescription: true
          }) }
        },
      }
    ]
  },
  galleryContainer: {
    class: {
      show: (element, state) => state.activeRetro
        ? {
          width: `calc(100% - 430px)`,
          transition: 'width .75s ease-in-out',
          '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
        }
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
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeRetro
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: { text: 'Retro' },
      p: { extend: retroTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeRetro
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeBlueLagoonDescription: true
          }) }
        },
      }
    ]
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeLagoon
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },

      title: { text: 'Retro' },
      p: { extend: blueLagoonTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeLagoon
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
    }
  },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeLagoon
        ? {
          width: `calc(100% - 430px)`,
          transition: 'width .75s ease-in-out',
          '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
        }
        : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
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

  header: {
    ...[
      {
        on: {
          click: (event, element, state) => { state.update({
            activeDescriptionsPopUp: true,
            activeQvevriDescription: true
          }) }
        },
      }
    ]
  },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeQvevri
        ? {
          width: `calc(100% - 430px)`,
          transition: 'width .75s ease-in-out',
          '@media only screen and (max-width: 1366px)': { width: `calc(100% - 350px)` }
        }
        : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: {
      extend: galleryQvevri
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
  },

  article: {
    description: {
      class: {
        show: (element, state) => state.activeQvevri
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(-50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: { text: 'Retro' },
      p: { extend: qvevriTextEng }
    },
    amenities: {
      class: {
        show: (element, state) => state.activeQvevri
        ? {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
          transition: 'opacity .8s ease-in-out, transform .7s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform .7s ease'
        }
      },
      title: {},
      list: { ...[{}, { ...[{}, {}, {}, {}, {}, {}, {}, {}, { props: { display: 'none' } }] }] }
    }
  }
}


