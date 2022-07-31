import { Link } from 'smbls'

export const Book = {
  proto: Link,
  props: {
    padding: 'Z B1',
    round: 'B',
    // padding: 'Y2 W2 0 B',
    color: 'white',
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank',

    css: {
      border: '1px solid rgba(245, 245, 245, .5)',
      textDecoration: 'none',
      zIndex: 100,
      // fontWeight: '900',
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
