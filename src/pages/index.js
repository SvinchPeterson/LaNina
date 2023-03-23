'use strict'

import { Landing } from './Landing'
import { Sololaki } from './Sololaki'
import { Travel } from './Travel'

export * from './Landing'
export * from './Sololaki'
export * from './Travel'

export default {
  '/': Landing,
  '/Sololaki': Sololaki,
  '/Travel': Travel
}
