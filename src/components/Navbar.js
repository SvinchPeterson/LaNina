'use strict'
import { Link } from 'smbls'

const link = {
  extend: Link,
  props: {
    color: 'white',
    // fontWeight: '100',
    fontSize: 'Z',
    style: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      opacity: '.9',
      '&:hover': { opacity: 1 }
    }
  }
}

const props = {
  flexAlign: 'flex-start center',
  gap: '0',
  childProps: {
    // background: 'radial-gradient(rgba(248, 241, 227, .15), rgba(248, 241, 227, .15))',
    // background: 'cream2 .15',
    // background: 'green2 .5',
    // padding: 'A B2',
    // round: 'C2',
    fontWeight: '500',
    // fontSize: '13px',
    style: { letterSpacing: '5px', textAlign: 'right' }
    // backdropFilter: 'blur(10px)',
    // border: '1px solid #3A5A75'
  }
}

export const Navbar = {
  tag: 'nav',
  props,
  childExtend: link
}
