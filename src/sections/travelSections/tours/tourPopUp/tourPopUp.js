'use strict'

import { PopUpRoomTour } from "../../../../components"

import { toursHeader } from "./toursHeader"
import { toursContainers } from "./toursContainers"


import ORNAMENT_PNG from '../../../../assets/images/travel/ornament.png'

const props = {
  style: { backgroundImage: 'url(' + ORNAMENT_PNG + ')' },
  ':before': { background: 'radial-gradient(rgba(0, 47, 57, .5), rgba(0, 47, 57, .98), rgba(0, 47, 57, 1))' },
  contentContainer: {
    header: {
      textTransform: 'uppercase',
      titles: {
        childProps: {
          fontSize: 'D',
          '@maxMobileM': { fontSize: 'C' },
          span: {fontWeight: '100' }
        }
      }
    },

    content: {
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        boxSize: 'D2 100%',
        background: 'linear-gradient(to top, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)',
        bottom: '0',
        pointerEvents: 'none'
      },
      ':before': {
        content: '""',
        position: 'absolute',
        boxSize: 'C 100%',
        background: 'linear-gradient(to bottom, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)',
        top: '0',
        pointerEvents: 'none'
      },
      childProps: {
        padding: 'D -',
        gap: '0',
        '@maxTabletO': {
          padding: 'D - D2 -',
          gap: 'C',
        },
        '@maxMobileL': {
          padding: 'A - D2 -',
        },
        style: {
          '> div:nth-child(odd)': {
            '@media only screen and (min-width: 1181px)': {
              '> article > button': {
                top: `0`,
                right: `0`
              }
            },

            '> div > h5': {
              padding: `0 0 ${10 / 12}em ${20 / 12 }em`
            },
            '> div > div': {
              borderRadius: `0 ${200 / 16}em ${200 / 16}em 0`,
              '@media only screen and (max-width: 1180px)': { borderRadius: '0' },
              '&:before': { background: 'linear-gradient(to right, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)'}
            },
            '> div > footer': {
              padding: '1em 0 0 1em',
              '@media only screen and (max-width: 1180px)': { padding: '1em'}
            }
          },

          '> div:nth-child(even)': {
            flexFlow: 'row-reverse',
            '@media only screen and (max-width: 1180px)': { flexFlow: 'column'},
            '@media only screen and (min-width: 1181px)': {
              '> article > button': {
                top: `0`,
                left: `0`
              }
            },
            '> div > h5': {
              alignSelf: 'flex-end',
              padding: `0 ${20 / 12}em ${10 / 12 }em 0`
            },
            '> div > div': {
              borderRadius: `${200 / 16}em 0 0 ${200 / 16}em`,
              '@media only screen and (max-width: 1180px)': { borderRadius: '0' },
              '&:before': { background: 'linear-gradient(to left, rgba(0, 47, 57, 1) 0%, rgba(0, 47, 57, 0) 100%)'}
            },
            '> div > footer': {
              alignSelf: 'flex-end',
              padding: '1em 1em 0 0',
              '@media only screen and (max-width: 1180px)': { padding: '1em'}
            }
          },
        },
        childProps: {
          padding: 'C -',
          header: { zindex: '100'},
          article: {
            zIndex: '700',
            '@minTabletO': { transition: 'transform 1s ease' },
            description: { '@maxTabletO': { display: 'none'} },
            moreButton: { '@maxTabletO': { display: 'none' } }
          }
        },

        ':not(:nth-child(1),:nth-child(2))': {
          justifyContent: 'center'
        }
      }
    }
  }
}

export const tourPopUp = {
  extend: PopUpRoomTour,
  props,

  close: {},

  contentContainer: {
    header: {
      extend: toursHeader,
      titles: {},
      tabs: { childExtend: { icon2: null } }
    },
    content: {
      extend: toursContainers,
      childExtend: {
        childExtend: {
          class: {
            show: (element, state) => state.activeTour === parseInt(element.key)
            ? {
              ':nth-child(odd) > article': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'translateX(-50px)',
                  background: 'rgba(0, 47, 57, .85)',
                  boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px'
                },
              },
              ':nth-child(odd) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(.75) translateX(-30px)'
                }
              },
              ':nth-child(even) > article': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'translateX(50px)',
                  background: 'rgba(0, 47, 57, .85)',
                  boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px'
                }
              },
              ':nth-child(even) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(.75) translateX(30px)'
                }
              },
              '@media only screen and (max-width: 1180px)': {
                '> article': {
                  display: 'flex'
                }
              }
            }

            : {
              ':nth-child(odd) > article': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(1)'
                }
              },
              ':nth-child(even) > article': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(1)'
                }
              },

              ':nth-child(odd) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(1)'
                }
              },
              ':nth-child(even) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(1)'
                }
              },

              '@media only screen and (max-width: 1180px)': {
                '> article': {
                  display: 'none'
                }
              }
            }
          },
          header: {
            ...[
              { tag: 'h5', props: {pointerEvents: 'none' }},

              {
                text: 'more',
                on: {
                  click: (event, element, state) => {
                    state.update({
                      activeTour: parseInt(element.parent.parent.key),
                      activeScroll: false,
                      activeButton: true
                    })
                  }
                },
              }
            ]
          },

          galleryContainer: {},
          article: {
            close: {
              on: {
                click: (event, element, state) => {
                  state.update({
                    activeTour: false,
                    activeScroll: true,
                    activeButton: false
                  })
                }
              },

              class: {
                show: (element, state) => state.activeTour === parseInt(element.parent.parent.key)
                ? {
                  opacity: '1',
                  transform: 'rotate(90deg)',
                  transition: 'opacity .5s ease-in-out, transform .5s ease-in-out'
                }
                : { opacity: '0', transform: 'rotate(0)' }
              },
            },
            amenities: null,
            description: {
              class: {
                show: (element, state) => state.activeTour === parseInt(element.parent.parent.key)
                ? { display: 'none' }
                : { display: 'flex' }
              },
            },
            moreButton: {
              props: { border: '2px solid red'},
              class: {
                show: (element, state) => state.activeTour === parseInt(element.parent.parent.key)
                ? {
                  '@media only screen and (min-width: 1181px)': {
                    display: 'none'
                  }
                }
                : {
                  '@media only screen and (min-width: 1181px)': {
                    display: 'flex'
                  }
                }
              },
              more: {
                on: {
                  click: (event, element, state) => {
                    state.update({
                      activeTour: parseInt(element.parent.parent.parent.key),
                      activePackage: true,
                      activeScroll: false
                    })
                    // Link.on.click(event, element, state, ctx)
                  }
                }
              }
            },
            package: {
              class: {
                show: (element, state) => state.activeTour === parseInt(element.parent.parent.key)
                ? {
                  '@media only screen and (min-width: 1181px)': {
                    height: '100%',
                    opacity: '1',
                    transform: 'scale(1)',
                    transition: 'opacity .7s ease, transform .7s ease'
                  },
                }
                : {
                  '@media only screen and (min-width: 1181px)': {
                    height: '0',
                    opacity: '0',
                    transform: 'scale(.98)'
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