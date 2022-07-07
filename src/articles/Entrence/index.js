'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

const yardEntrence = {
  proto: Box,
  props: {
    minWidth: `${900 / 16}em`,
    padding: 'F 0'
  },
  style: {
    flex: '1',
    backgroundAttachment: 'fixed',
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .45)), url(' + ENTRENCE_JPG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 2
  }
}

const streetEntrence = {
  proto: Box,
  props: {
    flex: '.4',
    minWidth: `${500 / 16}em`,
    minHeight: `${500 / 16}em`
  },
  style: {
    flex: '1',
    marginTop: `${50 / 16}em`,
    marginRight: `${-400 / 16}em`,
    backgroundImage: 'linear-gradient(rgba(60,84, 72, .2), rgba(60,84, 72, .45)),url(' + STREET_JPG + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right 250px bottom 200px'
  }
}

const texts = {
  proto: Box,
  props: {
    position: 'absolute',
    flexFlow: 'column',
    bottom: '-E2',
    margin: '0 0 0 -H1',
    gap: 'A1',
    minHeight: 'fit-content'
  },
  style: {
    zIndex: 3,
    alignSelf: 'center',
    boxSizing: 'border-box',
    textTransform: 'uppercase',
    letterSpacing: '1px'

  },

  ...[
    { text: 'central location' },
    { text: 'free on site parking' },
    { text: 'free wifi' },
    { text: '24/7 customer service' },
    { tex: 'complimentary services' }
  ]
}

export default {
  proto: Box,
  props: {
    flexFlow: 'column',
    position: 'relative',
    flexAlign: 'center center',
    minHeight: '100%',
    maxWidth: `${1440 / 16}em`,
    margin: '0 auto',
    maxHeight: 'I',
    gap: 'Z'
  },
  style: {
    marginBottom: `${400 / 16}em`,
    marginTop: `${300 / 16}em`
  },

  yardEntrence,
  streetEntrence,
  texts
}
