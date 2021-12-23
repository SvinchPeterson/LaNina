'use strict'
import { keyframes } from '@emotion/css'

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
    background-position: bottom right;
  )
`

export const scale = keyframes`
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  )
`

export const brightness = keyframes`
  from {
    filter: brightness(0%);
    transform: scale(1.05);

  }
  to {
    filter: brightness(100%);
    transform: scale(1);
  )
`
export const scaleUp = keyframes`
  from {
    transform: scale(.8);
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
    transform: scale(.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
export const letterSpacing = keyframes`
  from {
    letter-spacing: 0;
  }
  to {
    letter-spacing: 10px;
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
    top: -100%;
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
