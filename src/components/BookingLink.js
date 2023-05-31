import { Link, Flex } from 'smbls'

const props = {
  color: 'cream',
  textTransform: 'uppercase',
  target: '_blank',
  round: 'B',
  padding: 'Y1 B',
  // boxSize: 'B2 D2',
  align: 'center center',
  style: { border: '1px solid rgba(255, 249, 237, .5)' },
  span: { fontSize: `${11 / 16}em` }
}

export const BookingLink = {
  extend: [Link, Flex],
  props,
  span: {text: 'book' }
}
