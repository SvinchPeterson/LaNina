import { Text, Box } from 'smbls'

export const origin = {
  proto: Text,
  props: {
    text: `“La Nina Residence” is a company started by two brothers Giorgi and David,
    the idea started from our grandparents who started investing in real estate in the district of Sololaki and we collectively decided to
    give this so called old “Italian Yard” a new life by renovating them for personal reasons and in this process we realized that this
    location has a bigger and brighter future thus we started developing a apart hotel type of accommodation
    that would be the place to be for tourists with lot of new upcoming projects within this yard.`
  }
}

export const mission = {
  proto: Text,
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
  proto: Text,
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

  // props: {
  //   text: `Situated in one of the most picturesque districts of Old Tbilisi, within walking distance from Liberty square and most famous sights, "BB Residence“ Sololaki offers a choice of fully furnished apartments, having everything for confortable living.

  //   Right in the heart of the capital of Georgia, with plenty of food markets, restaurants, nightclubs and bars nearby, just in a few minutes from busy city life, you will find comfort and relaxation in a peaceful and calm area.

  //   Built in 19th century and listed as historical monument, the historical building is representing traditional Georgian housing structure called "Italian Courtyard”, making it an excellent model (example?) of past and present of the city. You will be charmed by a unique atmosphere, feeling yourself at the crossroads of cultures.
  //   .`
  // }
}

export const laninaSololaki = {
  proto: Text,
  props: {
    text: `“La Nina Residence Sololaki” is located in the heart of Tbilisi in the district of Sololaki,
    Amaghleba street 8/41. The building was originally built in 1898, and represents traditional Georgian housing structure called a so called
    “Italian yard” which in reality is “Tbilisian yard” - A socio-cultural space that characterizes the city of Tbilisi and gives you an insight of the unique architectural appearance of the city.
    Walking distance to liberty square, Mtatsminda park and other points of interest`
  }
  // text: `- A socio-cultural space that characterizes the city of Tbilisi and gives you an insight of the unique architectural appearance of the city.
  // Walking distance to liberty square, Mtatsminda park and other points of interest.`
}

export const wineText = {
  proto: Text,
  props: {
    text: `Georgians are very proud of their rich and historic winemaking culture, and as traditional methods enjoy a renaissance,
    the Qvevri (an earthenware vessel used to store and age wine for thousands of years). Georgia is generally considered the ‘cradle of wine’,
    as archaeologists have traced the world’s first known wine creation back to the people of the South Caucasus in 6,000BC.`
    // text: ` These early Georgians discovered grape juice could be turned into wine by burying it underground for the winter.
    // Some of the qvevri’s were buried in could remain underground for up to 50 years. Wine continued to be important to the Georgians,
    // who incorporated it into art and sculpture,
    // with grape designs and evidence of wine-drinking paraphernalia found at ruins and burial sites..`
  }
}
const roomParagraph = {
  proto: Box,
  heading: {
    props: {
      color: 'gold',
      padding: '0 0 Y2 0',
      maxWidth: 'G1',
      '@mobileL': { padding: '0 0 Y1 0' },
      css: {
        fontWeight: '500',
        lineHeight: '20px'

      }
    }
  },
  p: {
    proto: [Text, Box],
    props: {
      color: 'cream2 1'
      // fontWeight: '400'
    }
  }
}
export const ballerinaParagraph = {
  proto: roomParagraph,
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
  proto: roomParagraph,
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
  proto: roomParagraph,
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
  proto: roomParagraph,
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
  proto: roomParagraph,
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
  proto: Text,
  props: {
    text: `Distance to Tbilisi International airport is 20 km.
    Central railway station is 11 km away.`
  }
}

export const locationText = {
  proto: Text,
  props: {
    text: 'Thanks to our location and proximity to the metro station and bus stops you can easily get to any place in the city.'
  }
}

export const transferText = {
  proto: Text,
  props: {
    text: `Airport transfer can be arranged upon request.
    From/To Tbilisi international airport - 20$ per trip
    From/To Kutaisi Airport - 100$ per trip`
  }
}

export const locationFeatured = {
  proto: Text,
  props: {
    text: `Location features
    Private entrance
    Separate street or building entrance
    Parking and facilities
    Free parking on premises`
  }
}

export const luggageText = {
  proto: Text,
  props: {
    text: `Luggage dropoff allowed
    for guests' convenience when they have early arrival or late departure`
  }
}

export const stayText = {
  proto: Text,
  props: {
    text: `Long term stays allow for 28 days or more`
  }

}
