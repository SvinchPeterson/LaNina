'use strict'

import DOM from '@rackai/domql'
import App from './src/app'
import { getCookie, setCookie } from './src/utils'

const KEY = '9EC6CB2A5122F61B0A5E4211B6C1F8E5F3708E0276DA2F23159AE7987EE74298'
const KEY2 = 'F6CC5B085B61387AC2C125BD1289137D02BC58A07AF9A766FA0DE45E0E5066F8'

async function sha256 (message) {
  const msgBuffer = new TextEncoder('utf-8').encode(message)
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
  return hashHex
}

const protect = {
  style: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '45%',
    minWidth: 300,
    transform: 'translate3d(-50%, -50%, 1px)',
    fontSize: 18,
    color: 'black',
    background: 'white',
    padding: 26
  },

  label: {
    tag: 'label',
    div: 'Password Protected',
    input: {
      tag: 'input',
      attr: { type: 'password', autofocus: true },
      style: {
        padding: 10,
        marginTop: 10,
        width: '100%'
      },
      on: {
        keyup: (event, element) => {
          var { node } = element
          var { value } = node
          sha256(value).then(hash => {
            var passph = hash.toUpperCase()
            if (passph === KEY || passph === KEY2) {
              setCookie('hash', passph, 3)
              protect.remove()
              DOM.create(App)
            }
          })
        }
      }
    }
  }
}

const hash = getCookie('hash')
if (hash === KEY || hash === KEY2) DOM.create(App)
else DOM.create(protect)
