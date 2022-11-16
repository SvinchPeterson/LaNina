'use strict'

import { Flex } from 'smbls'

import { aboutText } from '../../texts'
import { Paragraph, TeamMember } from '../../components'

import { scroll } from '../../animations'

import { contact } from './contact'

import GIO_JPG from '../../assets/images/travel/gio.jpg'
import SALOME_JPG from '../../assets/images/travel/salome.jpg'
import ALEKO_JPG from '../../assets/images/travel/aleko.jpg'

const paragraph = {
  extend: Paragraph,
  props: {
    align: 'flex-start flex-start',
    minWidth: 'G1',
    maxWidth: 'H',
    minHeight: 'G2',
    gap: 'A1',
    position: 'relative',
    padding: 'B - - -',
    margin: '- C1 - -',
    '@tabletL': {
      maxWidth: 'H1',
      margin: '0',
      minHeight: 'fit-content'
    },
    '@tabletS': { padding: '- D' },
    '@mobileL': {
      minWidth: '100%',
      padding: '0'
    },
    title: {
      text: 'about us',
      fontSize: 'B',
      '@tabletS': { fontSize: 'A' }
    },
    p: {
      gap: 'Z',
      fontSize: 'A',
      style: {
        span: { fontWeight: '700' }
      },
      '@mobileS': { fontSize: `${15 / 16}em` }
    },
    contact: {
      '@tabletL': { display: 'none' }
    }
    // '@mobileS': { padding: '- A1' },
    // '@mobileXS': { padding: '- Z' }
  },
  title: {},
  p: { extend: aboutText },
  contact: {
    extend: contact
  }
}

const team = {
  extend: Flex,
  props: {
    flow: 'column',
    gap: 'Z2',
    position: 'relative',
    minHeight: 'H2',
    '@tabletL': {
      minHeight: 'fit-content',
      gap: 'C'
    },
    ':before': {
      content: '""',
      boxSize: '100% H',
      position: 'absolute',
      right: '0px',
      top: '0',
      background: 'linear-gradient(to left, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)',
      zIndex: '2',
      '@tabletL': { display: 'none' }
    },
    ':after': {
      content: '""',
      boxSize: '100% 1px',
      background: 'linear-gradient(to right, rgba(0, 0, 0, .8) 0%,rgba(0, 0, 0, 0) 100%)',
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '2',
      '@tabletL': { display: 'none' }
    },

    title: {
      text: 'TEAM',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 'A2',
      fontSize: `${20 / 16}em`,
      left: '-A2',
      transform: 'translate(-50%, -50%) rotate(180deg)',
      zIndex: '10',
      '@tabletL': {
        top: '-C1',
        left: 'initial',
        right: '0',
        transform: 'translate(0%, 0%) rotate(0deg)',
        borderBottom: '1px solid black',
        height: 'fit-content',
        width: '100%',
        textAlign: 'right',
        padding: '- - Z -',
        margin: '- - Z -',
        fontSize: `${16 / 16}em`
      },
      style: {
        writingMode: 'vertical-rl',
        textOrientation: 'sideways',
        letterSpacing: '3px',
        '@media only screen and (max-width: 1366px)': {
          writingMode: 'initial',
          textOrientation: 'initial'
        }
      }
    },

    members: {
      boxSize: 'G3 H2',
      overflow: 'hidden',
      gap: 'B1',
      padding: '- - - -',
      margin: 'auto',
      justifyContent: 'space-between',
      alignItems: 'center',
      '@tabletL': {
        boxSize: 'fit-content'
      },
      '@tabletS': {
        height: 'fit-content'
      },

      style: {
        transform: 'translate3d(0, 0, 0)',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        '@media only screen and (max-width: 1024px)': {
          overflowY: 'visible'

        },

        '::-webkit-scrollbar': { display: 'none' }
      },
      childProps: {
        '@tabletS': {
          wrap: 'wrap',
          // minWidth: 'fit-content',
          // maxWidth: 'fit-content',
          align: 'center center',
          padding: 'B - - -'
        },
        style: {
          // animationName: scroll,
          // animationDuration: '20s',
          // animationTimingFunction: 'linear',
          // animationIterationCount: 'infinite'
        },
        gap: 'B1'
      }
    }
  },

  title: {},
  members: {
    extend: Flex,
    membersOne: {
      extend: Flex,
      childExtend: TeamMember,
      ...[
        {
          props: {
            image: {
              backgroundImage: 'url(' + GIO_JPG + ')'
            },
            paragraph: {
              title: { text: 'Giorgi Bejuashvili' },
              p: { text: 'Co-founder / Managing Director ' }
            }
          }
        },

        {
          props: {
            image: {
              backgroundImage: 'url(' + SALOME_JPG + ')'
            },
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
}

const props = {
  align: 'flex-start center',
  gap: 'B1',
  padding: 'E2 A2 E2 A2',
  '@tabletL': {
    padding: '- D - D1',
    flow: 'column',
    align: 'flex-start flex-start',
    width: 'fit-content',
    margin: 'auto',
    gap: 'E'
  },
  '@tabletS': {
    align: 'center center'
  },
  '@mobileM': {
    padding: '- B'
  }

}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  paragraph,
  team,
  contact: {
    extend: contact,
    props: {
      display: 'none',
      '@tabletL': {
        display: 'flex',
        alignSelf: 'flex-end'
      },
      '@mobileL': {
        alignSelf: 'center'
      }
    }
  }

}
