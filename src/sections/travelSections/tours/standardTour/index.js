'use strict'

import { Flex } from 'smbls'

import { tour } from '../tour'

import { $2n3dTour } from './2n3dTour'
import { $3n4dTour } from './3n4dTour'
import { $4n5dTour } from './4n5dTour'
import { $7n8dTour } from './7n8dTour'
import { $9n10dTour } from './9n10dTour'

export const standardTour = {
  extend: tour,
  props: { title: { span: { text: 'standard' } } },

  class: {
    show: (element, state) => state.activeStandardTour
      ? { display: 'block' }
      : { display: 'none' }
  },

  title: { extend: Flex, span: {} },
  tours: {
    props: {
      style: {
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        '> div:first-child': { paddingTop: `${50 / 16}em` }
      }
    },

    $2n3dTour,
    $3n4dTour,
    $4n5dTour,
    $7n8dTour,
    $9n10dTour
  }
}
