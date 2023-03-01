'use strict'

import { Flex } from 'smbls'

export const countryText = {
  tag: 'p',
  ...[
    {
      span: { text: 'Georgia' },
      text: `, a country at the intersection of Europe and Asia, is a former Soviet republic that's home to Caucasus Mountain villages and Black Sea shores.
      `
    },
    {
      text: `Neighbouring Countries -Turkey, Russia, Azerbaijan, Armenia. Georgia is Famous for UNESCO World number of unique caves and most importantly -'World's oldest wine' found in 8,000-year-old (Qvevri ) Clay Pot in Georgia, The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town.`
    },
    {
      text: `Georgia's total territory covers 69,700 square kilometers. Population in Georgia is almost 4 million. Georgian currency is Georgian Lari (GEL).`
    }
  ]
}

export const textTbilisi = {
  tag: 'p',
  props: {
    text: ` - capital of Georgia, Found In mid-5th century, Tbilisi is in the Caucasus is considered one of the most ancient cities. Before Tbilisi, Mtskheta was the Royal capital of Georgia till V century.`,
    span: { text: 'Tbilisi' }
  },
  span: {}
}

export const textAnanuri = {
  props: {
    text: ` - is 66km north of Tbilisi is a classic
    example of beautiful old Georgian architecture in a
    beautiful location, enhanced by the Zhinvali Reservoir
    spreading out below.`,
    span: { text: 'The fortress of Ananuri' }
  },

  span: {}
}

export const textGudauri = {
  props: {
    text: ` - is a mountain ski resort situated on a south-facing
    plateau of the greater Caucasus mountain range in Georgia,
    2,200 m above sea level. Its skiable area enjoys the
    maximum exposure to the sun, which makes Gudauri a
    magnificent all-year-round tourist destination.`,
    span: { text: 'Gudauri' }
  },

  span: {}
}

export const textGergeti = {
  props: {
    text: ` - is the name of 14th century Holy Trinity Church on north-eastern
    Georgia near the Gergeti village. The church is located at an
    altitude of 2170 meters, under the glacier Kazbegi (5047 m) on
    the right bank of Chkheri River.`,
    span: { text: 'Gergeti Trinity Church' }
  },

  span: {}
}

export const textDashbashi = {
  props: {
    text: ` - is a deep mountain gorge situated 100 kilometers west of Tbilisi in Tsalka Municipality.
    we have 240-meter-long (787 feet) glass bridge with a diamond-shaped bar, which is largest and tallest hanging
    structure in the world.`,
    span: { text: 'dashbashi canyon' }
  },

  span: {}
}

export const textMtsketa = {
  props: { flow: 'column', gap: 'Z' },

  ...[
    {
      props: {
        text: ` has been
        Georgia's spiritual heart
        since Christianity was
        established here in about
        327, and holds a near-
        mystical significance in
        Georgian culture.`,
        span: { text: `Mtsketa` }
      },
      span: { props: { fontWeight: '700' } }
    },

    {
      ...[
        'Mtskheta has always kept its status as a spiritual capital, and its ',
        { tag: 'span', text: 'Svetitskhoveli Cathedral' },
        ' is still the setting for important ceremonies of the Georgian Orthodox Church.'
      ]
    }
  ]
}

export const textKakheti = {
  extend: Flex,
  props: { flow: 'column', gap: 'Z' },

  ...[
    {
      props: {
        text: ` - is Georgia's premier wine-producing area. Almost everywhere you go, you'll be invited to drink a glass of wine and it's easy to find yourself wandering around in a semi-permanent mellow haze.`,
        span: { text: 'The eastern of Kakheti' }
      },
      span: {}
    },

    {
      ...[
        `Kakheti is also rich in history. Here you'll find the incredible monastery complex of `,
        { tag: 'span', text: 'Davit Gareji' },
        ', The picturesque hilltop town of ',
        { tag: 'span', text: 'Sighnagi City of Love' },
        ', and Many of beautiful Churches, Castles and mansions around the main town ',
        { tag: 'span', text: 'Telavi' }
      ]

    }
  ]
}

export const textKutaisi = {
  extend: Flex,
  props: { flow: 'column', gap: 'Z' },

  ...[
    {
      props: {
        text: ` - located in the Imereti region on the
        banks of the river Rioni. Kutaisi is the
        administrative center of Imereti Region. It is one
        of the oldest cities in Georgia and fifth
        among the oldest cities in Europe. Kutaisi and its
        surrounding areas are
        distinguished by the beautiful nature and
        abundance of cultural monuments.`,
        span: { text: 'kutaisi' }
      },
      span: {}
    },

    {
      ...[
        { tag: 'span', text: 'Prometheus Cave' },
        ` may regard as the visit card of
        Georgia. The magic cave is full with stunning
        curtains of stalactites and stalagmites. It is possible to
        walk through the length of 1420 meters in the
        cave's territory visit the halls and
        enjoy `,
        { tag: 'span', text: 'boat tour' },
        ' by walking the river.'
      ]
    }
  ]
}

export const textGori = {
  extend: Flex,
  props: { flow: 'column', gap: 'Z' },

  ...[
    {
      props: {
        text: ` in Gori - Stalin
        originally Georgian, was the secretary
        general of the Communist Party during
        second world war and one of the most
        influential dictators of modern times.
        Museum features Stalin's house - a hut

        where he was born; his armor plated
        railway carriage and a statue that was
        controversially standing in the main
        square of Gori up until 2010.`,
        span: { text: `Joseph Stalin's Museum` }
      },
      span: {}
    },

    {
      props: {
        text: `, in translation Fortress of the Lord,
        is a cave town fortress situated on a rocky
        massif on the left bank of the river Mtkvari.
        Dating back to I-II millennium B.C. Uplistsikhe
        was an important religious, political and
        cultural centre in the Hellenistic and the late
        Antique periods.`,
        span: { text: `Uplistsikhe` }
      },
      span: {}
    }
  ]
}

export const textBorjomi = {
  props: {
    text: ` is a hydrothermal health spa resort in the southern region of
    Samskhe -Javakheti in Georgia. Borjomi
    has an international reputation for its
    geothermal spring mineral water
    resources. Borjomi has an international
    reputation for its geothermal spring
    mineral water resources. Its accessible
    location in the beautiful Lesser
    Caucasus Mountains attracts tourists in
    search of nature`,
    span: { text: `Borjomi` }
  },
  span: {}
}

export const textRabati = {
  props: {
    text: ` lies in the city of Akhaltsikhe, Samtskhe - Javakheti region in Georgia.
    The city and probably the
first castle were founded in the 9th
century by Guaram Mampali, In
2011-2012 the entire complex was
rebuilt in order to attract more
tourist to the area;
    `,
    span: { text: `Rabati Castle` }
  },
  span: {}
}

export const textAdventure = {
  ...[
    {
      props: {
        text: `, a country at the intersection of Europe and Asia, is a former Soviet republic that's home to Caucasus Mountain villages and Black Sea beaches. Neighbor Countries -Turkey, Russia, Azerbaijan, Armenia. Georgia's Is Famous for UNESCO World Heritage Listed Churches`,
        span: { text: 'Georgia' }
      },
      span: {}
    },
    {
      props: {
        text: `Beautiful Nature and lots of Caves, most important -'World's oldest wine' found in 8,000-year-old (Qvevri ) Clay Pot in Georgia, The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town. Georgia's total territory covers 69,700 square kilometers. Population in Georgia is almost 4 million. Georgian currency is Georgian Lari ( ₾ ) (GEL).`
      }
    }
  ]
}
