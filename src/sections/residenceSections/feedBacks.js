'use strict'

import { Flex } from 'smbls'

import { FeedBack, HorArrowsBlack } from '../../components'

const navArrows = {
  extend: HorArrowsBlack,
  ...[
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: -feedbacks.node.clientWidth - 16.5 * 1.618
          })
        }
      }
    },
    {
      on: {
        click: (event, element, state) => {
          const { feedbacks } = element.parent.parent.parent.content
          feedbacks.node.scrollBy({
            top: 0,
            left: feedbacks.node.clientWidth + 16.5 * 1.618

          })
        }
      }
    }
  ]
}

const heading = {
  title: {
    tag: 'caption',
    text: 'Feedbacks'
  },

  navArrows
}

const feedbacks = {
  extend: Flex,

  childExtend: FeedBack,
  ...[
    {
      title: { text: 'Mary' },
      p: { text: ` Very cozy and comfortable, thanks to the BB staff, they always responded very quickly to my requests` },
      date: { text: 'july | 2022' }
    },

    {
      title: { text: 'Yana' },
      p: { text: ` Very cool host, helpful! Met us after a night flight, left small treats, which is also very nice. The apartment is nice, located near the center, you can walk. Recommended` },
      date: { text: 'august | 2022' }
    },

    {
      title: { text: 'Yan' },
      p: { text: ` Best apartment in Tbilisi, I recommend to everyone, the staff are responsive, clean, very authentic quiet courtyard nearby there is everything available !)` },
      date: { text: 'september | 2022' }
    },

    {
      title: { text: 'Olesya Borzdiko' },
      p: { text: `The stay was smooth. They are always nearby if you have any questions, open to suggestions, and thoughtful of not disturbing you. Our apartment was a little bit dark to our liking so we used lights all the time.` },
      date: { text: 'February | 2022' }
    },

    {
      title: { text: 'Iqra Ashraf' },
      p: { text: `Cozy homestay close to freedom Square and mall. Thank you to Team BB for making the stay comfortable`
      },
      date: { text: 'October | 2022' }
    },

    {
      title: { text: 'Katie' },
      p: { text: `Highly recommend to stay here! We really enjoyed BB Residence - Red Brick (also the other rooms look really cool too! ) It's in a great area, shops and bars nearby and also walking distance to lots of attractions and less than 10min walk to Freedom Square.`
      },
      date: { text: 'February | 2022' }
    },

    {
      title: { text: 'Cameron' },
      p: { text: `A lovely apartment in excellent location, perfect walking distance to sights, comfortable and cosy. Great hosts, they even brought me a cake and bottle of wine on my birthday! Would recommend` },
      date: { text: 'April | 2022' }
    },

    {
      title: { text: 'Alexsandr' },
      p: { text: ` BB Residence is a great cozy apartments near Liberty Square. Its good to stay there and discover Tbilisi for yourself. Hope we will stay there again.` },
      date: { text: 'March | 2022' }
    },

    {
      title: { text: 'Daria' },
      p: { text: `The apartment is very cozy, clean, light, spacious. Very warm welcome, the location is great too, cute courtyard, in the evening it is very pleasant to spend time, plus parking in the yard, which is very convenient. We only have pleasant emotions and memories.` },
      date: { text: 'April | 2022' }
    },

    {
      title: { text: 'Stanislav' },
      p: { text: `Very nice and spacious place! An amazingly responsive and helpful host! Would definitely book again! Stanislav User Profile` },
      date: { text: 'April | 2022' }
    },

    {
      title: { text: 'Dilfusa' },
      p: { text: `Fue una estancia muy agradable! Hospitalidad, atencion excelente! Ubicacion y facilidades son perfectas. Muchas gracias a los duenos, me ayudaron en todo, presentaron mucho mas de lo prometido))`
      },
      date: { text: 'December | 2021' }
    }
  ]
}

const props = {
  maxWidth: '1440px',
  flow: 'column',
  gap: 'A2',
  margin: '- auto - auto',

  heading: {
    flexAlign: 'center space-between',
    width: '80%',
    margin: '0 auto',
    title: {
      fontWeight: '700',
      style: {
        whiteSpace: 'nowrap',
        letterSpacing: '5px',
        zIndex: '100',
        opacity: '.85'
      }
    },
    navArrows: {
      gap: 'C1',
      childProps: { arrow: { boxSize: ' Z2' } }
    }
  },

  content: {
    position: 'relative',
    width: '90%',
    margin: '0 auto 0 auto',
    ':before': {
      content: '""',
      width: '250px',
      height: '100%',
      position: 'absolute',
      left: '0',
      top: '0',
      background: 'linear-gradient(to right, rgba(248, 241, 227, 1) 0%,rgba(248, 241, 227, 0) 100%)',
      zIndex: 3
    },
    ':after': {
      content: '""',
      width: '250px',
      height: '100%',
      position: 'absolute',
      right: '0',
      top: '0',
      background: 'linear-gradient(to left, rgba(248, 241, 227, 1) 0%,rgba(248, 241, 227, 0) 100%)',
      zIndex: 3
    },

    feedbacks: {
      gap: 'Z',
      style: {
        scrollBehavior: 'smooth',
        overflowX: 'auto',
        minWidth: '100%',
        alignSelf: 'center',
        '&::-webkit-scrollbar': { display: 'none' }
      }
    }
  }
}

export const feedBacks = {
  tag: 'section',
  extend: Flex,
  props,

  heading: { extend: heading },
  content: { feedbacks }
}
