'use strict'
import { Link } from 'smbls'

const link = {
  extend: Link,
  props: {
    color: 'white',
    fontWeight: '700',
    fontSize: 'Z',
    style: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      letterSpacing: '.3px',
      opacity: '.9',
      '&:hover': { opacity: 1 }
    }
  }
}

const props = {
  flexAlign: 'center flex-start',
  gap: 'B2'
}

export const Navbar = {
  tag: 'nav',
  props,
  childExtend: link
}
