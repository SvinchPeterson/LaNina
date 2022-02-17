'use strict'
const styleCheck = {
  display: 'none',

  '&:checked ~ label': {
    padding: `${28 / 16}em ${20 / 16}em`,
    background: 'radial-gradient(rgba(243, 231, 219, .07), rgba(243, 231, 219, .0))',
    border: '.5px solid rgba(243, 231, 219, .07)'
  },
  '&:checked ~ label > div:first-child': { width: `${20 / 16}em` },
  '&:checked ~ label > div:last-child': { width: `${30 / 16}em` }
}

const styleMenuIcon = {
  cursor: 'pointer',
  borderRadius: '100%',
  transition: 'all .4s linear',
  width: 'fit-content',
  height: 'fit-content',
  border: '1px solid rgba(243, 231, 219, 0)',
  '&:hover': {
    border: '1px solid rgba(243, 231, 219, .1)',
    background: 'radial-gradient(rgba(243, 231, 219, .08), rgba(243, 231, 219, .0))',
    '> div': {
      opacity: 1
    }
  },
  '> div': {
    background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, 1))',
    height: `${1 / 16}em`,
    transition: 'width .5s ease-in-out',
    borderRadius: '30%',
    opacity: '.8'
  }
}

const styleLangs = {
  color: 'rgba(243, 231, 219, .5)',
  textTransform: 'uppercase',
  transition: 'all .3s ease-in-out',
  cursor: 'pointer',
  height: 'fit-content',
  position: 'absolute',
  right: '60px',
  top: '230%',

  '> div:hover': { color: 'rgba(243, 231, 219, 1)' },
  '> div:first-child': { borderBottom: '1px solid rgba(243, 231, 219, .65)' }
}

const styleCall = {
  opacity: '.7',
  cursor: 'pointer',
  display: 'block',
  padding: '20px',
  borderRadius: '100%',
  background: 'transparent',
  border: '1px solid rgba(243, 231, 219, 0)',

  '&:hover': {
    opacity: '1',
    border: '1px solid rgba(243, 231, 219, .1)',
    background: 'radial-gradient(rgba(243, 231, 219, .08), rgba(243, 231, 219, .0))'
  }
}

const styleBook = {
  letterSpacing: '7px',
  textTransform: 'uppercase',
  color: 'rgba(243, 231, 219, .7)',
  cursor: 'pointer',
  transition: 'all .3s linear',
  borderRadius: '30px',
  padding: '15px 30px',
  border: '1px solid rgba(243, 231, 219, 0)',
  display: 'block',
  background: 'transparent',

  '&:hover': {
    border: '1px solid rgba(243, 231, 219, .12)',
    color: 'rgba(243, 231, 219, .85)',
    background: 'radial-gradient(rgba(243, 231, 219, .08), rgba(243, 231, 219, .0))'
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

  '> input': styleCheck,
  '> label': styleMenuIcon,
  '> div': styleLangs,
  '> button': styleBook,
  '> span': styleCall
}
