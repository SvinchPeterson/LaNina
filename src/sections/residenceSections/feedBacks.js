'use strict'

import { Flex } from 'smbls'

import { slideHide2, slideHide3 } from '../../animations'

import { FeedBack, NavArrowsBlack, ScrollTitleBlack } from '../../components'

function sideScroll (element, direction, speed, distance, step) {
  var scrollAmount = 0
  var slideTimer = setInterval(function () {
    if (direction === 'left') {
      element.scrollLeft -= step
    } else {
      element.scrollLeft += step
    }
    scrollAmount += step
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer)
    }
  }, speed)
}




const navArrows = {
  extend: NavArrowsBlack,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const content = document.getElementById('feedbacks')
          sideScroll(content, 'left', 10, 460, 10)
        }
      }
    },

    {
      on: {
        click: (event, element, state) => {
          // const { tabs } = element.parent.parent.parent.content
          const content = document.getElementById('feedbacks')
          sideScroll(content, 'right', 10, 460, 10)
        }
      }
    }
  ]
}


const feedbacks = {
  extend: Flex,

  childExtend: { extend: FeedBack},
  ...[
    {
      content: {
        title: { text: 'Mary' },
        p: { text: ` Very cozy and comfortable, thanks to the BB staff, they always responded very quickly to my requests` },
        date: { text: 'july | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Yana' },
        p: { text: ` Very cool host, helpful! Met us after a night flight, left small treats, which is also very nice. The apartment is nice, located near the center, you can walk. Recommended` },
        date: { text: 'august | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Yan' },
        p: { text: ` Best apartment in Tbilisi, I recommend to everyone, the staff are responsive, clean, very authentic quiet courtyard nearby there is everything available !)` },
        date: { text: 'september | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Olesya Borzdiko' },
        p: { text: `The stay was smooth. They are always nearby if you have any questions, open to suggestions, and thoughtful of not disturbing you. Our apartment was a little bit dark to our liking so we used lights all the time.` },
        date: { text: 'February | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Iqra Ashraf' },
        p: { text: `Cozy homestay close to freedom Square and mall. Thank you to Team BB for making the stay comfortable`
        },
        date: { text: 'October | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Katie' },
        p: { text: `Highly recommend to stay here! We really enjoyed BB Residence - Red Brick (also the other rooms look really cool too! ) It's in a great area, shops and bars nearby and also walking distance to lots of attractions and less than 10min walk to Freedom Square.`
        },
        date: { text: 'February | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Cameron' },
        p: { text: `A lovely apartment in excellent location, perfect walking distance to sights, comfortable and cosy. Great hosts, they even brought me a cake and bottle of wine on my birthday! Would recommend` },
        date: { text: 'April | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Alexsandr' },
        p: { text: ` BB Residence is a great cozy apartments near Liberty Square. Its good to stay there and discover Tbilisi for yourself. Hope we will stay there again.` },
        date: { text: 'March | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Daria' },
        p: { text: `The apartment is very cozy, clean, light, spacious. Very warm welcome, the location is great too, cute courtyard, in the evening it is very pleasant to spend time, plus parking in the yard, which is very convenient. We only have pleasant emotions and memories.` },
        date: { text: 'April | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Stanislav' },
        p: { text: `Very nice and spacious place! An amazingly responsive and helpful host! Would definitely book again! Stanislav User Profile` },
        date: { text: 'April | 2022' }
      }
    },

    {
      content: {
        title: { text: 'Dilfusa' },
        p: { text: `Fue una estancia muy agradable! Hospitalidad, atencion excelente! Ubicacion y facilidades son perfectas. Muchas gracias a los duenos, me ayudaron en todo, presentaron mucho mas de lo prometido))`
        },
        date: { text: 'December | 2021' }
      }
    }
  ]
}

const props = {
  width: '80%',
  minHeight: `${300 / 16}em`,
  flow: 'column',
  align: 'centet center',
  gap: '0',
  alignSelf: 'center',
  position: 'relative',
  '@maxTabletM': { margin: '- - F -'},
  '@maxMobileL': {
    fontSize: `${15 / 16}em`,
    minHeight: `${400 / 15}em`,
    width: '100%'
  },
  '@maxMobileM': {margin: '- - D -'},

  style: { overflowX: 'hidden', '::-webkit-scrollbar': { display: 'none' }},
  ':before': {
    content: '""',
    width: `${200 / 16}em`,
    height: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    background: 'linear-gradient(to right, rgba(255, 249, 237, 1) 0%,rgba(255, 249, 237, 0) 100%)',
    zIndex: 3,
    pointerEvents: 'none',
    '@maxMobileL': { width: `${150 / 16}em` },
    '@maxMobileS': { width: `${100 / 16}em` }
  },
  ':after': {
    content: '""',
    width: `${200 / 16}em`,
    height: '100%',
    position: 'absolute',
    right: '0',
    top: '0',
    background: 'linear-gradient(to left, rgba(255, 249, 237, 1) 0%,rgba(255, 249, 237, 0) 100%)',
    zIndex: 3,
    pointerEvents: 'none',
    '@maxMobileL': { width: `${150 / 16}em` },
    '@maxMobileS': { width: `${100 / 16}em` }
  },
  title: {
    fontSize: `${16 / 16}em`,
    fontWeight: '700',
    transform: 'rotate(180deg)',
    position: 'absolute',
    textTransform: 'capitalize',
    zIndex: '10',
    height: '100%',
    align: 'center center',
    padding: 'Y2 - Y2 C',
    boxSizing: 'border-box',
    letterSpacing: '1px',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed'
    }

  },

  content: {
    position: 'relative',
    padding: '- B - B1',
    style: { overflowX: 'auto' },
    feedbacks: {
      gap: '0',
      width: '100%',
      '@maxMobileL': { width: '90%'},
      style: {
        scrollBehavior: 'smooth',
        // animationName: slideHide2,
        animationDuration: '80s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        minWidth: '100%',
        alignSelf: 'center',
        '&::-webkit-scrollbar': { display: 'none' }
      },

      childProps: {
        content: {
          title: { '@maxMobileS': { fontSize: 'D' }}
        },
         '@maxMobileL': {
          minWidth: `${350 / 16}em`,
          maxWidth: `${350 / 16}em`,
          height: 'G'
        }
      }
    }
  },

  footer: {
    align: 'flex-end space-between',
    width: '100%',
    margin: '0 auto',
    zIndex: '10',
    '@maxMobileL': {
      width: '95%',
      align: 'flex-end flex-end',
      padding: 'Y1 Z2 - -',
    },

    navArrows: {
      margin: '- - - auto',
      gap: 'Z',
      childProps: { boxSize: 'B2 B2', border: 'none' },
      '@maxMobileL': { display: 'none' }
    },
    scrollTitle: {
      '@minMobileL': { display: 'none' }
    }
  }
}

export const feedBacks = {
  tag: 'section',
  extend: Flex,
  props,

  title: {
    tag: 'h5',
    extend: Flex,
    text: 'feedbacks'
  },

  content: {
    attr: { id: 'feedbacks' },
    feedbacks
  },
  footer: {
    extend: Flex,
    // title: { tag: 'h5', text: 'Feedbacks' },
    navArrows,
    scrollTitle: { extend: ScrollTitleBlack }
  },
}
