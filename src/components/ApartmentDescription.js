'use strict'
import { Img } from 'smbls'

import BED_PNG from '../assets/icons/bed.png'
import BRACKET_PNG from '../assets/icons/bracket.png'
import USER_PNG from '../assets/icons/user.png'

const iconCaption = {
  props: {
    flexAlign: 'center flex-start',
    gap: 'Z',
    '@mobileM': { gap: 'Z2' },
    style: { textAlign: 'left' },
    icon: {
      boxSize: '26px ',
      margin: '0 0 0 0',
      '@mobileM': { boxSize: '35px ' }
    },
    caption: {
      color: 'cream2 .65',
      fontSize: `Z`,
      padding: '0 0 0 0',
      flexFlow: 'column',
      lineHeight: '16.8px',
      '@mobileM': {
        fontSize: 'B',
        lineHeight: '25px'

      },
      style: {
        whiteSpace: 'nowrap',
        textAlign: 'left',
        span: {
          fontWeight: '700',
          color: 'rgba(248, 241, 227, 1)'
        }
      }
    }
  },

  icon: {
    extend: Img,
    props: 'match'
  },

  caption: {}
}

const props = {
  position: 'relative',
  height: 'fit-content',
  style: {
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '0px',
      bottom: '0',
      boxShadow: '20px 0px 50px 35px rgba(60,84, 72, 1)',
      display: 'none',
      '@media only screen and (max-width: 560px)': {
        display: 'block'
      }
    }
  },
  content: {
    flexAlign: 'center flex-start',
    gap: 'D',
    background: 'green2',
    '@mobileL': { gap: 'C' },
    '@mobileM': {
      margin: 'C 0 0 0',
      // left: 'B',
      flexFlow: 'column',
      flexAlign: 'flex-start flex-start'
    },
    style: {
      '@media only screen and (max-width: 560px)': {
        gap: '25px !important',
        // border: '3px solid red',
        overflowY: 'auto',
        height: '110px',
        position: 'relative',
        paddingBottom: '50px'
        // gap: '1px !important'
      }

    }
  }
}

export const ApartmentDescription = {
  props,

  content: {
    childExtend: iconCaption,
    ...[
      {
        props: {
          icon: { src: BED_PNG }
        }
      },
      {
        props: {
          icon: { src: USER_PNG }
        }
      },
      {
        props: {
          icon: { src: BRACKET_PNG }
        }
      }
    ]
  }
}
