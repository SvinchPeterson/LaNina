'use strict'

import router from 'domql/packages/router'

import { Landing, Sololaki } from './pages'
// import { Story } from './sections'

const App = {
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
