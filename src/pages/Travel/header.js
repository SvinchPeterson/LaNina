'use strict'
import { Header, HeaderMobile } from '../../components'

export const header = {
  extend: Header,
  props: {
    logo: { title: { text: 'travel' } }
  },
  logo: {},
  navBar: {
    childExtend: { props: { scrollToTop: false } },
    ...[
      { props: { text: 'gallery', href: '#gallery' } },
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'contact', href: '#contact' } },
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
