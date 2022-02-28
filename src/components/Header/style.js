'use strict'
const styleCheck = {
  display: 'none',

  '&:checked ~ label': {
    padding: `20px`,
    background: 'radial-gradient(rgba(243, 231, 219, .08), rgba(243, 231, 219, .0))',
    border: '.5px solid rgba(243, 231, 219, .07)'
  },
  '&:checked ~ label > div:first-child': { width: `${10 / 16}em` },
  '&:checked ~ label > div:last-child': { width: `${30 / 16}em` }
}

const styleMenuIcon = {
  cursor: 'pointer',
  transition: 'all .2s linear',
  background: 'radial-gradient(rgba(243, 231, 219, 0), rgba(243, 231, 219, .0))',
  border: '1px solid rgba(243, 231, 219, 0)',
  borderRadius: '100%',
  '&:hover': {
    border: '1px solid rgba(243, 231, 219, .1)',
    background: 'radial-gradient(rgba(243, 231, 219, .15), rgba(243, 231, 219, .0))',
    '> div': {
      opacity: 1
    }
  },
  '> div': {
    background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, 1))',
    width: '100%',
    height: `${10 / 16}em`,
    transition: 'width .5s ease-in-out',
    borderRadius: '30px',
    opacity: '.8'
  }
}

const styleLangs = {
  color: 'rgba(243, 231, 219, .6)',
  textTransform: 'uppercase',
  transition: 'all .3s ease-in-out',
  cursor: 'pointer',
  height: 'fit-content',
  position: 'absolute',
  right: '30px',
  top: '35px',
  fontWeight: 600,
  '> div:hover': { color: 'rgba(243, 231, 219, 1)' },
  '> div:first-child': { borderBottom: '1.5px solid rgba(243, 231, 219, .65)' }
}

const styleCall = {
  opacity: '.7',
  cursor: 'pointer',
  display: 'block',
  borderRadius: '100%',
  background: 'radial-gradient(rgba(243, 231, 219, 0), rgba(243, 231, 219, .0))',
  border: '1px solid rgba(243, 231, 219, 0)',
  transition: 'all .2s ease-in-out',
  position: 'relative',

  '&:hover': {
    opacity: '1',
    border: '1px solid rgba(243, 231, 219, .1)',
    background: 'radial-gradient(rgba(243, 231, 219, .15), rgba(243, 231, 219, .0))'
  },
  '&:hover::after': {
    opacity: 1
  },

  '&::after': {
    content: '"+995 571 017 170"',
    disply: 'block',
    // border: '2px solid red',
    position: 'absolute',
    top: '0px',
    left: '50px',
    width: '160px',
    color: 'rgba(247, 239, 230, .5)',
    padding: '15px 20px',
    fontSize: `${18 / 16}em`,
    fontWeight: 500,
    opacity: 0,
    transition: 'all .3s ease-in-out'

  }
}

const styleBook = {
  letterSpacing: '7px',
  textTransform: 'uppercase',
  color: 'rgba(243, 231, 219, .7)',
  cursor: 'pointer',
  transition: 'all .2s linear',
  borderRadius: '50px',
  border: '1px solid rgba(243, 231, 219, 0)',
  display: 'block',
  background: 'radial-gradient(rgba(243, 231, 219, 0), rgba(243, 231, 219, .0))',
  fontWeight: 600,
  textDecoration: 'none',
  '&:hover': {
    border: '1px solid rgba(243, 231, 219, .1)',
    color: 'rgba(243, 231, 219, .85)',
    background: 'radial-gradient(rgba(243, 231, 219, .15), rgba(243, 231, 219, .0))'
  }
}

export default {
  width: '100%',
  position: 'fixed',
  height: 'fit-content',
  top: '0px',
  zIndex: 1000,
  fontFamily: 'Avenir Next',
  boxSizing: 'border-box',
  mixBlendMode: 'difference',
  backdropFilter: 'blur(2px)',
  // border: '20px solid yellow',
  maxWidth: `${2560 / 16}em`,

  '> input': styleCheck,
  '> label': styleMenuIcon,
  '> div': styleLangs,
  '> a': styleBook,
  '> span': styleCall
}
