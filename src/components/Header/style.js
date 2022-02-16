'use strict'
const styleCheck = {
  display: 'none',
  '&:checked ~ label > div:first-child': {
    width: `${20 / 16}em`
  },
  '&:checked ~ label': {
    padding: '30px 20px',
    background: 'radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, .0))'
  },
  '&:checked ~ label > div:last-child': {
    width: `${36 / 16}em`
  }
}

const styleMenuIcon = {
  cursor: 'pointer',
  borderRadius: '100%',
  transition: 'all .4s linear',
  width: 'fit-content',
  height: 'fit-content',
  padding: '25px 20px',
  border: '1px solid rgba(243, 231, 219, 0)',
  // background: 'radial-gradient(rgba(243, 231, 219, .12), rgba(243, 231, 219, .0))',
  '&:hover': {
    border: '1px solid rgba(243, 231, 219, .1)',
    background: 'radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, .0))',
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
  right: '30px',
  top: '300%',
  '&:hover > div': {
    // color: 'rgba(243, 231, 219, 1)'
  },
  '> div:first-child': {
    borderBottom: '1px solid rgba(243, 231, 219, .65)'
  },
  '> div:hover': {
    color: 'rgba(243, 231, 219, 1)'

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
  // fontFamily: 'Bellefair',
  // background: ' radial-gradient(rgba(243, 231, 219, .12), rgba(243, 231, 219, .0))',
  '&:hover': {
    border: '1px solid rgba(243, 231, 219, .12)',
    color: 'rgba(243, 231, 219, .85)',
    background: ' radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, .0))'
  }
}

export default {
  width: '100%',
  position: 'fixed',
  height: 'fit-content',
  // border: '4px solid red',
  // padding: '40px 80px',
  // border: '5px solid red',
  // border: '2px solid red',
  // border: '3px solid red',
  top: '0px',
  zIndex: 1000,
  // justifyContent: 'space-between',
  fontFamily: 'Avenir Next',
  boxSizing: 'border-box',
  mixBlendMode: 'difference',
  '> input': styleCheck,
  '> label': styleMenuIcon,
  '> div': styleLangs,
  '> button': styleBook
  // '> nav': { mixBlendMode: 'difference' },
  // '#toggle:checked ~ label': {
  //   border: '3px solid red'
  // }

}
