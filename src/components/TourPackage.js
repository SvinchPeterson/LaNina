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
  margin: 'auto',
  background: 'naviBlue .5',
  flow: 'column',
  maxHeight: '800px',
  style: { overflowY: 'auto' },

  title: {},
  packageSchedule: {
    flow: 'column',
    childProps: {
      flow: 'column',

      title: {},
      description: {
        flow: 'column',
        gap: 'Z',
        color: 'cream2 .65',
        style: { span: { color: 'rgba(248, 241, 227, 1)' } }
      },
      places: {
        flow: 'column',
        title: {},
        places: {
          flow: 'column',
          childProps: {
            align: 'center flex-start',
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
    title: { tag: 'h6' },
    content: { flow: 'column' }

  }

}

export const TourPackage = {
  extend: Flex,
  props,

  title: { tag: 'h2' },

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
