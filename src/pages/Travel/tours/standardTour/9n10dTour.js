'use strict'

import { Tour } from '../../../../components'

import {
  tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText, mtsketaText, canionText,
  kutaisiText, goriText, borjomiText, rabatiText
} from '../../../../texts'

import { $9n10dGallery } from '../galleries/9n10dGallery'

export const $9n10dTour = {
  extend: Tour,

  gallery: { extend: $9n10dGallery },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-start' } },
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
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, active_10d_Description: true })
        }
      }

    }
  }
}
