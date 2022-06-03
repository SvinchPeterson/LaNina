'use strict'

export default {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  h4: { margin: 0 },
  h1: { margin: 0 },
  h3: { margin: 0 },
  h5: { margin: 0 },
  p: { margin: 0 },
  h6: { margin: 0 },
  fontFamily: 'Helvetica Neue',
  // background: 'rgba(0, 0, 0, .9)',
  background: 'radial-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .92))',
  // background: 'radial-gradient(#212121, #1F1F1F, #1D1D1D, #1B1B1B, #181818, #151515, #111111, #101010)',
  '@media only screen and (min-width: 1680px)': { fontSize: '17px' }
}
