'use strict'

import DOM from 'domql'
import { isObjectLike, exec } from 'domql/src/utils'
import { classList } from 'domql/src/element/mixins'
import createEmotion from '@emotion/css/create-instance'

const stylesNode = document.createDocumentFragment()

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache
} = createEmotion({
  key: 's'
  // container: stylesNode
})

const style = (params, element, node) => {
  const execPareams = exec(params, element)
  if (params) {
    if (isObjectLike(element.class)) element.class.style = execPareams
    else element.class = { style: execPareams }
  }
  classf(element.class, element, node)
}

const classf = (params, element, node) => {
  if (isObjectLike(params)) {
    const classObjHelper = {}
    for (const key in params) {
      const prop = exec(params[key], element)
      if (!prop) continue
      const CSSed = css(prop)
      classObjHelper[key] = CSSed
    }
    classList(classObjHelper, element, node)
  }
}

DOM.define({
  style,
  class: classf
}, { overwrite: true })

export { stylesNode }
