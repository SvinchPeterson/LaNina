'use strict'
import { Block, Text, Img } from '@rackai/symbols'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony.jpg'
import LUGGAGE_PNG from '../../assets/luggage.PNG'

import { wineText, bbSololaki, luggageText, stayText } from '../../texts'

import style, { styleEntranceItem } from './style'
import { scaleSololakiBanner } from '../../animations'

const entrenceItem = {
  proto: Block,
  props: {
    flexAlign: 'center flex-start',
    padding: 'Y',
    gap: 'Z'
  },
  style: styleEntranceItem,
  circle: {
    proto: Block,
    props: {
      boxSize: 'W2 W2'
    }
  },
  span: {
    proto: Text
  }
}

const storySection = {
  tag: 'section',
  proto: Block,
  props: {
    flexFlow: 'row',
    padding: 'F 0 G 0'
  },
  image: {
    tag: 'span',
    proto: [Block]
  },

  p: {
    proto: Block,
    span: {}
  }
}

const hotel = {
  proto: storySection,
  attr: { id: 'hotel' },
  style: {
    '@media only screen and (max-width: 980px)': {
      padding: '200px 0',
      transform: 'scale(1.3)'
    },
    '@media only screen and (max-width: 480px)': {
      transform: 'scale(1.4)'

    }
  },

  image: {
    style: {
      backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'left bottom',
      transform: 'scale(.95)',

      '@media only screen and (max-width: 980px)': {
        backgroundSize: 'cover',
        minWidth: '100%',
        left: 0
      },
      '@media only screen and (max-width: 540px)': {
        backgroundSize: 'contain'

      }
    }
  },

  p: {
    span: {
      proto: bbSololaki,
      style: {
        position: 'absolute',
        top: 0,
        left: '-400px',
        padding: '100px',
        background: 'rgba(247, 239, 230, 1)',
        boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
        lineHeight: '32px',

        '@media only screen and (max-width: 980px)': {
          // border: '30px solid red',
          margin: '0 auto',
          fontSize: '16px',
          minWidth: '60%',
          maxWidth: '100%',
          fontWeight: 600,
          transform: 'scale(.95)',
          // background: 'rgba(247, 239, 230, 1)',
          top: '150px',
          padding: '30px 70px',
          left: 0,
          // fontSize: '13px',
          background: 'transparent',
          color: 'rgba(247, 239, 230, .65)',
          boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, 0)',
          // border: '20px solid red',
          lineHeight: '28px'
        },

        '@media only screen and (max-width: 480px)': {
          padding: '0',
          // fontSize: '14px',
          lineHeight: '22px',
          width: '400px',
          // border: '20px solid red',
          boxSizing: 'border-box',
          transform: 'scale(.8)',
          fontSize: '17px'

        }

        // '@media only screen and (max-width: 480px)': {
        //   top: '50px',
        //   fontWeight: 500,
        //   fontSize: '12px',
        //   transform: 'scale(.95)'
        // }
        // '@media only screen and (max-width: 400px)': {
        //   transform: 'scale(.95)',
        //   lineHeight: '20px',
        //   padding: '50px 10px'
        // }
      }
    },

    style: {
      position: 'relative',
      background: 'rgba(247, 239, 230, 1)',
      color: 'rgba(0,0, 0, .35)',
      '@media only screen and (max-width: 980px)': {
        position: 'absolute',
        // background: 'rgba(247, 239, 230, 1)',
        // background: 'red',
        // border: '20px solid yellow',
        width: '100%',
        minHeight: '100%',
        letterSpacing: '0',
        background: 'transparent',
        color: 'rgba(247, 239, 230, 1)',
        boxShadow: 'none'
      }
    }
  }
}

const entrenceParking = {
  proto: storySection,

  image: {
    style: {
      backgroundImage: 'url(' + BALCONY_JPG + ')',
      backgroundPosition: 'center center',
      transform: 'scale(1.2)'
    }
  },

  p: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'C',
      padding: 'D D'
    },
    style: {
      position: 'absolute',
      right: '-100px',
      bottom: '200px',
      lineHeight: '25px',
      background: 'rgba(247, 239, 230, 1)'
      // border: '5px solid red'
    },
    span: null,
    entrence: {
      childProto: entrenceItem,
      ...[
        {
          circle: {},
          span: {
            props: { text: 'Private entrance' }
          }
        },

        {
          circle: {},
          span: {
            props: { text: 'Separate street or building entrance' }
          }
        },

        {
          circle: {},
          span: {
            props: { text: 'Free parking on premises' }
          }
        }
      ]
    },
    luggage: {
      proto: Block,
      props: {
        flexAlign: 'flex-start center',
        gap: 'A'
      },
      style: {
        fontFamily: 'Avenir Next',
        color: 'rgba(0, 0, 0, .25)',
        maxWidth: `${450 / 16}em`,
        lineHeight: '22px'
      },

      icon: {
        proto: Img,
        props: { src: LUGGAGE_PNG },
        style: {
          width: `${25 / 16}em`,
          opacity: '.5',
          marginTop: '4px'
        }
      },
      p: {
        proto: Block,
        props: {
          flexFlow: 'column',
          gap: 'Z'
        },
        style: {
          letterSpacing: '.5px'
        },
        span: {
          proto: luggageText
        },
        span2: {
          proto: stayText,
          style: { fontSize: `${15 / 16}em` }
        }
      }

    }
  }
}

const wine = {
  proto: storySection,
  attr: { id: 'wine' },
  image: {
    style: {
      backgroundImage: 'url(' + WINE_JPG + ')',
      backgroundPosition: 'center center',
      transform: 'scale(1.5)'
    }
  },
  p: {
    style: {
      position: 'absolute',
      width: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '100px',
      background: 'rgba(247, 239, 230, 1)',
      lineHeight: '32px'
    },
    span: {
      proto: wineText,
      style: {
        display: 'block',
        maxWidth: '650px',
        margin: '0 auto',
        color: 'rgba(0, 0, 0, .25)'
      }
    }
  }
}

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: '0'
  },
  style,

  childProto: storySection,
  hotel,
  entrenceParking,
  wine

}
