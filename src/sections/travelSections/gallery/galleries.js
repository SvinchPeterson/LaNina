'use strict'

import { GalleryContainer, HorArrowsWhiteBor } from '../../../components'

// import { imageWidth } from '../../../animations'

import { galleryTbilisi, galleryBorjomi, galleryMtsketa, galleryKakheti, galleryMartvili, galleryKutaisi, galleryGori, galleryKazbegi } from '../../../galleries/travelGalleries/placesGalleries'

const props = {
  width: 'H3',
  height: 'H2',
  position: 'relative',
  overflow: 'hidden',
  style: { transition: 'width 1.3s ease-in-out' },
  childProps: {
    position: 'absolute',
    top: '0',
    left: '0',
    style: { transition: 'opacity 1s ease-in-out' },
    ':after': {
      content: '""',
      boxSize: '100% 100%',
      position: 'absolute',
      background: 'linear-gradient(to right, rgba(15, 49, 61, .7) 0%, rgba(15, 49, 61, 0) 100%)',
      top: '0',
      left: '0',
      pointerEvents: 'none'
    },
    title: {
      color: 'white',
      fontSize: 'E',
      textTransform: 'capitalize',
      fontWeight: '700',
      margin: '- - V1 Y2',
      zIndex: '5',
      letterSpacing: '-1px'
    },

    gallery: {
      round: '0 G2 G2 0',
      width: '0',
      height: 'H',
      border: 'solid, white .55',
      borderWidth: '.5px .5px .5px 0px',
      overflow: 'hidden',
      style: { transition: 'width 1s ease-in-out' }
      // width: '0'

    },

    navArrows: {
      alignSelf: 'flex-start',
      padding: '- - - A',
      zIndex: '5'
    }

  }
}

const galleryContainer = {
  extend: GalleryContainer,
  book: null,
  title: { tag: 'h1' },
  gallery: {
    class: {
      show: (element, state) => state.activePopUpGallery
        ? { width: '608px' }
        : { width: '0' }
    }
  },
  navArrows: {
    extend: HorArrowsWhiteBor
  }
}

export const galleries = {
  props,
  // class: {
  //   show: (element, state) => state.activePopUpGallery
  //     ? { width: '642px' }
  //     : { width: '0' }
  // },
  childExtend: galleryContainer,
  ...[
    {
      class: {
        show: (element, state) => state.activeTbilisi
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'tbilisi' },
      gallery: { extend: galleryTbilisi },
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
    },

    {
      class: {
        show: (element, state) => state.activeBorjomi
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'borjomi' },
      gallery: { extend: galleryBorjomi },
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
    },

    {
      class: {
        show: (element, state) => state.activeMtsketa
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'mtsketa' },
      gallery: { extend: galleryMtsketa },
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
    },

    {
      class: {
        show: (element, state) => state.activeKakheti
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'kakheti' },
      gallery: { extend: galleryKakheti },
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
    },

    {
      class: {
        show: (element, state) => state.activeMartvili
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'martvili' },
      gallery: { extend: galleryMartvili },
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
    },

    {
      class: {
        show: (element, state) => state.activeKutaisi
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'kutaisi' },
      gallery: { extend: galleryKutaisi },
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
    },

    {
      class: {
        show: (element, state) => state.activeGori
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'gori' },
      gallery: { extend: galleryGori },
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
    },

    {
      class: {
        show: (element, state) => state.activeKazbegi
          ? { opacity: '1' }
          : { opacity: '0' }
      },

      title: { text: 'kazbegi' },
      gallery: { extend: galleryKazbegi },
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
  ]
}
