'use strict'

import { Flex } from 'smbls'

import { GalleryContainer } from '../../../components'

import { galleryTbilisi, galleryBorjomi, galleryMtsketa, galleryKakheti, galleryMartvili, galleryKutaisi, galleryGori, galleryKazbegi } from '../../../galleries/travelGalleries'

const props = {
  boxSize: 'H1 H2',
  position: 'relative',
  overflow: 'hidden',
  margin: '- -F - -',
  '@maxTabletL': { fontSize: `${14 / 16}em` },
  '@maxTabletS': {
    boxSize: 'H1 100%',
    margin: '0'
  },

  childProps: {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    style: { transition: 'opacity .8s ease-in-out' },
    '@maxTabletS': {
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
      height: `${500 / 16}em`,
      border: 'solid, white .15',
      borderWidth: '.15px .15px .15px 0px',
      '@maxTabletS': { round: '0' },
      transition: 'width .8s ease, opacity .5s ease',
      style: {
        // transition: 'width .8s ease, opacity .5s ease',
         height: `${500 / 16}em`,
        '@media only screen and (max-width: 1024px) and (max-height: 700px)': {
          height: `${450 / 16}em !important`
        },
        '@media only screen and (max-width: 1024px) and (max-height: 600px)': {
          height: `${350 / 16}em !important`
        },
        '@media only screen and (max-width: 1024px) and (max-height: 450px)': {
          height: `${250 / 16}em !important`
        }
      }
    },

    footer: {
      padding: 'Z - - A2',
      '@maxTabletS': {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        padding: 'A A1 - -',

      },
      navArrows: {
        zIndex: '5',
        gap: 'Y',
        '@maxTabletS': { gap: 'B' },
        childProps: { style: { '@media only screen and (min-width: 1024px)': {border: 'none'}}}
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
  extend: Flex,
  props,
  childExtend: {
    extend: galleryContainer,
    class: {
      show: (element, state) => state.activeGallery === parseInt(element.key)
        ? { opacity: '1', width: '100%' }
        : { opacity: '0', with: '0' }
    },
    gallery: {
      class: {
        show: (element, state) => state.activeGallery === parseInt(element.parent.key)
          ? { width: `100%`, opacity: '1' }
          : { width: '0', opacity: '0' }
      }
    }
  },
  ...[
    {
      gallery: { extend: galleryTbilisi },

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
      gallery: { extend: galleryBorjomi },
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
      gallery: { extend: galleryMtsketa },

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
      gallery: { extend: galleryKakheti },
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
      gallery: { extend: galleryMartvili },

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
      gallery: { extend: galleryKutaisi },

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
      gallery: { extend: galleryGori },
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
      gallery: { extend: galleryKazbegi },
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
