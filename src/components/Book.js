import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y2 B',
    round: 'B',
    color: 'white',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',

    style: {
      border: '1px solid rgba(245, 245, 245, .75)',
      textDecoration: 'none',
      zIndex: 100,
      '&:hover > span': { opacity: '1' }
    }
  },

  span: {
    props: {
      text: 'BOOK',
      fontSize: 'Z',
      style: { opacity: '.9' }
    }
  }
}
