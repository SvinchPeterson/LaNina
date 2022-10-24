'use strict'

import { TourGallery } from '../../../../components'

import OLD_TBILISI_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../../../../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../../../../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../../../../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../../../../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../../../../assets/images/travel/oldTbilisi/metekhi2.jpg'

import SIGNAGI_JPG from '../../../../assets/images/travel/kakheti/signagi3.jpg'
import SIGNAGI2_JPG from '../../../../assets/images/travel/kakheti/signagi2.jpg'
import KVEVRI_JPG from '../../../../assets/images/travel/kakheti/kvevri.jpg'
import BODBE_JPG from '../../../../assets/images/travel/kakheti/bodbe.jpg'
import TELAVI_JPG from '../../../../assets/images/travel/kakheti/telavi.jpg'

import KAZBEGI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../../../../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../../../../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../../../../assets/images/travel/ananuri-gudauri/gudauri.jpg'

import ARMENIA_JPG from '../../../../assets/images/travel/armenia/armenia.jpg'
import ARMENIA2_JPG from '../../../../assets/images/travel/armenia/armenia2.jpg'
import CHURCH_JPG from '../../../../assets/images/travel/armenia/church.jpeg'
import DILIJAN_JPG from '../../../../assets/images/travel/armenia/dilijan.jpg'
import DILIJAN2_JPG from '../../../../assets/images/travel/armenia/dilijan2.jpg'
import DILIJAN3_JPG from '../../../../assets/images/travel/armenia/dilijan3.jpg'
import GARNI_JPG from '../../../../assets/images/travel/armenia/garni.jpg'
import MUSEUM_JPG from '../../../../assets/images/travel/armenia/museum.jpg'
import MUSEUM2_JPG from '../../../../assets/images/travel/armenia/museum2.jpg'
import SEVANE_JPG from '../../../../assets/images/travel/armenia/sevane.jpg'
import VALLEY_JPG from '../../../../assets/images/travel/armenia/valley.jpg'
import VIRAP_JPG from '../../../../assets/images/travel/armenia/virap.jpg'

export const geoArmGallery = {
  extend: TourGallery,

  props: { title: { text: '4 nights / 5 days - tour' } },

  title: {},

  images: {
    childExtend: {
      class: {
        show: (element, state) => state.activeGeoArmGalleryImage === parseInt(element.key)
          ? { opacity: 1, transition: 'all .5s ease-in-out' } : { opacity: 0, transition: 'all .5s ease-in-out' }
      }
    },
    ...[
      { props: { src: OLD_TBILISI_JPG } },
      { props: { src: ABANOTUBANI_JPG } },
      { props: { src: BRIDGE_JPG } },
      { props: { src: BAZAR_JPG } },
      { props: { src: BRIDGE2_JPG } },
      { props: { src: METEKHI_JPG } },

      { props: { src: KAZBEGI_JPG } },
      { props: { src: GERGET_JPG } },
      { props: { src: JINVALI_JPG } },
      { props: { src: ANANURI_JPG } },
      { props: { src: GUDAURI_JPG } },

      { props: { src: SIGNAGI_JPG } },
      { props: { src: SIGNAGI2_JPG } },
      { props: { src: KVEVRI_JPG } },
      { props: { src: BODBE_JPG } },
      { props: { src: TELAVI_JPG } },

      { props: { src: ARMENIA_JPG } },
      { props: { src: ARMENIA2_JPG } },
      { props: { src: CHURCH_JPG } },
      { props: { src: DILIJAN_JPG } },
      { props: { src: DILIJAN2_JPG } },
      { props: { src: DILIJAN3_JPG } },
      { props: { src: GARNI_JPG } },
      { props: { src: MUSEUM_JPG } },
      { props: { src: MUSEUM2_JPG } },
      { props: { src: SEVANE_JPG } },
      { props: { src: VALLEY_JPG } },
      { props: { src: VIRAP_JPG } }
    ]
  },

  footer: {
    navArrow: {
      ...[
        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeGeoArmGalleryImage } = state
              state.update({
                activeGeoArmGalleryImage: activeGeoArmGalleryImage - 1
              })
              if (activeGeoArmGalleryImage <= 0) {
                state.update({ activeGeoArmGalleryImage: 27 })
              }
            }
          }
        },

        {
          on: {
            click: (event, element, state) => {
              console.log('')
              const { activeGeoArmGalleryImage } = state
              state.update({
                activeGeoArmGalleryImage: activeGeoArmGalleryImage + 1
              })
              if (activeGeoArmGalleryImage >= 27) {
                state.update({ activeGeoArmGalleryImage: 0 })
              }
            }
          }
        }
      ]
    }
  }
}
