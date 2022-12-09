'use strict'
import { Link, Flex } from 'smbls'

const link = {
  extend: Link,
  props: {
    color: 'white',
    ':hover': { color: 'white 1' },
    style: {
      textDecoration: 'none'
    }
  }
}

export const Navbar = {
  tag: 'nav',
  extend: Flex,
  childExtend: link
}
