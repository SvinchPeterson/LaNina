'use strict'

import { Flex } from 'smbls'

import LEFT_ARROW_PNG from '../../../assets/icons/leftArrow-cream.png'
import RIGHT_ARROW_PNG from '../../../assets/icons/rightArrow-cream.png'
import { TourTab, NavigationArrows } from '../../../components'

import NATURE_JPG from '../../../assets/images/travel/nature.jpg'
import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'
import FOOD_JPG from '../../../assets/images/travel/food.jpg'
import JEEP_JPG from '../../../assets/images/travel/jeep.jpg'
import CULTURAL_JPG from '../../../assets/images/travel/meidan.jpg'

const exclusiveTours = { tag: 'button' }

const navArrows = {
  extend: NavigationArrows,
  props: {
    ':before': { background: '#D2D4D4' }
  },
  ...[
    {
      props: { arrow: { src: LEFT_ARROW_PNG } },
      on: {
        click: (event, element, state) => {
          const { content } = element.parent.parent
          content.node.scrollBy(-405, 0)
        }
      }
    },

    {
      props: { arrow: { src: RIGHT_ARROW_PNG } },
      on: {
        click: (event, element, state) => {
          const { content } = element.parent.parent
          content.node.scrollBy(405, 0)
        }
      }
    }
  ]
}

const shadow = {}

const props = {
  position: 'relative',
  margin: '0 auto 0 F',
  width: 'fit-content',
  height: 'fit-content',
  alignSelf: 'center',
  style: {
    overflowX: 'hidden',
    scrollBehavior: 'smooth'
  },
  ':before': {
    content: '""',
    width: '5px',
    height: '100%',
    borderRadius: '30px',
    background: '#1E2831',
    position: 'absolute',
    bottom: '0',
    left: '0px',
    zIndex: '10',
    style: {
      boxShadow: '2px 0px 3px 3px #1E2831'
      // '@media only screen and (max-width: 1280px)': { boxShadow: '0px 0px 50px 50px #1E2831' }
    }
  },
  '@tabletM': { margin: '0 auto 0 D' },

  shadow: {
    width: '20px',
    height: '100%',
    position: 'absolute',
    background: 'rgba(30, 40, 49, 1)',
    bottom: '0',
    right: '0',
    zIndex: '20',
    style: { boxShadow: '-2px 0px 70px 150px rgba(30, 40, 49, 1)' }
  },

  title: {
    text: 'tours',
    position: 'absolute',
    color: 'silver',
    fontSize: 'E',
    top: '-Y',
    left: 'B'
  },

  navArrows: {
    position: 'absolute',
    top: 'A',
    left: 'A'
  },

  exclusiveTours: {
    text: 'Exclusive Tours',
    padding: 'Z1 A1',
    background: 'radial-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .65))',
    round: 'C',
    position: 'absolute',
    right: 'F',
    top: 'Z2',
    border: 'none',
    zIndex: '30',
    fontWeight: '700',
    color: '#1E2831'
  },

  content: {
    gap: 'Z',
    padding: 'D E2 0 A',
    style: {
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      '::-webkit-scrollbar': { display: 'none' }
    }
  }
}

export const tabs = {
  extend: Flex,
  props,

  class: {
    show: (element, state) => state.activeTour
      ? {
        display: 'none'
      }
      : {
        display: 'flex'
        // animationName: opacities,
        // animationDuration: '.5s',
        // animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
      }
  },

  shadow,
  navArrows,
  exclusiveTours,
  content: {
    extend: Flex,
    childExtend: TourTab,
    ...[
      {
        props: { image: { backgroundImage: 'url(' + CULTURAL_JPG + ')' } }
      },
      {
        props: {
          image: { backgroundImage: 'url(' + FOOD_JPG + ')' },
          title: { text: 'Food and wine tour' }
        }
      },
      {
        props: {
          image: { backgroundImage: 'url(' + NATURE_JPG + ')' },
          title: { text: 'nature and eco tour' }
        }
      },
      {
        props: {
          image: { backgroundImage: 'url(' + ADVENTURE_JPG + ')' },
          title: { text: 'adventure tour' }
        }
      },
      {
        props: {
          image: { backgroundImage: 'url(' + JEEP_JPG + ')' },
          title: { text: 'jeep tour' }
        }
      }
    ]
  }
}
