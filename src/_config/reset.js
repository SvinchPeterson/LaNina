'use strict'

import { injectGlobal } from '@emotion/css'
import { RESET } from 'smbls'

import DOCUMENT from './document'

RESET.html.color = DOCUMENT.theme.color
RESET.html.background = DOCUMENT.theme.background

injectGlobal(RESET)
