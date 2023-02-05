'use strict'

import { Text, Box, Flex } from 'smbls'

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

export const shaori = {
  ...[
    {
      props: {
        text: `
        Megalithic complex is the one of the most interesting megalithic monuments, possibly has astronomic nature on the area of modern Georgia. It is located near Lake Paravani, at 2700m above sea level. Fortress Shaori is located on the top of Kerogli Mountain which represents extinct volcano. Amazing construction of Bronze Age is the copy of Abuli Fortress. The most interesting fact is good preserved rocky road. Among with the main fortress Shaori exist another one too located on the neighboring top 400m far to the east.
        `,
        span: { text: 'Shaori' }
      },
      span: {}
    },

    {
      props: {
        text: `Complex has a great value based on archeo-astronomic study it is oriented to the horizon point with an azimuth of 98-1000. That's why it is possible to use the complex as a solar observatory which will define solstice point.It was possible to observe sun rise and sunset in the days of solstice and many more astronomic feature.This kind of construction may be called “solar plant”. People had lived, worked, believed and observed over ancient luminaries of the ancient world for the purpose of orientation in time or space.`
      }
    }

  ]
}

export const abuli = {
  ...[
    {
      props: {
        text: `
        located on the south slope of lesser Abuli mountain, on latitude 2500 m above the sea level, is one of the most mysterious and not well studied megalithic structures from the Bronze Age.  The little Abuli mountain, which's height reaches 2700 m above the sea level, is one of the volcanic mountains of Samsari range. At the top, one of the extinct craters, according to rumors, there is a lake. The very top of the mountain is covered with gray stones, of which the Abuli fortress was built.
        `,
        span: { text: 'Abuli fortress' }
      },
      span: {}
    },

    {
      props: {
        text: `The fortress has the shape of the ring. We can distinguish tower and living quarters inside the fort. Now in the area are no water sources. There are also not found cultural layers, although the excavations were not conducted seriously. In the current climatic conditions Abuli cleavage at such a height is not suitable for life, because of too low temperatures, although the Javakheti plateau everywhere are scattered ruins from different epochs, which show once active life in these parts, when the climate was warmer and softer.`
      }
    }
  ]
}

export const adventure = {
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

export const birtvisi = {
  ...[
    {
      props: {
        text: ` is one of the oldest citadels in Georgia. It is located in the most inaccessible place, high in the mountains, among the impassable Birtvisi canyons. Currently, only parts of the walls and gates of the fortress remain, as well as the Sheupovari tower and the ruins of internal buildings. However, it is definitely worth seeing this miracle.`,
        span: { text: `Birtvisi Fortress ` }

      },
      span: {}
    },

    {
      props: {
        text: `When exactly the citadel was built, no one knows. In the sources that have come down to us, it has been mentioned since the beginning of the XI century. The fortress was part of the fortifications along with other fortresses: Partskhisi and Orbeti. At that time, most of modern Georgia was dominated by a state entity called the Tbilisi Emirate.`
      }
    }
  ]
}
