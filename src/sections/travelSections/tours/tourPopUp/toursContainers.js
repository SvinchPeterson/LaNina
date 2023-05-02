'use strict'

import { Link } from 'smbls'

import {
  galleryTbilisi, galleryAdventureTour, galleryBorjomi, galleryCapitalTour, galleryCaucasusMountainTour,
  galleryCaucasusTour, galleryCulturalTour, galleryExclusiveTour, galleryGori, galleryHistoricalTour,
  galleryKakheti, galleryKazbegi, galleryKutaisi, galleryMartvili, galleryMtsketa, galleryRabati,
  galleryRoyalTour, galleryWineGastronomyTour
} from "../../../../galleries/travelGalleries"

import {
  $tbilisi, $adventure, $ananuri, $borjomi,$capital, $caucasus, $caucasusMountain, $cultural, $dashbashi, $exclusive, $gori, $historical, $kakheti, $mtsketa, $kutaisi, $rabat, $royal, $wineGastronomy
} from "../../../../texts/travel"

import {
  packageTbilisi, packageAnanuri, packageAdventure, packageBorjomi, packageCapital, packageCaucasus,
  packageCaucasusMountain, packageCultural, packageDashbashi, packageExclusive, packageGori, packageHistorical,
  packageKakheti, packageKutaisi, packageMtskheta, packageRabati, packageRoyal, packageWineGastronomy,
} from "../../../../toursPackages"

export const toursContainers = {
  ...[
    {
      ...[
        {
          attr: { id: 'tbilisi' },
          header: {...[{ text: 'TBILISI CITY TOUR'}]},

          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'TBILISI CITY TOUR' },
            gallery: { extend: galleryTbilisi },
            footer: {
            }
          },

          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $tbilisi },
            moreButton: {
              more: { props: {href: '#tbilisi'}}
            },
            package: { extend: packageTbilisi }
          }
        },

        {
          attr: { id: 'ananuri' },
          header: { ...[{ text: 'ANANURI . GUDAURI'}]},

          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'ANANURI . GUDAURI . KAZBEGI' },
            gallery: { extend: galleryKazbegi }
          },

          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $ananuri },
            moreButton: { more: {props: {href: '#ananuri'}}},
            package: { extend: packageAnanuri }
          }
        },

        {
          attr: { id: 'dashbashi' },
          header: { ...[{ text: 'DASHBASHI CANYON' }]},

          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'DASHBASHI CANYON' },
            gallery: { extend: galleryMartvili }
          },

          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $dashbashi },
            moreButton: { more: {props: {href: '#dashbashi'}}},
            package: { extend: packageDashbashi }
          }
        },

        {
          attr: { id: 'mtsketa'},
          header: {...[{ text: 'MTSKETA' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'MTSKETA' },
            gallery: { extend: galleryMtsketa }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $mtsketa },
            moreButton: { more: { props: { href: '#mtsketa'}}},
            package: { extend: packageMtskheta }
          }
        },

        {
          attr: { id: 'kakheti'},
          header: {...[{text: 'KAKHETI'}]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'KAKHETI' },
            gallery: { extend: galleryKakheti }
          },

          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $kakheti },
            moreButton: { more: {props: {href: '#kakheti'}}},
            package: { extend: packageKakheti }
          }
        },

        {
          attr: { id: 'kutaisi' },
          header: {...[{text: 'KUTAISI'}]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'KUTAISI' },
            gallery: { extend: galleryKutaisi }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `0 ${400 / 16}em ${400 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $kutaisi },
            moreButton: { more: { props: {href: '#kutaisi'}}},
            package: { extend: packageKutaisi }
          }
        },

        {
          attr: { id: 'gori'},
          header: {...[{text: 'GORI CITY'}]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'GORI CITY . UPLISTSIKHE CAVE' },
            gallery: { extend: galleryGori }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $gori },
            moreButton: { more: {props: {href: '#gori'}}},
            package: { extend: packageGori}
          }
        },

        {
          attr: { id: 'borjomi'},
          header: {...[{ text: 'BORJOMI' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'BORJOMI' },
            gallery: { extend: galleryBorjomi }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $borjomi },
            moreButton: { more: {props: {href: '#borjomi'}}},
            package: { extend: packageBorjomi }
          }
        },

        {
          attr: { id: 'rabati' },
          header: {...[{ text: 'RABATI CASTLE' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'RABATI CASTLE' },
            gallery: { extend: galleryRabati }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $rabat },
            moreButton: { more: { props: {href: '#rabati'}}},
            package: { extend: packageRabati }
          }
        }
      ]
    },

    {
      ...[
        {
          attr: { id: 'capital'},
          header: {...[{ text: 'CAPITAL TOUR' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'CAPITAL TOUR' },
            gallery: { extend: galleryCapitalTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${350 / 16}em 0 0 ${350 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0',
                overflow: 'hidden',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $capital },
            moreButton: { more: { props: { href: '#capital'}}},
            package: { extend: packageCapital }
          }
        },

        {
          attr: { id: 'cultural'},
          header: {...[{ text: 'CULTURAL TOUR' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'CULTURAL TOUR' },
            gallery: { extend: galleryCulturalTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $cultural },
            moreButton: { more: {props: {href: '#cultural'}}},
            package: { extend: packageCultural }
          }
        },

        {
          attr: { id: 'historical' },
          header: {...[{ text: 'HISTORICAL TOUR' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'HISTORICAL TOUR' },
            gallery: { extend: galleryHistoricalTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${350 / 16}em 0 0 ${350 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0',
                overflow: 'hidden',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $historical },
            moreButton: { more: { props: {href: '#historical'}}},
            package: { extend: packageHistorical }
          }
        },

        {
          attr: { id: 'royal'},
          header: {...[{ text: 'ROYAL TOUR' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'ROYAL TOUR' },
            gallery: { extend: galleryRoyalTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $royal },
            moreButton: { more: { props: {href: '#royal'}}},
            package: { extend: packageRoyal }
          }
        },

        {
          attr: { id: 'mountain' },
          header: {...[{ text: 'CAUCASUS MOUNTAIN TOUR' }]},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: { text: 'CAUCASUS MOUNTAIN TOUR' },
            gallery: { extend: galleryCaucasusMountainTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${350 / 16}em 0 0 ${350 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0',
                overflow: 'hidden',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $caucasusMountain },
            moreButton: { more: {props: { href: '#mountain'}}},
            package: { extend: packageCaucasusMountain }
          }
        }
      ]
    },

    {
      ...[
        {
          attr: { id: 'caucasus'},
          header: {},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: null,
            gallery: { extend: galleryCaucasusTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $caucasus },
            moreButton: { more: { props: { href: '#caucasus'}}},
            package: { extend: packageCaucasus }
          }
        }
      ]
    },

    {
      ...[
        {
          attr: { id: 'exclusive'},
          header: {},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: null,
            gallery: { extend: galleryExclusiveTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${350 / 16}em 0 0 ${350 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0',
                overflow: 'hidden',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $exclusive },
            moreButton: { more: {props: {href: '#exclusive'}}},
            package: { extend: packageExclusive }
          }
        }
      ]
    },

    {
      ...[
        {
          attr: { id: 'wine'},
          header: {},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: null,
            gallery: { extend: galleryWineGastronomyTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $wineGastronomy },
            moreButton: { more: { props: {href: '#wine'}}},
            package: { extend: packageWineGastronomy }
          }
        }
      ]
    },

    {
      ...[
        {
          attr: { id: 'adventure' },
          header: {},
          galleryContainer: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {transform: 'scale(.9) translateX(-30px)' }
              : { transform: 'scale(1)'}
            },
            title: null,
            gallery: { extend: galleryAdventureTour }
          },
          article: {
            class: {
              show: (element, state) => state.activeTour === parseInt(element.parent.key)
              ? {
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                maxHeight: `${450 / 16}em`
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $adventure },
            moreButton: { more: { props: { href: '#adventure'}}},
            package: { extend: packageAdventure }
          }
        }
      ]
    }
  ]
}