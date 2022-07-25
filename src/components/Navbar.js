'use strict'
import { Link } from 'smbls'

const link = {
  proto: Link,
  props: {
    color: 'cream2',
    fontWeight: '900',
    fontSize: 'Z',
    css: {
      textTransform: 'uppercase',
      textDecoration: 'none'
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
