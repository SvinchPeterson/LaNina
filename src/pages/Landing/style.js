'use strict'

export const styleLink = {
  border: '10px solid green',
  flex: 1,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  '@media only screen and (min-width: 1024px)': {
    transition: 'flex .8s ease-in-out, background-position .8s ease-in-out, background-image .8s ease-in-out',
    '&:hover': {
      flex: 8
    }
  }
}

export const styleLogo = {
  transform: 'translate(-50%, -50%) scale(1.1)',
  pointerEvents: 'none',
  opacity: 0

}
export default {
  border: '10px solid red',
  flex: 1,
  display: 'flex'
}
