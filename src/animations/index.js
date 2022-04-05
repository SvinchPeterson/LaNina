'use strict'
import { keyframes } from '@emotion/css'

export const brightness = keyframes`
  from {
    filter: brightness(0);
  }
  to {
    filter: brightness(100%);
  }
`
export const zoomInCoverLogo = keyframes`
  from {
    opacity: 0;
    transform: scale(1);

  }
  to {
    transform: scale(1.1);
    opacity: 1;
  }
`
