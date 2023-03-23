'use strict'

import { create } from 'smbls'

import config from '../symbols.json'
import pages from './pages'
import designSystem from './designSystem'

import { FastClick } from 'fastclick'

create({
  state: { isLoaded: false }
}, {
  key: config.key,
  pages,
  designSystem
}).then(() => {
  FastClick.attach(document.body)
})
