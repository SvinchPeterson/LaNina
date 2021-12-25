'use strict'

export default {
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 100,
  alignItems: 'center',
  fontFamily: 'Avenir Next',
  boxSizing: 'border-box',
  mixBlendMode: 'difference',
  // background: 'red',
  // border: '3px solid red',
  // '> nav': {
  //   mixBlendMode: 'hue'
  // },
  '> nav': { mixBlendMode: 'difference' },
  '#toggle:checked ~ aside': {
    width: '500px',
    left: '0px',
    opacity: 1
  },
  '#toggle:checked ~ aside > nav': {
    display: 'flex',
    opacity: 1,
    transition: 'all 2s ease-in-out',
    transitionDelay: '0s'
  },
  '#toggle:not(:checked) ~ aside > nav': {
    transition: 'all .1s easein-out',
    transitioonDelay: '0s'

  },
  '#toggle:checked ~ label > div:last-child': {
    transition: 'all .4s ease-in-out',
    transitionDelay: '.2s',
    width: '36px'
  },
  '#toggle:not(:checked) ~ label > div:last-child': {
    transition: 'all .4s ease-in-out',
    transitionDelay: '.2s',
    width: '20px'
  },
  '#toggle:checked ~ label > div:first-child': {
    transition: 'all .4s ease-in-out',
    transitionDelay: '.2s',
    width: '20px'
  },
  '#toggle:not(:checked) ~ label > div:first-child': {
    transition: 'all .4s ease-in-out',
    transitionDelay: '.2s',
    width: '36px'
  }

}
