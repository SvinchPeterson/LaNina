'use strict'

import DOM from 'domql'
import './config'

import 'domql/packages/emotion'

import * as smbls from 'smbls'
import * as components from './components'

import App from './app'
import { FastClick } from 'fastclick'

export default DOM.create(App, undefined, 'app', {
  extend: [smbls.Box],
  components: { ...smbls, ...components }
})

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

window.addEventListener('load', event => {
  App.state.update({ isLoaded: true })
})

// window.onpopstate = e => router(App, window.location.pathname, {}, 0, false)
