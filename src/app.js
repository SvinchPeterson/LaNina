'use strict'

import router from 'domql/packages/router'

import './config'
import './emotion'
import './components'

import { Landing, Sololaki } from './pages'
// import { DevFocus } from './focus'
// import { Story } from './sections'

const App = {
  // proto: DevFocus,

  key: 'app',
  props: {
    background: 'radial'
  },

  state: {
    isLoaded: false
  },

  define: { routes: param => param },
  routes: {
    '/': Landing,
    '/Sololaki': Sololaki
  },

  on: {
    render: element => {
      router(element, window.location.pathname, {})
    }
  }
}

export default App
