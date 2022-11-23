'use strict'

import { Menu } from '../../components'

export const menu = {
  extend: Menu,
  nav: {
    ...[
      { props: { text: 'gallery', href: '#gallery' } },
      { props: { text: 'tours', href: '#tours' } },
      { props: { text: 'about us', href: '#about' } },
      { props: { text: 'contact', href: '#contact' } },
      { props: { display: 'none' } },
      { props: { display: 'none' } }
    ]
  }
}
