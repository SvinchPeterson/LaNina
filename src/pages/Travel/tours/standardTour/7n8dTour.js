'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText, mtsketaText } from '../../../../texts'

import { $7n8dGallery } from '../galleries/7n8dGallery'

export const $7n8dTour = {
  extend: Tour,

  gallery: { extend: $7n8dGallery },

  captionButton: {
    on: {
      click: (event, element, state) => {
        state.active_8d_Description
          ? state.update({ active_8d_Description: false })
          : state.update({ active_8d_Description: true })
      }
    },

    class: {
      show: (element, state) => state.active_8d_Description
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
      show: (element, state) => state.active_8d_Description
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
}
