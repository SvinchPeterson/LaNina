'use strict'

import { Flex, Img } from 'smbls'

import { TravelFeedBack } from '../../../components'

import JACK_JPG from '../../../assets/images/travel/clients/jack.jpg'
import AMIT_JPG from '../../../assets/images/travel/clients/amit.jpg'
import LIA_JPG from '../../../assets/images/travel/clients/lia.jpg'
import GOMAN_JPG from '../../../assets/images/travel/clients/goman.jpg'
import LALANG_JPG from '../../../assets/images/travel/clients/lalang.jpg'

const props = {
  padding: '- A - A',
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
  childExtend: TravelFeedBack,
  ...[
    {
      props: {
        person: {
          img: { src: JACK_JPG },
          name: { text: 'Jack Ostergaard' }
        },
        pContainer: {
          p: { text: 'BB Travel led us in both Georgia and Armenia.  The people, sights, cultures, and everything were fantastic. My group would recommend BB Travel for anyone traveling to Georgia or Armenia.  Truly a great experience with very knowledgeable staff.' }
        },
        date: { text: '11 september / 2022' }
      }
    },

    {
      props: {
        person: {
          img: { src: AMIT_JPG },
          name: { text: 'Amit Ghodke' }
        },
        pContainer: {
          p: { text: 'BB travels are professional and best in hospitality. If anyone is planning to visit Georgia and looking for comfortable trip,contact BB Travels.I am recommending  it because I had a very good experience with them.Thank you Salome for help during the trip.Our son really like you and miss you.Hope to see you again.' }
        },
        date: { text: '26 november / 2022' }
      }
    },

    {
      props: {
        person: {
          img: { src: LIA_JPG },
          name: { text: 'Lia Ortega' }
        },
        pContainer: {
          p: { text: '🥰I had a wonderful Experience, People are nice and Friendly, overall it was amazing 😍thanks to our tour guide Salome and to our driver irakli it was a good experience,😍🥰 thanks to BB travel😇😇😇😘' }
        },
        date: { text: '14 may / 2022' }
      }
    },
    {
      props: {
        person: {
          img: { src: GOMAN_JPG },
          name: { text: 'Ghommam Hamza' }
        },
        pContainer: {
          p: { text: `I want to thank all who contributed in our lovely trip in Georgia. The trip was above the expectations. Magical trip bringing always wonderful people Special thanks to the BB Travel and our lovely guid Salome… big kiss 😘 and we see you again` }
        },
        date: { text: '9 september / 2022' }
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
