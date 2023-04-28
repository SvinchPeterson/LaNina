'use strict'

import { PopUpRoomTour } from "../../../../components"

import { roomsHeader } from "./roomsHeader"
import { roomsContainers } from "./roomsContainers"

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  ':before': { background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, .98), rgba(1, 57, 57, 1))' },
  contentContainer: {
    header: {
      textTransform: 'capitalize',
      titles: {
        childProps: {
          fontSize: 'E'

        }
      }
    },
    content: {
      style: {
        '> div:nth-child(odd)': {
          '> div > div': {
           '> div': {
              borderRadius: `0 ${200 / 16}em ${200 / 16}em 0`,
              '@media only screen and (max-width: 1180px)': { borderRadius: '0' },
              '&:before': { background: 'linear-gradient(to right, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)'}
            },
           '> footer': {
            padding: '1em 0 0 1em',
            '@media only screen and (max-width: 1180px)': { padding: '1em'}
          }
          }
        },

        '> div:nth-child(even)': {
          '> div': {
            flexFlow: 'row-reverse',
            '@media only screen and (max-width: 1180px)': { flexFlow: 'column' },
          },
          '> div > div': {
           '> div': {
            borderRadius: `${200 / 16}em 0 0 ${200 / 16}em`,
            '@media only screen and (max-width: 1180px)': { borderRadius: '0' },
            '&:before': { background: 'linear-gradient(to left, rgba(1, 57, 57, 1) 0%, rgba(1, 57, 57, 0) 100%)'}
          },
           '> footer': {
            alignSelf: 'flex-end',
            padding: '1em 1em 0 0',
            '@media only screen and (max-width: 1180px)': { padding: '1em'}
          }
          }
        }
      },
      childProps: {
        justifyContent: 'center',
        childProps: {
          '@maxMaxO': { margin: '-C - - -'}
        }
      }
    }
  }
}

export const roomPopUp = {
  extend: PopUpRoomTour,
  props,

  // class: {
  //   show: (element, state) => state.activeRoomsPopUp
  //     ? { height: '100%' }
  //     : { height: '0', pointerEvents: 'none' }
  // },

  close: {},

  contentContainer: {
    header: {
      extend: roomsHeader,
      titles: { childExtend: { span: null } },
      tabs: { childExtend: { span: null } }
    },

    content: {
      extend: roomsContainers,
      childExtend: {
        childExtend: {
          header: {
            ...[ { text: 'description' }, { text: 'amenities' } ]
          },
          galleryContainer: { title: null },
          article: { package: null, moreButton: null, close: null }
        }
      }
    }
  },

  logo: {}
}

