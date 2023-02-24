import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y B',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',
    border: 'solid, white .5',
    borderWidth: '.5px',
    round: 'B',
    color: 'white',
    opacity: '.85',
    ':hover': { opacity: '1' },
    span: {
      text: 'BOOK',
      fontWeight: '400',
      fontSize: `${12 / 16}em`
    }
  },

  span: {}
}
