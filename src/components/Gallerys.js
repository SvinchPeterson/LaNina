'use strict'

const props = {
  boxSize: '100% 100%',
  border: '5px solid yellow',
  position: 'relative',
  childProps: {
    display: 'block',
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    style: {
      objectFit: 'cover',
      boxShadow: ' inset 0px 0px 5px 0px rgba(0, 0, 0, .6)',
      transition: 'height .7s ease-in-out, opacity .7s ease-in-out, background-position 3s ease-in-out'
    }
  }
}

export const Gallerys = {
  props,
  childExtend: { tag: 'span' }
}
