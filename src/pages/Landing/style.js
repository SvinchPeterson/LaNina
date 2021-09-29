'use strict'

export const center = {
  alignItems: 'center',
  justifyContent: 'center'
}

export const styleContent = {
  flex: 1,
  boxShadow: '0px 0px 20px rgba(0, 0, 0, .6)'
}

export const rightBorderRadius = {
  borderTopRightRadius: '26px',
  borderBottomRightRadius: '26px'
}

export const leftBorderRadius = {
  borderTopLeftRadius: '26px',
  borderBottomLeftRadius: '26px'
}

export const styleDoor = {
  flex: 1,
  alignItems: 'center',
  overflow: 'hidden',
  background: 'radial-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, .4))',
  transition: 'all .4s linear',
  backdropFilter: 'blur(1.4px)',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, .2)',
  cursor: 'pointer',

  '> img': {
    width: `${120 / 16}em`,
    height: `${150 / 16}em`
  }
}

export default {
  flex: 1,
  boxSizing: 'border-box',
  flexFlow: 'column',
  background: 'linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .8))'
}
