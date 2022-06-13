import { Text, Box, Img, Link } from '@symbo.ls/symbols'

export const Book = {
  proto: [Link, Box],
  props: {
    text: 'BOOK',
    position: 'fixed',
    top: 'B',
    left: 'D',
    padding: 'Z1 B2',
    color: 'cream .75',
    round: 'D',
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank'
  },
  style: {
    background: 'radial-gradient(rgba(60,84, 72, .55), rgba(60,84, 72, .65))',
    textDecoration: 'none',
    zIndex: 100,
    fontWeight: '900',
    backdropFilter: 'blur(20px)',
    fontSize: `${15 / 16}em`
  }
}
