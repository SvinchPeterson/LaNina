'use strict'
import { keyframes } from '@emotion/css'

export const brightnessScale = keyframes`
  from {
    filter: brightness(0%) grayscale(60%);
    transform: scale(1.1);
  }
  to {
    filter: brightness(85%) grayscale(30%);
    transform: scale(1);
  )
`

export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  )
`
export const backgroundPosition = keyframes`
  from {
    background-position: center right;
  }
  to {
    backgroundPosition: top left;

  )
`

export const scaleDown = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  )
`

export const landingLoading = keyframes`
  // from {
  //   filter: brightness(0%) blur(5px) contrast(95%);

  // }
  // 50% {
  //   filter: brightness(100%) blur(0) contrast(98%);
  // }
  // to {
  //   filter: brightness(100%) blur(0) contrast(100%);
  // )
`
export const scaleUp = keyframes`
  from {
    transform: scale(.9);
  }
  to {
    transform: scale(1);
  )
`

export const dropDown = keyframes`{
  from {
    opacity: 0;
  }
  to: {
   opacity: 1;
  }
}`

export const movingPhotos = keyframes`
from {
 backgroundPosition: 'center';
}
to {
  backgroundPosition: '20px 20px';
}
`
export const displays = keyframes`
from {
  // opacity: 0;
  height: 0;
}
to {
  // opacity: 1;
  height: 100%;
}
`
export const positions = keyframes`
from {
  top: 0;
}
to {
  top: 800px;
}
`
export const fadeUp2 = keyframes`
  from {
    opacity: 0;
    transform: scale(.9);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
`
export const letterSpacing = keyframes`
  from {
    letter-spacing: 2px;
  }
  to {
    letter-spacing: 10px;
  }
`

export const letterSpacing2 = keyframes`
  from {
    letter-spacing: 10;
  }
  to {
    letter-spacing: 6px;
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
  bottom: -100px;
  opacity: 0;
}
70% {
  opacity: 0
}
to {
  bottom: 100px;
  opacity: 1
}
`

export const movingDown = keyframes`
  from {
    top: 0;
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  to {
    top: 100px;
    opacity: 1;
  }
`
export const movingLeft = keyframes`
from {
  left: 0;
},
to {
  left: 100%;
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
