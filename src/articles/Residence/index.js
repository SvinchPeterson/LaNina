'use strict'
import { Block } from '@rackai/symbols'

import { bbSololaki } from '../../texts'

import commonStyle from '../style'
import style from './style'

const paragraph = {
  tag: 'p',
  proto: [Block, bbSololaki],
  props: {
    size: 'B',
    padding: 'B C'
  }
}

export default {
  tag: 'article',
  proto: Block,
  attr: { id: 'residence' },
  style,
  class: [commonStyle],
  props: {
    // padding: 'D 0',
    flexAlign: 'flex-start center'
  },
  paragraph
  // style: {
  //   '@media only screen and (max-width: 980px)': {
  //     padding: '200px 0',
  //     transform: 'scale(1.3)'
  //   },
  //   '@media only screen and (max-width: 480px)': {
  //     transform: 'scale(1.4)'

  //   }
  // },

  // image: {
  //   style: {
  //     backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
  //     backgroundSize: 'contain',
  //     backgroundPosition: 'left bottom',
  //     transform: 'scale(.95)',

  //     '@media only screen and (max-width: 980px)': {
  //       backgroundSize: 'cover',
  //       minWidth: '100%',
  //       left: 0
  //     },
  //     '@media only screen and (max-width: 540px)': {
  //       backgroundSize: 'contain'

  //     }
  //   }
  // },

  // p: {
  //   span: {
  //     proto: bbSololaki,
  //     style: {
  //       position: 'absolute',
  //       top: 0,
  //       left: '-400px',
  //       padding: '100px',
  //       boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
  //       lineHeight: '32px',

  //       '@media only screen and (max-width: 980px)': {
  //         // border: '30px solid red',
  //         margin: '0 auto',
  //         fontSize: '16px',
  //         minWidth: '60%',
  //         maxWidth: '100%',
  //         fontWeight: 600,
  //         transform: 'scale(.95)',
  //         // background: 'rgba(247, 239, 230, 1)',
  //         top: '150px',
  //         padding: '30px 70px',
  //         left: 0,
  //         // fontSize: '13px',
  //         background: 'transparent',
  //         color: 'rgba(247, 239, 230, .65)',
  //         boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, 0)',
  //         // border: '20px solid red',
  //         lineHeight: '28px'
  //       },

  //       '@media only screen and (max-width: 480px)': {
  //         padding: '0',
  //         // fontSize: '14px',
  //         lineHeight: '22px',
  //         width: '400px',
  //         // border: '20px solid red',
  //         boxSizing: 'border-box',
  //         transform: 'scale(.8)',
  //         fontSize: '17px'

  //       }

  //       // '@media only screen and (max-width: 480px)': {
  //       //   top: '50px',
  //       //   fontWeight: 500,
  //       //   fontSize: '12px',
  //       //   transform: 'scale(.95)'
  //       // }
  //       // '@media only screen and (max-width: 400px)': {
  //       //   transform: 'scale(.95)',
  //       //   lineHeight: '20px',
  //       //   padding: '50px 10px'
  //       // }
  //     }
  //   },

  //   style: {
  //     position: 'relative',
  //     background: 'rgba(247, 239, 230, 1)',
  //     color: 'rgba(0,0, 0, .35)',
  //     '@media only screen and (max-width: 980px)': {
  //       position: 'absolute',
  //       // background: 'rgba(247, 239, 230, 1)',
  //       // background: 'red',
  //       // border: '20px solid yellow',
  //       width: '100%',
  //       minHeight: '100%',
  //       letterSpacing: '0',
  //       background: 'transparent',
  //       color: 'rgba(244, 233, 217, .75)',
  //       boxShadow: 'none'
  //     }
  //   }
  // }
}
