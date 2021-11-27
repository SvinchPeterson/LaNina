'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'

import { paragraph } from '../../animations'

import style, { styleStoryImage, styleParagraph, styleCityParagraph } from './style'

export default {
  tag: 'article',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Story',
      padding: 'E 0 C 0'
    }
  },
  content: {
    proto: [Block, Flex],
    props: { gap: 'G' },
    style: {
      flexFlow: 'column'
    },
    childProto: {
      proto: [Block, Flex],
      style: {
        position: 'relative'
      },
      image: {
        proto: Block,
        class: [styleStoryImage]
      },
      paragraph: {
        proto: [Block, Flex],
        props: {
          padding: 'C',
          gap: 'A'
        },
        class: [styleParagraph],
        h6: {
          proto: Text
        },
        p: {
          proto: Text
        }
      }
    },
    ...[
      {
        image: {
          props: { height: 'H2' },
          style: {
            backgroundImage: 'url(' + OLDTBILISI_JEPG + ')',
            backgroundSize: 'cover',
            width: '80%'
          }
        },
        paragraph: {
          style: styleCityParagraph,

          h6: {
            props: { text: 'Old Tbilisi' }
          },
          p: {
            props: {
              text: `In the city of Tbilisi, a forgotten classical building has been transformed into a brand new 5-star hotel.
                    In the interior, the traditional designs have been replaced by a minimalist aesthetic, projecting the power of
                    imagination during the process of architectural transformation.`
            }
          }
        }
      },

      {
        style: {
        },
        paragraph: {
          style: {
            flex: 1,
            alignItems: 'center',
            boxSizing: 'border-box',
            paddingTop: `${100 / 16}em`
          },
          h6: {
            props: { text: 'Wine' }
          },
          p: {
            props: {
              text: `In the city of Tbilisi, a forgotten classical building has been transformed into a brand new 5-star hotel.
                    In the interior, the traditional designs have been replaced by a minimalist aesthetic, projecting the power of
                    imagination during the process of architectural transformation.`
            }
          }
        },

        image: {
          style: {
            backgroundImage: 'url(' + WINE_JPG + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: `${800 / 16}em`,
            backgroundPositionX: '89%',
            width: '37%',
            marginRight: `${100 / 16}em`
          }
        }

      }
    ]
  }
}
