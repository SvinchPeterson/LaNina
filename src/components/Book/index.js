import { Box, Link } from '@symbo.ls/symbols'

export const Book = {
  proto: [Link, Box],
  props: {
    padding: 'Y1 W2 Y2 B',
    color: 'white',
    // round: 'W2',
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank'
  },
  style: {
    borderTopLeftRadius: '10px',
    // borderBottomLeftRadius: '20px',
    // borderRight: '1px solid rgba(245, 245, 245, .5)',
    // borderBottom: '1px solid rgba(245, 245, 245, .5)',

    borderLeft: '1px solid rgba(245, 245, 245, .5)',
    borderTop: '1px solid rgba(245, 245, 245, .5)',
    textDecoration: 'none',
    zIndex: 100,
    fontWeight: '900',
    '&:hover > span': { opacity: '.9' }
  },

  span: {
    proto: Box,
    props: {
      text: 'BOOK',
      fontSize: 'Z'
    },
    style: { opacity: '.7' }
  }
}
