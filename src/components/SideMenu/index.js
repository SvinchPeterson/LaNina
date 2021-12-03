'use strict'
import { Block, Text, Img, Link } from '@rackai/symbols'

export default {
  tag: 'aside',
  proto: Block,
  props: {
    flexAlign: 'center center'
  },
  style: {
    position: 'absolute',
    top: 0,
    left: '-500px',
    background: 'rgba(0, 0, 0, .95)',
    transition: 'all .5s ease-in-out',
    width: '500px',
    height: '600px'

  },
  nav: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'B'
    },
    style: {

    },
    childProto: {
      proto: [Link, Text],
      props: {
        size: 'B'
      },
      style: {
        textTransform: 'uppercase',
        fontFamily: 'Gilda Display',
        letterSpacing: '6px',
        textDecoration: 'none',
        color: 'F3E7DB',
        cursor: 'pointer',
        opacity: '.7',
        '&:hover': {
          opacity: 1
        },
        '&:focus': { opacity: 1 }

      }
    },
    ...[
      {
        props: { text: 'story' }
      },
      {
        props: { text: 'apartment' }
      },
      {
        props: { text: 'services' }
      },
      {
        props: { text: 'contact' }
      },
      {
        props: { text: 'We are' }
      }
    ]
  },
  nav2: {
    childProto: {
      proto: Link
    }
  }
}
