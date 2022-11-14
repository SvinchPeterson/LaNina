'use strict'

import { Flex } from 'smbls'

import { aboutText } from '../../texts'
import { Paragraph, TeamMember } from '../../components'

import { scroll } from '../../animations'

import { contact } from './contact'

import GIO_JPG from '../../assets/images/travel/gio.jpg'
import SALOME_JPG from '../../assets/images/travel/salome.jpg'

const paragraph = {
  extend: Paragraph,
  props: {
    align: 'flex-start flex-start',
    maxWidth: 'H',
    gap: 'A1',
    position: 'relative',
    padding: 'B C - -',
    title: { text: 'about us' },
    p: {
      gap: 'Z',
      style: {
        span: { fontWeight: '700' }
      }
    },
    '@tabletS': { padding: '- D' },
    '@mobileL': { padding: '- C' },
    '@mobileS': { padding: '- A1' },
    '@mobileXS': { padding: '- Z' }
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
    ':before': {
      content: '""',
      boxSize: '100% H',
      position: 'absolute',
      right: '0px',
      top: '0',
      background: 'linear-gradient(to left, rgba(233, 253, 255, 1) 0%,rgba(233, 253, 255, 0) 100%)',
      zIndex: '2'
    },
    ':after': {
      content: '""',
      boxSize: '100% 1px',
      background: 'linear-gradient(to right, rgba(0, 0, 0, .8) 0%,rgba(0, 0, 0, 0) 100%)',
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '2'
    },

    title: {
      text: 'TEAM',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 'A2',
      fontSize: `${15 / 16}em`,
      left: '-A2',
      transform: 'translate(-50%, -50%) rotate(180deg)',
      style: {
        writingMode: 'vertical-rl',
        textOrientation: 'sideways',
        letterSpacing: '3px'
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
      style: {
        transform: 'translate3d(0, 0, 0)',
        overflowY: 'auto',
        scrollBehavior: 'smooth',

        '::-webkit-scrollbar': { display: 'none' }
      },
      childProps: {
        style: {
          animationName: scroll,
          animationDuration: '20s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
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
      ]

    },

    membersTwo: {
      extend: Flex,
      style: { right: '0' },
      childExtend: TeamMember,
      ...[
        {
          props: {
            image: {
              backgroundImage: 'url(' + SALOME_JPG + ')'
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
              backgroundImage: 'url(' + GIO_JPG + ')'
            },
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
      ]
    }
  }
}

const props = {
  align: 'flex-start center',
  gap: 'B1',
  padding: 'E2 A2 E2 A2'
}

export const aboutUs = {
  extend: Flex,
  props,
  attr: { id: 'about' },

  paragraph,
  team
}
