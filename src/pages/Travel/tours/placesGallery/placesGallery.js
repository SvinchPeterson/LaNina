'use strict'

import { Flex, Img } from 'smbls'

import { NavHorizontalArrowsBlack } from '../../../../components'

import OLD_TBILISI_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../../../../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../../../../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../../../../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../../../../assets/images/travel/oldTbilisi/metekhi2.jpg'

import BORJOMI_JPG from '../../../../assets/images/travel/borjomi/Borjomi.jpg'
import BORJOMI2_JPG from '../../../../assets/images/travel/borjomi/borjomi2.jpg'
import PARK_JPG from '../../../../assets/images/travel/borjomi/park.jpg'
import BRIDGES_JPG from '../../../../assets/images/travel/borjomi/bridge.jpg'

import JVARI_JPG from '../../../../assets/images/travel/mtsketa/mtsketa.jpg'
import MTSKETA_JPG from '../../../../assets/images/travel/mtsketa/mcxeta3.jpg'
import MTSKETA2_JPG from '../../../../assets/images/travel/mtsketa/street.jpg'
import MTSKETA3_JPG from '../../../../assets/images/travel/mtsketa/mtsketa2.jpg'

import SIGNAGI_JPG from '../../../../assets/images/travel/kakheti/signagi3.jpg'
import SIGNAGI2_JPG from '../../../../assets/images/travel/kakheti/signagi2.jpg'
import KVEVRI_JPG from '../../../../assets/images/travel/kakheti/kvevri.jpg'
import BODBE_JPG from '../../../../assets/images/travel/kakheti/bodbe.jpg'
import TELAVI_JPG from '../../../../assets/images/travel/kakheti/telavi.jpg'

import BRILIANT_JPG from '../../../../assets/images/travel/canyon/briliant2.jpg'
import BRILIANT2_JPG from '../../../../assets/images/travel/canyon/briliant.jpg'
import CANYON_JPG from '../../../../assets/images/travel/canyon/canyon.jpg'
import CANYON2_JPG from '../../../../assets/images/travel/canyon/canyon2.jpg'

import KUTAISI_JPG from '../../../../assets/images/travel/kutaisi/kutaisi.jpg'
import CANYONS_JPG from '../../../../assets/images/travel/kutaisi/canyon.jpg'
import CANYONS2_JPG from '../../../../assets/images/travel/kutaisi/canyon2.jpg'
import CAVE_JPG from '../../../../assets/images/travel/kutaisi/cave2.jpg'
import CAVE2_JPG from '../../../../assets/images/travel/kutaisi/cave.jpg'

import GORI_JPG from '../../../../assets/images/travel/gori/gori.jpg'
import MUSEUM_JPG from '../../../../assets/images/travel/gori/museum.jpg'
import MUSEUM2_JPG from '../../../../assets/images/travel/gori/museum2.jpeg'
import CAVE3_JPG from '../../../../assets/images/travel/gori/cave.jpg'
import CAVE4_JPG from '../../../../assets/images/travel/gori/cave2.jpg'

import KAZBEGI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../../../../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../../../../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gudauri.jpg'

const placesGallery = {
  extend: Flex,
  props: {
    boxSize: 'G2 H2',
    alignSelf: 'center',
    position: 'relative',

    title: {
      position: 'absolute',
      fontSize: 'A',
      top: '-B1',
      left: 'A',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '4px'
    },
    images: {
      boxSize: '100% 100%',
      position: 'relative',
      top: '0',
      left: '0',
      // round: 'A',
      overflow: 'hidden',
      ':after': {
        content: '""',
        boxSize: '100% 100%',
        background: 'linear-gradient(rgba(30, 40, 49, 0), rgba(30, 40, 49, 1))',
        // boxShadow: '0px 0px 30px 3px black',
        position: 'absolute',
        top: '0',
        left: '0'
      },

      childProps: {
        boxSize: '100% 100%',
        position: 'absolute',
        top: '0',
        left: '0'
      }
    },

    navArrows: {
      position: 'absolute',
      bottom: '-D2',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      gap: 'A2',
      ':after': { display: 'none' },
      childProps: {
        boxSize: 'C2 C2',
        round: '100%'
      }
    }
  },

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
    extend: NavHorizontalArrowsBlack

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
