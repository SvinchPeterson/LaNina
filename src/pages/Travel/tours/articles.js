'use strict'

import { TourArticle } from '../../../components'

import {
  tbilisiTravelText,
  ananuriText,
  gudauriText,
  gergetText,
  borjomiText,
  canionText,
  goriText,
  kakhetiText,
  kutaisiText,
  mtsketaText,
  rabatiText,
  yerevanText,
  khorViperText,
  noravankText,
  savaneText,
  savaneMonastryText,
  dilijanText
} from '../../../texts'

export const tbilisiArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: { childExtend: tbilisiTravelText },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      }
    ]
  }
}

export const ananuriArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      }
    ]
  }
}

export const borjomiArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: borjomiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Borjomi Central Park' } },
              { props: { text: '- Mineral Water tasting' } },
              { props: { text: '- Cable Car' } }
            ]
          }
        }
      }
    ]
  }
}

export const canyonArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: canionText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Dashabshi Canyon' } },
              { props: { text: '- Brilliant Glass Bridge' } }
            ]
          }
        }
      }
    ]
  }
}

export const goriArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: goriText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Stalin Museum' } },
              { props: { text: '- Uplistsikhe Cave City' } }
            ]
          }
        }
      }
    ]
  }
}

export const kakhetiArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: kakhetiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Wine Tasting in Traditional Winery' } },
              { props: { text: '- Bodbe Monastery' } },
              { props: { text: '- ST. Nino Waterfall' } },
              { props: { text: '- Signagi City' } }
            ]
          }
        }
      }
    ]
  }
}

export const qutaisiArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: kutaisiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Prometheus Cave' } },
              { props: { text: '- Martvili Canyon' } }
            ]
          }
        }
      }
    ]
  }
}

export const mtsketaArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: mtsketaText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Svetitskhoveli Cathedral 11th' } },
              { props: { text: '- Jvari Monastery - 6th' } }
            ]
          }
        }
      }
    ]
  }
}

export const rabatiArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: {},
        paragraphs: {
          childExtend: rabatiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Rabati Castle walking Tour' } }
            ]
          }
        }
      }
    ]
  }
}

export const caucasusArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: { text: 'day 1 - Tbilisi City tour' },
        paragraphs: { childExtend: tbilisiTravelText },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 2 - Ananuri / Gudauri / Kazbegi' },
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 3 - kakheti tour' },
        paragraphs: {
          childExtend: kakhetiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Wine Tasting in Traditional Winery' } },
              { props: { text: '- Bodbe Monastery' } },
              { props: { text: '- ST. Nino Waterfall' } },
              { props: { text: '- Signagi City' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 4 - Arrival Armenia / Yerevan City Tour' },
        paragraphs: {
          childExtend: yerevanText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Garni' } },
              { props: { text: '- Geghard' } },
              { props: { text: '- Symphony of the stone city walking tour around the country' } },
              { props: { text: '- Armenian Historical Museum' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 5 - Armenia Tour' },
        paragraphs: {
          ...[
            { extend: khorViperText },
            { extend: noravankText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Khor Virap' } },
              { props: { text: '- Novaravank' } },
              { props: { text: '- Ararat Valley' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 6 - Sevan / Sevanavank' },
        paragraphs: {
          ...[
            { extend: savaneText },
            { extend: savaneMonastryText },
            { extend: dilijanText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Dilijan' } },
              { props: { text: '- Sevan lake' } },
              { props: { text: '- Sevanavank' } },
              { props: { text: '- Parz Park' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 7 - Departure AM Airport' },
        list: {
          title: { text: 'Package Inclusion' },
          list: {
            ...[
              { props: { text: '3 Night hotel stay with breakfast' } },
              { props: { text: '3 Days Private Tour' } },
              { props: { text: 'Comfortable Car with professional driver' } },
              { props: { text: 'English Speaking Guide' } },
              { props: { text: 'Wine Tasting + excursion included' } },
              { props: { text: '2 Airport Transfer' } }
            ]
          }
        }
      }
    ]
  }
}

export const $2n3dArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: { text: 'day 1 - Tbilisi City tour' },
        paragraphs: { childExtend: tbilisiTravelText },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 2 - Ananuri / Gudauri / Kazbegi' },
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 3 - Departure TBS Airport' },
        list: {
          title: { text: 'Package Inclusion:' },
          list: {
            ...[
              { props: { text: '2 Night Hotel Stay city center' } },
              { props: { text: '2 Days Private tour' } },
              { props: { text: 'Comfortable Car with professional driver' } },
              { props: { text: '2 Transfers from to Airport' } }
            ]
          }
        }
      }
    ]
  }
}

export const $3n4dArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: { text: 'day 1 - Tbilisi City tour' },
        paragraphs: { childExtend: tbilisiTravelText },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 2 - kakheti tour' },
        paragraphs: {
          childExtend: kakhetiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Wine Tasting in Traditional Winery' } },
              { props: { text: '- Bodbe Monastery' } },
              { props: { text: '- ST. Nino Waterfall' } },
              { props: { text: '- Signagi City' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 3 - Ananuri / Gudauri / Kazbegi' },
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 4 - Departure TBS Airport' },
        list: {
          title: { text: 'Package Inclusion:' },
          list: {
            ...[
              { props: { text: '3 Night Day Hotel' } },
              { props: { text: '3 Days Private tour' } },
              { props: { text: 'Comfortable Car with professional driver' } },
              { props: { text: 'English speaking Guide' } },
              { props: { text: '2 Transfers from to Airport' } },
              { props: { text: 'Wine excursion wine tasting included in Kakheti wine factory' } }
            ]
          }
        }
      }
    ]
  }
}

export const $4n5dArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: { text: 'day 1 - Tbilisi City tour' },
        paragraphs: { childExtend: tbilisiTravelText },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 2 - kakheti tour' },
        paragraphs: {
          childExtend: kakhetiText
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Wine Tasting in Traditional Winery' } },
              { props: { text: '- Bodbe Monastery' } },
              { props: { text: '- ST. Nino Waterfall' } },
              { props: { text: '- Signagi City' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 3 - Ananuri / Gudauri / Kazbegi' },
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 4 - Tbilisi City free day' },
        list: null
      },

      {
        title: { text: 'day 5 - Departure TBS Airport' },
        list: {
          title: { text: 'Package Inclusion:' },
          list: {
            ...[
              { props: { text: '4 Night Day Hotel' } },
              { props: { text: '3 Days Private tour' } },
              { props: { text: 'English speaking Guide' } },
              { props: { text: 'Comfortable Car with professional driver' } },
              { props: { text: '2 Transfers from to Airport' } },
              { props: { text: 'Wine excursion wine tasting included in Kakheti wine factory' } }
            ]
          }
        }
      }
    ]
  }
}

export const $7n18dArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        captionButton: {},
        title: { text: 'day 1 - Arrival TBS Airport / Transfer' },
        list: null
      },

      {
        captionButton: {},
        title: { text: 'day 2 - Ananuri / Gudauri / Kazbegi' },
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 3 - Kakheti Tour' },
        paragraphs: { ...[{ extend: kakhetiText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Wine Tasting in Traditional Winery' } },
              { props: { text: '- Bodbe Monastery' } },
              { props: { text: '- ST. Nino Waterfall' } },
              { props: { text: '- Signagi City' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 4 - Tbilisi City Tour' },
        paragraphs: { ...[{ extend: tbilisiTravelText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 5 - Mtskheta City Tour' },
        paragraphs: { ...[{ extend: mtsketaText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Svetitskhoveli Cathedral 11th' } },
              { props: { text: '- Jvari Monastery - 6th' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 6/7 - Tbilisi City Free day' },
        list: null
      },

      {
        title: { text: 'Day 8 - Departure TBS Airport' },
        list: null
      }
    ]
  }
}

export const $9n10dArticle = {
  extend: TourArticle,
  articleContainer: {
    ...[
      {
        title: { text: 'day 1 - Arrival TBS Airport - Tbilisi City Tour' },
        paragraphs: { ...[{ extend: tbilisiTravelText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Mtatsminda Park by Train' } },
              { props: { text: '- Abanotubani' } },
              { props: { text: '- London bridge' } },
              { props: { text: '- Legvtakhevi Waterfall' } },
              { props: { text: '- I Love Tbilisi Statue' } },
              { props: { text: '- Leselidze souvenires streete' } },
              { props: { text: '- Meidan bazaar' } },
              { props: { text: '- Bridge of Peace' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 2 - Ananuri / Gudauri / Kazbegi' },
        paragraphs: {
          ...[
            { extend: ananuriText },
            { extend: gudauriText },
            { extend: gergetText }
          ]
        },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Zhinvali Water Reservoir' } },
              { props: { text: '- Ananuri Fortress' } },
              { props: { text: '- Gudauri Panorama' } },
              { props: { text: '- Spring Water Mountain' } },
              { props: { text: '- Kazbegi city ( Gergeti church extra charge)' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 3 - Dashbashi Canyon' },
        paragraphs: { ...[{ extend: canionText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Dashabshi Canyon' } },
              { props: { text: '- Brilliant Glass Bridge' } }
            ]
          }
        }
      },

      {
        captionButton: {},
        title: { text: 'day 4 - Kakheti Tour' },
        paragraphs: { ...[{ extend: kakhetiText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Wine Tasting in Traditional Winery' } },
              { props: { text: '- Bodbe Monastery' } },
              { props: { text: '- ST. Nino Waterfall' } },
              { props: { text: '- Signagi City' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 5 - Mtskheta City Tour' },
        paragraphs: { ...[{ extend: mtsketaText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Svetitskhoveli Cathedral 11th' } },
              { props: { text: '- Jvari Monastery - 6th' } }
            ]
          }
        }
      },

      {
        title: { text: 'day 6 - Kutaisi City' },
        paragraphs: { ...[{ extend: kutaisiText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Prometheus Cave' } },
              { props: { text: '- Martvili Canyon' } }
            ]
          }
        }
      },

      {
        title: { text: 'Day 7 - Gori City' },
        paragraphs: { ...[{ extend: goriText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Stalin Museum' } },
              { props: { text: '- Uplistsikhe Cave City' } }
            ]
          }
        }
      },

      {
        title: { text: 'Day 8 - Borjomi / Rabati Castle' },
        paragraphs: { ...[{ extend: borjomiText }, { extend: rabatiText }] },
        list: {
          title: { },
          list: {
            ...[
              { props: { text: '- Borjomi Central Park' } },
              { props: { text: '- Rabati Castle' } }
            ]
          }
        }
      },

      {
        title: { text: 'Day 9 - Free day Tbilisi' },
        list: null
      },

      {
        title: { text: 'Day 10 - Departure TBS Airport' },
        list: {
          title: { text: 'Package Inclusion' },
          list: {
            ...[
              { props: { text: '9 Night Hotel Stay with breakfast' } },
              { props: { text: '7 Days Private tour' } },
              { props: { text: 'Comfortable Car with professional driver' } },
              { props: { text: '2 Airport Transfer' } },
              { props: { text: 'Wine Tasting + excursion included' } }
            ]
          }
        }
      }
    ]
  }
}
