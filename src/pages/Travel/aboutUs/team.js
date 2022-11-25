'use strict'

import { Flex } from 'smbls'

import { TeamMember } from '../../../components'

import GIO_JPG from '../../../assets/images/travel/team/gio.jpg'
import SALOME_JPG from '../../../assets/images/travel/team/salome.jpg'
import ALEKO_JPG from '../../../assets/images/travel/team/aleko.jpg'

const props = {
  gap: 'Z2',
  position: 'relative',
  '@tabletL': {
    flow: 'column',
    gap: 'B'
  },

  title: {
    text: 'TEAM',
    fontWeight: 'bold',
    transform: 'rotate(180deg)',
    borderLeft: '1px solid black',
    fontSize: `${18 / 16}em`,
    padding: '- - Z C',
    '@tabletL': {
      transform: 'rotate(0)',
      borderLeft: 'none',
      borderBottom: '1px solid black',
      textAlign: 'right',
      padding: '0 0 Z 0'
    },
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'sideways',
      letterSpacing: '1.5px',
      '@media only screen and (max-width: 1366px)': {
        writingMode: 'initial',
        textOrientation: 'initial'
      }
    }
  },

  members: {
    overflow: 'hidden',
    gap: 'A2',
    padding: '- - - C',
    margin: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 'H1',
    wrap: 'wrap',
    '@tabletL': {
      maxWidth: '100%',
      padding: '0',
      justifyContent: 'center',
      gap: 'B'
    },
    style: {
      transform: 'translate3d(0, 0, 0)',
      overflowY: 'auto',
      scrollBehavior: 'smooth',
      '::-webkit-scrollbar': { display: 'none' }
    }
  }

}

export const team = {
  extend: Flex,
  props,

  title: {},

  members: {
    extend: Flex,
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
          image: { backgroundImage: 'url(' + ALEKO_JPG + ')' },
          paragraph: {
            title: { text: 'Aleko Giorgidze' },
            p: { text: 'Customer Relations Manager' }
          }
        }
      }
    ]
  }
}
