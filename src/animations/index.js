'use strict'
import { keyframes } from '@emotion/css'

export const zoomOutLanding = keyframes`
  from {
    transform: scale(1.1);
    // background-position: center center;
  }
  to {
    transform: scale(1);
    // background-position: center center;
  }
`
export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .65;
  }
`
export const paddingOut = keyframes`
  from {
    opacity: 0;
    padding: 0px 0px 0px 0px;
  }
  to {
    opacity: 1;
    padding: 40px 40px 40px 20px;
  }
`

export const letterSpacingIn = keyframes`
  from {
   letter-spacing: 6px;
  }
  to {
    letter-spacing: 2px;
  }
`

export const verticalMove = keyframes`
  from {
   left: 53%;
   opacity: 0;
  }
  to {
    left: 50%;
   opacity: 1;
  }
`

export const border = keyframes`
  from {
    border: 40px solid black;

  }
  to {
    border: 40px solid black;
  }
`

export const imagePosition = keyframes`
  from {
    background-position: top left;
  }
  to {
    background-position: center center;
  }
`

export const zoomInB = keyframes`
  from {
    opacity: 0;
    transform: scale(.95) translate(-50%, -50%);

  }
  to {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
`
export const zoomOutB = keyframes`
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
`
export const coverLogoAnimation = keyframes`
  from {
    opacity: 1;
    filter: brightness(0%);
    transform: translate(-50%, -50%) scale(1.6);


  }
  to {
    opacity: .85;
    filter: brightness(100%);
    transform: translate(-50%, -50%) scale(1.4);
  }
`
export const coverLogoAnimation2 = keyframes`
  from {
    opacity: 1;
    filter: brightness(0%);
    transform: translate(-50%, -50%) scale(1.3);


  }
  to {
    opacity: .85;
    filter: brightness(100%);
    transform: translate(-50%, -50%) scale(1);
  }
`
export const letterSpacingBanner = keyframes`
  from {
    // transform: scale(.9);
    letter-spacing: 6px;

  }
  to {
    letter-spacing: 1.5px;
    // transform: scale(1);
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
   filter: grayscale(50%) brightness(0%);
  }
  to {
    transform: scale(1);
    filter: grayscale(70%) brightness(60%)
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
