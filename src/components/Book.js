import { Link } from 'smbls'

export const Book = {
  proto: Link,
  props: {
    padding: 'Y2 W2 0 B',
    color: 'white',
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank',

    css: {
      borderTopLeftRadius: '8px',
      borderLeft: '1.5px solid rgba(245, 245, 245, .749)',
      borderTop: '1.5px solid rgba(245, 245, 245, .75)',
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
