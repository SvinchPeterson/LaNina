import { Link } from 'smbls'

const props = {
  fontSize: `${11.5 / 16}em`,
  color: 'cream',
  textTransform: 'uppercase',
  target: '_blank',
  border: 'solid, cream .5',
  borderWidth: '.5px',
  round: 'B',
  padding: 'Z B1',
  height: 'fit-content',
}

export const BookingLink = {
  extend: Link,
  props,
  span: {text: 'book' }
}
