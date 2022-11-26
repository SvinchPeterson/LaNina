'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText, mtsketaText } from '../../../../texts'

import { $7n8dGallery } from '../galleries/7n8dGallery'

export const $7n8dTour = {
  extend: Tour,
  props: { '@tabletS': { flow: 'column-reverse' } },

  article: {
    props: { '@tabletS': { alignSelf: 'flex-end' } },
    articleContainer: {
      ...[
        {
          title: { text: 'day 1 - Arrival TBS Airport / Transfer' },
          list: null
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
    },

    button: {
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, active_8d_Description: true })
        }
      }
    }
  },

  gallery: {
    extend: $7n8dGallery,
    props: {
      align: 'flex-end',
      title: { padding: '- Z - -' },
      images: {
        round: 'F 0 0 F'
      }
    }
  }
}
