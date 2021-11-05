'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'

import { paragraph } from '../../animations'

import style, { styleStoryImage, styleParagraph } from './style'

export default {
  tag: 'article',
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Story',
      spacing: 'E 0 C 0'
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
          spacing: 'C',
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
          props: { height: 'h3' },
          style: {
            backgroundImage: 'url(' + OLDTBILISI_JEPG + ')',
            backgroundSize: 'cover',
            width: '100%'
          }
        },
        paragraph: {
          style: {
            position: 'absolute',
            height: '100%',
            top: 0,
            right: `${100 / 16}em`,
            paddingTop: `${100 / 16}em`,
            '> h6': { textAlign: 'center' },
            '> p': {
              margin: '0 auto',
              // border: '1px solid red',
              paddingLeft: '30px'
            }
          },

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
        paragraph: {
          style: {
            width: '50%',
            paddingTop: `${200 / 16}em`,
            '> h6': {
              margin: '0 auto',
              paddingLeft: `${60 / 16}em`

            },
            '> p': {
              maxWidth: `${400 / 16}em`,
              margin: '0 auto',
              paddingLeft: `${100 / 16}em`
            }
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
            width: '50%',
            backgroundImage: 'url(' + WINE_JPG + ')',
            height: '0',
            paddingTop: '66.64%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            marginLeft: 'auto',
            boxShadow: 'none'
          }

        }
      }
    ]
  }
}
