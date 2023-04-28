'use strict'

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
                maxHeight: `${400 / 16}em`,
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em `,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $tbilisi },
            moreButton: {},
            package: { extend: packageTbilisi }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $ananuri },
            moreButton: {},
            package: { extend: packageAnanuri }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },
            close: {},
            description: { extend: $dashbashi },
            moreButton: {},
            package: { extend: packageDashbashi }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $mtsketa },
            moreButton: {},
            package: { extend: packageMtskheta }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $kakheti },
            moreButton: {},
            package: { extend: packageKakheti }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `0 ${400 / 16}em ${400 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $kutaisi },
            moreButton: {},
            package: { extend: packageKutaisi }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $gori },
            moreButton: {},
            package: { extend: packageGori}
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `0 ${300 / 16}em ${300 / 16}em 0`,
                transform: 'scale(1.2) translateX(50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) 30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $borjomi },
            moreButton: {},
            package: { extend: packageBorjomi }
          }
        },

        {
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
                maxHeight: `${400 / 16}em`,
                borderRadius: `${300 / 16}em 0 0 ${300 / 16}em`,
                transform: 'scale(1.2) translateX(-50px)',
                background: 'rgba(0, 47, 57, .85)',
                boxShadow:' rgba(0, 0, 0, 0.45) -30px 0px 20px -20px',
                padding: '0'
              }
              : {
                transform: 'scale(1)',
              }
            },

            close: {},
            description: { extend: $rabat },
            moreButton: {},
            package: { extend: packageRabati }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {...[{ text: 'CAPITAL TOUR' }]},
          galleryContainer: {
            title: { text: 'CAPITAL TOUR' },
            gallery: { extend: galleryCapitalTour }
          },
          article: {
            close: {},
            description: { extend: $capital },
            moreButton: {},
            package: { extend: packageCapital }
          }
        },

        {
          header: {...[{ text: 'CULTURAL TOUR' }]},
          galleryContainer: {
            title: { text: 'CULTURAL TOUR' },
            gallery: { extend: galleryCulturalTour }
          },
          article: {
            close: {},
            description: { extend: $cultural },
            moreButton: {},
            package: { extend: packageCultural }
          }
        },

        {
          header: {...[{ text: 'HISTORICAL TOUR' }]},
          galleryContainer: {
            title: { text: 'HISTORICAL TOUR' },
            gallery: { extend: galleryHistoricalTour }
          },
          article: {
            close: {},
            description: { extend: $historical },
            moreButton: {},
            package: { extend: packageHistorical }
          }
        },

        {
          header: {...[{ text: 'ROYAL TOUR' }]},
          galleryContainer: {
            title: { text: 'ROYAL TOUR' },
            gallery: { extend: galleryRoyalTour }
          },
          article: {
            close: {},
            description: { extend: $royal },
            moreButton: {},
            package: { extend: packageRoyal }
          }
        },

        {
          header: {...[{ text: 'CAUCASUS MOUNTAIN TOUR' }]},
          galleryContainer: {
            title: { text: 'CAUCASUS MOUNTAIN TOUR' },
            gallery: { extend: galleryCaucasusMountainTour }
          },
          article: {
            close: {},
            description: { extend: $caucasusMountain },
            moreButton: {},
            package: { extend: packageCaucasusMountain }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            title: null,
            gallery: { extend: galleryCaucasusTour }
          },
          article: {
            close: {},
            description: { extend: $caucasus },
            moreButton: {},
            package: { extend: packageCaucasus }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            title: null,
            gallery: { extend: galleryExclusiveTour }
          },
          article: {
            close: {},
            description: { extend: $exclusive },
            moreButton: {},
            package: { extend: packageExclusive }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            title: null,
            gallery: { extend: galleryWineGastronomyTour }
          },
          article: {
            close: {},
            description: { extend: $wineGastronomy },
            moreButton: {},
            package: { extend: packageWineGastronomy }
          }
        }
      ]
    },

    {
      ...[
        {
          header: {},
          galleryContainer: {
            title: null,
            gallery: { extend: galleryAdventureTour }
          },
          article: {
            close: {},
            description: { extend: $adventure },
            moreButton: {},
            package: { extend: packageAdventure }
          }
        }
      ]
    }
  ]
}