'use strict'
import { Block, Text, Img } from '@rackai/symbols'
import WINE_JPG from '../../assets/images/sololaki/wine.jpg'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina.jpg'
import BALCONY_JPG from '../../assets/images/sololaki/balcony.jpg'
import LUGGAGE_PNG from '../../assets/luggage.PNG'

import { wine, bbSololaki, luggage } from '../../texts'

import style, { styleEntranceItem } from './style'

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

export default {
  tag: 'article',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: '0'
  },
  style,
  childProto: {
    proto: storySection
  },
  ...[
    {
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
    },
    {
      image: {
        style: {
          backgroundImage: 'url(' + BALCONY_JPG + ')',
          backgroundPosition: 'center center',
          transform: 'scale(1.2)'
        }
      },
      p: {
        props: {
          padding: 'D D'
        },
        style: {
          position: 'absolute',
          right: '-100px',
          bottom: '200px'
        },
        span: null,
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
          },
          {
            props: {
              flexAlign: 'flex-start flex-start',
              padding: 'C Y Y Y',
              gap: 'A'
            },
            circle: {
              proto: Img,
              props: { src: LUGGAGE_PNG },
              style: {
                width: '30px',
                height: '20px',
                display: 'block',
                opacity: '.65',
                marginTop: '5px'
              }
            },
            span: {
              proto: luggage,
              style: { maxWidth: '370px' }
            }
          }

        ]

      }
    },

    {
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
          // boxShadow: '0px 0px 100px 20px rgba(243, 231, 219, .2)',
          // background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, 1))'
        },
        span: {
          proto: wine,
          style: {
            display: 'block',
            maxWidth: '650px',
            margin: '0 auto'
          }
        }
      }
    }
  ]
}
