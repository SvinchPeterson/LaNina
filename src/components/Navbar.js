'use strict'
import { Link, Flex } from 'smbls'

const link = {
  extend: Link,
  props: { style: { textDecoration: 'none' } }
}

export const Navbar = {
  tag: 'nav',
  extend: Flex,
  childExtend: Link,
}
