'use strict'
import GREEN_LANINA_JPG from '../../assets/images/sololaki/greenLanina2.jpg'

const styleParagraph = {
  maxWidth: `${1000 / 18}em`,
  boxSizing: 'border-box',
  boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
  lineHeight: `${30 / 18}em`,
  fontWeight: 500,
  color: 'rgba(0, 0, 0, .65)'
}
export default {
  backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
  backgroundSize: 'contain',
  backgroundPosition: 'left bottom',
  transform: 'scale(.9)',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  p: styleParagraph
}
