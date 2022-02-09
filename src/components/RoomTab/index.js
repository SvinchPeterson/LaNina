'use strict'

import { Block, Link } from '@rackai/symbols'

import { heightGallery } from '../../animations'

import BALLERINA_COVER_IMG from '../../assets/images/ballerina/ballerinaCovers.jpg'
import REDBRICK_COVER_IMG from '../../assets/images/redBrick/redBrickCovers.jpg'
import YELLOWCOUCH_COVER_IMG from '../../assets/images/yellowCouch/yellowCouchCovers.jpg'

const roomTab = {
  proto: [Link, Block],
  state: {
    activeImage: 0
  },
  style: {
    flex: 1,
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      fontSize: `${20 / 16}em`,
      position: 'absolute',
      color: 'rgba(243, 231, 219, 1)',
      top: `${50 / 20}em`,
      right: `${50 / 20}em`,
      whiteSpace: 'nowrap',
      textTransform: 'Uppercase',
      fontFamily: 'Bellefair',
      letterSpacing: '3px'
    }
  },
  on: {
    click: (event, element, state) => {
      state.update({ active: element.key })
      element.parent.parent.rooms.update({
        style: {
          minHeight: '800px'
          // animationName: heightGallery,
          // animationDuration: '4s',
          // animationDelay: '1s'
        }
      })
    }
  },

  image: {
    style: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      filter: 'brightness(60%) grayscale(50%)'
    }
  }
}

export const tabBallerina = {
  proto: roomTab,
  props: {
    href: '#ballerina'
  },

  style: {
    '&::after': {
      content: '"balerina"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + BALLERINA_COVER_IMG + ')' }
  }
}

export const tabRedBrick = {
  proto: roomTab,
  props: {
    href: '#redBrick'
  },
  style: {
    '&::after': {
      content: '"redBrick"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + REDBRICK_COVER_IMG + ')' }
  }
}

export const tabYellowCouch = {
  proto: roomTab,
  props: {
    href: '#yellowCouch'
  },
  style: {
    flex: 1,
    '&::after': {
      content: '"yellow couch"'
    }
  },

  image: {
    style: { backgroundImage: 'url(' + YELLOWCOUCH_COVER_IMG + ')' }
  }
}
