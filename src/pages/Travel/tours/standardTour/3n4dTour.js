'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText } from '../../../../texts'

import { $3n4dGallery } from '../galleries/3n4dGallery'

export const $3n4dTour = {
  extend: Tour,

  gallery: { extend: $3n4dGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.active_4d_Description
          ? state.update({ active_4d_Description: false })
          : state.update({ active_4d_Description: true })
      }
    },

    class: {
      show: (element, state) => state.active_4d_Description
        ? {
          '> img': { transform: 'rotate(180deg)' }
        }
        : {
          '> img': { transform: 'rotate(0deg)' }
        }
    }
  },

  article: {
    class: {
      show: (element, state) => state.active_4d_Description
        ? {
          '@media only screen and (max-width: 1280px)': {
            maxHeight: `${250 / 16}em`,
            overflowY: 'auto',
            paddingTop: `${35 / 16}em`
          }
        }
        : {
          '@media only screen and (max-width: 1280px)': {
            maxHeight: `0`,
            overflowY: 'hidden'
          }
        }
    },

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
}
