'use strict'

import { Flex, Img } from 'smbls'

import { NavHorizontalArrowsCream } from '../../../../components'

import { opacityTransform } from '../../../../animations'

const props = {
  boxSize: 'G2 H2',
  alignSelf: 'center',
  position: 'relative',
  flow: 'column',
  // round: '0 0 G2 G2',
  '@mobileL': {
    boxSize: 'G H'
  },
  '@mobileS': {
    boxSize: 'F2 G2'
  },
  style: {
    animationName: opacityTransform,
    animationDuration: '.5s',
    animationTimingFunction: 'ease-in-out',

    '@media only screen and (max-width: 400px)': {
      width: `${300 / 16}em !important`,
      height: `${200 / 16}em !important`
    }
  },

  title: {
    position: 'absolute',
    fontSize: 'F',
    width: '88%',
    top: '-B',
    alignSelf: 'center',
    // left: '0',
    textTransform: 'capitalize',
    fontWeight: '700',
    letterSpacing: '-1px',
    color: 'cream2'
    // border: 'solid, cream2 .35',
    // borderWidth: '0 0 1px 0'
  },
  images: {
    boxSize: '100% 100%',
    position: 'relative',
    top: '0',
    left: '0',
    round: 'B',
    overflow: 'hidden',
    ':after': {
      content: '""',
      boxSize: '100% 100%',
      // background: 'linear-gradient(rgba(30, 40, 49, 0), rgba(30, 40, 49, 1))',
      background: 'radial-gradient(rgba(56, 104, 153, .2), rgba(56, 104, 153, .2))',
      position: 'absolute',
      top: '0',
      left: '0'
    },
    // ':before': {
    //   content: '""',
    //   boxSize: '1px 100%',
    //   // background: 'linear-gradient(rgba(30, 40, 49, 0), rgba(30, 40, 49, 1))',
    //   background: 'radial-gradient(rgba(56, 104, 153, .2), rgba(56, 104, 153, .45))',
    //   position: 'absolute',
    //   bottom: '0',
    //   left: '0'
    // },

    childProps: {
      boxSize: '100% 100%',
      position: 'absolute',
      round: 'B',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },

  navArrows: {
    position: 'absolute',
    // bottom: '-55px',
    // left: '5px',
    left: '50%',
    bottom: '-D2',
    transform: 'translate(-50%, -50%)',
    gap: 'B',
    // display: 'none',
    // ':before': {
    //   content: '""',
    //   position: 'absolute',
    //   boxSize: '1px 325%',
    //   background: 'cream2 .5',
    //   top: '-Z',
    //   left: 'Z'

    // },
    ':after': { display: 'none' },
    childProps: {
      boxSize: 'C2 C2',
      round: '100%',
      opacity: '.75',
      border: '1px solid silver',
      ':hover': { opacity: '1' },
      arrow: { fontSize: '10px' }
    }
  }

}

const placesGallery = {
  extend: Flex,
  props,

  title: { tag: 'h5' },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    }
  },

  navArrows: {
    extend: NavHorizontalArrowsCream

  }
}

export const tbilisi = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeTbilisi
      ? { display: 'flex', transform: 'scale(1)' }
      : { display: 'none', transform: 'scale(.95)' }
  },

  title: { props: { text: 'tbilisi' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeTbilisiImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: OLD_TBILISI_JPG } },
      { props: { src: ABANOTUBANI_JPG } },
      { props: { src: BRIDGE_JPG } },
      { props: { src: BAZAR_JPG } },
      { props: { src: BRIDGE2_JPG } },
      { props: { src: METEKHI_JPG } }
    ]
  },
  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeTbilisiImage } = state
            state.update({
              activeTbilisiImage: activeTbilisiImage - 1
            })
            if (activeTbilisiImage <= 0) {
              state.update({ activeTbilisiImage: 5 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeTbilisiImage } = state
            state.update({
              activeTbilisiImage: activeTbilisiImage + 1
            })
            if (activeTbilisiImage >= 5) {
              state.update({ activeTbilisiImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const borjomi = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeBorjomi
      ? { display: 'flex' }
      : { display: 'none' }
  },

  title: { props: { text: 'borjomi' } },

  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeBorjomiImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: BORJOMI_JPG } },
      { props: { src: BORJOMI2_JPG } },
      { props: { src: PARK_JPG } },
      { props: { src: BRIDGES_JPG } }
    ]
  },

  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeBorjomiImage } = state
            state.update({
              activeBorjomiImage: activeBorjomiImage - 1
            })
            if (activeBorjomiImage <= 0) {
              state.update({ activeBorjomiImage: 3 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeBorjomiImage } = state
            state.update({
              activeBorjomiImage: activeBorjomiImage + 1
            })
            if (activeBorjomiImage >= 3) {
              state.update({ activeBorjomiImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const mtsketa = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeMtsketa
      ? { display: 'flex' }
      : { display: 'none' }
  },
  title: { props: { text: 'mtsketa' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeMtsketaImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: JVARI_JPG } },
      { props: { src: MTSKETA_JPG } },
      { props: { src: MTSKETA2_JPG } },
      { props: { src: MTSKETA3_JPG } }
    ]
  },

  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeMtsketaImage } = state
            state.update({
              activeMtsketaImage: activeMtsketaImage - 1
            })
            if (activeMtsketaImage <= 0) {
              state.update({ activeMtsketaImage: 3 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeMtsketaImage } = state
            state.update({
              activeMtsketaImage: activeMtsketaImage + 1
            })
            if (activeMtsketaImage >= 3) {
              state.update({ activeMtsketaImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const kakheti = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKakheti
      ? { display: 'flex' }
      : { display: 'none' }
  },
  title: { props: { text: 'kakheti' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeKakhetiImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: SIGNAGI_JPG } },
      { props: { src: SIGNAGI2_JPG } },
      { props: { src: KVEVRI_JPG } },
      { props: { src: BODBE_JPG } },
      { props: { src: TELAVI_JPG } }
    ]
  },

  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeKakhetiImage } = state
            state.update({
              activeKakhetiImage: activeKakhetiImage - 1
            })
            if (activeKakhetiImage <= 0) {
              state.update({ activeKakhetiImage: 4 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeKakhetiImage } = state
            state.update({
              activeKakhetiImage: activeKakhetiImage + 1
            })
            if (activeKakhetiImage >= 4) {
              state.update({ activeKakhetiImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const martvili = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeMartvili
      ? { display: 'flex' }
      : { display: 'none' }
  },
  title: { props: { text: 'martvili' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeMartviliImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: BRILIANT_JPG } },
      { props: { src: BRILIANT2_JPG } },
      { props: { src: CANYON_JPG } },
      { props: { src: CANYON2_JPG } }
    ]
  },

  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeMartviliImage } = state
            state.update({
              activeMartviliImage: activeMartviliImage - 1
            })
            if (activeMartviliImage <= 0) {
              state.update({ activeMartviliImage: 3 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeMartviliImage } = state
            state.update({
              activeMartviliImage: activeMartviliImage + 1
            })
            if (activeMartviliImage >= 3) {
              state.update({ activeMartviliImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const kutaisi = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKutaisi
      ? { display: 'flex' }
      : { display: 'none' }
  },

  title: { props: { text: 'kutaisi' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeKutaisiImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: KUTAISI_JPG } },
      { props: { src: CANYONS_JPG } },
      { props: { src: CANYONS2_JPG } },
      { props: { src: CAVE_JPG } },
      { props: { src: CAVE2_JPG } }
    ]
  },
  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeKutaisiImage } = state
            state.update({
              activeKutaisiImage: activeKutaisiImage - 1
            })
            if (activeKutaisiImage <= 0) {
              state.update({ activeKutaisiImage: 4 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeKutaisiImage } = state
            state.update({
              activeKutaisiImage: activeKutaisiImage + 1
            })
            if (activeKutaisiImage >= 4) {
              state.update({ activeKutaisiImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const gori = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeGori
      ? { display: 'flex' }
      : { display: 'none' }
  },
  title: { props: { text: 'gori' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeGoriImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: GORI_JPG } },
      { props: { src: MUSEUM_JPG } },
      { props: { src: MUSEUM2_JPG } },
      { props: { src: CAVE3_JPG } },
      { props: { src: CAVE4_JPG } }
    ]
  },
  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeGoriImage } = state
            state.update({
              activeGoriImage: activeGoriImage - 1
            })
            if (activeGoriImage <= 0) {
              state.update({ activeGoriImage: 4 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeGoriImage } = state
            state.update({
              activeGoriImage: activeGoriImage + 1
            })
            if (activeGoriImage >= 4) {
              state.update({ activeGoriImage: 0 })
            }
          }
        }
      }
    ]
  }
}

export const kazbegi = {
  extend: placesGallery,
  props: { display: 'none' },
  class: {
    show: (element, state) => state.activeKazbegi
      ? { display: 'flex' }
      : { display: 'none' }
  },

  title: { props: { text: 'kazbegi' } },
  images: {
    childExtend: {
      extend: Img,
      class: {
        show: (element, state) => state.activeKazbegiImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: KAZBEGI_JPG } },
      { props: { src: GERGET_JPG } },
      { props: { src: JINVALI_JPG } },
      { props: { src: ANANURI_JPG } },
      { props: { src: GUDAURI_JPG } }
    ]
  },
  navArrows: {
    ...[
      {
        on: {
          click: (event, element, state) => {
            const { activeKazbegiImage } = state
            state.update({
              activeKazbegiImage: activeKazbegiImage - 1
            })
            if (activeKazbegiImage <= 0) {
              state.update({ activeKazbegiImage: 4 })
            }
          }
        }
      },

      {
        on: {
          click: (event, element, state) => {
            const { activeKazbegiImage } = state
            state.update({
              activeKazbegiImage: activeKazbegiImage + 1
            })
            if (activeKazbegiImage >= 4) {
              state.update({ activeKazbegiImage: 0 })
            }
          }
        }
      }
    ]
  }
}
