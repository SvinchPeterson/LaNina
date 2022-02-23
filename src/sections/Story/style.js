'use strict'

export default {
  boxSizing: 'border-box',
  padding: '0px 100px',
  // border: '5px solid red',
  '> section': {
    minHeight: `${600 / 16}em`,
    flex: 1,
    position: 'relative',
    // border: '5px solid red',

    '> span': {
      flex: 1,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      filter: 'grayscale(50%) brightness(35%)'
    },

    '> p': {
      flex: 1,
      background: 'rgba(247, 239, 230, 1)',
      fontSize: '15.5px',
      // background: 'linear-gradient(rgba(243, 231, 219, .2), rgba(243, 231, 219, 1))',
      // background: 'rgba(243, 231, 219, 1)',
      // background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, 1))',
      '> span': {
        fontFamily: 'Avenir Next',
        background: 'rgba(247, 239, 230, 1)',
        fontWeight: 400,
        letterSpacing: '.22',

        // background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, .4))',
        // background: 'linear-gradient(rgba(243, 231, 219, 1), rgba(243, 231, 219, 1))',
        // background: 'linear-gradient(0deg, rgba(248, 229, 223, 1) 35%, rgba(243, 231, 219, 1) 65%, rgba(235, 233, 219, 1) 100%)',

        boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
        lineHeight: '32px',
        color: 'rgba(0,0, 0, .35)'
      }
    }

  }
}
