'use strict'
import { Header, HeaderMobile } from '../../components'

export const header = {
  extend: Header,
  props: {
    mixBlendMode: 'difference',
    align: 'center space-between',
    logo: {
      padding: '0',
      alignSelf: 'center',
      title: {
        text: 'Travel',
        fontWeight: '400',
        color: 'cream2',
        fontSize: 'A'
      },
      logo: {
        boxSize: 'B1 ',
        opacity: '1'
      }

    },

    navBar: {
      padding: '0',
      childProps: {
        fontSize: `${15 / 16}em`,
        fontWeight: '700',
        color: 'cream2',
        textTransform: 'uppercase',
        style: { letterSpacing: '.5px' }
      }
    }

  },

  logo: {},
  navBar: {
    ...[
      { props: { text: 'gallery', href: '#about' } },
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
