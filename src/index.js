'use strict'

import DOM from 'domql'
import router from 'domql/packages/router'

import './config'
import './reset'
import './emotion'

import App from './app'
import { FastClick } from 'fastclick'

export default DOM.create(App)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

window.onpopstate = e => router(App, window.location.pathname, {}, 0, false)
