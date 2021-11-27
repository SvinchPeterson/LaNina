'use strict'
import { Block, Text, Flex, Img } from '@rackai/symbols'

import FACEBOOK_PNG from '../../assets/facebook.png'
import INSTAGRAM_PNG from '../../assets/instagram.png'
import LINKEDIN_PNG from '../../assets/linkedin.png'

export default {
  proto: [Flex],
  style: { flexFlow: 'column', justifyContent: 'center', color: 'rgba(0, 0, 0, .55)', textAlign: 'center', paddingBottom: '100px' },
  h5: {
    proto: Text,
    props: { text: 'Contact' },
    style: { textAlign: 'center', letterSpacing: '4px', fontWeight: 'normal', paddingBottom: '40px' }
  },
  contact: {
    style: { fontFamily: 'Avenir Next' },
    childProto: {
      proto: Text,
      style: { fontSize: '20px' }
    },
    ...[
      { props: { text: '571 017 170' }, style: { paddingBottom: '8px' } },
      { props: { text: 'Svinchy@gmail.com' }, style: { paddingBottom: '16px' } }
    ]
  },

  folow: {
    style: { fontFamily: 'Avenir Next' },
    span: {
      proto: Text,
      props: { text: 'follow us' },
      style: { display: 'block', paddingBottom: '12px' }
    },
    icons: {
      style: { display: 'flex', gap: '30px', justifyContent: 'center' },
      childProto: {
        proto: Img,
        style: {
          opacity: '.65',
          width: '28px',
          height: '28px'
        }
      },
      ...[
        { props: { src: FACEBOOK_PNG } },
        { props: { src: LINKEDIN_PNG } },
        { props: { src: INSTAGRAM_PNG } }
      ]
    }
  }
}
