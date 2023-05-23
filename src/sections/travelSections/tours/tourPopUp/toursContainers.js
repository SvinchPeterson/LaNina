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
          attr: { id: 'tbilisi' },
          header: {...[{ text: 'TBILISI CITY TOUR'}]},

          galleryContainer: {
            title: { text: 'TBILISI CITY TOUR' },
            gallery: {
              extend: galleryTbilisi,
              childExtend: {
                class: {
                  show: (element, state) => state.activeTbilisiImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const { activeTbilisiImage } = state
                        state.update({
                          activeTbilisiImage: activeTbilisiImage - 1
                        })
                        if (activeTbilisiImage <= 0) {
                          state.update({ activeTbilisiImage: 5 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeTbilisiImage } = state
                        state.update({
                          activeTbilisiImage: activeTbilisiImage + 1
                        })
                        if (activeTbilisiImage >= 5) {
                          state.update({ activeTbilisiImage: 0 })
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
              props: { href: '#tbilisi'}
              // ...[{ props: { href: '#tbilisi'}}]
              // // more: { props: { href: '#tbilisi'} }
            },
            package: { extend: packageTbilisi }
          }
        },

        {
          attr: { id: 'ananuri' },
          header: { ...[{ text: 'ANANURI . GUDAURI'}]},

          galleryContainer: {
            title: { text: 'ANANURI . GUDAURI . KAZBEGI' },
            gallery: {
              extend: galleryKazbegi,
              childExtend: {
                class: {
                  show: (element, state) => state.activeAnanuriImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const { activeAnanuriImage } = state
                        state.update({
                          activeAnanuriImage: activeAnanuriImage - 1
                        })
                        if (activeAnanuriImage <= 0) {
                          state.update({ activeAnanuriImage: 4 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeAnanuriImage } = state
                        state.update({
                          activeAnanuriImage: activeAnanuriImage + 1
                        })
                        if (activeAnanuriImage >= 4) {
                          state.update({activeAnanuriImage: 0 })
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
            description: { extend: $ananuri },
            moreButton: {
              props: {href: '#ananuri'}
            },
            package: { extend: packageAnanuri }
          }
        },

        {
          attr: { id: 'dashbashi' },
          header: { ...[{ text: 'DASHBASHI CANYON' }]},

          galleryContainer: {
            title: { text: 'DASHBASHI CANYON' },
            gallery: {
              extend: galleryMartvili,
              childExtend: {
                class: {
                  show: (element, state) => state.activeDashbashiImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeDashbashiImage } = state
                        state.update({
                          activeDashbashiImage: activeDashbashiImage - 1
                        })
                        if (activeDashbashiImage <= 0) {
                          state.update({ activeDashbashiImage: 3 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeDashbashiImage} = state
                        state.update({
                          activeDashbashiImage: activeDashbashiImage + 1
                        })
                        if (activeDashbashiImage >= 3) {
                          state.update({activeDashbashiImage: 0 })
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
            description: { extend: $dashbashi },
            moreButton: {
            props: { href: '#dashbashi'}
            },
            package: { extend: packageDashbashi }
          }
        },

        {
          attr: { id: 'mtsketa'},
          header: {...[{ text: 'MTSKETA' }]},
          galleryContainer: {
            title: { text: 'MTSKETA' },
            gallery: {
              extend: galleryMtsketa,
              childExtend: {
                class: {
                  show: (element, state) => state.activeMtsketaImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeMtsketaImage } = state
                        state.update({
                          activeMtsketaImage: activeMtsketaImage - 1
                        })
                        if (activeMtsketaImage <= 0) {
                          state.update({ activeMtsketaImage: 3 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeMtsketaImage} = state
                        state.update({
                          activeMtsketaImage: activeMtsketaImage + 1
                        })
                        if (activeMtsketaImage >= 3) {
                          state.update({activeMtsketaImage: 0 })
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
            description: { extend: $mtsketa },
            moreButton: {
              props: { href: '#mtsketa'}
            },
            package: { extend: packageMtskheta }
          }
        },

        {
          attr: { id: 'kakheti'},
          header: {...[{text: 'KAKHETI'}]},
          galleryContainer: {
            title: { text: 'KAKHETI' },
            gallery: {
              extend: galleryKakheti,
              childExtend: {
                class: {
                  show: (element, state) => state.activeKakhetiImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeKakhetiImage } = state
                        state.update({
                          activeKakhetiImage: activeKakhetiImage - 1
                        })
                        if (activeKakhetiImage <= 0) {
                          state.update({ activeKakhetiImage: 4 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeKakhetiImage} = state
                        state.update({
                          activeKakhetiImage: activeKakhetiImage + 1
                        })
                        if (activeKakhetiImage >= 4) {
                          state.update({activeKakhetiImage: 0 })
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
            description: { extend: $kakheti },
            moreButton: {
              props: {href: '#kakheti'}
            },
            package: { extend: packageKakheti }
          }
        },

        {
          attr: { id: 'kutaisi' },
          header: {...[{text: 'KUTAISI'}]},
          galleryContainer: {
            title: { text: 'KUTAISI' },
            gallery: {
              extend: galleryKutaisi,
              childExtend: {
                class: {
                  show: (element, state) => state.activeQutaisiImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeQutaisiImage } = state
                        state.update({
                          activeQutaisiImage: activeQutaisiImage - 1
                        })
                        if (activeQutaisiImage <= 0) {
                          state.update({ activeQutaisiImage: 4 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeQutaisiImage} = state
                        state.update({
                          activeQutaisiImage: activeQutaisiImage + 1
                        })
                        if (activeQutaisiImage >= 4) {
                          state.update({activeQutaisiImage: 0 })
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
            description: { extend: $kutaisi },
            moreButton: {
              props: {href: '#kutaisi'}
            },
            package: { extend: packageKutaisi }
          }
        },

        {
          attr: { id: 'gori'},
          header: {...[{text: 'GORI CITY'}]},
          galleryContainer: {
            title: { text: 'GORI CITY . UPLISTSIKHE CAVE' },
            gallery: {
              extend: galleryGori,
              childExtend: {
                class: {
                  show: (element, state) => state.activeGoriImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeGoriImage} = state
                        state.update({
                          activeGoriImage: activeGoriImage - 1
                        })
                        if (activeGoriImage <= 0) {
                          state.update({ activeGoriImage: 4 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeGoriImage} = state
                        state.update({
                          activeGoriImage: activeGoriImage + 1
                        })
                        if (activeGoriImage >= 4) {
                          state.update({activeGoriImage: 0 })
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
            description: { extend: $gori },
            moreButton: {
              props: {href: '#gori'}
            },
            package: { extend: packageGori}
          }
        },

        {
          attr: { id: 'borjomi'},
          header: {...[{ text: 'BORJOMI' }]},
          galleryContainer: {
            title: { text: 'BORJOMI' },
            gallery: {
              extend: galleryBorjomi,
              childExtend: {
                class: {
                  show: (element, state) => state.activeBorjobiImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeBorjobiImage} = state
                        state.update({
                          activeBorjobiImage: activeBorjobiImage - 1
                        })
                        if (activeBorjobiImage <= 0) {
                          state.update({ activeBorjobiImage: 3 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeBorjobiImage} = state
                        state.update({
                          activeBorjobiImage: activeBorjobiImage + 1
                        })
                        if (activeBorjobiImage >= 3) {
                          state.update({activeBorjobiImage: 0 })
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
            description: { extend: $borjomi },
            moreButton: {
              props: {href: '#borjomi'}
            },
            package: { extend: packageBorjomi }
          }
        },

        {
          attr: { id: 'rabati' },
          header: {...[{ text: 'RABATI CASTLE' }]},
          galleryContainer: {
            title: { text: 'RABATI CASTLE' },
            gallery: {
              extend: galleryRabati,
              childExtend: {
                class: {
                  show: (element, state) => state.activeRabatiImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRabatiImage} = state
                        state.update({
                          activeRabatiImage: activeRabatiImage - 1
                        })
                        if (activeRabatiImage <= 0) {
                          state.update({ activeRabatiImage: 3 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRabatiImage} = state
                        state.update({
                          activeRabatiImage: activeRabatiImage + 1
                        })
                        if (activeRabatiImage >= 3) {
                          state.update({activeRabatiImage: 0 })
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
            description: { extend: $rabat },
            moreButton: {
              props: {href: '#rabati'}
            },
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
            gallery: {
              extend: galleryCapitalTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeCapitalImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeCapitalImage} = state
                        state.update({
                          activeCapitalImage: activeCapitalImage - 1
                        })
                        if (activeCapitalImage <= 0) {
                          state.update({ activeCapitalImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeCapitalImage} = state
                        state.update({
                          activeCapitalImage: activeCapitalImage + 1
                        })
                        if (activeCapitalImage >= 8) {
                          state.update({activeCapitalImage: 0 })
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
            description: { extend: $capital },
            moreButton: {
              props: { href: '#capital'}
            },
            package: { extend: packageCapital }
          }
        },

        {
          attr: { id: 'cultural'},
          header: {...[{ text: 'CULTURAL TOUR' }]},
          galleryContainer: {
            title: { text: 'CULTURAL TOUR' },
            gallery: {
              extend: galleryCulturalTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeCulturalImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeCulturalImage} = state
                        state.update({
                          activeCulturalImage: activeCulturalImage - 1
                        })
                        if (activeCulturalImage <= 0) {
                          state.update({ activeCulturalImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeCulturalImage} = state
                        state.update({
                          activeCulturalImage: activeCulturalImage + 1
                        })
                        if (activeCulturalImage >= 8) {
                          state.update({activeCulturalImage: 0 })
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
            description: { extend: $cultural },
            moreButton: {
              props: {href: '#cultural'}
            },
            package: { extend: packageCultural }
          }
        },

        {
          attr: { id: 'historical' },
          header: {...[{ text: 'HISTORICAL TOUR' }]},
          galleryContainer: {
            title: { text: 'HISTORICAL TOUR' },
            gallery: {
              extend: galleryHistoricalTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeHistoricalImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeHistoricalImage} = state
                        state.update({
                          activeHistoricalImage: activeHistoricalImage - 1
                        })
                        if (activeHistoricalImage <= 0) {
                          state.update({ activeHistoricalImage: 11 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeHistoricalImage} = state
                        state.update({
                          activeHistoricalImage: activeHistoricalImage + 1
                        })
                        if (activeHistoricalImage >= 11) {
                          state.update({activeHistoricalImage: 0 })
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
            description: { extend: $historical },
            moreButton: {
               props: {href: '#historical'}
            },
            package: { extend: packageHistorical }
          }
        },

        {
          attr: { id: 'royal'},
          header: {...[{ text: 'ROYAL TOUR' }]},
          galleryContainer: {
            title: { text: 'ROYAL TOUR' },
            gallery: {
              extend: galleryRoyalTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeRoyalImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRoyalImage} = state
                        state.update({
                          activeRoyalImage: activeRoyalImage - 1
                        })
                        if (activeRoyalImage <= 0) {
                          state.update({ activeRoyalImage: 13 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeRoyalImage} = state
                        state.update({
                          activeRoyalImage: activeRoyalImage + 1
                        })
                        if (activeRoyalImage >= 13) {
                          state.update({activeRoyalImage: 0 })
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
            description: { extend: $royal },
            moreButton: {
              props: {href: '#royal'}
            },
            package: { extend: packageRoyal }
          }
        },

        {
          attr: { id: 'mountain' },
          header: {...[{ text: 'CAUCASUS MOUNTAIN TOUR' }]},
          galleryContainer: {
            title: { text: 'CAUCASUS MOUNTAIN TOUR' },
            gallery: {
              extend: galleryCaucasusMountainTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeMountainImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeMountainImage} = state
                        state.update({
                          activeMountainImage: activeMountainImage - 1
                        })
                        if (activeMountainImage <= 0) {
                          state.update({ activeMountainImage: 7 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeMountainImage} = state
                        state.update({
                          activeMountainImage: activeMountainImage + 1
                        })
                        if (activeMountainImage >= 7) {
                          state.update({activeMountainImage: 0 })
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
            description: { extend: $caucasusMountain },
            moreButton: {
              props: { href: '#mountain'}
            },
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
            gallery: {
              extend: galleryCaucasusTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeCaucasusImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeCaucasusImage} = state
                        state.update({
                          activeCaucasusImage: activeCaucasusImage - 1
                        })
                        if (activeCaucasusImage <= 0) {
                          state.update({activeCaucasusImage: 27 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeCaucasusImage} = state
                        state.update({
                          activeCaucasusImage: activeCaucasusImage + 1
                        })
                        if (activeCaucasusImage >= 27) {
                          state.update({activeCaucasusImage: 0 })
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
            description: { extend: $caucasus },
            moreButton: {
              props: { href: '#caucasus'}
            },
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
            gallery: {
              extend: galleryExclusiveTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeExclusiveImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeExclusiveImage} = state
                        state.update({
                          activeExclusiveImage: activeExclusiveImage - 1
                        })
                        if (activeExclusiveImage <= 0) {
                          state.update({activeExclusiveImage: 8 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeExclusiveImage} = state
                        state.update({
                          activeExclusiveImage: activeExclusiveImage + 1
                        })
                        if (activeExclusiveImage >= 8) {
                          state.update({activeExclusiveImage: 0 })
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
            description: { extend: $exclusive },
            moreButton: {
              props: {href: '#exclusive'}
            },
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
            gallery: {
              extend: galleryWineGastronomyTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeWineImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeWineImage} = state
                        state.update({
                          activeWineImage: activeWineImage - 1
                        })
                        if (activeWineImage <= 0) {
                          state.update({activeWineImage: 21 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeWineImage} = state
                        state.update({
                          activeWineImage: activeWineImage + 1
                        })
                        if (activeWineImage >= 21) {
                          state.update({activeWineImage: 0 })
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
            description: { extend: $wineGastronomy },
            moreButton: {
              props: {href: '#wine'}
            },
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
            gallery: {
              extend: galleryAdventureTour,
              childExtend: {
                class: {
                  show: (element, state) => state.activeAdventureImage === parseInt(element.key)
                    ? { opacity: 1 } : { opacity: 0 }
                }
              }
            },
            footer: {
              navArrows: {
                ...[
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeAdventureImage} = state
                        state.update({
                          activeAdventureImage: activeAdventureImage - 1
                        })
                        if (activeAdventureImage <= 0) {
                          state.update({activeAdventureImage: 3 })
                        }
                      }
                    }
                  },
                  {
                    on: {
                      click: (event, element, state) => {
                        const {activeAdventureImage} = state
                        state.update({
                          activeAdventureImage: activeAdventureImage + 1
                        })
                        if (activeAdventureImage >= 3) {
                          state.update({activeAdventureImage: 0 })
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
            description: { extend: $adventure },
            moreButton: {
              style: { href: '#adventure'}
              // props: { href: '#adventure' }
            },
            package: { extend: packageAdventure }
          }
        }
      ]
    }
  ]
}