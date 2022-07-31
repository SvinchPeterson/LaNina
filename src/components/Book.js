import { Link } from 'smbls'

export const Book = {
  proto: Link,
  props: {
    padding: 'Y2 B',
    round: 'B',
    color: 'white',
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank',

    css: {
      border: '1px solid rgba(245, 245, 245, .5)',
      textDecoration: 'none',
      zIndex: 100,
      '&:hover > span': { opacity: '1' }
    }
  },

  span: {
    props: {
      text: 'BOOK',
      fontSize: 'Z',
      css: { opacity: '.8' }
    }
  }
}
