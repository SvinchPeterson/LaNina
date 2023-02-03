'use strict'

import { Flex, Link } from 'smbls'

const props = {
  minWidth: `${300 / 16}em`,
  minHeight: 'G',
  align: 'center center',
  position: 'relative',
  opacity: '.95',
  overflow: 'hidden',
  round: 'D D G2 G2',
  ':not(:last-child):before': {
    content: '""',
    width: '1px',
    height: '95%',
    position: 'absolute',
    top: '50%',
    right: '0',
    background: 'radial-gradient(rgba(248, 241, 227, .45), rgba(248, 241, 227, 0))',
    transform: 'translate(50%, -50%)'
  },
  style: {
    cursor: 'pointer',
    '@media only screen and (max-width: 1280px)': {
      backgroundAttachment: 'initial'

    },
    '@media only screen and (min-width: 1366px)': {
      '&:hover': {
        opacity: '1',
        transition: 'opacity .3s ease-in-out',
        '> div': {
          '> h5': {
            color: 'rgba(248, 241, 227, 1)'
            // transform: 'scale(1.01)'
          }
        }
      }
    },

    '@media only screen and (max-height: 550px)': {
      minHeight: `${250 / 16}em`
    }
  },

  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minWidth: `${280 / 16}em`,
    minHeight: 'G',
    position: 'relative',
    round: 'D D G1 G1',
    // round: 'Y',
    overflow: 'hidden',
    style: {
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    },
    border: 'solid, silver',
    borderWidth: '1px',

    ':hover:after': { opacity: '.7' },
    ':after': {
      content: '""',
      boxSize: '100% 100%',
      background: 'linear-gradient(rgba(30, 40, 49, .2), rgba(30, 40, 49, 1))',
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: '1',
      style: {
        transition: 'opacity .5s ease-in-out'
      }
    },

    title: {
      fontSize: 'C',
      fontWeight: '400',
      zIndex: '200',
      textTransform: 'capitalize',
      color: 'cream2',
      background: 'blue3 .65',
      width: '100%',
      padding: 'Y -',
      // whiteSpace: 'no-wrap',
      textAlign: 'center',
      letterSpacing: '0px',
      whiteSpace: 'nowrap',
      // background: 'black .5',
      // width: 'fit-content',
      position: 'absolute',
      margin: '0',
      bottom: 'C1',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      lineHeight: '30px',
      // textAlign: 'center',
      // border: 'solid, silver',
      // borderWidth: '1px 0px 1px 1px',
      // zIndex: '3',
      // round: 'B1 0 0 B1',
      // padding: 'Z2 - Z2 A2',
      // minWidth: '60%',
      style: {
        backdropFilter: 'blur(.8px)',
        // fontStyle: 'italic',
        // letterSpacing: '3px',
        transition: 'transform .23s ease-in-out, color .23s ease-in-out, letter-spacing .23s ease-in-out'
      }
    }
  }
}

export const TourTab = {
  extend: [Link, Flex],
  props,

  image: {
    title: { tag: 'h5' }
  }
}
