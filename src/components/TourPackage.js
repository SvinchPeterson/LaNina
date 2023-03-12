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
  // margin: 'auto',
  maxWidth: 'H',
  background: 'naviBlue .5',
  flow: 'column',
  maxHeight: `I`,
  overflow: 'hidden',
  // display: 'none',

  title: {
    fontSize: 'Z',
    textTransform: 'uppercase',
    flow: 'column',
    color: 'cream2 .75',
    // align: 'center flex-start',
    gap: 'V',
    fontWeight: '400',
    border: 'solid, cream2 .5',
    borderWidth: '0 0 .5px 0',
    padding: 'Z - Z2 -',
    span: {
      fontSize: 'D',
      fontWeight: '700',
      color: 'cream2',
      margin: '- - - -V2'
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
        letterSpacing: '0.5px',
        fontWeight: '100',
        padding: 'Z1 -'
        // padding: '- - Z -'
      },
      description: {
        flow: 'column',
        gap: 'Z',
        color: 'cream2 .65',
        style: { span: { color: 'rgba(248, 241, 227, 1)' } }
      },
      places: {
        flow: 'column',
        // border: 'solid, cream2 .5',
        // borderWidth: '0 0 .5px 0',
        padding: 'Z1 - Y2 0',
        width: 'fit-content',
        gap: 'Y2',
        title: {
          fontSize: 'Z',
          textTransform: 'uppercase',
          fontWeight: '400',
          letterSpacing: `${10 / 13}em`,
          padding: '- - - Z'
        },
        places: {
          flow: 'column',
          gap: 'V',
          childProps: {
            align: 'center flex-start',
            letterSpacing: '.4px',
            color: 'cream2 .8',
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
      textTransform: 'uppercase',
      fontSize: `${12 / 16}em`,
      fontWeight: '700',
      letterSpacing: `${0 / 12}em`
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

export const TourPackage = {
  extend: Flex,
  props,

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
