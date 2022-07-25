'use strict'
import { Box } from 'smbls'
import { ContactItems, Map } from '../../components'

const map = {
  proto: Map
}

const contacts = {
  childProto: ContactItems,
  ...[
    {},
    {}
  ]
}

const props = {
  flexFlow: 'column',
  flexAlign: 'center center',
  width: `${1440 / 16}em`,
  // margin: '0 0 0 auto',
  css: {
    border: '5px solid red',
    alignSelf: 'center'
  }
}

export const Location = {
  props,
  tag: 'section',
  attr: { id: 'location' },
  map,
  contacts
}
