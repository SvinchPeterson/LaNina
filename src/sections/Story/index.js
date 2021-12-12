'use strict'
import { Block, Text, Flex, Link } from '@rackai/symbols'

import OLDTBILISI_JEPG from '../../assets/images/cover.jpg'
import WINE_JPG from '../../assets/images/wine.jpg'

import style, { styleStoryImage, styleParagraph, styleCityParagraph } from './style'

export default {
  tag: 'article',
  proto: Block,
  style,
  h4: {
    proto: [Block, Text],
    props: {
      text: 'Story',
      padding: 'E 0 C 0'
    },
    attr: { id: 'story' }
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
          proto: Text,
          style: {
            fontFamily: 'Bellefair'
            // color: 'rgba(0, 0, 0, .2)'
          }
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
            style: {
              maxWidth: `${400 / 18}em`
            },
            props: {
              text: `Sololaki is one of the oldest districts in Tbilisi located on
              the south-eastern edge of the city on the right bank of the river “Mtkvari”. During the Arab
              rule an irrigation canal (Arabic: Sulu-lah) was rebuilt to irrigate the “Fortress Garden”. “Su” is not
              Arabic but a Turkish word for water. Later the mountain slope on which this district is cultivated was
              called “Sululah”. While the toponym Sololaki appeared in the XIX century.`
            }
          }
        }
      },

      {
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
            style: {
              maxWidth: `${600 / 18}em`
            },
            props: {
              text: `Georgians are very proud of their rich and historic winemaking culture,
              and as traditional methods enjoy a renaissance, the Qvevri (an earthenware
              vessel used to store and age wine for thousands of years). Georgia is generally
              considered the ‘cradle of wine’, as archaeologists have traced the world’s first known wine creation back to
              the people of the South Caucasus in 6,000BC. These early Georgians discovered grape juice could be turned into
              wine by burying it underground for the winter. Some of the qvevri’s were buried in could remain underground for up to 50 years.
              Wine continued to be important to the Georgians, who incorporated it into art and sculpture, with grape designs and evidence
              of wine-drinking paraphernalia found at ruins and burial sites..`
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
