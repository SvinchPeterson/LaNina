'use strict'

import { Block } from '@symbo.ls/symbols'
import router from 'domql/packages/router'
import style from './style'

// import './config'
import './define'

import { Landing, Sololaki } from './pages'
// import { Story } from './sections'

const App = {
  key: 'app',
  proto: Block,
  style,

  state: {
    isLoaded: false
  },
  props: {
    // flexAlign: 'flex-start center'
  },

  define: { routes: param => param },
  routes: {
    '/': Landing,
    '/Sololaki': Sololaki
    // '/story': Story
  },

  on: {
    render: element => {
      router(element, window.location.pathname, {})
    }
  }
}

window.addEventListener('load', event => {
  App.state.update({ isLoaded: true })
})

export default App
