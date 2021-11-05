'use strict'
import { Block, Img, Text, Flex, Link } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'

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
    proto: Block,
    childProto: {
      proto: [Block, Flex],
      style: {
        position: 'relative'
      },
      image: {
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
          proto: [Block],
          props: {
            height: 'H3'
          },
          style: {
            backgroundImage: 'url(' + OLDTBILISI_JEPG + ')'
          }
        },

        paragraph: {
          style: {
            right: 0,
            top: '30%'
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
      }
    ]
  }
}
