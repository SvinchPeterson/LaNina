'use strict'
import { keyframes } from '@emotion/css'
import RUSTAVELI_JPG from '../assets/images/rustaveli.jpg'
import SOLOLAKI_JPG from '../assets/images/sololaki.jpg'

// Landing page animations

export const positionLoadingLanding = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`
export const opacityLandingBanner = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`
export const letterSpacingLandingBanner = keyframes`
  from {
    transform: scale(.9);
    letter-spacing: 8.5px;

  }
  to {
    letter-spacing: 12px;
    transform: scale(.95);
  }
`

export const brightnessLanding = keyframes`
  from {
   filter: brightness(0);
  }
  to {
    filter: brightness(100%);
  }
`

// Sololaki page animations

export const scaleSololakiBanner = keyframes`
  from {
   transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`
export const scaleOpacitySololakiBannerHeading = keyframes`
  from {
    opacity: 0;
    transform: scale(1);
  }
  to {
    opacity: ;
    transform: scale(1.1);
  }
`

export const letterSpacingSololakiBanner = keyframes`
  from {
    opacity: 0;
    letter-spacing: 5px;
  }
  to {
    opacity: .55;
    letter-spacing: 10px
  }
`

export const opacitySololakiBannerParagraph = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: .45;
  }
`
export const roomsContainer = keyframes`
  from {
    opacity: 0;
    height: 0;

  }
  to {
    opacity: 1;
    height: 100%;
  }
`

export const roomOffers = keyframes`
  from {
    height: 300px;

  }
  to {
    height: 0;
  }
`
export const roomOffers2 = keyframes`
  from {
    height: 0px;

  }
  to {
    height: 300;
  }
`
