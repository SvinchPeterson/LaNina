'use strict'

const props = {
  // width: 'H1',
  // height: 'G1',
  position: 'relative',
  round: '0 G G 0',
  overflow: 'hidden',
  childProps: {
    display: 'block',
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    style: {
      transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out'
    }
  }
}

export const Gallery = {
  props,
  childExtend: {
    tag: 'span',
    class: {
      show: (element, state) => state.activeImage === parseInt(element.key)
        ? { opacity: 1 } : { opacity: 0 }
    }
  }
}
