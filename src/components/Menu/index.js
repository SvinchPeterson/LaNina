'use strict'
import { Box, Text, Link, SVG, Img } from '@symbo.ls/symbols'

import FACEBOOK_PNG from '../../assets/icons/facebook.png'
import INSTAGRAM_PNG from '../../assets/icons/instagram.png'
import LINKEDIN_PNG from '../../assets/icons/linkedin.png'

import style, {} from './style'

const sectionLinks = {
  tag: 'nav',
  proto: Box,
  childProto: {
    proto: [Link, Text, Box],
    props: {
      color: 'cream'
    }
  },
  ...[
    { props: { text: 'residence' } },
    { props: { text: 'apartments' } },
    { props: { text: 'wine' } },
    { props: { text: 'location' } }
  ]
}

const socialMedia = {
  tag: 'nav',
  proto: Box,
  childProto: {
    proto: [Link, Box],
    icon: {
      proto: [Img, Box],
      props: { boxSize: 'B' }
    }
  },
  ...[
    { icon: { props: { src: FACEBOOK_PNG } } },
    { icon: { props: { src: INSTAGRAM_PNG } } },
    { icon: { props: { src: LINKEDIN_PNG } } }
  ]
}

export default {
  tag: 'aside',
  proto: Box,
  style,
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'black'
  },

  sectionLinks,
  socialMedia
}

// import style from './style'

// const sectionLinks = {
//   tag: 'nav',
//   proto: Block,
//   props: {
//     padding: '0 E 0 0',
//     gap: 'C',
//     flexAlign: 'flex-end flex-end'
//   },

//   childProto: {
//     proto: [Link, Text, Block],
//     props: {
//       size: 'D'
//     },
//     on: {
//       click: (event, element, state) => {
//         state.update({ activeMenuLink: element.key })
//         console.log(state.activeMenuLink, element.key)
//       }
//     },

//     class: {
//       show: (element, state) => state.activeMenuLink === element.key ? { color: 'rgba(168, 98, 63, .65)' } : { color: 'rgba(244, 233, 217, .45)' }
//     }
//   },
//   ...[
//     { props: { text: 'residence', href: '#residence' } },
//     { props: { text: 'apartments', href: '#apartments' } },
//     { props: { text: 'wine', href: '#wine' } },
//     { props: { text: 'location', href: '#location' } }
//   ]
// }

// const socialMedia = {
//   proto: Block,
//   props: {
//     flexAlign: 'flex-end center',
//     gap: 'E',
//     padding: '0 0 D 0'
//   },

//   childProto: {
//     proto: [Link, Block],
//     props: {
//       target: '_blank'
//     },
//     icon: {
//       proto: [SVG, Block],
//       props: {
//         boxSize: 'B1 B1'
//       }
//     }
//   },

//   ...[
//     {
//       props: { href: `https://www.facebook.com/laninaresidence` },
//       icon: {
//         src: FACEBOOK_SVG
//       }
//     },

//     {
//       props: { href: 'https://www.instagram.com/laninaresidence/' },
//       icon: {
//         src: INSTAGRAM_SVG
//       }
//     },

//     {
//       icon: {
//         src: LINKEDIN_SVG
//       }
//     }
//   ]
// }
// export default {
//   tag: 'aside',
//   proto: Block,
//   style,
//   props: {
//     flexFlow: 'column'
//   },
//   class: {
//     show: (element, state) => state.active ? {
//       opacity: 0,
//       pointerEvents: 'none',
//       '> nav': {
//         opacity: 0,
//         transitionDelay: 0
//       },
//       '> div': {
//         opacity: 0,
//         transitionDelay: 0
//       }
//     } : {
//       opacity: 1,
//       '> div': {
//         opacity: 1,
//         transitionDelay: 0
//       }
//     }
//   },

//   sectionLinks,
//   socialMedia

// }
