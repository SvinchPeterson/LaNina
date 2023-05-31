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
              // border: '10px solid transparent',
              // borderRight: 'none',
              borderRadius: `${200 / 16}em 0 0 ${200 / 16}em`,
              marginLeft: 'auto',
              '@media only screen and (max-width: 1180px)': { borderRadius: '0'},
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
          header: {
            padding: '- A Y1 A',
            align: 'center space-between',
            childProps: {
              ':first-child': {
                padding: '0'
              },
              ':last-child': {
                fontSize: `${10 / 16}em`,
                border: 'solid, cream .35',
                borderWidth: '.75px',
                padding: 'A B2',
                letterSpacing: '1px',
              }
            }
          },

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
        props: { position: 'relative' },
        class: {
          show: (element, state) => state.activePopUpContent === parseInt(element.key)
            ? {
              height: '100%',
              width: '100%',
              opacity: '1',
              '> div': { opacity: '1' },
              '> div:nth-child(odd)': {
                '> div > div': {
                  transform: 'translateX(0)',
                  opacity: '1'
                }
              },
              '> div:nth-child(even)': {
                '> div > div': {
                  transform: 'translateX(0)',
                  opacity: '1'
                }
              },
            }
            : {
              height: '0',
              width: '0',
              opacity: '0',
              '> div': { opacity: '0' },
              '> div:nth-child(odd)': {
                '> div > div': {
                  transform: 'translateX(-200px)',
                  opacity: '0'
                }
              },
              '> div:nth-child(even)': {
                '> div > div': {
                  transform: 'translateX(200px)',
                  opacity: '0'
                }
              },
            },

          show2: (element, state) => state.activeScroll
            ? { overflowY: 'auto' }
            : { overflowY: 'hidden' }
        },
        childExtend: {
          class: {
            show: (element, state) => state.activeTour === parseInt(element.key)
            ? {
              minHeight: '100%',
              height: '100%',
              '~ div': { display: 'none'},
              ':nth-child(odd) > article': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'translateX(-50px)',
                  // background: 'rgba(0, 47, 57, .85)',
                  boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px'
                },
              },
              ':nth-child(odd) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(.75) translateX(-30px)',
                  transition: 'transform .8s ease'
                }
              },
              ':nth-child(even) > article': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'translateX(50px)',
                  boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px'
                }
              },
              ':nth-child(even) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(.75) translateX(30px)',
                  transition: 'transform .8s ease'
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
                  transform: 'scale(1)',
                  transition: 'transform .8s ease'
                }
              },
              ':nth-child(even) > div': {
                '@media only screen and (min-width: 1181px)': {
                  transform: 'scale(1)',
                  transition: 'transform .8s ease'
                }
              },

              '@media only screen and (max-width: 1180px)': {
                '> article': {
                  display: 'none'
                }
              }
            },

            show2: (element, state) => state.deActiveTour === parseInt(element.key)
            ? { display: 'none' } : {}
          },

          header: {
            ...[
              { tag: 'h5', props: { pointerEvents: 'none', style: { border: 'none'} }},

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


          article: {
            close: {
              on: {
                click: (event, element, state) => {
                  state.update({
                    activeTour: false,
                    activeScroll: true,
                    activeButton: false,
                    deActiveTour: false
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
                : { display: 'flex' },
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
            },
            moreButton: {
              on: {
                click: (event, element, state, ctx) => {
                  state.update({
                    activeTour: parseInt(element.parent.parent.key),
                    activePackage: true,
                    activeScroll: false,
                  })
                }
              },

              class: {
                show: (element, state) => state.activeTour === parseInt(element.parent.parent.key)
                ? {'@media only screen and (min-width: 1181px)': { display: 'none' }}
                : { '@media only screen and (min-width: 1181px)': { display: 'flex' }},
                show2: (element, state) => state.activePopUpContent === parseInt(element.parent.parent.parent.key)
                ? { opacity: '1', transition: 'opacity .8s ease' }
                : { opacity: '0', transition: 'opacity .8s ease' }
              },
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