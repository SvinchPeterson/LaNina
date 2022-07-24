'use strict'

import style from './style'
import router from 'domql/packages/router'

import './config'
import './reset'
import './emotion'
import './components'

import { Block } from 'smbls'
import { Landing, Sololaki } from './pages'
// import { Story } from './sections'

const App = {
  key: 'app',
  proto: Block,
  style,

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
