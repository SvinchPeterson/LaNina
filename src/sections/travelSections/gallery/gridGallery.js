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
  '@maxTabletS': {
    overflow: 'hidden',
    fontSize: `${15 / 16}em`
  },

  ':before': {
    content: '""',
    boxSize: '100% F',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '10',
    background: 'linear-gradient(to right, rgba(0, 47, 57, 1) 0%,rgba(0, 47, 57, 0) 100%)',
    pointerEvents: 'none',
    '@minTabletS': { display: 'none' }
  },

  title: {
    position: 'absolute',
    transform: 'rotate(180deg)',
    position: 'absolute',
    textTransform: 'capitalize',
    fontSize: 'F',
    top: 'E',
    left: '-B1',
    zIndex: '20',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed'
    },
    '@maxTabletS': {
      fontSize: 'E',
      color: 'cream .75',
      height: '100%',
      left: 'initial',
      top: '0',
      right: '0',
      padding: 'Z -',
      transform: 'rotate(0)',
      background: 'naviBlue',
      align: 'center center',
      style: {
        boxShadow: 'rgba(0, 0, 0, 0.45) -20px 0px 30px 5px'
      }
    },
    // '@maxMobileM': { padding: 'B1 -' },
    ':before': { boxSize: 'C V' },
    ':after': { boxSize: 'C V' }
  },

  content: {
    columns: 'repeat(4, 1fr)',
    rows: 'repeat(6, 400px)',
    position: 'relative',
    overflow: 'hidden',
    gap: 'Y',
    '@maxTabletS': {
      display: 'flex',
      maxWidth: '100%',
      padding: 'D1 E2 D1 C',
      minHeight: 'E2',
      gap: 'A',
      boxSizing: 'content-box',
      background: 'naviBlue',
      style: {
        overflow: 'auto',
        '::-webkit-scrollbar': { display: 'none' }
      }
    },
    '@maxMobileM': { padding: 'D E D B' },

    childProps: {
      position: 'relative',
      backgroundSize: 'cover',
      overflow: 'hidden',
      cursor: 'pointer',
      border: 'solid, naviBlue',
      borderWidth: '1px',
      '@minTabletL': { style:{ backgroundAttachment: 'fixed' } },
      '@maxTabletS': {
        minWidth: `${250 / 16}em`,
        round: 'B !important',
        border: 'solid, naviBlue',
        borderWidth: '1px',
      },
      ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '3',
        background: 'linear-gradient(rgba(0, 47, 57, .45), rgba(0, 47, 57, 1))',
        '@maxTabletS': {
          background: 'linear-gradient(rgba(0, 47, 57, .25), rgba(0, 47, 57, 1))'
        }
      },
      '&:hover > h4': {
        color: 'rgba(189, 216, 246, 1)',
        letterSpacing: '.5px'
      },

      title: {
        position: 'absolute',
        color: 'cream',
        fontSize: 'F',
        fontWeight: '100',
        textTransform: 'capitalize',
        letterSpacing: '-.5px',
        zIndex: '10',
        bottom: 'B',
        right: 'B',
        // transform: 'translate(-50%, -50%)',
        style: { transition: 'color .5s ease-in-out, letter-spacing .5s ease-in-out' },
        '@maxTabletS': { fontSize: 'F', letterSpacing: '-.45px', }
      }
    }
  },

  scroll: {
    border: '3px solid red',
    '@minTabletS': { display: 'none' },
    position: 'absolute',
    bottom: '0',
    left: 'C',
    zIndex: '10',
    color: 'cream',
    opacity: '.75',
    '@maxMobileM': { left: 'A1' },
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
      extend: Link,
      title: { tag: 'h4' },
      on: {
        click: (event, element, state) => {
          state.update({activeGallery: parseInt(element.key), activePopUpGallery: true })
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
        title: { text: 'tbilisi' }
      }
    },

    {
      props: {
        round: 'G1 G1 0 0',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + BORJOMI_JPG + ')',
        title: { text: 'borjomi' }
      }
    },

    {
      props: {
        gridColumn: '3 / span 4',
        round: '0 0 0 F',
        backgroundImage: 'url(' + MTSKETA_JPG + ')',
        title: { text: 'mtsketa' }
      }
    },

    {
      props: {
        gridRow: '3',
        round: '0 G1 G1 0',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KAKHETI_JPG + ')',
        title: { text: 'kakheti' }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '3',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + MARTVILI_JPG + ')',
        title: { text: 'martvili' }
      }
    },

    {
      props: {
        round: '0 G1 G1 0',
        gridRow: '4',
        gridColumn: '1 / span 2',
        backgroundImage: 'url(' + KUTAISI_JPG + ')',
        title: { text: 'kutaisi' }
      }
    },

    {
      props: {
        round: 'G1 0 0 G1',
        gridRow: '4',
        gridColumn: '3 / span 4',
        backgroundImage: 'url(' + GORI_JPG + ')',
        title: { text: 'gori' }
      }
    },

    {
      props: {
        round: '0 0 I1 I1',
        backgroundImage: 'url(' + KAZBEGI_JPG + ')',
        gridColumn: '1 / span 6',
        gridRow: 'span 5',
        title: { text: 'kazbegi' }
      }
    }
  ]
  },
  // scroll: {
  //   extend: ScrollTitle
  // }
}
