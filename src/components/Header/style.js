'use strict'
import { cream } from '../../colors'

const styleCheck = {
  display: 'none',

  '&:checked ~ label': {
    padding: `20px`
  },
  '&:checked ~ label > div:first-child': { width: `${10 / 16}em` },
  '&:checked ~ label > div:last-child': { width: `${30 / 16}em` },
  '&:checked ~ label > div': { opacity: 1 }

}

const styleMenuIcon = {
  cursor: 'pointer',
  transition: 'all .2s linear',
  borderRadius: '100%',
  '&:hover > div': { opacity: 1 },
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
  textTransform: 'uppercase',
  transition: 'all .3s ease-in-out',
  cursor: 'pointer',
  height: 'fit-content',
  fontWeight: 500,
  '> a:hover': { color: 'rgba(244, 233, 217, 1)' },
  '> a:activer': { color: 'rgba(244, 233, 217, 1)' },
  '@media only screen and (max-width: 768px)': { top: '200px' }
}

const styleCall = {
  opacity: '.7',
  cursor: 'pointer',
  display: 'block',
  borderRadius: '100%',
  background: 'radial-gradient(rgba(244, 233, 217, 0), rgba(244, 233, 217, 0))',
  transition: 'all .2s ease-in-out',
  position: 'relative',

  '&:hover': { opacity: 1 },
  '&:hover::after': { opacity: 0.85 },

  '&::after': {
    content: '"+995 571 017 170"',
    disply: 'block',
    position: 'absolute',
    top: `${10 / 18}em`,
    left: `${50 / 18}em`,
    width: '180px',
    pointerEvents: 'none',
    color: cream,
    fontSize: `${18 / 16}em`,
    fontWeight: 500,
    opacity: 0,
    transition: 'all .3s ease-in-out',
    '@media only screen and (max-width: 1000px)': {
      top: `${45 / 18}em`,
      left: `-${120 / 18}em`
    }
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
  padding: `30px 0`,

  '@media only screen and (max-width: 768px)': {
    gap: '0px',
    justifyContent: 'space-between',
    padding: `30px 10px`
  },

  '> input': styleCheck,
  '> label': styleMenuIcon,
  '> span': styleCall,
  '> div': styleLangs
}
