'use strict'

const styleSectionLinks = {
  transition: 'all .7s linear',
  boxSizing: 'border-box',
  zIndex: 0,
  minWidth: '100%',
  flex: 20,

  '> a': {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
    transformOrigin: 'left',
    transition: 'all .3s linear',
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      color: 'rgba(168, 98, 63, .65)',
      letterSpacing: '2.2px'
    }
  },

  '@media only screen and (max-width: 768px)': {
    flexFlow: 'column',
    justifyContent: 'flex-start',
    minheight: 'fit-content',
    alignItems: 'center',
    padding: '250px 0px 0px 0px',
    gap: '30px'
  }
}

const styleSocialMedia = {
  transition: 'all .5s linear',
  transitionDelay: '.4s',
  flex: 20,
  minWidth: '100%',
  paddingBottom: '0px',
  alignSelf: 'center',

  '> a': {
    cursor: 'pointer',
    opacity: '.55',
    border: '1.7px solid rgba(168, 98, 63, 0)',
    padding: '15px',
    borderRadius: '100%',
    transition: 'all .3s linear',
    '&:hover': {
      opacity: '1'
    },
    '> img': {
      width: '25px'
    }
  },

  '@media only screen and (max-width: 768px)': { padding: 0 },
  '@media only screen and (max-width: 480px)': { gap: '20px' }

}

export default {
  background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
  backdropFilter: 'blur(5px)',
  position: 'fixed',
  minWidth: '100%',
  minHeight: '100%',
  padding: '0 45px',
  top: 0,
  left: 0,
  transition: 'all .5s linear',
  zIndex: 200,
  boxSizing: 'border-box',
  flexFlow: 'column',
  gap: '320px',

  '@media only screen and (max-width: 860px)': { padding: 0 },
  '@media only screen and (max-width: 768px)': { gap: '100px' },

  '> nav': styleSectionLinks,
  '> div': styleSocialMedia
}
