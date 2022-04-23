'use strict'
import { keyframes } from '@emotion/css'

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const zoomInCoverLogo = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);

  }
  to {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
`

export const minHeight = keyframes`
  from {
    min-height: 0;
    border: 10px solid green;

  }
  to {
    min-height: 700px;
    border: 10px solid green;
  }
`
