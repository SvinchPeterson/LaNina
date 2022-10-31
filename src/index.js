'use strict'

import DOM from 'domql'
import SYSTEM from './config'

import { DevFocus } from './devFocus' // eslint-disable-line no-unused-vars
import { Sync } from './sync' // eslint-disable-line no-unused-vars

import App from './app'
import { FastClick } from 'fastclick'

import 'domql/packages/emotion'

import * as smbls from 'smbls'
import * as components from './components'

const app = DOM.create(App, undefined, 'app', {
  extend: [smbls.Box],
  components: { ...smbls, ...components },
  context: { SYSTEM }
})

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

window.addEventListener('load', event => {
  App.state.update({ isLoaded: true })
})

window.onkeydown = (ev) => {
  if (ev.altKey && ev.shiftKey) {
    app.state.update({ debugging: true, preventSelect: true }, {
      // preventUpdate: true,
      preventContentUpdate: true,
      preventRecursive: true
    })
  }
}

window.onkeyup = (ev) => {
  if ((!ev.altKey || !ev.shiftKey) && app.state.debugging) {
    app.focus.state.update({ area: false })
    app.state.update({ debugging: false, preventSelect: false }, { // TODO: does not update false
      // preventUpdate: true,
      preventContentUpdate: true,
      preventRecursive: true,
      preventPropsUpdate: true
    })
  }
}

// window.onpopstate = e => router(App, window.location.pathname, {}, 0, false)
export default app
