'use strict'
import { Link } from 'smbls'

const link = {
  proto: Link,
  props: {
    color: 'white',
    fontWeight: '700',
    fontSize: 'Z',
    css: {
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
  childProto: link
}
