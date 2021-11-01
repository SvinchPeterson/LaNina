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

export const move = keyframes`
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
`

export const move2 = keyframes`
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
