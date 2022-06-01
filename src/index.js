'use strict'

import DOM from 'domql'
import router from 'domql/packages/router'

import App from './app'
import { FastClick } from 'fastclick'

export default DOM.create(App)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

window.addEventListener('load', event => {
  App.state.update({ isLoaded: true })
})

window.onpopstate = e => router(App, window.location.pathname, {}, 0, false)
