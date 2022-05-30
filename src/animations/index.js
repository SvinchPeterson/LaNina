'use strict'
import { keyframes } from '@emotion/css'

export const letterSpacing2 = keyframes`
from {
 letter-spacing: 6px;
}
to {
  letter-spacing: 5px;
}
`
export const scale = keyframes`
from {
 transform: scale(.98);
}
to {
  transform: scale(1);
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
export const opacityReverse = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
export const letterSpacing = keyframes`
  from {
    letter-spacing: 3px;
    opacity: 0;
  }
  to {
    letter-spacing: 1px;
    opacity: 1;
  }
`
export const positionCenterTop = keyframes`
  from {
    background-position: center;
  }
  to {
    background-position: top;
  }
`
export const positionOpacity2 = keyframes`
  from {
    background-position: top;
    // opacity: 0;
  }
  to {
    background-position: center;
    // opacity: 1;
  }
`
export const positionOpacity3 = keyframes`
  from {
    background-position: top left;
    opacity: 0;
  }
  to {
    background-position: center left;
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
