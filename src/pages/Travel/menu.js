'use strict'

import { Menu } from '../../components'

export const menu = {
  extend: Menu,
  sectionLinks: {
    ...[
      { props: { text: 'gallery', href: '#gallery' } },
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'blog', href: '#blog' } },
      { props: { text: 'about', href: 'about' } },
      { props: { text: 'contact', href: '#contact' } }
    ]
  }
}
