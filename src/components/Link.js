'use strict'

import { deepMerge } from 'domql/src/utils'
import { router, lastLevel } from '@domql/router'
// import router from 'domql/packages/router'
import { Link } from 'smbls'

const RouteLink = {
  on: {
    click: (event, element, state) => {
      const root = element.lookup('app')
      const { href } = element.props
      const firstFour = href.slice(0, 4)
      if (href && firstFour !== 'http' && firstFour !== 'sket' && firstFour !== 'mail' && href.slice(0, 1) !== '#') {
        router(root, href, {}, { scrollToTop: element.props.scrollToTop })
        event.preventDefault()
      }
    }
  },
  attr: {
    draggable: 'false'
  }
}

deepMerge(Link, RouteLink)

export { Link }
