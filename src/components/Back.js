'use strict'
import { Img, Button } from 'smbls'

import LEFT_ARROW_PNG from '../assets/icons/arrowBack.png'

const props = {
  fontSize: `${12 / 16}em`,
  background: 'transparent',
  border: 'solid, cream2',
  borderWidth: '.85px',
  round: 'C',
  color: 'cream2',
  textTransform: 'uppercase',
  align: 'center center',
  gap: 'Y2',
  cursor: 'pointer',
  opacity: '.7',
  fontWeight: '700',
  transition: 'opacity .2s ease-in-out',
  ':hover': { opacity: '1' },
  icon: { boxSize: ' B1' }
}

export const Back = {
  extend: Button,
  props,

  icon: {
    extend: Img,
    props: { src: LEFT_ARROW_PNG }
  }
  // text: 'apartments'
}
