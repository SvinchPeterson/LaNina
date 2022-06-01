'use strict'

import { deepMerge } from 'domql/src/utils'
import router from 'domql/packages/router'
import { Link } from '@symbo.ls/symbols'

const RouteLink = {
  on: {
    click: (event, element, state) => {
      const root = element.lookup('app')
      const { href } = element.props
      const firstFour = href.slice(0, 4)
      if (href && firstFour !== 'http' && firstFour !== 'sket' && firstFour !== 'mail') {
        router(root, href, {})
        event.preventDefault()
      }
    }
  },
  attr: {
    draggable: 'false'
  }
}

deepMerge(Link, RouteLink)
console.log(Link)

export { Link }
