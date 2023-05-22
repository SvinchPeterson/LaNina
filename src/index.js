'use strict'

import { create } from 'smbls'

import config from '../symbols.json'
import pages from './pages'
import designSystem from './designSystem'

import { FastClick } from 'fastclick'

create({
  props: {
    width: '100%',
    height: '100%',
    background: 'cream',
    style: {
      flex: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      scrollBehavior: 'smooth',
      '::-webkit-scrollbar': { display: 'none' }
    }
  },
  state: { isLoaded: true },
}, {
  key: config.key,
  pages,
  designSystem,
  routerOptions: {
    scrollToTop: false,
    scrollDocument: false
  }
}).then(() => {
  FastClick.attach(document.body)
})
