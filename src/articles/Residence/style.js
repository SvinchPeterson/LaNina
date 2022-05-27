'use strict'

import ENTRENCE_JPG from '../../assets/images/sololaki/entrance.jpg'
import STREET_JPG from '../../assets/images/sololaki/street.jpg'

export const styleEntrence = {
  minHeight: `${800 / 16}em`,
  backgroundImage: 'url(' + ENTRENCE_JPG + ')',
  display: 'flex',
  boxSizing: 'border-box',
  padding: `${50 / 16}em 0 0 0`,
  backgroundSize: 'cover',
  position: 'relative',
  '@media only screen and (min-width: 1225px)': {
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  },
  '@media only screen and (max-width: 1225px)': {
    padding: `${50 / 16}em`
  },
  '@media only screen and (max-width: 768px)': {
    padding: `${30 / 16}em`,
    minHeight: `${450 / 16}em`,
    justifyContent: 'center'
  },
  '@media only screen and (max-width: 480px)': {
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'linear-gradient(rgba(42, 81, 61, 0),rgba(42, 81, 61, .35), rgba(42, 81, 61, .85))'
  },
  '> div': { alignSelf: 'flex-end', zIndex: 100 },

  '> span': {
    display: 'none',
    '@media only screen and (min-width: 1225px)': {
      display: 'block',
      flex: 1,
      backgroundAttachment: 'fixed',
      maxWidth: `${600 / 14}em`,
      marginLeft: 'auto',
      backgroundImage: 'url(' + STREET_JPG + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right bottom'

    }
  }
}
