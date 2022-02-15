'use strict'
const styleCheck = {
  display: 'none',
  '&:checked ~ label > div:first-child': {
    width: `${20 / 16}em`
  },
  '&:checked ~ label > div:last-child': {
    width: `${36 / 16}em`
  }
}

const styleMenuIcon = {
  flexFlow: 'column',
  cursor: 'pointer',
  background: 'black',
  '> div': {
    background: 'rgba(243, 231, 219, .85)',
    height: `${2 / 16}em`,
    transition: 'width .5s ease-in-out'
  }
}

export default {
  width: '100%',
  position: 'fixed',
  height: 'fit-content',
  border: '3px solid red',
  top: '0px',
  zIndex: 300,
  alignItems: 'center',
  fontFamily: 'Avenir Next',
  boxSizing: 'border-box',
  mixBlendMode: 'difference',

  '> input': styleCheck,
  '> label': styleMenuIcon
  // '> nav': { mixBlendMode: 'difference' },
  // '#toggle:checked ~ label': {
  //   border: '3px solid red'
  // }

}
