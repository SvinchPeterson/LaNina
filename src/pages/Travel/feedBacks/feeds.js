'use strict'

import { Flex } from 'smbls'

import { TravelFeedBack } from '../../../components'

import FIROZMA_JPG from '../../../assets/images/travel/clients/firozma.jpg'
import JEFERSON_JPG from '../../../assets/images/travel/clients/jeferson.jpg'
import AISHA_JPG from '../../../assets/images/travel/clients/aysha.jpg'
import JAYDEE_JPG from '../../../assets/images/travel/clients/jaydee.jpg'
import LALANG_JPG from '../../../assets/images/travel/clients/lalang.jpg'

const props = {
  // padding: '- A - A',
  gap: 'A',
  style: {
    scrollBehavior: 'smooth',
    overflowX: 'auto',
    '::-webkit-scrollbar': { display: 'none' }
  }
}

export const feeds = {
  props,
  extend: Flex,
  childExtend: {
    extend: TravelFeedBack,
    props: {
      minWidth: '100%',
      height: `${400 / 16}em`,
      '@mobileL': {
        height: `${300 / 16}em`
      },
      '@mobileS': {
        height: `${250 / 16}em`
      },
      style: {
        '@media only screen and (min-width: 1024px) and (max-height: 650px)': {
          height: `${350 / 16}em !important`
        },
        '@media only screen and (min-width: 1024px) and (max-height: 550px)': {
          height: `${300 / 16}em !important`
        }
      }
      // minWidth: `${700 / 16}em`
      // maxWidth: '600px',
      // minHeight: '300px'
    }
  },
  ...[
    {
      props: {
        person: {
          img: { src: FIROZMA_JPG },
          name: { text: 'Firozmanjana Ismail' }
        },
        pContainer: {
          p: { text: `Where to begin with...this was one of our best tour..the country is soo beautiful and its people are so friendly n welcoming 😍 loved each day of our stay and our guide Salomi is such a lovely person and made our tour more comfortable and enjoyable 🥰🥰 It was a good itenerary if you like to experience the local culture, history and its beautiful mountainside.. and the meals were always like a feast..Had a really amazing and friendly driver too.. Had a wonderful experience overall and would highly recommend this tour. Thank u to BB Travel n our lovely guide Salomi` }
        },
        date: { text: '6 may / 2022' }
      }
    },

    {
      props: {
        person: {
          img: { src: JEFERSON_JPG },
          name: { text: 'Jefferson Buena Pardillo' }
        },
        pContainer: {
          p: { text: `Growing up in a tropical country, it is every child's dream to experience the snow. That dream was fulfilled when our family travelled to Georgia, an amazing paradise blessed with natural wonders. We had a magical experience playing in the snow, immersed with Georgian culture, getting to know amazing Georgian people and enjoyed local food. We had a very comfortable excursion thanks to our lovely guide Salome from BB travel. She is fluent in english who knows their country's rich history well and is detailed oriented who carefully planned the entire duration of the trip from booking of flights to visa application. She followed up with Georgian consul to ensure my parents will get their visas on time. We had also pleasant experience staying at BB residence, it is a service apartment furnished with basic home appliances. Location is also good as it is strategically located at the city centre and very near to famous tourist spots in Georgia. Overall I would recommend BB travel for their flight, transfers, tour and accommodation package. It is indeed a value for money.` }
        },
        date: { text: '8 april / 2022' }
      }
    },

    {
      props: {
        person: {
          img: { src: AISHA_JPG },
          name: { text: 'Aysha Firoze' }
        },
        pContainer: {
          p: { text: `One of the best tours I've ever attended. Everything was amazing: quality of the tour, service, my guide Salome who was really lovely girl and she is clearly passionate about her country which shows in this tour 🥰 and of course, unforgettably the beautiful country with ancient culture - Georgia. I would love to thank BB Travel !
          Highly recommended for everyone who is searching for new adventures 👍🏻` }
        },
        date: { text: '16 may / 2022' }
      }
    },

    {
      props: {
        person: {
          img: { src: JAYDEE_JPG },
          name: { text: 'Jaydee Andrea Bravo' }
        },
        pContainer: {
          p: { text: `If I can give 10 stars, I would totally rate BB travel with 10/10. Salome is the most resposible travel agent my sister and I dealth with. She never tries to oversell anything and it gives her genuine profession advice. George was a very good driver. He helped us with our luggages and even open the door for us.
          From the beginning of the trip to our last day I can say that we had a good experience and we will definitely recommend BB travel.
          I hope that everyone sees the review and books their trip with BB travel. You will definitely enjoy your travel with an affordable price. Happy Traveling!` }
        },
        date: { text: '5 december / 2022' }
      }
    },

    {
      props: {
        person: {
          img: { src: LALANG_JPG },
          name: { text: 'Lalang Pardillo' }
        },
        pContainer: {
          p: { text: `Amazing tourist guide in good English, speaking & good explanation about the History of Ancient civilization & shrine and friendly people. Georgia a country with a very interesting history, it was a big Blessing to us  to visit the Gorgeous Georgia in the snowing time. And makes my Dream come true to see the real snow in my life. Thank you Nick and Salome Petriashvili  the good service and car on time.` }
        },
        date: { text: '8 april / 2022' }
      }
    }
  ]

}
