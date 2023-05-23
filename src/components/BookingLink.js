import { Link } from 'smbls'

const props = {
  fontSize: `${11.5 / 16}em`,
  color: 'cream',
  textTransform: 'uppercase',
  target: '_blank',
  round: 'B',
  padding: 'Z B1',
  height: 'fit-content',
  style: { border: '.5px solid rgba(255, 249, 237, .5)'}
}

export const BookingLink = {
  extend: Link,
  props,
  span: {text: 'book' }
}
