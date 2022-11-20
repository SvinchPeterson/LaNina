'use strict'
import { Header, HeaderMobile } from '../../components'

export const header = {
  extend: Header,
  props: { logo: { title: { text: 'travel' } } },
  logo: {},
  navBar: {
    ...[
      { props: { text: 'gallery', href: '#gallery' } },
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'news feed', href: '#about' } },
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
