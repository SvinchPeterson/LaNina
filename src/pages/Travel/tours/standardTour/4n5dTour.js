'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText } from '../../../../texts'

import { $4n5dGallery } from '../galleries/4n5dGallery'

export const $4n5dTour = {
  extend: Tour,

  gallery: { extend: $4n5dGallery },

  article: {
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
}
