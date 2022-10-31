'use strict'

import { Text, Box, Flex } from 'smbls'

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
      text: `Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that's home to Caucasus Mountain villages and Black Sea shores.
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
      text: `Mission of our team at BB Travel is to make your stay memorable and authentic`
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

export const tbilisiTravelText = {
  extend: Text,
  props: {
    text: ` - capital of Georgia, Found In mid-5th century, Tbilisi is in the Caucasus is considered one of the most ancient cities. Before Tbilisi, Mtskheta was the Royal capital of Georgia till V century.`,
    span: { text: 'Tbilisi' }
  },

  span: {}
}

export const ananuriText = {
  props: {
    text: ` - is 66km north of Tbilisi is a classic
    example of beautiful old Georgian architecture in a
    beautiful location, enhanced by the Zhinvali Reservoir
    spreading out below.`,
    span: { text: 'The fortress of Ananuri' }
  },

  span: {}
}

export const gudauriText = {
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

export const gergetText = {
  props: {
    text: ` - is the name of 14th century Holy Trinity Church on north-eastern
    Georgia near the Gergeti village. The church is located at an
    altitude of 2170 meters, under the glacier Kazbegi (5047 m) on
    the right bank of Chkheri River.`,
    span: { text: 'Gergeti Trinity Church' }
  },

  span: {}
}

export const canionText = {
  props: {
    text: ` - is a deep mountain gorge situated 100 kilometers west of Tbilisi in Tsalka Municipality.
    we have 240-meter-long (787 feet) glass bridge with a diamond-shaped bar, which is largest and tallest hanging
    structure in the world.`,
    span: { text: 'dashbashi canyon' }
  },

  span: {}
}

export const kakhetiText = {
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

export const kutaisiText = {
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

export const goriText = {
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

export const borjomiText = {
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

export const rabatiText = {
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

export const mtsketaText = {
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
      span: {}
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

export const yerevanText = {
  props: {
    text: ` is the capital of the Republic of Armenia. In Soviet years Yerevan
    underwent massive reconstruction, following architect Alexander Tamanyan's plan to make
    a "perfect city" - a Neo-Classical town with wide avenues, resembling Paris, Vienna and Saint
    Petersburg.Central Yerevan is a true jewel of early Soviet architecture.
    `,
    span: { text: `Yerevan` }
  },
  span: {}
}

export const khorViperText = {
  props: {
    text: ` embodies the unquenchable longing of the entire Armenian people about their historical homeland and the biblical Mount Ararat. Khor Virap on the background of biblical Ararat has long become a symbol of
    Armenia and the most famous landmark ever depicted on various postcards and pictures.
    `,
    span: { text: `The monastery of Khor Virap` }
  },
  span: {}
}

export const noravankText = {
  props: {
    text: ` was built 13 centuries
    ago! The monastery stands majestically in the
    gorge of the river Arpa, and in the gorge,
    makes the view even more impressive.
    `,
    span: { text: `Noravank Monastery` }
  },
  span: {}
}

export const savaneText = {
  props: {
    text: ` the emerald of Armenia, is situated in the center of the marz.
    Lake Sevan is 1,900 meters above the sea level. It is one of the highest among the freshwater lakes in
    the world. Here are a great number of resorts, hotels and motels here and comfortable beaches.
    `,
    span: { text: `Lake Sevan` }
  },
  span: {}
}

export const savaneMonastryText = {
  props: {
    text: ` was built in 874. The complex consists of three churches, forecourt, a school, and other church
    constructions.
    `,
    span: { text: `Lake Sevan Monastry` }
  },
  span: {}
}

export const dilijanText = {
  props: {
    text: ` is a resort town with mild climate, fresh
    air in the northeast of Yerevan. It is famous for
    its amazing surroundings, called the "Armenian
    Switzerland" by the locals, due to the densely
    forested valleys and mountains with alpine
    meadows around.
    `,
    span: { text: `Dilijan` }
  },
  span: {}
}
