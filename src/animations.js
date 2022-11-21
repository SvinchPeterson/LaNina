'use strict'
import { keyframes } from '@emotion/css'

export const position = keyframes`
  from {
    background-position: top 100 left 100px;
  }
  to {
    background-position: top center;
  }
`

export const positionOpacity = keyframes`
  from {
    background-position: bottom;
    // opacity: 0;
  }
  to {
    background-position: top 200px;
    // opacity: 1;
  }
`

export const opacityTransform = keyframes`
  from {
    transform: translateY(50px) scale(.98);
    opacity: 0;
  }
  to {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
`

export const positionBanner = keyframes`
  from {
    background-position: top left;
  }
  to {
    background-position: center center;
  }
`

export const opacityLetterSpacing = keyframes`
  from {
    opacity: 0;
    letter-spacing: 2.3px;
  }
  to {
    opacity: 1;
    letter-spacing: 1.4px;
  }
`

export const opacityLetterSpacing2 = keyframes`
  from {
    opacity: 0;
    letter-spacing: 3px;
  }
  to {
    opacity: 1;
    letter-spacing: 6px;
  }
`

export const letterSpacing = keyframes`
  from {
    letter-spacing: 1.5px;
  }
  to {
    letter-spacing: 0px;
  }
`

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const deopacity = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const scale = keyframes`
  from {
   transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`

export const opacityScale = keyframes`
  from {
    transform: translate(-50%, -50%) scale(.99);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`

export const scroll = keyframes`
0% {
  transform: translateX(0%);
},
100% {
  transform: translateX(calc(-100% - 32px));
}
`
