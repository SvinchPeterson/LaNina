'use strict'
import { cream } from '../../colors'

const styleCheck = {
  display: 'none',

  '&:checked ~ label': {
    padding: `20px`
  },
  '&:checked ~ label > div:first-child': { width: `${10 / 16}em` },
  '&:checked ~ label > div:last-child': { width: `${30 / 16}em` }
}

const styleMenuIcon = {
  cursor: 'pointer',
  transition: 'all .2s linear',
  background: 'radial-gradient(rgba(244, 233, 217, 0), rgba(244, 233, 217, 0))',
  border: '1.5px solid rgba(244, 233, 217, 0)',
  borderRadius: '100%',
  '&:hover': {
    // border: '1.5px solid rgba(244, 233, 217, .1)',
    // background: 'radial-gradient(rgba(244, 233, 217, .15), rgba(244, 233, 217, 0))',
    '> div': {
      opacity: 1
    }
  },
  '> div': {
    background: cream,
    width: '100%',
    height: `${5 / 16}em`,
    transition: 'width .5s ease-in-out',
    borderRadius: '30px',
    opacity: 0.85
  }
}

const styleLangs = {
  // color: 'rgba(244, 233, 217, .65)',
  // opacity: 0.85,
  textTransform: 'uppercase',
  transition: 'all .3s ease-in-out',
  cursor: 'pointer',
  height: 'fit-content',
  // position: 'absolute',
  // right: '80px',
  // top: '40px',
  fontWeight: 500,
  '> a:hover': { color: 'rgba(244, 233, 217, 1)' },
  '> a:activer': { color: 'rgba(244, 233, 217, 1)' },
  // '> div:first-child': { borderBottom: '1.8px solid rgba(244, 233, 217, .65)' },
  '@media only screen and (max-width: 768px)': {
    top: '200px'
  }
}

const styleCall = {
  opacity: '.7',
  cursor: 'pointer',
  display: 'block',
  borderRadius: '100%',
  background: 'radial-gradient(rgba(244, 233, 217, 0), rgba(244, 233, 217, 0))',
  border: '1.5px solid rgba(244, 233, 217, 0)',
  transition: 'all .2s ease-in-out',
  position: 'relative',

  '&:hover': {
    opacity: 1
    // border: '1.5px solid rgba(244, 233, 217, .1)',
    // background: 'radial-gradient(rgba(244, 233, 217, .15), rgba(244, 233, 217, 0))'
  },
  '&:hover::after': {
    opacity: 0.85
  },

  '&::after': {
    content: '"+995 571 017 170"',
    disply: 'block',
    position: 'absolute',
    top: '0px',
    left: '50px',
    width: '180px',
    pointerEvents: 'none',
    color: cream,
    padding: '15px 20px',
    fontSize: `${18 / 16}em`,
    fontWeight: 600,
    opacity: 0,
    transition: 'all .3s ease-in-out',
    '@media only screen and (max-width: 1000px)': {
      top: '50px',
      left: '-150px'
    }
  }
}

const styleBook = {
  letterSpacing: '7px',
  textTransform: 'uppercase',
  color: 'rgba(244, 233, 217, .75)',
  cursor: 'pointer',
  transition: 'all .2s linear',
  borderRadius: '50px',
  border: '1.5px solid rgba(244, 233, 217, 0)',
  display: 'block',
  background: 'radial-gradient(rgba(244, 233, 217, 0), rgba(244, 233, 217, 0))',
  fontWeight: 700,
  textDecoration: 'none',
  '&:hover': {
    // border: '1.5px solid rgba(244, 233, 217, .1)',
    // background: 'radial-gradient(rgba(244, 233, 217, .15), rgba(244, 233, 217, 0))',
    color: 'rgba(244, 233, 217, 1)'
  },

  '@media only screen and (max-width: 768px)': {
    border: '2px solid rgba(244, 233, 217, 0)'
  }
}

export default {
  width: '100%',
  position: 'fixed',
  height: 'fit-content',
  top: '0px',
  zIndex: 1000,
  boxSizing: 'border-box',
  mixBlendMode: 'difference',
  backdropFilter: 'blur(2px)',

  '@media only screen and (max-width: 768px)': {
    gap: '0px',
    justifyContent: 'space-between',
    padding: '60px 60px'
  },
  '@media only screen and (max-width: 480px)': {
    padding: '60px 10px'

  },

  '> input': styleCheck,
  '> label': styleMenuIcon,
  '> a': styleBook,
  '> span': styleCall,
  '> div': styleLangs
}
