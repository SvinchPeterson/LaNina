'use strict'

const props = {
  display: 'block',
  minWidth: '60%',
  position: 'relative',
  round: 'Y2',
  css: {
    flex: 1,
    border: 'none',
    margin: '0 auto',
    boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)',
    minHeight: `${500 / 16}em`,
    '@media only screen and (max-width: 560px)': {
      minHeight: `${300 / 16}em`,
      marginTop: `${50 / 16}em`
    }
  }

}

export const Map = {
  tag: 'iframe',
  attr: {
    src: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAtj5iaocoLdNMIS2JBIymMUQTmds8_nlI&q=BB+Residence',
    allowfullscreen: true
  },
  props
}
