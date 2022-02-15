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
    height: `${1 / 16}em`,
    transition: 'width .5s ease-in-out',
    borderRadius: '100%'
  }
}

const styleLangs = {
  color: 'rgba(243, 231, 219, .85)',
  textTransform: 'uppercase',
  transition: 'all 1s ease-in-out',
  cursor: 'pointer',
  height: 'fit-content',
  '> div:first-child': {
    borderRight: '1px solid rgba(243, 231, 219, .65)'
  }

}

export default {
  width: '100%',
  position: 'fixed',
  height: 'fit-content',
  // padding: '40px 80px',
  // border: '5px solid red',
  // border: '2px solid red',
  // border: '3px solid red',
  top: '0px',
  zIndex: 300,
  // justifyContent: 'space-between',
  fontFamily: 'Avenir Next',
  boxSizing: 'border-box',
  mixBlendMode: 'difference',
  '> *': {


    '&:hover': {
      background: 'red'
    }
  },
  '> *:hover': {
    background: 'red'

  },

  '> input': styleCheck,
  '> label': styleMenuIcon,
  '> div': styleLangs
  // '> nav': { mixBlendMode: 'difference' },
  // '#toggle:checked ~ label': {
  //   border: '3px solid red'
  // }

}
