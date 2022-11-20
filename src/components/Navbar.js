'use strict'
import { Link, Flex } from 'smbls'

const link = {
  extend: Link,
  props: {
    color: 'white .85',
    fontSize: '14px',
    ':hover': { color: 'white 1' },
    style: {
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }
}

export const Navbar = {
  tag: 'nav',
  extend: Flex,
  childExtend: link
}
