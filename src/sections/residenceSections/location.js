'use strict'

import { Flex } from 'smbls'

import { Map, ResidenceSectionTitle } from '../../components'


const props = {
  flow: 'column',
  width: 'fit-content',
  alignSelf: 'center',
  padding: '- - D1 -',
  position: 'relative',
  margin: '- - B -',
  '@maxTabletM': { width: '70%' },
  '@maxMobileM': { width: '90%', padding: 'D1 - 0 -', margin: '- - C -' },

  title: {
    fontSize: `${11 / 16}em`,
    letterSpacing: `${12/ 11}em`,
    position: 'absolute',
    transform: 'rotate(180deg)',
    padding: '- D - -',
    left: '-C',
    ':after': {margin: '- - - -8px'},
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
    },
    '@maxTabletS': {
      transform: 'rotate(0)',
      padding: '0 0 B 0',
      position: 'initial',
      fontSize: `${11 / 16}em`,
      alignSelf: 'center',


      style: {
        writingMode: 'initial',
        textOrientation: 'initial'
      }
    }
  },

  map: {
    minHeight: 'G3',
    minWidth: `${800 / 16}em`,
    display: 'block',
    round: 'A2',
    border: 'none',
    style: {boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)'},
    '@maxTabletM': { minWidth: `100%` },
    '@maxHeightN': { minHeight: 'G'}
  }
}

export const location = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'location' },
  title: { extend: ResidenceSectionTitle, text: 'location' },
  map: {extend: Map }
}
