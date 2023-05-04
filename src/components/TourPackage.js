'use strict'

import { Flex } from 'smbls'

import { TravelParagraph } from './TravelParagraph'

export const tourPlaces = {
  extend: Flex,
  tag: 'p',
  title: { tag: 'h5', text: 'places' },
  places: {
    extend: Flex,
    childExtend: { extend: Flex }
  }
}

const props = {
  color: 'cream',
  // maxWidth: 'H',
  flow: 'column',
  maxHeight: `H2`,
  overflow: 'hidden',
  // transform: 'scale(.9)',
  position: 'relative',
  boxSizing: 'border-box',
  '@maxTabletO': {
    // boxSizing: 'content-box',
    maxWidth: 'H',
    // padding: 'D - - -',
    maxHeight: '100%'
  },
  ':before': {
    content: '""',
    boxSize: 'D2 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'linear-gradient(to bottom, rgba(0, 47, 57, 1) 0%,rgba(0, 47, 57, 0) 100%)',
    zIndex: '20',
    pointerEvents: 'none',
    '@maxTabletO': {
      // background: 'linear-gradient(to bottom, rgba(0, 47, 57, .3) 0%,rgba(0, 47, 57, 0) 100%)',
      // background: 'linear-gradient(to bottom, rgba(0, 0, 0, .6) 0%,rgba(0, 0, 0, 0) 100%)',
      background: 'transparent'
    }
  },
  ':after': {
    content: '""',
    boxSize: 'E2 100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    background: 'linear-gradient(to top, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)',
    zIndex: '20',
    pointerEvents: 'none',
    '@maxTabletO': {
      // background: 'linear-gradient(to top, rgba(0, 47, 57, .3) 0%,rgba(0, 47, 57, 0) 100%)',
      // background: 'linear-gradient(to top, rgba(0, 0, 0, .6) 0%,rgba(0, 0, 0, 0) 100%)',
      background: 'transparent'
    }
  },

  content: {
    padding: 'C1 - E1 -',
    style: { overflowY: 'auto'},
    '@maxTabletO': {
      padding: 'D1 - - -'
    },
    title: {
      fontSize: 'Z',
      textTransform: 'capitalize',
      flow: 'column',
      color: 'cream .75',
      letterSpacing: `${0.5 / 13}em`,
      gap: 'V',
      fontWeight: '400',
      border: 'solid, cream .5',
      borderWidth: '0 0 .4px 0',
      padding: '- - Z2 -',
      span: {
        fontSize: 'D',
        fontWeight: '700',
        color: 'cream',
        textTransform: 'uppercase',
        letterSpacing: '-0.5px'
      }
    },

    packageSchedule: {
      flow: 'column',
      childProps: {
        flow: 'column',
        gap: '0',
        ':not(:last-child)': {
          border: 'solid, cream .5',
          borderWidth: '0 0 .5px 0'
        },

        title: {
          fontSize: 'B',
          textTransform: 'capitalize',
          color: 'cream',
          letterSpacing: '2px',
          fontWeight: '100',
          padding: 'A -'
        },

        description: {
          flow: 'column',
          gap: 'Z',
          color: 'cream .65',
          style: { span: { color: 'rgba(248, 241, 227, 1)' } }
        },

        places: {
          flow: 'column',
          padding: 'B - A1 -',
          width: 'fit-content',
          gap: 'Y2',
          title: {
            fontSize: 'Z',
            textTransform: 'uppercase',
            fontWeight: '700',
            letterSpacing: `${10 / 13}em`,
            padding: '- - - Z'
          },
          places: {
            flow: 'column',
            gap: 'V',
            childProps: {
              align: 'center flex-start',
              letterSpacing: '.4px',
              color: 'cream .65',
              gap: 'Y',
              ':before': {
                content: '""',
                boxSize: 'V2 V2',
                round: '100%',
                background: 'cream .65'
              }
            }
          }
        }
      }
    },
    packageIclusion: {
      flow: 'column',
      gap: 'Y1',
      padding: '- - - -',
      title: {
        textTransform: 'capitalize',
        fontSize: `${14 / 16}em`,
        fontWeight: '400',
        letterSpacing: `${1 / 14}em`
      },
      content: {
        flow: 'column',
        gap: 'V2',
        fontSize: `${14 / 16}em`,
        color: 'cream .65',
        letterSpacing: `${0.3 / 14}em`
      }
    }
  }
}

export const TourPackage = {
  extend: Flex,
  props,

  content: {

    title: {
      tag: 'h2',
      extend: Flex,
      span: {}
    },

    packageSchedule: {
      extend: Flex,
      childExtend: {
        extend: Flex,
        title: { tag: 'h4' },
        description: {
          extend: Flex,
          childExtend: TravelParagraph
        },
        places: { extend: tourPlaces }
      }
    },

    packageIclusion: {
      extend: Flex,
      tag: 'p',
      title: { tag: 'h6', text: 'package inclusion' },
      content: {
        extend: Flex,
        childextend: { tag: 'span' }
      }
    }
  }
}
