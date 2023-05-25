'use strict'

import { Grid, Flex, Button, Link } from 'smbls'

import { ScrollTitle } from '../../../components'

import TBILISI_JPG from '../../../assets/images/travel/tbilisi.jpg'
import BORJOMI_JPG from '../../../assets/images/travel/borjomi.jpeg'
import MTSKETA_JPG from '../../../assets/images/travel/mtsketa.jpg'
import KAKHETI_JPG from '../../../assets/images/travel/kakheti.jpg'
import MARTVILI_JPG from '../../../assets/images/travel/martvili.jpg'
import KUTAISI_JPG from '../../../assets/images/travel/kutaisi.jpg'
import GORI_JPG from '../../../assets/images/travel/gori.jpg'
import KAZBEGI_JPG from '../../../assets/images/travel/kazbegi.jpg'

import LEFT_ARROW from '../../../assets/icons/arrowsDouble-left-cream.png'
import RIGHT_ARROW from '../../../assets/icons/arrowsDouble-right-cream.png'

const props = {
  maxWidth: `100%`,
  position: 'relative',
  '@maxMobileL': {
    height: '60%',
    width: '100%',
    overflow: 'hidden'
  },

  title: {
    position: 'absolute',
    transform: 'rotate(180deg)',
    position: 'absolute',
    textTransform: 'capitalize',
    fontSize: 'E',
    top: 'E2',
    left: '-B1',
    zIndex: '20',
    letterSpacing: '-1px',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed'
    },
    '@maxMobileL': {
      height: '100%',
      left: 'initial',
      top: '0',
      right: '0',
      padding: 'Z -',
      fontSize: 'D',
      transform: 'rotate(0)',
      letterSpacing: '0px',
      background: 'cream',
      align: 'center center',
      style: { boxShadow: 'rgba(0, 0, 0, 0.55) -20px 0px 20px 5px' }
    },
    ':before': { boxSize: 'C V' },
    ':after': { boxSize: 'C V' }
  },

  content: {
    columns: 'repeat(4, 1fr)',
    rows: 'repeat(6, 400px)',
    position: 'relative',
    overflow: 'hidden',
    gap: 'Y',
    '@maxMobileL': {
      display: 'flex',
      height: '100%',
      gap: 'A',
      padding: '- D - -',
      style: {overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' }}
    },
    childProps: {
      position: 'relative',
      backgroundSize: 'cover',
      overflow: 'hidden',
      cursor: 'pointer',
      border: 'solid, orange 1',
      borderWidth: '.5px',
      '@minTabletL': { style:{ backgroundAttachment: 'fixed' } },
      '@maxMobileL': {
        minWidth: 'calc(100% - 68px)',
        round: '0 !important',
        border: 'none'
      },
      ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '3',
        background: 'linear-gradient(rgba(0, 47, 57, 0), rgba(0, 47, 57, .85))',
      },
      '&:hover > h4': {
        color: 'rgba(189, 216, 246, 1)',
        letterSpacing: '.5px'
      },

      title: {
        position: 'absolute',
        color: 'cream',
        fontSize: 'E',
        fontWeight: '100',
        textTransform: 'capitalize',
        zIndex: '10',
        style: { transition: 'color .5s ease-in-out, letter-spacing .5s ease-in-out' }
      }
    }
  },

  scroll: {
    border: '3px solid red',
    position: 'absolute',
    bottom: '0',
    left: 'C',
    zIndex: '10',
    color: 'cream',
    opacity: '.75',
    lefts: { src: LEFT_ARROW },
    rights: { src: RIGHT_ARROW }
  }
}

export const gridGalleries = {
  props,

  title: {
    tag: 'h3',
    extend: Flex,
    text: 'gallery'
  },

  content: {
    extend: Grid,
    childExtend: {
      extend: Button,
      title: { tag: 'h4' },
      on: {
        click: (event, element, state) => {
          state.update({
            activePopUpGallery: true,
            activeGallery: parseInt(element.key)
          })
        }
      }

    },
  ...[
    {
      props: {
        round: 'G1 G1 G 0',
        backgroundImage: 'url(' + TBILISI_JPG + ')',
        gridColumn: '1 / span 2',
        gridRow: '1 / span 2',
        title: {
          text: 'tbilisi',
          bottom: 'A',
          left: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A' }
        }
      }
    },

    {
      props: {
        round: 'G1 G1 0 0',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + BORJOMI_JPG + ')',
        title: {
          text: 'borjomi',
          bottom: 'A',
          right: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A', right: 'initial' }
        }
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        round: '0 0 0 F',
        backgroundImage: 'url(' + MTSKETA_JPG + ')',
        title: {
          text: 'mtsketa',
          bottom: 'A',
          right: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A', right: 'initial' }
        }
      }
    },

    {
      props: {
        gridRow: '3',
        round: '0 G1 G1 0',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KAKHETI_JPG + ')',
        title: {
          text: 'kakheti',
          bottom: 'A',
          left: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A' }
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '3',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MARTVILI_JPG + ')',
        title: {
          text: 'martvili',
          bottom: 'A',
          right: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A', right: 'initial' }
        }
      }
    },

    {
      props: {
        round: '0 G1 G1 0',
        gridRow: '4',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KUTAISI_JPG + ')',
        title: {
          text: 'kutaisi',
          bottom: 'A',
          left: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A' }
        }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '4',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + GORI_JPG + ')',
        title: {
          text: 'gori',
          bottom: 'A',
          right: 'A1',
          '@maxMobileL': { bottom: 'A', left: 'A', right: 'initial' }
        }
      }
    },

    {
      props: {
        round: '0 0 I1 I1',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        gridColumn: '1 / span 6',
        gridRow: 'span 5',
        title: {
          text: 'kazbegi',
          bottom: 'C',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          '@maxMobileL': {
            bottom: 'A',
            left: 'A',
            transform: 'translate(0, 0)',
          }
        }
      }
    }
  ]
  }
}
