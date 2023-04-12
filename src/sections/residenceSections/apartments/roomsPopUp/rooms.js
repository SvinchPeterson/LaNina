'use strict'

import { Room } from '../../../../components'

import { roomDescription } from '../../../../animations'

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

  props: { padding: '- C2 - -' },


  galleryContainer: {
    class: {
      show: (element, state) => state.activeBallerina
      ? { width: `calc(100% - 430px)`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: {
      extend: galleryBallerina,
      props: {
        round: '0 B2 B2 0',
       ':before': {
        left: '0',
        background: 'linear-gradient(to right,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
      }
      }
    },
    footer: {
      props: { padding: 'Y B2 Y2 B'},
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
  props: { padding: '- - - C2' },
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
      ? { width: `calc(100% - 430px)`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: {
      props: {
        round: 'B2 0 0 B2',
        ':before': {
          right: '0',
          background: 'linear-gradient(to left,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
        }
      },
      extend: galleryRedBrick
    },
    footer: {
      props: { padding: 'Y B Y2 B2'},
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
  props: { padding: '- C2 - -' },
  galleryContainer: {
    class: {
      show: (element, state) => state.activeYellowCouch
      ? { width: `calc(100% - 430px)`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },

    gallery: {
      extend: galleryYellowCouch,
      props: {
        round: '0 B2 B2 0',
        ':before': {
          left: '0',
          background: 'linear-gradient(to right,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
        }
      },
      // props: { round: 'G B2 B2 G' }
    },
    footer: {
      props: { padding: 'Y B2 Y2 B'},
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
          transition: 'opacity .8s ease-in-out, transform 1s ease'
        }
        : {
          opacity: '0',
          transform: 'translateY(50px) scale(.97)',
          transition: 'opacity .5s ease-in-out, transform 1s ease'
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

  props: { padding: '- - - C2' },

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
      ? { width: `calc(100% - 430px)`, transition: 'width .75s ease-in-out' }
      : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: {
      extend: galleryGreenForest,
      props: {
        round: 'B2 0 0 B2',
        ':before': {
          right: '0',
          background: 'linear-gradient(to left,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
        }
       }
    },

    footer: {
      props: { padding: 'Y B Y2 B2'},
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

  props: { padding: '- C2 - -' },



  galleryContainer: {
    class: {
      show: (element, state) => state.activeRetro
        ? { width: `calc(100% - 430px)
        `, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0',  transition: 'width .3s ease-in-out' }
    },

    gallery: {
      extend: galleryRetro,
      props: {
        round: '0 B2 B2 0',
        ':before': {
          left: '0',
          background: 'linear-gradient(to right,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
        }
      }
    },
    footer: {
      props: { padding: 'Y B2 Y2 B'},
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
      p: { extend: retroTextEng }
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

  props: { padding: '- - - C2' },

  galleryContainer: {
    class: {
      show: (element, state) => state.activeLagoon
        ? { width: `calc(100% - 430px)`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },

    gallery: {
      extend: galleryBlueLagoon,
      props: {
        round: 'B2 0 0 B2',
        ':before': {
          right: '0',
          background: 'linear-gradient(to left,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
        }
      }
     },
    footer: {
      props: { padding: 'Y B Y2 B2'},
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

  props: { padding: '- C2 - -' },


  galleryContainer: {
    class: {
      show: (element, state) => state.activeQvevri
        ? { width: `calc(100% - 430px)`, transition: 'width .75s ease-in-out' }
        : { width: '0', opacity: '0', transition: 'width .3s ease-in-out' }
    },
    gallery: {
      extend: galleryQvevri,
      props: {
        round: '0 B2 B2 0',
        ':before': {
          left: '0',
          background: 'linear-gradient(to right,rgba(0, 49, 49, 1) 0%, rgba(0, 49, 49, 0) 100%)'
        }
      }
    },

    footer: {
      props: { padding: 'Y B2 Y2 B'},
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
      p: { extend: retroTextEng }
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


