'use strict'
import { Header, HeaderMobile } from '../../components'

export const header = {
  extend: Header,
  logo: {},
  navBar: {
    ...[
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'video blog', href: '#blog' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'contact' } },
      { props: { text: '' } }
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
