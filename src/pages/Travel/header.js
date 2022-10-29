'use strict'
import { Header, HeaderMobile } from '../../components'

export const header = {
  extend: Header,
  logo: {},
  navBar: {
    ...[
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'contact' } },
      { props: { display: 'none' } },
      { props: { display: 'none' } }
    ]
  }
}

export const headerMobile = {
  extend: HeaderMobile,
  props: {
    display: 'none !important',
    '@tabletS': { display: 'flex !important' }
  }
}
