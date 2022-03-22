'use strict'
import { Block, Text, Flex, Shape, SVG, Link } from '@rackai/symbols'
import { logoB } from '../../components/Logo'

import style from './style'

import PHONE_PNG from '../../assets/phoneRight.svg'

const check = {
  tag: 'input',
  attr: {
    type: 'checkbox',
    id: 'toggle'
  }
}

const menuIcon = {
  tag: 'label',
  attr: { for: 'toggle' },
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'Y',
    boxSize: 'A2 A2',
    padding: 'A'
  },

  on: {
    click: (event, element, state) => {
      state.active ? state.update({ active: false }) : state.update({ active: true })
    }
  },

  childProto: {
    proto: [Block, Shape],
    props: {
      round: 'A'
    }
  },

  ...[{}, {}, {}]
}

const langs = {
  proto: Block,
  props: {
    flexAlign: 'flex-start center',
    gap: 'Z2'
  },

  // on: {
  //   click: (event, element, state) => {
  //     const { activeImage } = state
  //     state.update({
  //       activeImage: activeImage > (element.parent.gallery.length - 2) ? 0 : activeImage + 1
  //     })
  //     // if (activeImage === element.parent.gallery.length) {
  //     //   state.update({
  //     //     activeImage: activeImage === element.parent.gallery.length - 2
  //     //   })
  //     // }
  //   }
  // },

  childProto: {
    proto: [Text, Block, Link],
    props: { padding: 'Y 0' },
    on: {
      click: (event, element, state) => {
        // state.activeMenuLink === 0 ? state.update({ activeMenuLink: element.key }) : state.update({ activeLangEng: true })
        state.update({ activeLang: element.key })
        console.log(state.activeLang, element.key)
      }
    },

    class: {
      show: (element, state) => state.activeLang === element.key ? { color: 'rgba(244, 233, 217, 1)' } : { color: 'rgba(244, 233, 217, .65)' }
    }
  },

  ...[
    {
      props: { text: 'ქარ' },
      style: { fontFamily: 'BPG ExtraSquare Mtavruli' }
      // on: {
      //   click: (event, element, state) => {
      //     state.activeLangGeo ? state.update({ activeLangGeo: false }) : state.update({ activeLangGeo: true })
      //     state.update({ activeLangEng: false, activeLangRus: false })

      //     console.log(state.activeLangGeo)
      //   }
      // },
      // class: {
      //   show: (element, state) => state.activeLangGeo ? {
      //     color: 'rgba(244, 233, 217, 1)'

      //   } : {
      //     color: 'rgba(244, 233, 217, .65)'
      //   }
      // }
    },
    {
      props: { text: 'eng' }
      // on: {
      //   click: (event, element, state) => {
      //     state.activeLangEng ? state.update({ activeLangEng: false }) : state.update({ activeLangEng: true })
      //     state.update({ activeLangGeo: false, activeLangRus: false })
      //     console.log(state.activeLangEng)
      //   }
      // },
      // class: {
      //   show: (element, state) => state.activeLangEng ? {
      //     color: 'rgba(244, 233, 217, 1)'

      //   } : {
      //     color: 'rgba(244, 233, 217, .65)'
      //   }
      // }
    },

    {
      props: { text: 'rus' }
      // on: {
      //   click: (event, element, state) => {
      //     state.activeLangRus ? state.update({ activeLangRus: false }) : state.update({ activeLangRus: true })
      //     state.update({ activeLangGeo: false, activeLangEng: false })

      //     console.log(state.activeLangRus)
      //   }
      // },
      // class: {
      //   show: (element, state) => state.activeLangRus ? {
      //     color: 'rgba(244, 233, 217, 1)'

      //   } : {
      //     color: 'rgba(244, 233, 217, .65)'
      //   }
      // }
    }

  ]
}

const call = {
  tag: 'span',
  proto: Block,
  props: {
    boxSize: 'A2 A2',
    padding: 'A'
  },
  numb: {
    proto: Link,
    props: {
      href: 'https://api.whatsapp.com/send?phone=+995571017170',
      target: '_blank'
    },
    svg: {
      proto: [SVG, Block],
      src: PHONE_PNG,
      props: { boxSize: 'A1 A1' }
    }
  }
}

const book = {
  // tag: 'button',
  proto: [Link, Text, Block],
  props: {
    text: 'book',
    size: 'B',
    padding: 'Y2 B',
    href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
    target: '_blank'
  }
}

export default {
  tag: 'header',
  style,
  proto: [Block, Flex],
  props: {
    flexAlign: 'center center',
    gap: 'E',
    padding: 'C 0 A 0'
  },

  check,

  menuIcon,
  // book,
  langs,
  call
}
