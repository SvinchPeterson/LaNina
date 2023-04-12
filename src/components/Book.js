import { Link } from 'smbls'

export const Book = {
  extend: Link,
  props: {
    padding: 'Y1 B',
    round: 'B',
    href: 'https://www.airbnb.com/users/404104381/listings?fbclid=IwAR1M3Rx_GD2eAEA7nzUFqkAo6Ukr4Bkvjb4FKIragquUW54fukDFixV0gHE',
    target: '_blank',
    border: 'solid, white .55',
    borderWidth: '1px',
    color: 'white',
    letterSpacing: '0px',
    opacity: '.85',
    transition: 'opacity .5s ease, background .5s ease',
    ':hover': { opacity: '1', background: 'radial-gradient(rgba(255, 249, 237, 0), rgba(255, 249, 237, .05))' },
    ':hover > span': { transform: 'scale(1.05)' },
    span: {
      display: 'block',
      text: 'BOOK',
      fontWeight: '700',
      fontSize: `${12 / 16}em`,
      transition: 'transform .5s ease'
    }
  },

  span: {}
}
