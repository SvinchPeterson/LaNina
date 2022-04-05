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
export default {
  border: '10px solid red',
  flex: 1,
  display: 'flex'
}
