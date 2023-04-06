import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y B',
    round: 'B',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',
    border: 'solid, white .55',
    borderWidth: '1px',
    color: 'white',
    letterSpacing: '0px',
    opacity: '.85',
    ':hover': { opacity: '1' },
    span: {
      text: 'BOOK',
      fontWeight: '700',
      fontSize: `${12 / 16}em`
    }
  },

  span: {}
}
