'use strict'

import { Gallery } from '../components'

import OLD_TBILISI_JPG from '../assets/images/travel/oldTbilisi/oldTbilisi2.jpg'
import ABANOTUBANI_JPG from '../assets/images/travel/oldTbilisi/abanotUbani.jpg'
import BRIDGE_JPG from '../assets/images/travel/oldTbilisi/bridge2.jpg'
import BAZAR_JPG from '../assets/images/travel/oldTbilisi/meidanBazar.jpg'
import BRIDGE2_JPG from '../assets/images/travel/oldTbilisi/oldTbilisi.jpg'
import METEKHI_JPG from '../assets/images/travel/oldTbilisi/metekhi2.jpg'

import BORJOMI_JPG from '../assets/images/travel/borjomi/Borjomi.jpg'
import BORJOMI2_JPG from '../assets/images/travel/borjomi/borjomi2.jpg'
import PARK_JPG from '../assets/images/travel/borjomi/park.jpg'
import BRIDGES_JPG from '../assets/images/travel/borjomi/bridge.jpg'

import JVARI_JPG from '../assets/images/travel/mtsketa/mtsketa.jpg'
import MTSKETA_JPG from '../assets/images/travel/mtsketa/mcxeta3.jpg'
import MTSKETA2_JPG from '../assets/images/travel/mtsketa/street.jpg'
import MTSKETA3_JPG from '../assets/images/travel/mtsketa/mtsketa2.jpg'

import SIGNAGI_JPG from '../assets/images/travel/kakheti/signagi3.jpg'
import SIGNAGI2_JPG from '../assets/images/travel/kakheti/signagi.jpg'
import KVEVRI_JPG from '../assets/images/travel/kakheti/kvevri.jpg'
import BODBE_JPG from '../assets/images/travel/kakheti/bodbe.jpg'
import TELAVI_JPG from '../assets/images/travel/kakheti/telavi.jpg'
import EREKLE_JPG from '../assets/images/travel/kakheti/erekle.jpg'

import BRILIANT_JPG from '../assets/images/travel/canyon/briliant2.jpg'
import BRILIANT2_JPG from '../assets/images/travel/canyon/briliant.jpg'
import CANYON_JPG from '../assets/images/travel/canyon/canyon.jpg'
import CANYON2_JPG from '../assets/images/travel/canyon/canyon2.jpg'

import KUTAISI_JPG from '../assets/images/travel/kutaisi/kutaisi.jpg'
import CANYONS_JPG from '../assets/images/travel/kutaisi/canyon.jpg'
import CANYONS2_JPG from '../assets/images/travel/kutaisi/canyon2.jpg'
import CAVE_JPG from '../assets/images/travel/kutaisi/cave2.jpg'
import CAVE2_JPG from '../assets/images/travel/kutaisi/cave.jpg'

import GORI_JPG from '../assets/images/travel/gori/gori.jpg'
import MUSEUMG_JPG from '../assets/images/travel/gori/museum.jpg'
import MUSEUM2G_JPG from '../assets/images/travel/gori/museum2.jpeg'
import CAVE3_JPG from '../assets/images/travel/gori/cave.jpg'
import CAVE4_JPG from '../assets/images/travel/gori/cave2.jpg'

import KAZBEGI_JPG from '../assets/images/travel/ananuri-gudauri/gazbegi.jpg'
import GERGET_JPG from '../assets/images/travel/ananuri-gudauri/gerget.jpg'
import JINVALI_JPG from '../assets/images/travel/ananuri-gudauri/jinvali.jpg'
import ANANURI_JPG from '../assets/images/travel/ananuri-gudauri/ananuri.jpg'
import GUDAURI_JPG from '../assets/images/travel/ananuri-gudauri/gudauri.jpg'

import RABAT_JPG from '../assets/images/travel/rabati/rabat.jpeg'
import RABAT2_JPG from '../assets/images/travel/rabati/rabati3.jpg'
import RABAT3_JPG from '../assets/images/travel/rabati/rabati2.jpg'
import RABAT4_JPG from '../assets/images/travel/rabati/rabat4.jpg'

import BIRTVISI_JPG from '../assets/images/travel/adventure/birtvisi.jpg'
import BIRTVISI2_JPG from '../assets/images/travel/adventure/birtvisi2.jpg'
import DEVI_JPG from '../assets/images/travel/adventure/devi.jpg'
import SHEUPOVARI_JPG from '../assets/images/travel/adventure/sheupovari.jpg'

import PARAVANI_JPG from '../assets/images/travel/exclusive/paravani.jpg'
import ABULI_JPG from '../assets/images/travel/exclusive/abuli.jpeg'
import BUGDASHENI_JPG from '../assets/images/travel/exclusive/bugdasheni.jpg'
import KHANCHALI_JPG from '../assets/images/travel/exclusive/khanchali.jpg'
import KUMURDO_JPG from '../assets/images/travel/exclusive/kumurdo.jpg'
import SAGAMO_JPG from '../assets/images/travel/exclusive/sagamo.jpg'
import SAMSHVILDE_JPG from '../assets/images/travel/exclusive/samshvilde.jpeg'
import SHAORI_JPG from '../assets/images/travel/exclusive/shaori.jpeg'

import ARMENIA_JPG from '../assets/images/travel/armenia/armenia.jpg'
import ARMENIA2_JPG from '../assets/images/travel/armenia/armenia2.jpg'
import CHURCH_JPG from '../assets/images/travel/armenia/church.jpeg'
import DILIJAN_JPG from '../assets/images/travel/armenia/dilijan.jpg'
import DILIJAN2_JPG from '../assets/images/travel/armenia/dilijan2.jpg'
import DILIJAN3_JPG from '../assets/images/travel/armenia/dilijan3.jpg'
import GARNI_JPG from '../assets/images/travel/armenia/garni.jpg'
import MUSEUM3_JPG from '../assets/images/travel/armenia/museum.jpg'
import MUSEUM4_JPG from '../assets/images/travel/armenia/museum2.jpg'
import SEVANE_JPG from '../assets/images/travel/armenia/sevane.jpg'
import VALLEY_JPG from '../assets/images/travel/armenia/valley.jpg'
import VIRAP_JPG from '../assets/images/travel/armenia/virap.jpg'

import SVANETI_JPG from '../assets/images/travel/svaneti/svaneti.jpg'
import MESTIA_JPG from '../assets/images/travel/svaneti/mestia.jpg'
import ZUGDIDI_JPG from '../assets/images/travel/zugdidi.jpg'

import ATENIS_JPG from '../assets/images/travel/wine&gastronomy/Atenis.jpg'
import BALDA_JPG from '../assets/images/travel/wine&gastronomy/balda.jpg'
import CINANDALI_JPG from '../assets/images/travel/wine&gastronomy/cinandali.jpg'
import GIUNI_JPG from '../assets/images/travel/wine&gastronomy/giuani.jpeg'
import KHAREBA_JPG from '../assets/images/travel/wine&gastronomy/khareba.jpg'
import KHAREBA2_JPG from '../assets/images/travel/wine&gastronomy/khareba2.jpg'
import MANAVI_JPG from '../assets/images/travel/wine&gastronomy/manavi.jpg'
import YVARELI_JPG from '../assets/images/travel/wine&gastronomy/yvareli.jpg'
import MARTVILI_JPG from '../assets/images/travel/wine&gastronomy/martvili.jpg'
import MARTVILI2_JPG from '../assets/images/travel/wine&gastronomy/martvili2.jpg'
import RACHA_JPG from '../assets/images/travel/wine&gastronomy/racha.jpg'
import SALKHINO_JPG from '../assets/images/travel/wine&gastronomy/salkhino.jpg'
import WYALTUBO_JPG from '../assets/images/travel/wine&gastronomy/wyaltubo.jpg'
import WYALTUBO2_JPG from '../assets/images/travel/wine&gastronomy/wyaltubo2.jpg'
import WYALTUBO3_JPG from '../assets/images/travel/wine&gastronomy/wyaltubo3.jpg'
import SIONI_JPG from '../assets/images/travel/wine&gastronomy/sioni.jpg'
import BATUMI_JPG from '../assets/images/travel/wine&gastronomy/batumi.jpg'
import BATUMI2_JPG from '../assets/images/travel/wine&gastronomy/batumi2.jpg'
import BATUMI3_JPG from '../assets/images/travel/wine&gastronomy/batumi3.jpg'

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
    { props: { backgroundImage: 'url(' + MUSEUMG_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUM2G_JPG + ')' } },
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

export const galleryAdventureTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + BIRTVISI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BIRTVISI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + DEVI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SHEUPOVARI_JPG + ')' } }
  ]
}

export const galleryCapitalTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + BRIDGE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BAZAR_JPG + ')' } },
    { props: { backgroundImage: 'url(' + METEKHI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + OLD_TBILISI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KAZBEGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GERGET_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GUDAURI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + JINVALI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ANANURI_JPG + ')' } }
  ]
}

export const galleryCulturalTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + SIGNAGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BODBE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KVEVRI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + TELAVI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUMG_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUM2G_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE4_JPG + ')' } }
  ]
}

export const galleryHistoricalTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + JVARI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BORJOMI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BORJOMI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + PARK_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGES_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + TELAVI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + EREKLE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BODBE_JPG + ')' } }
  ]
}

export const galleryRoyalTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + KAZBEGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GERGET_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GUDAURI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BODBE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + TELAVI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ABANOTUBANI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + METEKHI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + JVARI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MTSKETA3_JPG + ')' } }
  ]
}

export const galleryCaucasusMountainTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + MESTIA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SVANETI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ZUGDIDI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KUTAISI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CANYONS_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CANYONS2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CAVE2_JPG + ')' } }
  ]
}

export const galleryCaucasusTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + VIRAP_JPG + ')' } },
    { props: { backgroundImage: 'url(' + VALLEY_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ARMENIA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + DILIJAN_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ARMENIA2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CHURCH_JPG + ')' } },
    { props: { backgroundImage: 'url(' + DILIJAN2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + DILIJAN3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GARNI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUM3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MUSEUM4_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SEVANE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + OLD_TBILISI_JPG + ')' } },
    { props: { backgroundImagew: 'url(' + ABANOTUBANI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BAZAR_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BRIDGE2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + METEKHI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KAZBEGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GERGET_JPG + ')' } },
    { props: { backgroundImage: 'url(' + JINVALI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ANANURI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GUDAURI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIGNAGI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KVEVRI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BODBE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + TELAVI_JPG + ')' } }
  ]
}

export const galleryExclusiveTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + PARAVANI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ABULI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BUGDASHENI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KHANCHALI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KUMURDO_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SAGAMO_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GARNI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SAMSHVILDE_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SHAORI_JPG + ')' } }
  ]
}

export const galleryWineGastronomyTour = {
  extend: Gallery,
  ...[
    { props: { backgroundImage: 'url(' + KHAREBA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KHAREBA2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + GIUNI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MANAVI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + CINANDALI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + YVARELI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SIONI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + ATENIS_JPG + ')' } },
    { props: { backgroundImage: 'url(' + KUTAISI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + RABAT_JPG + ')' } },
    { props: { backgroundImage: 'url(' + RABAT2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + RACHA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + WYALTUBO_JPG + ')' } },
    { props: { backgroundImage: 'url(' + WYALTUBO2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + WYALTUBO3_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BALDA_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MARTVILI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + MARTVILI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + SALKHINO_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BATUMI_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BATUMI2_JPG + ')' } },
    { props: { backgroundImage: 'url(' + BATUMI3_JPG + ')' } }
  ]
}
