'use strict'
import { Link, Flex } from 'smbls'

const link = {
  extend: Link,
  props: {
    color: 'cream',
    fontSize: 'Z',
    opacity: '.8',
    // fontWeight: '500',
    ':hover': { opacity: 1 },
    style: {
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }
}

const props = {
  align: 'flex-start center',
  childProps: {
    style: { letterSpacing: '5px' }
  }
}

export const Navbar = {
  tag: 'nav',
  extend: Flex,
  props,
  childExtend: link
}
