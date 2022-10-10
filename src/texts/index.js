'use strict'

import { Text, Box } from 'smbls'

export const origin = {
  extend: Text,
  props: {
    text: `“La Nina Residence” is a company started by two brothers Giorgi and David,
    the idea started from our grandparents who started investing in real estate in the district of Sololaki and we collectively decided to
    give this so called old “Italian Yard” a new life by renovating them for personal reasons and in this process we realized that this
    location has a bigger and brighter future thus we started developing a apart hotel type of accommodation
    that would be the place to be for tourists with lot of new upcoming projects within this yard.`
  }
}

export const mission = {
  extend: Text,
  props: {
    text: `Providing remarkable lodging facilities and services to our guests. Emphasizing on customer service and creating an unforgettable in-home experience.`
  }
}

export const aroundArea = {
  props: {
    text: `If you’re ready to step out and explore the area, our apartments are conveniently located, within walking distance of a variety of popular local attractions: Liberty square, Botanical Garden, Sulfur bathes, bars, restaurants, shopping center.`
  }
}

export const vision = {
  extend: Text,
  props: {
    text: `“Constantly implementing new strategies to help the local community and applying new environmental technologies.
    We strive to be the place to stay in Tbilisi for guests who want to feel at home away from home.”`
  }
}

export const ResidenceText = {
  tag: 'p',
  ...[
    {
      text: `Situated in one of the most picturesque districts of Old Tbilisi, within walking distance from Liberty square and most famous sights, "BB Residence" Sololaki offers a choice of fully furnished apartments, having everything for confortable living.`
    },
    {
      text: `Right in the heart of the capital of Georgia, with plenty of food markets, restaurants, nightclubs and bars nearby, just in a few minutes from busy city life, you will find comfort and relaxation in a peaceful and calm area.`
    },
    {
      text: `Built in 19th century and listed as historical monument, the historical building is representing traditional Georgian housing structure called 'Italian Courtyard', making it an excellent model of past and present of the city. You will be charmed by a unique atmosphere, feeling yourself at the crossroads of cultures`
    }
  ]
}

export const countryText = {
  extend: Text,
  tag: 'p',
  ...[
    {
      text: `Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that's home to Caucasus Mountain villages and Black Seabeaches.
      `
    },
    {
      text: `Neighbor Countries -Turkey, Russia, Azerbaijan, Armenia. Georgia'sIs Famous for UNESCO World Heritage Listed Churches, Beautiful Nature and lots of Caves,most important -'World's oldest wine' found in 8,000-year-old (Qvevri ) Clay Pot in Georgia, The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town.`
    },
    {
      text: `Georgia's total territory covers 69,700 square kilometers. Population in Georgia is almost 4 million. Georgian currency is Georgian Lari ( ₾ ) (GEL).`
    }
  ]
}

export const aboutText = {
  tag: 'p',
  ...[
    {
      text: `BBTravel is a Georgian travel agency specialized in Georgia and the Caucasus region and offering Individual and group tours and other tour services in Georgia, Armenia and Azerbaijan.
      `
    },

    {
      text: `Our trips are authentic and close to the people, in order that you get to know the countries not as a tourist, but as a guest.`
    },

    {
      text: `We have mission to fell in love our guest to Georgia and Caucasus. Places, food, wine and people. we will give people all over the world unique, memorable and authentic travel experiences. `
    }
  ]
}

export const laninaSololaki = {
  extend: Text,
  props: {
    text: `“La Nina Residence Sololaki” is located in the heart of Tbilisi in the district of Sololaki,
    Amaghleba street 8/41. The building was originally built in 1898, and represents traditional Georgian housing structure called a so called
    “Italian yard” which in reality is “Tbilisian yard” - A socio-cultural space that characterizes the city of Tbilisi and gives you an insight of the unique architectural appearance of the city.
    Walking distance to liberty square, Mtatsminda park and other points of interest`
  }
}

export const wineText = {
  extend: Text,
  props: {
    text: `Georgians are very proud of their rich and historic winemaking culture, and as traditional methods enjoy a renaissance,
    the Qvevri (an earthenware vessel used to store and age wine for thousands of years). Georgia is generally considered the 'cradle of wine',
    as archaeologists have traced the world's first known wine creation back to the people of the South Caucasus in 6,000BC.`
  }
}
const roomParagraph = {
  extend: Box,
  heading: {
    props: {
      color: 'gold',
      padding: '0 0 Y2 0',
      maxWidth: 'G1',
      '@mobileL': { padding: '0 0 Y1 0' },
      style: {
        fontWeight: '500',
        lineHeight: '20px'

      }
    }
  },
  p: {
    extend: [Text, Box],
    props: {
      color: 'cream2 1'
    }
  }
}
export const ballerinaParagraph = {
  extend: roomParagraph,
  heading: {
    ...[
      'Enjoy special atmosphere, delicate and airy',
      { text: 'as ballerina’s dressing interior.' }
    ]
  },
  p: {
    props: {
      text: `The two-bedroom apartment of 72m2 on high first floor with open terrace, composed of living room with comfortable sofa bed for 1 person and 2 bedrooms  with King size bed and 2 single beds, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 5 people.`
    }
  }
}

export const redBrickParagrap = {
  extend: roomParagraph,
  heading: {
    ...[
      'Where traditional Georgian old style',
      { text: 'meets modernity!' }

    ],
    style: {
      '@media only screen and (max-width: 1366px)': {
        maxWidth: `fit-content`
      }
    }
  },
  p: {
    props: {
      text: `Studio apartment of 55m2 located on the ground floor, just few steps downstairs, composed of living area with comfortable sofa bed for 1 person and sleeping area with 1 Queen bed, private bathroom with shower, kitchen dining table, making the apartment comfortable for 3 people.`
    }
  }
}

export const yellowCouchParagraph = {
  extend: roomParagraph,
  heading: {
    ...[
      'Make yourself comfortable on',
      { text: 'yellow couch' }
    ],
    style: {
      '@media only screen and (max-width: 1366px)': {
        maxWidth: `fit-content`
      }
    }
  },
  p: {
    props: {
      text: `Cozy and quiet one bedroom apartment of 50 m2 with open terrace, located on high first floor and  composed of living room with comfortable sofa bed for 1 person and bedroom with 1 Queen bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 3 people.`
    }

  }
}

export const greenForestParagraph = {
  extend: roomParagraph,
  heading: {
    props: { text: 'Timeless and elegant, yet modern and fresh, green is your choice!' },
    style: {
      '@media only screen and (max-width: 1366px)': {
        maxWidth: `${420 / 16}em`
      }
    }
  },
  p: {
    props: {
      text: `One bedroom apartment of 51 m2 with open terrace, located on high first floor and  composed of living room and bedroom with 1 King bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 2 people.`
    }
  }
}

export const retroParagraph = {
  extend: roomParagraph,
  heading: {
    ...[
      'Where contemporary design combine',
      { text: 'with traditional architecture.' }
    ]
  },
  p: {
    props: {
      text: `Cozy and quiet one bedroom apartment of 44 m2 with open terrace, located on high first floor and  composed of living room with comfortable sofa bed for 1 person and bedroom with 1 Queen bed, private bathroom with shower, kitchen with a dining area, making the apartment comfortable for 3 people.`
    }
  }
}

export const distanceText = {
  extend: Text,
  props: {
    text: `Distance to Tbilisi International airport is 20 km.
    Central railway station is 11 km away.`
  }
}

export const locationText = {
  extend: Text,
  props: {
    text: 'Thanks to our location and proximity to the metro station and bus stops you can easily get to any place in the city.'
  }
}

export const transferText = {
  extend: Text,
  props: {
    text: `Airport transfer can be arranged upon request.
    From/To Tbilisi international airport - 20$ per trip
    From/To Kutaisi Airport - 100$ per trip`
  }
}

export const locationFeatured = {
  extend: Text,
  props: {
    text: `Location features
    Private entrance
    Separate street or building entrance
    Parking and facilities
    Free parking on premises`
  }
}

export const luggageText = {
  extend: Text,
  props: {
    text: `Luggage dropoff allowed
    for guests' convenience when they have early arrival or late departure`
  }
}

export const stayText = {
  extend: Text,
  props: {
    text: `Long term stays allow for 28 days or more`
  }

}
