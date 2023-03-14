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
  color: 'cream2',
  maxWidth: 'H',
  flow: 'column',
  maxHeight: `I`,
  overflow: 'hidden',
  transform: 'scale(.8)',
  // padding: 'B - - -',
  position: 'relative',

  ':before': {
    content: '""',
    boxSize: 'D 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'linear-gradient(to bottom, rgba(15, 49, 61, 1) 0%, rgba(15, 49, 61, 0) 100%)',
    zIndex: '3',
    pointerEvents: 'none'
  },
  ':after': {
    content: '""',
    boxSize: 'E2 100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    background: 'linear-gradient(to top, rgba(15, 49, 61, 1) 0%, rgba(15, 49, 61, 0) 100%)',
    zIndex: '3',
    pointerEvents: 'none'
  },

  content: {
    padding: 'B - C1 -',
    title: {
      fontSize: 'Z',
      textTransform: 'capitalize',
      flow: 'column',
      color: 'cream2 .75',
      letterSpacing: `${0.5 / 13}em`,
      gap: 'V',
      fontWeight: '400',
      border: 'solid, cream2 .5',
      borderWidth: '0 0 .4px 0',
      padding: '- - Z2 -',
      span: {
        fontSize: 'D',
        fontWeight: '700',
        color: 'cream2',
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
          border: 'solid, cream2 .5',
          borderWidth: '0 0 .5px 0'
        },

        title: {
          fontSize: 'B',
          textTransform: 'capitalize',
          color: 'cream2',
          letterSpacing: '2px',
          fontWeight: '100',
          padding: 'A -'
        },

        description: {
          flow: 'column',
          gap: 'Z',
          color: 'cream2 .65',
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
              color: 'cream2 .65',
              gap: 'Y',
              ':before': {
                content: '""',
                boxSize: 'V2 V2',
                round: '100%',
                background: 'cream2 .65'
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
        color: 'cream2 .65',
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
