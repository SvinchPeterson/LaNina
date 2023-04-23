'use strict'

import { keyframes } from '@emotion/css'

// common animations
export const opacity = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
export const deopacity = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

// landing animations

export const navBarItemTransform = keyframes`
from {
  transform: translateY(50px);
  opacity: 0;
  letter-spacing: 1.5px;
}
to {
  transform: translateY(0px);
  opacity: 0.7;
  letter-spacing: 2.5px;
}
`

export const titleLetterSpacing = keyframes`
from {
  opacity: 0;
  letter-spacing: .5px;
  transform: translate(-50%, -50%), scale(.97);
}
to {
  letter-spacing: -1.3px;
  opacity: 1;
  transform: translate(-50%, -50%), scale(1);
}
`


export const navBarItemTransform2 = keyframes`
from {
  transform: translateY(-50px);
  opacity: 0;
  letter-spacing: 1.5px;
}
to {
  transform: translateY(0px);
  opacity: 0.7;
  letter-spacing: 2.5px;
}
`

export const scaleLogo = keyframes`
from {
  opacity: 0;
  transform: scale(.9);
}
to {
  opacity: .75;
  transform: scale(1);
}
`
export const backgroundPosition = keyframes`
  from {
    background-position: top left;
  }
  to {
    background-position: bottom right;
  }
`


export const lineWidth = keyframes`
  from { width: 0; }
  to { width: 100%; }
`



// export const backgroundPosition = keyframes`
//   from {
//     transform: scale(1.2);
//   }
//   to {
//     transform: scale(1);
//   }
// `

// residence animations


export const headerHeight = keyframes`
  from { height: 0; opacity: 0; }
  to { height: 68px; opacity: 1; }
`

export const bannerBackground = keyframes`
  from { background-position: top left; }
  to { background-position: center center; }
`
export const bannerBackground2 = keyframes`
  from { transform: scale(1.1); }
  to { transform: scale(1); }
`
export const bannerTitle = keyframes`
  from {
    transform: translateY(0px) scale(.9);
    opacity: 0;
  }
  to {
    transform: translateY(-30px) scale(1);
    opacity: 1;
  }
`

export const bannerh1 = keyframes`
  from { letter-spacing: 0; }
  to { letter-spacing: -2.5px; }
`

export const roomOpacityTransform = keyframes`
  from {
    opacity: 0;
    transform: scale(.99);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const roomDescription = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px) scale(.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`


export const roomAmenities = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px) scale(.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

// travel animation
export const bannerH1 = keyframes`
  from {
    height: 0;
    opacity: 0;
    letter-spacing: -10px;
  }
  to {
    height: 72px;
    opacity: 1;
    letter-spacing: -3px;
  }
`
export const travelBannerH5 = keyframes`
  from {
    opacity: 0;
    letter-spacing: 7px;
  }
  to {
    opacity: 1;
    letter-spacing: 10px;
  }
`
export const popUpGallery = keyframes`
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: 80%;
  }
`

export const slideHideVertical = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`


export const slideHideHorizontal = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

export const slideHideTour = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-574px * 6));
  }
`

// -----------------

export const position = keyframes`
  from {
    background-position: top 100 left 100px;
  }
  to {
    background-position: top center;
  }
`
export const positionOpacity = keyframes`
  from {
    background-position: bottom;
    // opacity: 0;
  }
  to {
    background-position: top 200px;
    // opacity: 1;
  }
`

export const opacityTransform = keyframes`
  from {
    transform: translateY(5px) scale(.95);
    opacity: 0;
    height: 0;
  }
  to {
    transform: translateY(0px) scale(1);
    opacity: 1;
    height: 376px;
  }
`

// export const opacityTransforms = keyframes`
//   0% {
//     transform: translateX(0);
//     opacity: 1;
//   }
//   100% {
//     // display: none;
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   // 100% {

//   // }
// `

export const slideHide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-355px * 6));
  }
`

export const slideHide2 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-464px * 11));
  }
`

export const slideHide3 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-350px * 11));
  }
`

export const flexFlow = keyframes`
  from {
    flex-flow: row;
  }
  to {
    flex-flow: row-reverse
  }
`

export const opacityTransform2 = keyframes`
  from {
    transform: translateX(100px) scale(.98);
    opacity: 0;
    letter-spacing: 3px;
  }
  to {
    transform: translateX(0px) scale(1);
    opacity: 1;
    letter-spacing: 1px;
  }
`

export const opacityTransform3 = keyframes`
  from {
    transform: rotateX(-40deg) rotateY(40deg) scale(.95);
    opacity: 0;
  }
  to {
    transform: rotateX(-45deg) rotateY(45deg) scale(1);
    opacity: 1;
  }
`

export const opacityTransform4 = keyframes`
from {
  transform: translateX(50px) scale(.95);
  opacity: 0;
  letter-spacing: 2.5px;
}
to {
  transform: translateX(0) scale(1);
  opacity: 1;
  letter-spacing: 1.8px;
}
`

export const opacityLetterSpacing = keyframes`
  from {
    opacity: 0;
    letter-spacing: 2.3px;
  }
  to {
    opacity: 1;
    letter-spacing: 1.4px;
  }
`

export const letterSpacing = keyframes`
  from {
    letter-spacing: 1.5px;
  }
  to {
    letter-spacing: 0px;
  }
`

export const letterSpacing2 = keyframes`
  from {
    letter-spacing: 5px;
  }
  to {
    letter-spacing: 6px;
  }
`

export const opacity2 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.75;
  }
`

export const scale = keyframes`
  from {
   transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`

export const opacityScale = keyframes`
  from {
    transform: translate(-50%, -50%) scale(.99);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`

export const scroll = keyframes`
0% {
  transform: translateX(100%);
},
100% {
  transform: translateX(calc(-100% - 32px));
}
`
