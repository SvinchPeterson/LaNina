// 'use strict'

// import { Flex } from 'smbls'

// import { slideHide, opacityTransforms2, flexFlow } from '../../../../animations'

// import { TourTab, NavHorizontalArrowsBlack } from '../../../../components'

// import TBILISI_JPG from '../../../assets/images/travel/daily.jpg'
// import STANDART_JPG from '../../../assets/images/travel/standart.jpg'
// import CAUCASUS_JPG from '../../../assets/images/travel/caucasus.jpg'
// import EXCLUSIVE_JPG from '../../../assets/images/travel/exclusive.jpg'
// import WINE_JPG from '../../../assets/images/travel/wine.jpg'
// import ADVENTURE_JPG from '../../../assets/images/travel/adventure.jpg'

// const props = {
//   position: 'relative',
//   maxWidth: '80%',
//   height: 'fit-content',
//   flow: 'column',
//   gap: 'A',
//   padding: '- -',
//   style: { overflowX: 'hidden' },
//   header: {
//     fontSize: 'D',
//     lineHeight: '0',
//     borderBottom: '1px solid silver',
//     position: 'relative',
//     align: 'flex-end space-between',
//     padding: '- D Z D',
//     title: {
//       text: 'tours',
//       fontSize: 'A',
//       fontWeight: '500',
//       textTransform: 'uppercase',
//       zIndex: '55',
//       style: { letterSpacing: '-1px' }
//     },
//     arrows: {
//       gap: 'A1',
//       zIndex: '100',
//       ':after': { display: 'none' },
//       childProps: {
//         boxSize: 'D D',
//         zIndex: '55',
//         borderRadius: '100%',
//         border: '1.5px solid gray',
//         arrow: { fontSize: 'A' },
//         icon: {
//           fontSize: ''
//         }
//       }
//     }
//   },

//   content: {
//     minWidth: 'calc(300 * 12)',
//     position: 'relative',
//     boxSizing: 'border-box',
//     scrollBehavior: 'smooth',
//     // animationName: slideHide,
//     // animationDuration: '30s',
//     // animationTimingFunction: 'linear',
//     // animationIterationCount: 'infinite',
//     gap: '',
//     width: 'auto',
//     style: { overflowX: 'auto', '::-webkit-scrollbar': { display: 'none' } },

//     tabs: {
//       width: '100%',
//       // gap: 'A',
//       style: {
//         // overflowX: 'auto'
//         animationName: slideHide,
//         animationDuration: '30s',
//         animationTimingFunction: 'linear',
//         animationIterationCount: 'infinite'
//       }
//     }
//   }
// }

// function sideScroll (element, direction, speed, distance, step) {
//   var scrollAmount = 0
//   var slideTimer = setInterval(function () {
//     if (direction === 'left') {
//       element.scrollLeft -= step
//     } else {
//       element.scrollLeft += step
//     }
//     scrollAmount += step
//     if (scrollAmount >= distance) {
//       window.clearInterval(slideTimer)
//     }
//   }, speed)
// }

// export const tabs = {
//   extend: Flex,
//   props,

//   header: {
//     extend: Flex,
//     title: { tag: 'h3' },
//     arrows: {
//       extend: NavHorizontalArrowsBlack,
//       ...[
//         {
//           on: {
//             click: (event, element, state) => {
//               const content = document.getElementById('content')
//               sideScroll(content, 'left', 10, 300, 10)
//             }
//           }
//         },

//         {
//           on: {
//             click: (event, element, state) => {
//               // const { tabs } = element.parent.parent.parent.content
//               const content = document.getElementById('content')
//               sideScroll(content, 'right', 10, 300, 10)
//             }
//           }
//         }
//       ]
//     }
//   },

//   content: {
//     extend: Flex,
//     attr: { id: 'content' },
//     tabs: {
//       extend: Flex,
//       childExtend: TourTab,
//       ...[
//         {
//           props: {

//             image: {
//               backgroundImage: 'url(' + TBILISI_JPG + ')',
//               title: { text: 'daily' }
//             }

//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeDailyTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + STANDART_JPG + ')',
//               title: { text: 'standard' }
//             }
//           },
//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeStandardTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + CAUCASUS_JPG + ')',
//               title: { text: 'caucasus' }
//             }

//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeArmeniaTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + EXCLUSIVE_JPG + ')',
//               title: { text: 'exclusive', color: 'orange3' }
//             },
//             ':after': { background: 'blue3 .7' }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeExclusiveTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + WINE_JPG + ')',
//               title: { text: 'wine & gastronomy' }
//             }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeArmeniaTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + ADVENTURE_JPG + ')',
//               title: { text: 'adventure' }
//             }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeAdventureTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + TBILISI_JPG + ')',
//               title: { text: 'daily' }
//             }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeDailyTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + STANDART_JPG + ')',
//               title: { text: 'standard' }
//             }
//           },
//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeStandardTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + CAUCASUS_JPG + ')',
//               title: { text: 'caucasus' }
//             }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeArmeniaTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + EXCLUSIVE_JPG + ')',
//               title: { text: 'exclusive', color: 'gold' }
//             },
//             ':after': { background: 'blue3 .7' }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeExclusiveTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + WINE_JPG + ')',
//               title: { text: 'wine & gastronomy' }
//             }

//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeArmeniaTour: true })
//             }
//           }
//         },

//         {
//           props: {
//             image: {
//               backgroundImage: 'url(' + ADVENTURE_JPG + ')',
//               title: { text: 'adventure' }
//             }
//           },

//           on: {
//             click: (event, element, state) => {
//               state.update({ activeTour: true, activeAdventureTour: true })
//             }
//           }
//         }
//       ]
//     }
//   }
// }
