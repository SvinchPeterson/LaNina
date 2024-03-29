'use strict'

import { Flex, Button, Img } from 'smbls'

import { PopUpModal } from "./PopUpModal"
import { RoomTour } from './RoomTour'

const props = {
  style: {
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: 'rgba(226, 135, 67, 1)',
  },
  contentContainer: {
    boxSize: '100% 80%',
    flow: 'column',
    '@minScreenO': { boxSize: '100% 75%'},
    '@minScreenD': { fontSize: `${18 / 16}em` },
    '@minScreenL': { boxSize: '100% 65%'},
    '@maxTabletL': { fontSize: `${14.5 / 16}em` },
    '@maxTabletO': { boxSize: '100% 60%' },
    '@maxTabletS': { boxSize: '100% 70%' },
    '@maxMobileL': { boxSize: '100% 80%' },
    '@maxMobileM': { boxSize: '100% 95%'},

    header: {
      zIndex: '2',
      minWidth: '100%',
      minHeight: 'D2',
      alignItems: 'flex-end',
      border: 'solid, cream .55',
      borderWidth: '0 0 .8px 0',
      padding: '- A',
      '@maxTabletS': {
        flow: 'column',
        border: 'none',
        minHeight: 'E',
      },
      titles: {
        position: 'relative',
        flex: '1',
        '@maxTabletS': {
          alignSelf: 'flex-start',
          minWidth: '100%',
          border: 'solid, cream .55',
          borderWidth: '0 0 .8px 0'
        },
        height:`${40 / 16}em`,
        overflow: 'hidden',
        childProps: {
          // fontSize: 'E',
          letterSpacing: '-1px',
          position: 'absolute',
          left: '0',
          color: 'cream',
          whiteSpace: 'nowrap',
          lineHeight: `${36 / 33}em`,
          transition: 'bottom .65s ease-in-out, opacity .65s ease-in-out, transform .65s ease-in-out'
        }
      },
      tabs: {
        gap: 'A',
        '@maxTabletS': {
          alignSelf: 'flex-end',
          minWidth: '100%',
          justifyContent: 'flex-end'
        },
        '@maxMobileM': {
          gap: '0',
          justifyContent: 'space-between'
        },
        childProps: {
          padding: 'Z1',
          height: 'fit-content',
          background: 'transparent',
          style: { cursor: 'pointer' },
          ':hover': { opacity: '1' },
          span: {
            display: 'block',
            boxSize: 'V2 B1',
            background: 'cream',
            round: 'C',
            '@maxMobileS': { boxSize: 'X A2'}
          },
          icon2: { boxSize: 'Z2 Z2' }
        }
      }
    },

    content: {
      flex: '1',
      overflow: 'hidden',
      childProps: {
        height: '100%',
        flow: 'column',
        childProps: {
          transition: 'opacity 2s ease',
          '@maxTabletO': {
            flow: 'column'
          },
          header: {
            boxSize: 'C 100%',
            align: 'flex-end space-between',
            padding: '- Z Y1 Z',
            childProps: {
              background: 'transparent',
              color: 'cream',
              textTransform: 'uppercase',
              fontWeight: '700',
              opacity: '.75'
            }
          },
          galleryContainer: {
            transition: 'opacity .8s ease',
            flex: '1.5',
            '@maxTabletO': {
              minWidth: '100%'
            },
            title: { '@maxTabletO':{ display: 'none'}},
            gallery: {
              width: '100%',
              transition: 'transform .8s ease, opacity 1.2s ease',
              '@maxMobileM': { height: `${450 / 16}em` },
              '@maxMaxO': { height: `${300 / 16}em` }
            },
            footer: { transition: 'opacity 2s ease' }
          },

          article: {
            flex: '1',
            '@maxTabletO': {
              position: 'fixed',
              zIndex: '200',
              width: '100%',
              height: '100%',
              top: '0',
              left: '0',
              zIndex: '50',
              background: 'black .5',
              style: { backdropFilter: 'blur(2.5px)' }
            }
          }
        }
      }
    }
  }
}

export const PopUpRoomTour = {
  extend: PopUpModal,
  props,

  class: {
    show: (element, state) => state.activePopUp
    ? { height: '100%' } : { height: '0', pointerEvents: 'none' }
  },

  close: {
    on: {
      click: (event, element, state) => {state.update({ activePopUp: false, activePopUpContent: false })}
    },
    class: {
      show: (element, state) => state.activeButton
      ? {'@media only screen and (max-width: 1180px)': { display: 'none' }}
      : {'@media only screen and (max-width: 1180px)': { display: 'block'}},
      show2: (element, state) => state.activePopUp
      ? {opacity: '1',transform: 'rotate(90deg)'}
      : { opacity: '0'}
    }
  },

  contentContainer: {
    extend: Flex,
    header: {
      extend: Flex,
      titles: {
        childExtend: {
          tag: 'h1',
          span: { },
          class: {
            show: (element, state) => state.activePopUpContent === parseInt(element.key)
            ? {
              bottom: `${7 / 33}em`,
              opacity: '1',
              transform: 'scale(1)'
            }
            : {
              bottom: `${-50 / 33}em`,
              opacity: '0',
              transform: 'scale(.95)'
            }
          }
        }
      },

      tabs: {
        extend: Flex,
        childExtend: {
          extend: Button,
          on: {
            click: (event, element, state) => {
              state.update({
                activePopUpContent: parseInt(element.key),
                activeTour: false,
                activeScroll: true
              })
            }
          },
          class: {
            show: (element, state) => state.activePopUpContent === parseInt(element.key)
            ? {
              opacity: '1',
              pointerEvents: 'none',
              '> span': { background: 'rgba(226, 135, 67, 1)' }
            }
            : { opacity: '.65'}
          },

          span: {},
          icon2: { extend: Img }
        }
      }
    },

    content: {
      extend: Flex,
      childExtend: {
        extend: Flex,
        childExtend: { extend: RoomTour }
      }
    }
  },

  logo: {
    class: {
      show: (element, state) => state.activePopUp
        ? { opacity: '.8', transform: 'rotate3d(2, 1, 1, -0.1turn)' }
        : { opacity: '0', transform: 'rotate3d(0)' }
    }
  }
}