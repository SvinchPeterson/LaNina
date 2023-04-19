'use strict'

import { GalleryContainer, NavArrowsCream } from '../../../components'

import { galleryTbilisi, galleryBorjomi, galleryMtsketa, galleryKakheti, galleryMartvili, galleryKutaisi, galleryGori, galleryKazbegi } from '../../../galleries/travelGalleries'

const props = {
  boxSize: 'H1 H3',
  position: 'relative',
  overflow: 'hidden',
  margin: '- -F - -',
  style: { transition: 'width 1.3s ease-in-out' },
  '@maxTabletL': { fontSize: `${14 / 16}em` },
  '@maxMobileL': {
    boxSize: 'H1 100%',
    margin: '0'
  },

  childProps: {
    position: 'absolute',
    top: '0',
    left: '0',
    style: { transition: 'opacity 1s ease-in-out' },
    '@maxMobileL': {
      width: '100%'
    },
    ':after': {
      content: '""',
      boxSize: '100% 100%',
      position: 'absolute',
      background: 'linear-gradient(to right, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)',
      top: '0',
      left: '0',
      pointerEvents: 'none',
    },

    gallery: {
      round: '0 G2 G2 0',
      // height: `${500 / 16}em`,
      border: 'solid, white .15',
      borderWidth: '.15px .15px .15px 0px',
      '@maxMobileL': { round: '0' },
      // '@maxMaxO': { height: `${400 / 16}em`,},
      style: {
        transition: 'width .8s ease, opacity .5s ease',
         height: `${500 / 16}em`,
        '@media only screen and (max-width: 768px) and (max-height: 700px)': {
          height: `${400 / 16}em !important`
        },
        '@media only screen and (max-width: 768px) and (max-height: 600px)': {
          height: `${300 / 16}em !important`
        },
        '@media only screen and (max-width: 768px) and (max-height: 500px)': {
          height: `${250 / 16}em !important`
        }
      }
    },

    footer: {
      padding: 'Z - - A2',
      // border: '2px solid red',
      '@maxMobileL': {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        padding: 'Z A1 - -',

      },
      navArrows: {
        zIndex: '5'
      }
    }
  }
}

const galleryContainer = {
  extend: GalleryContainer,
  book: null,
  gallery: {},
  footer: {
    title: null,
    book: null,
    navArrows: {}
  }
}

export const galleries = {
  props,
  childExtend: galleryContainer,
  ...[
    {
      class: {
        show: (element, state) => state.activeTbilisi
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryTbilisi,
        class: {
          show: (element, state) => state.activeTbilisi
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },

      footer: {
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
                    state.update({ activeImage: 5 })
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
                  if (activeImage >= 5) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeBorjomi
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryBorjomi,
        class: {
          show: (element, state) => state.activeBorjomi
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },
      footer: {
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
                    state.update({ activeImage: 3 })
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
                  if (activeImage >= 3) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeMtsketa
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryMtsketa,
        class: {
          show: (element, state) => state.activeMtsketa
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },

      footer: {
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
                    state.update({ activeImage: 3 })
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
                  if (activeImage >= 3) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeKakheti
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryKakheti,
        class: {
          show: (element, state) => state.activeKakheti
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },
      footer: {
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
                    state.update({ activeImage: 4 })
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
                  if (activeImage >= 4) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeMartvili
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryMartvili,
        class: {
          show: (element, state) => state.activeMartvili
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },

      footer: {
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
                    state.update({ activeImage: 3 })
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
                  if (activeImage >= 3) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeKutaisi
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryKutaisi,
        class: {
          show: (element, state) => state.activeKutaisi
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },

      footer: {
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
                    state.update({ activeImage: 4 })
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
                  if (activeImage >= 4) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeGori
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryGori,
        class: {
          show: (element, state) => state.activeGori
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },
      footer: {
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
                    state.update({ activeImage: 4 })
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
                  if (activeImage >= 4) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    },

    {
      class: {
        show: (element, state) => state.activeKazbegi
          ? { opacity: '1' }
          : { opacity: '0' }
      },
      gallery: {
        extend: galleryKazbegi,
        class: {
          show: (element, state) => state.activeKazbegi
            ? {
              width: `${608 / 16}em`,
              '@media only screen and (max-width: 768px)': { width: '100%' }
            }
            : { width: '0', opacity: '0' }
        }
      },
      footer: {
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
                    state.update({ activeImage: 4 })
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
                  if (activeImage >= 4) {
                    state.update({ activeImage: 0 })
                  }
                }
              }
            }
          ]
        }
      }
    }
  ]
}
