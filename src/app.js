'use strict'

import { Block, Button, Flex } from '@rackai/symbols'
import style from './style'

import './config'
import './define'

import { Landing } from './pages'

const App = {
  proto: Flex,
  key: 'app',
  style,
  Landing
}

export default App
