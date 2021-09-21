'use strict'

import { injectGlobal } from 'emotion'
import { RESET } from '@rackai/symbols'

import DOCUMENT from './document'

RESET.html.color = DOCUMENT.theme.color
RESET.html.background = DOCUMENT.theme.background

injectGlobal(RESET)

