'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import { zoomInCoverLogo } from '../../animations'

import { Logo } from '../../components'

import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'

import style, { styleLink, styleheading, styleUnderConstruction } from './style'

const Page = {
  props: {
    flexAlign: 'center center',
    position: 'relative'
  }
}

const logo = {
  proto: Logo,
  props: {
    position: 'absolute'
  },
  style: {
    transform: 'scale(1.1)',
    animationName: zoomInCoverLogo,
    animationDuration: '1.5s',
    animationTimingFunction: 'ease-in-out',
    pointerEvents: 'none'
  }
}

const link = {
  proto: [Link, Box],
  class: [styleLink],
  props: {
    minHeight: '100%',
    padding: '0 0 E 0'
  }
}

const heading = {
  tag: 'h4',
  proto: [Text, Box],
  props: {
    color: 'cream .65',
    size: 'B'
  },
  class: [styleheading]
}

const underConstruction = {
  tag: 'span',
  proto: [Text, Box],
  props: {
    text: 'under construction',
    position: 'absolute',
    size: 'Z',
    color: 'orange',
    bottom: '5px',
    left: '13px'
  },
  class: [styleUnderConstruction]
}

const Sololaki = {
  proto: link,
  props: {
    flexAlign: 'flex-end flex-end',
    href: './Sololaki'
  },
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)),url(' + SOLOLAKI_JPG + ')',
    cursor: 'pointer',
    '&:hover': {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .35)),url(' + SOLOLAKI_JPG + ')',
      backgroundPosition: `top left -${100 / 16}em`
    }
  },

  heading: {
    proto: heading,
    props: {
      text: 'sololaki',
      padding: 'A1 Z A1 A1'
    },

    style: {
      borderTopLeftRadius: `${40 / 18}em`,
      borderBottomLeftRadius: `${40 / 18}em`
    }
  }
}

const Rustaveli = {
  proto: link,
  props: { flexAlign: 'flex-end flex-start' },
  style: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .85)),url(' + RUSTAVELI_JPG + ')',
    '&:hover': {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .35)),url(' + RUSTAVELI_JPG + ')',
      backgroundPosition: `top left ${100 / 16}em`
    }
  },

  heading: {
    proto: heading,
    props: {
      text: 'rustaveli',
      padding: 'A1 A1 A1 Z',
      position: 'relative'
    },
    style: {
      borderTopRightRadius: `${40 / 18}em`,
      borderBottomRightRadius: `${40 / 18}em`
    },

    underConstruction
  }
}

export default {
  style,
  proto: [Box, Page],

  Sololaki,
  Rustaveli,
  logo
}
