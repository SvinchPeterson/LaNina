'use strict'

const props = {
  display: 'block'
}

export const Map = {
  tag: 'iframe',
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=BB+Residence',
    allowfullscreen: true
  },
  props
}
