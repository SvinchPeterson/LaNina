'use strict'

import { Tour } from '../../../../components'

import { tbilisiTravelText, ananuriText, gudauriText, gergetText, kakhetiText, yerevanText,
  khorViperText, noravankText, savaneText, savaneMonastryText, dilijanText
} from '../../../../texts'

import { geoArmGallery } from '../galleries/geoArmGallery'

export const geoArmTour = {
  extend: Tour,

  props: {
    overflow: 'hidden'
  },

  gallery: {
    extend: geoArmGallery,
    props: {
      images: {
        boxSize: 'H H1',
        round: 'G G 0 0'
      },
      footer: { width: '100%' }
    }
  },

  article: {
    class: {
      show: (element, state) => state.active_Armenia_Description
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
    },

    button: {
      props: { alignSelf: 'flex-end' },
      on: {
        click: (event, element, state) => {
          state.update({ activeFullDescription: true, active_Armenia_Description: true })
        }
      }

    }
  }
}
