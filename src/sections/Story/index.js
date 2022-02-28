'use strict'
import { Block, Text, Img } from '@rackai/symbols'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony.jpg'
import LUGGAGE_PNG from '../../assets/luggage.PNG'

import { wineText, bbSololaki, luggageText, stayText } from '../../texts'

import style, { styleEntranceItem } from './style'

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
  image: {
    style: {
      backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'left bottom',
      transform: 'scale(.95)'
    }
  },
  p: {
    style: {
      position: 'relative'
    },
    span: {
      proto: bbSololaki,
      style: {
        position: 'absolute',
        top: 0,
        left: '-400px',
        padding: '100px'
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
      lineHeight: '25px'
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
        // fontWeight: ,
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
      padding: '100px'
    },
    span: {
      proto: wineText,
      style: {
        display: 'block',
        maxWidth: '650px',
        margin: '0 auto'
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
