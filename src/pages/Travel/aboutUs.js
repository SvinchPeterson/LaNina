'use strict'

import { Flex, Grid } from 'smbls'

import { aboutText } from '../../texts'
import { Paragraph, TeamMember } from '../../components'

import GIO_JPG from '../../assets/images/travel/gio.jpg'
import SALOME_JPG from '../../assets/images/travel/salome.jpg'

const paragraph = {
  extend: Paragraph,
  props: {
    title: { text: 'about us' },
    '@tabletS': { padding: '- D' },
    '@mobileL': { padding: '- C' },
    '@mobileS': { padding: '- A1' },
    '@mobileXS': { padding: '- Z' }
  },
  title: {},
  p: { extend: aboutText }
}

const team = {
  extend: Flex,
  props: {
    flow: 'column',
    gap: '0',

    title: {
      text: 'TEAM',
      fontWeight: 'bold',
      padding: '0 0 0 C'
      // textAlign: 'ce'
      // style: { borderBottom: '1px solid rgba(0, 0, 0, .5)' }
    },

    members: {
      columns: 'repeat(3, 1fr)',
      padding: 'A2 - - -',
      gap: 'C1',
      '@tabletL': { columns: 'repeat(2, 1fr)' },
      '@mobileL': { columns: 'repeat(1, 1fr)' },

      childProps: {
        style: {
          // borderRight: '1px solid rgba(0, 0, 0, .5)'
          // paddingRight: '20px'
        }
      }
    }
  },

  title: {},
  members: {
    extend: Grid,
    childExtend: TeamMember,
    ...[
      {
        props: {
          image: { backgroundImage: 'url(' + GIO_JPG + ')' },
          paragraph: {
            title: { text: 'Giorgi Bejuashvili' },
            p: { text: 'Co-founder / Managing Director ' }
          }
        }
      },
      {
        props: {
          image: { backgroundImage: 'url(' + SALOME_JPG + ')' },
          paragraph: {
            title: { text: 'Salome Petriashvili' },
            p: { text: 'Customer Relations Manager' }
          }
        }
      },

      {
        props: {
          image: { backgroundImage: 'url(' + SALOME_JPG + ')' },
          paragraph: {
            title: { text: 'Salome Petriashvili' },
            p: { text: 'Customer Relations Manager' }
          }
        }
      }
      // {
      //   props: {
      //     image: { backgroundImage: 'url(' + ALEKO_PNG + ')' },
      //     paragraph: {
      //       title: { text: 'Aleksander Giorgidze' },
      //       p: { text: 'Operations Director' }
      //     }
      //   }
      // }
    ]
  }
}

const props = {
  flow: 'column',
  align: 'center center',
  gap: 'D',
  padding: 'E2 A2 B A2'
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  paragraph,
  team
}
