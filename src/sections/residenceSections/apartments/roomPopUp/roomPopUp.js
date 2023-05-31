'use strict'

import { PopUpRoomTour } from "../../../../components"

import { opacityWidth } from "../../../../animations"

import { roomsHeader } from "./roomsHeader"
import { roomsContainers } from "./roomsContainers"

import ORNAMENT_PNG from '../../../../assets/images/residence/sololaki/ornaments.png'

const props = {
  style: {
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  },
  ':before': { background: 'radial-gradient(rgba(1, 57, 57, .5), rgba(1, 57, 57, .98), rgba(1, 57, 57, 1))' },
  contentContainer: {
    header: {
      textTransform: 'capitalize',
      titles: { childProps: {fontSize: 'E'}}
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
            marginLeft: 'auto',
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
          '@maxMaxO': { margin: '-C - - -' },

          header: {
            childProps: {
              fontSize: `${10 / 16}em`,
              border: 'solid, cream .35',
              borderWidth: '.75px',
              padding: 'A1 B',
              letterSpacing: '1px',
            }
          },

          galleryContainer: {
            gallery: { '@maxTabletO': { height: 'H' }}
          },

          article: {
            close: {'@minTabletO': { display: 'none'} },
            description: {
              '@maxTabletO': {
                maxWidth: 'H',
                textAlign: 'center'
              }
            },
            amenities: {
              '@maxTabletO': {
                width: 'fit-content',
                style: { overflowY: 'auto'}
              },
              list: {
                '@maxTabletO': {
                  flow: 'column',
                  align: 'flex-start flex-start',
                  gap: '0'
                },
              }
            }
          }
        }
      }
    }
  }
}

export const roomPopUp = {
  extend: PopUpRoomTour,
  props,

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
         class: {
          show: (element, state) => state.activePopUpContent === parseInt(element.key)
            ? {
              height: '100%',
              width: '100%',
              opacity: '1',
              '> div': { opacity: '1' },

              '&:nth-child(odd)': {
                '> div > div > div': {
                  transform: 'translateX(0)',
                  opacity: '1'
                }
              },

              '&:nth-child(even)': {
                '> div > div > div': {
                  transform: 'translateX(0)',
                  opacity: '1'
                }
              }
            }
            : {
              height: '0',
              width: '0',
              opacity: '0',
              '> div': { opacity: '0' },

              '&:nth-child(odd)': {
                '> div > div > div': {
                  transform: 'translateX(-200px)',
                  opacity: '0'
                }
              },

              '&:nth-child(even)': {
                '> div > div > div': {
                  transform: 'translateX(200px)',
                  opacity: '0'
                }
              }
            },

          show2: (element, state) => state.activeScroll
            ? { overflowY: 'auto' }
            : { overflowY: 'hidden' }
        },
        childExtend: {
          header: {
            ...[
              {
                text: 'amenities',
                on: {
                  click: (event, element, state) => {
                    state.update({ activeRoomAmenity: true, activeButton: true})
                  }
                },
              },
              {
                text: 'description',
                on: {
                  click: (event, element, state) => {
                    state.update({
                      activeRoomDescription: true,
                      activeButton: true
                    })
                  }
                },
              }
            ]
          },

          galleryContainer: { title: null},

          article: {
            package: null,
            moreButton: null,
            class: {
              show: (element, state) => state.activePopUpContent === parseInt(element.parent.parent.key)
              && state.activeRoomDescription || state.activeRoomAmenity
              ? {'@media only screen and (max-width: 1180px)': {display: 'flex'}}
              : {'@media only screen and (max-width: 1180px)': {display: 'none'}}
            },

            close: {
              on: {
                click: (event, element, state) => {
                  state.update({
                    activeRoomDescription: false,
                    activeRoomAmenity: false,
                    activeButton: false
                  })
                }
              },
            },

            description: {
              class: {
                show: (element, state) => state.activeRoomDescription
                ? { '@media only screen and (max-width: 1180px)': { display: 'flex' }}
                : { '@media only screen and (max-width: 1180px)': { display: 'none' }},
                show2: (element, state) => state.activePopUpContent === parseInt(element.parent.parent.parent.key)
                ? {
                  '@media only screen and (min-width: 1181px)': {
                    opacity: '1',
                    transform: 'translateY(0)',
                    transition: 'opacity .8s ease, transform .8s ease'
                  }
                }
                : {
                  '@media only screen and (min-width: 1181px)': {
                    opacity: '0',
                    transform: 'translateY(-30px)',
                    transition: 'opacity .8s ease, transform .8s ease'
                  }
                }
              },
            },
            amenities: {
              class: {
                show: (element, state) => state.activeRoomAmenity
                ? { '@media only screen and (max-width: 1180px)': { display: 'flex' }}
                : { '@media only screen and (max-width: 1180px)': { display: 'none' }},
                show2: (element, state) => state.activePopUpContent === parseInt(element.parent.parent.parent.key)
                ? {
                  '@media only screen and (min-width: 1181px)': {
                    opacity: '1',
                    transform: 'translateY(0)',
                    transition: 'opacity .8s ease, transform .8s ease'
                  }
                }
                : {
                  '@media only screen and (min-width: 1181px)': {
                    opacity: '0',
                    transform: 'translateY(30px)',
                    transition: 'opacity .8s ease, transform .8s ease'
                  }
                }
              },
            }
          }
        }
      }
    }
  },

  logo: {}
}

