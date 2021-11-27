'use strict'
import { keyframes } from '@emotion/css'

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: scale(.9);
  }
  to {
    opacity: .65;
    transform: scale(1);
  }
`
export const fadeUp2 = keyframes`
  from {
    opacity: 0;
    transform: scale(.7)
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
export const spacing = keyframes`
  from {
    letter-spacing: 0;
  }
  to {
    letter-spacing: 9px;
  }
`
export const paragraph = keyframes`
  from {
    opacity: 0;
    margin-top: 100px
  }
  to {
    opacity: 1;
    margin-top: 0
  }
`
export const zoomOut = keyframes`
  from {
    transform: scale(.9);
  }
  to {
    transform: scale(1);
  }
`

export const movingUp = keyframes`
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
`

export const movingDown = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
`

export const filter = keyframes`
  from {
    filter: brightness(0%);
  }
  to {
    filter: brightness(100%)
  }

`
