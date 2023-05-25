'use strict'

import { Flex } from 'smbls'

import { bannerTitle, bannerSubTitle } from '../animations'

import { BannerHeading } from './BannerHeading'


const props = {
  width: '100%',
  minHeight: '100%',
  position: 'relative',
  padding: '0 0 0 0',
  top: '0',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  boxSizing: 'border-box',
  padding: '- - D -',
  align: 'flex-end center',
  style: {
    backgroundRepeat: 'no-repeat',
    animationDuration: '4s',
    animatonTimingFunction: 'cubic-bezier(.17,.67,.65,.6)',

  },
  ':before': {
    content: '""',
    boxSize: '100% 100%',
    position: 'absolute',
    zIndex: '1',
    bottom: '0',
    pointerEvents: 'none'
  },
  '@minTabletL': { style:{ backgroundAttachment: 'fixed !important' }},

  heading: {
    title: {
      style: { animationName: bannerTitle },
      animationDuration: '2s',
      AnimationTimingFunction: 'ease'
    },
    subTitle: {
      style: { animationName: bannerSubTitle },
      animationDuration: '2s',
      AnimationTimingFunction: 'ease'
    }
  }
}

export const Banner = {
  tag: 'section',
  extend: Flex,
  attr: { id: 'banner' },
  props,
  heading: { extend: BannerHeading }
}
