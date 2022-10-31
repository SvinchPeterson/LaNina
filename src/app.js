'use strict'

import router from 'domql/packages/router'

import { DevFocus } from './devFocus'
import { Sync } from './Sync'

import { Landing, Sololaki, Travel } from './pages'

// import { Story } from './sections'

const App = {
  extend: [DevFocus, Sync],
  key: 'app',
  props: {
    '.preventSelect': {
      userSelect: 'none'
    }
  },

  state: {
    isLoaded: false
  },

  define: { routes: param => param },
  routes: {
    '/': Landing,
    '/Sololaki': Sololaki,
    '/Travel': Travel
  },

  on: {
    render: (el, s) => {
      router(el, window.location.pathname, {})
      Sync.on.render(el, s)
    }
  }
}

export default App
