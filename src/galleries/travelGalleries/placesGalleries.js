'use strict'

import { Gallery } from '../../components'

import OLD_TBILISI_JPG from '../../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../../assets/images/travel/oldTbilisi/metekhi2.jpg'

import BORJOMI_JPG from '../../assets/images/travel/borjomi/Borjomi.jpg'
import BORJOMI2_JPG from '../../assets/images/travel/borjomi/borjomi2.jpg'
import PARK_JPG from '../../assets/images/travel/borjomi/park.jpg'
import BRIDGES_JPG from '../../assets/images/travel/borjomi/bridge.jpg'

import JVARI_JPG from '../../assets/images/travel/mtsketa/mtsketa.jpg'
import MTSKETA_JPG from '../../assets/images/travel/mtsketa/mcxeta3.jpg'
import MTSKETA2_JPG from '../../assets/images/travel/mtsketa/street.jpg'
import MTSKETA3_JPG from '../../assets/images/travel/mtsketa/mtsketa2.jpg'

import SIGNAGI_JPG from '../../assets/images/travel/kakheti/signagi3.jpg'
import SIGNAGI2_JPG from '../../assets/images/travel/kakheti/signagi2.jpg'
import KVEVRI_JPG from '../../assets/images/travel/kakheti/kvevri.jpg'
import BODBE_JPG from '../../assets/images/travel/kakheti/bodbe.jpg'
import TELAVI_JPG from '../../assets/images/travel/kakheti/telavi.jpg'

import BRILIANT_JPG from '../../assets/images/travel/canyon/briliant2.jpg'
import BRILIANT2_JPG from '../../assets/images/travel/canyon/briliant.jpg'
import CANYON_JPG from '../../assets/images/travel/canyon/canyon.jpg'
import CANYON2_JPG from '../../assets/images/travel/canyon/canyon2.jpg'

import KUTAISI_JPG from '../../assets/images/travel/kutaisi/kutaisi.jpg'
import CANYONS_JPG from '../../assets/images/travel/kutaisi/canyon.jpg'
import CANYONS2_JPG from '../../assets/images/travel/kutaisi/canyon2.jpg'
import CAVE_JPG from '../../assets/images/travel/kutaisi/cave2.jpg'
import CAVE2_JPG from '../../assets/images/travel/kutaisi/cave.jpg'

import GORI_JPG from '../../assets/images/travel/gori/gori.jpg'
import MUSEUM_JPG from '../../assets/images/travel/gori/museum.jpg'
import MUSEUM2_JPG from '../../assets/images/travel/gori/museum2.jpeg'
import CAVE3_JPG from '../../assets/images/travel/gori/cave.jpg'
import CAVE4_JPG from '../../assets/images/travel/gori/cave2.jpg'

import KAZBEGI_JPG from '../../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../../assets/images/travel/ananuri-gudauri/gudauri.jpg'

import RABAT_JPG from '../../assets/images/travel/rabati/rabat.jpeg'
import RABAT2_JPG from '../../assets/images/travel/rabati/rabati3.jpg'
import RABAT3_JPG from '../../assets/images/travel/rabati/rabati2.jpg'
import RABAT4_JPG from '../../assets/images/travel/rabati/rabat4.jpg'

export const galleryTbilisi = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + OLD_TBILISI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ABANOTUBANI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BAZAR_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGE2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + METEKHI_JPG + ')' } }
  ]
}

export const galleryBorjomi = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + BORJOMI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BORJOMI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + PARK_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGES_JPG + ')' } }
  ]
}

export const galleryMtsketa = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + JVARI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA3_JPG + ')' } }
  ]
}

export const galleryKakheti = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + SIGNAGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KVEVRI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BODBE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + TELAVI_JPG + ')' } }
  ]
}

export const galleryMartvili = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + BRILIANT_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRILIANT2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CANYON_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CANYON2_JPG + ')' } }
  ]
}

export const galleryKutaisi = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + KUTAISI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CANYONS_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CANYONS2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE2_JPG + ')' } }
  ]
}

export const galleryGori = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + GORI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUM_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUM2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE4_JPG + ')' } }
  ]
}

export const galleryKazbegi = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + KAZBEGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GERGET_JPG + ')' } },
    { props: { backgroundImage: 'url(' + JINVALI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ANANURI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GUDAURI_JPG + ')' } }
  ]
}

export const galleryRabati = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + RABAT_JPG + ')' } },
    { props: { backgroundImage: 'url(' + RABAT2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + RABAT3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + RABAT4_JPG + ')' } }
  ]
}
