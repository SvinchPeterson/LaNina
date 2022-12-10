'use strict'
import { Flex } from 'smbls'
import { FeedBack, NavHorizontalArrowsBlack } from '../components'

const navArrows = {
  extend: NavHorizontalArrowsBlack,
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
  props: {
    flexAlign: 'center space-between',
    width: '83%',
    margin: '0 auto',
    zIndex: '20',
    '@mobileL': { width: '85%' },
    navArrows: {
      childProps: { arrow: { boxSize: ' A' } }
    }
  },

  title: {
    tag: 'caption',
    text: 'Feedbacks',
    props: {
      fontWeight: '700',
      fontSize: 'B',
      style: {
        whiteSpace: 'nowrap',
        letterSpacing: '.3px',
        zIndex: '100',
        opacity: '.85'
      }
    }
  },

  navArrows
}

const props = {
  maxWidth: '1440px',
  minHeight: 'H',
  margin: 'E2 auto 0 auto',
  '@tabletL': {
    margin: '0 auto',
    maxWidth: '75%',
    padding: 'E 0 0 0',
    minHeight: 'H1'
  },
  '@mobileL': { maxWidth: '85%' },
  '@mobileS': { maxWidth: '90%' },
  '@mobileXS': { maxWidth: '98%' },

  content: {
    position: 'relative',
    width: '85%',
    margin: 'B auto 0 auto',
    '@mobileM': { width: '100%' },
    style: {
      '&:after': {
        content: '""',
        width: '50px',
        height: '100%',
        position: 'absolute',
        right: '0px',
        top: 0,
        background: 'linear-gradient(to left, rgba(248, 241, 227, 1) 0%,rgba(248, 241, 227, 0) 100%)'
      },
      '&:before': {
        content: '""',
        width: '50px',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: 0,
        background: 'linear-gradient(to right, rgba(248, 241, 227, 1) 0%,rgba(248, 241, 227, 0) 100%)',
        zIndex: 3
      }
    },
    feedbacks: {
      gap: 'B',
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
  props,

  heading: { extend: heading },
  content: {
    feedbacks: {
      extend: Flex,
      childExtend: {
        extend: FeedBack
      },
      ...[
        {
          name: { text: 'Mary' },
          p: {
            text: `
            Very cozy and comfortable, thanks to the BB staff, they always responded very quickly to my requests
              `
          },
          date: { text: 'july | 2022' }
        },

        {
          name: { text: 'Yana' },
          p: {
            text: `
            Very cool host, helpful! Met us after a night flight, left small treats, which is also very nice. The apartment is nice, located near the center, you can walk. Recommended
              `
          },
          date: { text: 'august | 2022' }
        },

        {
          name: { text: 'Yan' },
          p: {
            text: `
            Best apartment in Tbilisi, I recommend to everyone, the staff are responsive, clean, very authentic quiet courtyard nearby there is everything available !)
              `
          },
          date: { text: 'september | 2022' }
        },

        {
          name: { text: 'Olesya Borzdiko' },
          p: {
            text: `
            The stay was smooth. They are always nearby if you have any questions, open to suggestions, and thoughtful of not disturbing you. Our apartment was a little bit dark to our liking so we used lights all the time.
              `
          },
          date: { text: 'February | 2022' }
        },

        {
          name: { text: 'Iqra Ashraf' },
          p: {
            text: `
            Cozy homestay close to freedom Square and mall. Thank you to Team BB for making the stay comfortable
              `
          },
          date: { text: 'October | 2022' }
        },

        {
          name: { text: 'Katie' },
          p: {
            text: `
              Highly recommend to stay here! We really enjoyed BB Residence - Red Brick (also the other rooms look really cool too! ) It's in a great area, shops and bars nearby and also walking distance to lots of attractions and less than 10min walk to Freedom Square.
              `
          },
          date: { text: 'February | 2022' }
        },

        {
          name: { text: 'Cameron' },
          p: {
            text: `
              A lovely apartment in excellent location, perfect walking distance to sights, comfortable and cosy. Great hosts, they even brought me a cake and bottle of wine on my birthday! Would recommend
              `
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Alexsandr' },
          p: {
            text: `
              BB Residence is a great cozy apartments near Liberty Square. Its good to stay there and discover Tbilisi for yourself. Hope we will stay there again.
              `
          },
          date: { text: 'March | 2022' }
        },

        {
          name: { text: 'Daria' },
          p: {
            text: `
            The apartment is very cozy, clean, light, spacious. Very warm welcome, the location is great too, cute courtyard, in the evening it is very pleasant to spend time, plus parking in the yard, which is very convenient. We only have pleasant emotions and memories.
              `
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Stanislav' },
          p: {
            text: `
            Very nice and spacious place! An amazingly responsive and helpful host! Would definitely book again!
            Stanislav User Profile`
          },
          date: { text: 'April | 2022' }
        },

        {
          name: { text: 'Dilfusa' },
          p: {
            text: `
          Fue una estancia muy agradable! Hospitalidad, atencion excelente! Ubicacion y facilidades son perfectas. Muchas gracias a los duenos, me ayudaron en todo, presentaron mucho mas de lo prometido)))
              `
          },
          date: { text: 'December | 2021' }
        }
      ]
    }
  }
}
