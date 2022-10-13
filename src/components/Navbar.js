'use strict'
import { Link, Flex } from 'smbls'

const link = {
  extend: Link,
  props: {
    color: 'white',
    fontSize: 'Z',
    opacity: '.8',
    ':hover': { opacity: 1 },
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
