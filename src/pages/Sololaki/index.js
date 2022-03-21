'use strict'

import { Block, Flex, Text, Link } from '@rackai/symbols'

import { Residence, Apartments, Location } from '../../articles'
import { paddingOut, opacity } from '../../animations'

import { Header, Menu, BBbanner } from '../../components'

import { logoB, logoPng } from '../../components/Logo'

import style, { styleBanner } from './style'

const book2 = {
  proto: [Block, Link],
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start flex-start',
    href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
    target: '_blank'
  },
  style: {
    // border: '1px solid red',
    textDecoration: 'none',
    position: 'fixed',
    left: '0px',
    top: '35%',
    zIndex: '1002',
    transform: 'scale(1)',
    backdropFilter: 'blur(6px) brightness(100%)',
    padding: '40px 40px 40px 20px',
    animationName: paddingOut,
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',
    // borderRadius: '100px',
    borderTopRightRadius: '100px',
    borderBottomRightRadius: '100px',
    background: 'rgba(42, 81, 61, .65)',

    // background: 'radial-gradient(rgba(42, 81, 61, .3), rgba(42, 81, 61, .3))',

    color: 'rgba(244, 233, 217, .65)',
    fontSize: '19px',
    lineHeight: '25px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: '500',

    // writingMode: 'vertical-rl'
    textOrientation: ' upLeft',
    '&:hover': { color: 'rgba(244, 233, 217, 1)' },
    '&:hover > img': { opacity: 1 }
  },
  logo: {
    proto: logoPng,
    style: {
      width: '45px',
      opacity: '.65',
      animationName: opacity,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out'
    }
  },
  text: 'ook'
  // h5: {
  //   proto: Text,
  //   props: { text: 'ook' },
  //   style: {
  //     color: 'white',
  //     border: '2px solid green',
  //     height: 'fit-content'
  //   }
  // }
}

const banner = {
  proto: [Block, Flex],
  style: styleBanner,

  image: { tag: 'span' },
  caption: {
    proto: [Text, Block],
    props: {
      flexFlow: 'column',
      flexAlign: 'center center'
    },
    text: 'bb residence',
    span: {
      proto: Text,
      props: {
        text: 'sololaki'
      }
    }
  },
  p: {
    proto: Text,
    props: { text: '"Where ordinary, becomes extraordinary"' }
  }
}

export default {
  proto: Block,
  style,
  state: {
    active: true,
    activeLink: 0,
    activeImage: 0,
    offers: true,
    activeBallerina: true,
    activeRedBrick: true,
    activeYellowCouch: true
  },

  book2,
  banner,
  Header,
  Menu,

  Residence,
  Apartments,
  Location
}
