'use strict'

import DOM from 'domql'
import { getColor } from '@symbo.ls/scratch'

import * as components from './components'
import * as sections from './sections'
import * as pages from './pages'

for (const key in components) {
  if (!components[key].__filepath) {
    if (components[key].proto && typeof components[key].proto !== 'string' && components[key].proto.__filepath) {
      components[key].__filepath = components[key].proto.__filepath
      continue
    }
    components[key].__filepath = `components/${key}.js`
  }
}
for (const key in sections) { sections[key].__filepath = `articles/${key}/index.js` }
for (const key in pages) { pages[key].__filepath = `pages/${key}.js` }

DOM.define({ __filepath: param => param })

export const DevFocus = {
  focus: {
    state: {},
    props: (el, s) => ({
      position: 'fixed',
      hide: !s.area
    }),
    class: {
      inset: (el, state) => {
        const { area } = state
        if (!area) return
        const { x, y, width, height } = area
        return {
          top: y - 6 + 'px',
          left: x - 6 + 'px',
          width: width + 12 + 'px',
          height: height + 12 + 'px'
        }
      }
    },
    style: {
      transform: 'translateZ(10px)',
      zIndex: 999999999999,
      borderRadius: '10px',
      boxShadow: `0 0 10px ${getColor('blue 0.1')}, 0 0 0 3px ${getColor('blue 0.3')}, 0 0 100vmax 100vmax ${getColor('black 0.75')}`,
      pointerEvents: 'none'
    },
    span: {
      props: {
        position: 'absolute',
        margin: 'A2 0',
        fontSize: 'Z',
        color: 'gray8',
        // color: 'blue',
        textDecoration: 'underline',
        fontWeight: '500',
        top: '100%'
      },
      style: {
        boxShadow: '0 25px 10px 35px black',
        textShadow: '0 0 10px black'
      },
      text: (el, s) => s.focusKey
    }
  },

  on: {
    mousemove: (ev, e, state) => {
      const el = ev.target.ref
      const fileWithpath = findFilePath(el)
      if (!fileWithpath) return

      const focusState = e.focus.state
      const updateValue = (area) => {
        focusState.update({ area, focusKey: fileWithpath.__filepath })
      }

      const update = () => {
        if (ev.altKey && ev.shiftKey) {
          const { x, y, width, height } = fileWithpath.node.getBoundingClientRect()
          const area = { x, y, width, height }

          if (!focusState.area) return updateValue(area)
          if (focusState.area.x !== area.x) updateValue(area)
        } else if (focusState.area) {
          focusState.update({ area: false })
        }
      }

      window.requestAnimationFrame(() => {
        update()
        window.requestAnimationFrame(update)
      })
    },
    click: ev => {
      const el = ev.target.ref
      const fileWithpath = findFilePath(el)
      if (!fileWithpath || !fileWithpath.__filepath) return
      if (ev.altKey && ev.shiftKey) window.location.href = `vscode://file/${__dirname}/${fileWithpath.__filepath}`
    }
  }
}

function findFilePath (el) {
  if (!el) return
  if (el.__filepath) return el
  return findFilePath(el.parent)
}
