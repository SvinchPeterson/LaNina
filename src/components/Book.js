import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y2 B1',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',
    border: 'solid, cream',
    borderWidth: '1px',
    round: 'B',
    color: 'cream',
    opacity: '.85',
    ':hover': { opacity: '1' },
    span: {
      text: 'BOOK',
      fontSize: 'Z'
    }
  },

  span: {}
}
