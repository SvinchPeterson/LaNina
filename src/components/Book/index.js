import { Box, Link } from '@symbo.ls/symbols'

export const Book = {
  proto: [Link, Box],
  props: {
    padding: 'Y2 W2 0 B',
    color: 'white',
    // round: 'W2',
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank'
  },
  style: {
    borderTopLeftRadius: '8px',
    // borderBottomLeftRadius: '20px',
    // borderRight: '1px solid rgba(245, 245, 245, .5)',
    // borderBottom: '1px solid rgba(245, 245, 245, .5)',

    borderLeft: '1.5px solid rgba(245, 245, 245, .75)',
    borderTop: '1.5px solid rgba(245, 245, 245, .75)',
    textDecoration: 'none',
    zIndex: 100,
    fontWeight: '900',
    '&:hover > span': { opacity: '1' }
  },

  span: {
    proto: Box,
    props: {
      text: 'BOOK',
      fontSize: 'Z'
    },
    style: { opacity: '.8' }
  }
}
