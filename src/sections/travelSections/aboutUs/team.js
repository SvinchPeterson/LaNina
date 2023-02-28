'use strict'

import { Flex } from 'smbls'

import { slideHideVertical } from '../../../animations'

import { TeamMember } from '../../../components'

import GIO_JPG from '../../../assets/images/travel/team/gio.jpg'
import SALOME_JPG from '../../../assets/images/travel/team/salome.jpg'
import ALEKO_JPG from '../../../assets/images/travel/team/aleko.jpg'

const members = {
  extend: Flex,
  content: {
    childExtend: TeamMember,
    ...[
      {
        props: {
          content: {
            image: { backgroundImage: 'url(' + GIO_JPG + ')' },
            paragraph: {
              title: { text: 'Giorgi Bejuashvili' },
              p: { text: 'Co-founder / Managing Director ' }
            }
          }
        }
      },

      {
        props: {
          content: {
            image: { backgroundImage: 'url(' + ALEKO_JPG + ')' },
            paragraph: {
              title: { text: 'Alexander Giorgidze' },
              p: { text: 'Operations Director' }
            }
          }
        }
      },

      {
        props: {
          content: {
            image: { backgroundImage: 'url(' + SALOME_JPG + ')' },
            paragraph: {
              title: { text: 'Salome Petriashvili' },
              p: { text: 'Customer Relations Manager' }
            }
          }
        }
      },

      {
        props: {
          content: {
            image: { backgroundImage: 'url(' + GIO_JPG + ')' },
            paragraph: {
              title: { text: 'Giorgi Bejuashvili' },
              p: { text: 'Co-founder / Managing Director ' }
            }
          }
        }
      },

      {
        props: {
          content: {
            image: { backgroundImage: 'url(' + ALEKO_JPG + ')' },
            paragraph: {
              title: { text: 'Alexander Giorgidze' },
              p: { text: 'Operations Director' }
            }
          }
        }
      },

      {
        props: {
          content: {
            image: { backgroundImage: 'url(' + SALOME_JPG + ')' },
            paragraph: {
              title: { text: 'Salome Petriashvili' },
              p: { text: 'Customer Relations Manager' }
            }
          }
        }
      }
    ]
  }
}

const props = {
  position: 'relative',
  overflow: 'hidden',
  maxHeight: 'H',
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: 'G 100%',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    zIndex: '3',
    background: 'linear-gradient(to bottom, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)'
  },
  ':after': {
    content: '""',
    position: 'absolute',
    boxSize: 'G 100%',
    bottom: '0',
    left: '0',
    pointerEvents: 'none',
    zIndex: '3',
    background: 'linear-gradient(to top, rgba(229, 249, 252, 1) 0%,rgba(229, 249, 252, 0) 100%)'
  },

  title: {
    text: 'TEAM',
    fontWeight: '700',
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: 'fit-content',
    border: 'solid, black .75',
    borderWidth: '.5px 0 0px 0',
    fontSize: `${15 / 16}em`,
    padding: 'Y2 - V -',
    width: '100%',
    zIndex: '4',
    background: 'rgba(229, 249, 252, 1)',
    letterSpacing: `${10 / 15}em`
  },

  members: {
    padding: '- - - -',
    minHeight: 'calc(420 * 6)',
    position: 'relative',
    align: 'center flex-start',
    flow: 'column',
    content: {
      style: {
        animationName: slideHideVertical,
        animationDuration: '15s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      },
      childProps: {
        minHeight: `${420 / 16}em`,
        maxHeight: `${420 / 16}em`,
        align: 'center center'
      }
    }
  }
}

export const team = {
  extend: Flex,
  props,
  title: { tag: 'h4' },
  members
}
