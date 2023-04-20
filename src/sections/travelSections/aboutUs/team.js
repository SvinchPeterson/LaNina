'use strict'

import { Flex } from 'smbls'

import { slideHideVertical, slideHideHorizontal } from '../../../animations'

import { TeamMember } from '../../../components'

import GIO_JPG from '../../../assets/images/travel/team/gio.jpg'
import SALOME_JPG from '../../../assets/images/travel/team/salome.jpg'
import ALEKO_JPG from '../../../assets/images/travel/team/aleko.jpg'

const members = {
  extend: Flex,
  content: {
    extend: Flex,
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
            image: {
              backgroundImage: 'url(' + SALOME_JPG + ')',
              style: { backgroundRepeat: 'no-repeat' }
            },
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
  // '@maxTabletS': {maxWidth: 'H2'},
  ':before': {
    content: '""',
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    zIndex: '3',
    background: 'linear-gradient(to bottom, rgba(255, 249, 237, 1) 0%, rgba(255, 249, 237, 0) 100%)'
  },
  // ':after': {
  //   content: '""',
  //   position: 'absolute',
  //   boxSize: 'E2 100%',
  //   bottom: '0',
  //   left: '0',
  //   pointerEvents: 'none',
  //   zIndex: '3',
  //   background: 'linear-gradient(to top, rgba(255, 249, 237, 1) 0%, rgba(255, 249, 237, 0) 100%)'
  // },

  title: {
    text: 'TEAM',
    fontWeight: '700',
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: 'fit-content',
    border: 'solid, black .75',
    borderWidth: '.5px 0 0px 0',
    fontSize: `${14 / 16}em`,
    padding: 'Y2 - V -',
    width: '100%',
    zIndex: '4',
    background: 'rgba(255, 249, 237, 1)',
    letterSpacing: `${10 / 15}em`
  },

  members: {
    padding: '- - - -',
    position: 'relative',
    align: 'center flex-start',
    flow: 'column',
    content: {
      flow: 'column',
      // gap: 'C',
      style: {
        animationName: slideHideVertical,
        animationDuration: '15s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
      },
      // '@maxTabletS': {
      //   flow: 'row',
      //   align: 'center center',
      //   // maxWidth: 'H1',
      //   style: { animationName: slideHideHorizontal }
      // },

      childProps: {
        align: 'center center',
        minHeight: `${420 / 16}em`,
        image: {
          '@maxMobileM': {
            boxSize: 'F2 F2'
          }

        }
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
