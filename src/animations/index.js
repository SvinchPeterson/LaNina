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

// export const zoomiIn = keyframes`
//   from {
//     transform: scale(1.3);
//   }
//   to {
//     transform: scale(1);
//   }
// `
// export const zoomInCoverLogo = keyframes`
//   from {
//     opacity: 0;
//     transform: translate(-50%, -50%) scale(1);

//   }
//   to {
//     transform: translate(-50%, -50%) scale(1.1);
//     opacity: 1;
//   }
// `

// export const minHeight = keyframes`
//   from {
//     min-height: 0;
//     border: 10px solid green;

//   }
//   to {
//     min-height: 700px;
//     border: 10px solid green;
//   }
// `
