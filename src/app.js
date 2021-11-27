'use strict'

import { Block, Button, Flex } from '@rackai/symbols'
import router from '@rackai/domql/packages/router'
import style from './style'

import './config'
import './define'

import { Landing, Sololaki } from './pages'

const App = {
  key: 'app',
  style,

  state: {
    isLoaded: false
  },
  props: {},

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

window.addEventListener('load', event => {
  App.state.update({ isLoaded: true })
})

export default App
