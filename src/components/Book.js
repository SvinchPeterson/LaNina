import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y2 B',
    // round: 'X',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',
    style: {
      borderRight: '1.5px solid rgba(245, 245, 245, .75)',
      borderBottom: '1.5px solid rgba(245, 245, 245, .75)',
      borderBottomRightRadius: '5px',
      textDecoration: 'none',
      zIndex: 100,
      color: 'white !important',
      '&:hover > span': { opacity: '1' }
    },

    span: {
      text: 'BOOK',
      fontSize: 'Z',
      style: { opacity: '.9' }
    }
  },

  span: {}
}
