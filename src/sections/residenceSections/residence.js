'use strict'

import { Flex } from 'smbls'

import { Paragraph } from '../../components'

import { residenceTextEng } from '../../texts/residence'

import BB_JPG from '../../assets/images/residence/sololaki/b.jpg'

const props = {
  width: 'fit-content',
  flow: 'column',
  padding: 'E2 - - -',
  alignSelf: 'center',
  margin: 'D2 - B2 -',
  align: 'flex-start center',
  position: 'relative',
  boxSizing: 'border-box',
  '@maxTabletS': {
    fontSize: `${15 / 16}em`
  },
  '@maxMobileL': {
    fontSize: `${14 / 16}em`
  },

  '@maxMobileM': {
    fontSize: `${12.5 / 16}em`
  },
  '@maxMobileS': {
    fontSize: `${11.5 / 16}em`
  },

  // '@mobileL': {
  //   minHeight: '100%',
  //   padding: '0',
  //   margin: 'Y2 - 0 -',
  // },

  imageContainer: {
    alignSelf: 'center',
    width: `${520 / 16}em`,
    height: 'H1',
    position: 'relative',
    round: 'G2 G2 0 0',
    overflow: 'hidden',
    // '@tabletM': { width: 'H3' },
    // '@tabletS': { width: 'H2' },
    // '@mobileL': {
    //   boxSize: '100% 100%',
    //   round: '0',
    //   '&:before': {
    //     background: 'linear-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, .5), rgba(1, 57, 57, .65), rgba(1, 57, 57, .75), rgba(1, 57, 57, 1), rgba(1, 57, 57, 1))'
    //   }
    // },

    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'naviGreen .35'
    },

    image: {
      boxSize: '100% 100%',
      backgroundImage: 'url(' + BB_JPG + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      // boxShadow: 'inset 0px 0px 500px 60px rgba(0, 0, 0, .9)',
      style: { backgroundRepeat: 'no-repeat'},
      '@minTabletL': {style: { backgroundAttachment: 'fixed' } },
      '@maxTabletL': {style: { backgroundSize: '100% 100%' } },
    }
  },

  paragraph: {
    background: 'cream',
    margin: '-F - - -',
    padding: 'C D1 D B',
    round: '0 F 0 0',
    // padding: 'C D1 D1 D1',
    // round: '0 F 0 0',
    // position: 'absolute',
    // margin: '- - -H2 -F2',
    // background: 'cream',
    gap: 'Z',
    // padding: 'C2 E - D',
    zIndex: '5',
    // round: '0 F2 0 0',
    boxSizing: 'border-box',
    // ':after': {
    //   content: '""',
    //   position: 'absolute',
    //   boxSize: 'D 100%',
    //   zIndex: '10',
    //   background: 'linear-gradient(to top, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)',
    //   bottom: '-2px',
    //   left: '0',
    //   pointerEvents: 'none',
    //   style: {
    //     display: 'none',
    //     // '@media only screen and (max-width: 768px) and (max-height: 800px)': {
    //     //   display: 'block'
    //     // }
    //   }
    // },
    // '@tabletM': { margin: '- - -I -F2' },
    // '@tabletS': { margin: '- - -I -F' },
    //  '@mobileL': {
    //   margin: '0',
    //   round: '0',
    //   padding: '0 C',
    //   background: 'transparent',
    //   color: 'cream',
    //   gap: '0',
    // },
    // '@mobileS': { padding: '0 B1'},

    // style: {
    //   '@media only screen and (max-width: 768px) and (max-height: 800px)': {
    //     overflow: 'hidden',
    //     maxHeight: `${400 / 16}em`
    //   },
    //   '@media only screen and (max-width: 768px) and (max-height: 600px)': {
    //     maxHeight: `${300 / 16}em`
    //   }
    // },

    title: {
      fontSize: 'D',
      // '@mobileL': {
      //   border: 'solid, cream .7',
      //   borderWidth: '0 0 1px 0',
      //   maxWidth: '90%'
      // }
    },

    p: {
      maxWidth: 'H',
      fontSize: `${15 / 16}em`,
      // '@tabletM': {maxWidth: 'G2'},
      // '@mobileL': { padding: 'A - A2 -' },
      // style: {
      //   '@media only screen and (max-width: 768px) and (max-height: 800px)': {
      //     maxHeight: `${350 / 16}em`,
      //     overflowY: 'auto'
      //   },
      //   '@media only screen and (max-width: 768px) and (max-height: 600px)': {
      //     maxHeight: `${250 / 16}em`,
      //   }
      // }
    }
  }
}

export const residence = {
  tag: 'section',
  extend: Flex,
  attr: { id: 'residence' },
  props,

  imageContainer: { image: {} },

  paragraph: {
    extend: Paragraph,
    title: { text: 'residence' },
    p: { extend: residenceTextEng }
  }
}
