'use strict'
import { keyframes } from '@emotion/css'

export const letterSpacing2 = keyframes`
from {
 letter-spacing: 7px;
}
to {
  letter-spacing: 5px;
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
export const letterSpacing = keyframes`
  from {
    letter-spacing: 6px;
    opacity: 0;
  }
  to {
    letter-spacing: 5px;
    opacity: 1;
  }
`
export const positionOpacity = keyframes`
  from {
    background-position: top;
    opacity: 0;
  }
  to {
    background-position: center;
    opacity: 1;
  }
`
export const position = keyframes`
  from {
    background-position: top left;

  }
  to {
    background-position: center;
  }
`
