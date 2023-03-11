'use strict'

import { Text } from 'smbls'

export const aboutText = {
  tag: 'p',
  ...[
    {
      // text: `BBTravel is a Georgian travel agency specialized in Georgia and the Caucasus region and offering Individual and group tours and other tour services in Georgia, Armenia and Azerbaijan.
      // `
      text: `We go above and beyond to make our guest feel appreciated and we do everything in our power
      to show our guests how special Georgian Hospitality is. Introdusing our amazing nature and places as well Georgian Gastronomy and wine culture.
      `
    },

    {
      text: `Our trips are authentic & guest oriented, in order to make guest experience unforgettable and
      extraordinary. We make our guests feel at home.`
    },

    {
      span: 'Mission',
      text: ` of our team at BB Travel is to make your stay memorable and authentic`
    }
  ]
}

export const distanceText = {
  extend: Text,
  props: {
    text: `Distance to Tbilisi International airport is 20 km.
    Central railway station is 11 km away.`
  }
}

export const megalith = {
  props: {
    text: `. Mostly in southern part of Georgia, particularly, in Kvemo Kartli and Javakheti provinces. During the tour, we have an opportunity to discover less known ancient megalithic monuments. We will explore Lesser Caucasus fantastic landscapes and visit ancient cult monuments, where megalithic and Christian cultures are interrelated. Wonderful lakes and 360 % view of Javakheti
    `,
    span: { text: 'Mystical Unknown wonders of Georgia' }
  },
  span: {}
}

export const samshvilde = {
  ...[
    {
      props: {
        text: `,dating back to the 3rd millennia B.C., is known as one of the most ancient towns in the Caucasus region. This abandoned medieval town, which includes the ruins of a citadel, the central Sioni Temple along with several minor churches, an ancient cemetery, water reservoir, bridge and numerous caves is situated in the Tetri Tskaro district, approximately 70 km from Tbilisi.
        `,
        span: { text: 'Samshvilde' }
      },
      span: {}
    },

    {
      props: {
        text: `according to historical sources the first settlements in Samshvilde date back to the 4th millennia B.C. The meaning of the word “Samshvilde” is “the place of the bow”, which emphasizes its military function. Owing to its strategic location, Samshvilde was an object of attacks and sieges from various states or dynasties.`
      }

    }
  ]
}
