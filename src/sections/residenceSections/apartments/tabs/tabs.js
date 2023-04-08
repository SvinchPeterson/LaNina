'use strict'

import { RoomTab } from '../../../../components'

import BALLERINA_JPG from '../../../../assets/images/residence/rooms/ballerina/ballerinaTab.jpg'
import REDBRICK_JPG from '../../../../assets/images/residence/rooms/redBrick/redbrickTab.jpg'
import YELLOWCOUCH_JPG from '../../../../assets/images/residence/rooms/yellowCouch/yellowcouchTab.jpg'
import GREENFOREST_JPG from '../../../../assets/images/residence/rooms/greenForest/greenforestTab.jpg'
import RETRO_JPG from '../../../../assets/images/residence/rooms/retro/retroTab.jpg'
import BLUE_LAGOON_JPG from '../../../../assets/images/residence/rooms/blueLagoon/blueLagoonTab.jpeg'
import QVEVRI_JPG from '../../../../assets/images/residence/rooms/qvevri/qvevriTab.jpeg'

import DRESS_PNG from '../../../../assets/icons/dress.png'
import BRICKS_PNG from '../../../../assets/icons/bricks.png'
import SOFA_PNG from '../../../../assets/icons/sofa.png'
import LEAF_PNG from '../../../../assets/icons/leaf.png'
import VINYL_PNG from '../../../../assets/icons/vinyl.png'
import LAGOON_PNG from '../../../../assets/icons/lagoon.png'
import QVEVRI_PNG from '../../../../assets/icons/qvevri.png'

export const tabBallerina = {
  extend: RoomTab,
  props: {
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)), url(' + BALLERINA_JPG + ')' } }
    },

    icon: { src: DRESS_PNG },
    p: {
      text: 'Enjoy special atmosphere, delicate and airy',
      maxWidth: 'F2'
    },
    title: { text: 'ballerina' }
  },
  on: {
    click: (event, element, state) => {
      state.update({  activeRoomsPopUp: true, activeBallerina: true })
    }
  },
}

export const tabRedBrick = {
  extend: RoomTab,
  props: {
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + REDBRICK_JPG + ')' } }
    },
    icon: { src: BRICKS_PNG },
    p: { text: 'Where traditional Georgian old style meets modernity!' },
    title: { text: 'red brick' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeRedBrick: true })
    }
  },
}

export const tabYellowCouch = {
  extend: RoomTab,
  props: {
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + YELLOWCOUCH_JPG + ')' } }
    },
    icon: { src: SOFA_PNG },
    p: {
      maxWidth: 'F2',
      text: 'Make yourself comfortable on yellow couch'
    },
    title: { text: 'yellow couch' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeYellowCouch: true })
    }
  },
}

export const tabGreenForest = {
  extend: RoomTab,
  props: {
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + GREENFOREST_JPG + ')' } }
    },
    icon: { src: LEAF_PNG },
    p: { text: 'Timeless and elegant, yet modern and fresh, green is your choice!' },
    title: { text: 'green forest' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeGreenForest: true })
    }
  },
}

export const tabRetro = {
  extend: RoomTab,
  props: {
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + RETRO_JPG + ')' } },
    },
    icon: { src: VINYL_PNG },
    p: { text: 'Where contemporary design combine with traditional architecture.' },
    title: { text: 'retro' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeRetro: true })
    }
  },
}


export const tabBlueLagoon = {
  extend: RoomTab,
  props: {
    href: '#roomRetro',
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + BLUE_LAGOON_JPG + ')' } }
    },
    icon: { src: LAGOON_PNG },
    p: { text: 'Where contemporary design combine with traditional architecture.' },
    title: { text: 'blue lagoon' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeLagoon: true })
    }
  },
}


export const tabQvevri = {
  extend: RoomTab,
  props: {
    href: '#roomRetro',
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + QVEVRI_JPG + ')' } }
    },
    icon: { src: QVEVRI_PNG },
    p: { text: 'Where contemporary design combine with traditional architecture.' },
    title: { text: 'qvevri' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeQvevri: true })
    }
  },
}

export const tabGela = {
  extend: RoomTab,
  props: {
    href: '#roomRetro',
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + QVEVRI_JPG + ')' } }
    },
    icon: { src: QVEVRI_PNG },
    p: { text: 'Where contemporary design combine with traditional architecture.' },
    title: { text: 'qvevri' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeQvevri: true })
    }
  },
}


export const tabGocha = {
  extend: RoomTab,
  props: {
    href: '#roomRetro',
    imageContainer: {
      image: { style: { backgroundImage: 'linear-gradient(rgba(25, 63, 55, .3), rgba(25, 63, 55, .7)),url(' + QVEVRI_JPG + ')' } }
    },
    icon: { src: QVEVRI_PNG },
    p: { text: 'Where contemporary design combine with traditional architecture.' },
    title: { text: 'qvevri' }
  },

  on: {
    click: (event, element, state) => {
      state.update({ activeRoomsPopUp: true, activeQvevri: true })
    }
  },
}
