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
            title: { text: 'TBILISI CITY TOUR' },
            gallery: { extend: galleryTbilisi },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const { activeImage } = state
                        const parentKey = parseInt(element.parent.parent.parent.parent.key)
                        if (state.activeTour === parentKey) {
                          state.update({
                            activeImage: activeImage - 1
                          })
                          if (activeImage <= 0) {
                            state.update({ activeImage: 3 })
                          }
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const { activeImage } = state
                        state.update({
                          activeImage: activeImage + 1
                        })
                        if (activeImage >= 3) {
                          state.update({ activeImage: 0 })
                        }
                      }
                    }
                  }
                ]
              }
            }
          },

          article: {
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
            title: { text: 'ANANURI . GUDAURI . KAZBEGI' },
            gallery: { extend: galleryKazbegi },
            footer: {}
          },

          article: {
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
            title: { text: 'DASHBASHI CANYON' },
            gallery: { extend: galleryMartvili }
          },

          article: {
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
            title: { text: 'MTSKETA' },
            gallery: { extend: galleryMtsketa }
          },
          article: {
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
            title: { text: 'KAKHETI' },
            gallery: { extend: galleryKakheti }
          },

          article: {
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
            title: { text: 'KUTAISI' },
            gallery: { extend: galleryKutaisi }
          },
          article: {
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
            title: { text: 'GORI CITY . UPLISTSIKHE CAVE' },
            gallery: { extend: galleryGori }
          },
          article: {
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
            title: { text: 'BORJOMI' },
            gallery: { extend: galleryBorjomi }
          },
          article: {
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
            title: { text: 'RABATI CASTLE' },
            gallery: { extend: galleryRabati }
          },
          article: {
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
            title: { text: 'CAPITAL TOUR' },
            gallery: { extend: galleryCapitalTour }
          },
          article: {
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
            title: { text: 'CULTURAL TOUR' },
            gallery: { extend: galleryCulturalTour }
          },
          article: {
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
            title: { text: 'HISTORICAL TOUR' },
            gallery: { extend: galleryHistoricalTour }
          },
          article: {
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
            title: { text: 'ROYAL TOUR' },
            gallery: { extend: galleryRoyalTour }
          },
          article: {
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
            title: { text: 'CAUCASUS MOUNTAIN TOUR' },
            gallery: { extend: galleryCaucasusMountainTour }
          },
          article: {
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
            title: null,
            gallery: { extend: galleryCaucasusTour }
          },
          article: {
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
            title: null,
            gallery: { extend: galleryExclusiveTour }
          },
          article: {
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
            title: null,
            gallery: { extend: galleryWineGastronomyTour }
          },
          article: {
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
            title: null,
            gallery: { extend: galleryAdventureTour }
          },
          article: {
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