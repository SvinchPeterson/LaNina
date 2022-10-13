import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y B',
    // round: 'X',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',

    style: {
      borderRight: '1px solid rgba(245, 245, 245, .75)',
      borderBottom: '1px solid rgba(245, 245, 245, .75)',
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
