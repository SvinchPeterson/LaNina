'use strict'

import { Flex, Button } from 'smbls'

const props = {
  flow: 'column',
  gap: 'Z',
  p: {
    flow: 'column',
    gap: 'Y',
    color: 'cream2 .65',
    letterSpacing: '.1px',
    maxWidth: 'H',
    fontSize: `${15.5 / 16}em`,
    style: {
      span: { color: 'rgba(248, 241, 227, 1)', fontWeight: '700' }
    }
  },
  more: {
    width: '60%',
    border: 'solid, cream2 .35',
    borderWidth: '.35px 0px 0px 0px',
    padding: 'Y2 - - -',
    button: {
      padding: '0',
      background: 'transparent',
      color: 'cream2 .85',
      fontSize: 'A',
      fontWeight: '700',
      alignSelf: 'flex-start',
      transition: 'color .25s ease-in-out',
      ':hover': { color: 'cream2' }
    }
  }
}

export const TourDescription = {
  tag: 'article',
  props,
  extend: Flex,
  p: {
    extend: Flex,
    title: { tag: 'span' }
  },
  more: { button: { extend: Button, text: 'more' } }
}
