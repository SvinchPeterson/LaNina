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
