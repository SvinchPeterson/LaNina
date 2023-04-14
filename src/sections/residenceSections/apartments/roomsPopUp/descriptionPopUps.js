'use strict'

import { RoomDescriptionPopUp } from "../../../../components/RoomDescriptionPopUp"

import {
  ballerinaTextEng, redBrickTextEng, yellowCouchTextEng, greenForrestTextEng,
  retroTextEng, blueLagoonTextEng, qvevriTextEng
} from "../../../../texts/residence"

export const ballerinaDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: ballerinaTextEng } } },
}

export const redBrickDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: redBrickTextEng } } },
}


export const yellowCouchDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: yellowCouchTextEng } } },
}


export const greenForestDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: greenForrestTextEng } } },
}


export const retroDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: retroTextEng } } },
}


export const blueLagoonDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: blueLagoonTextEng } } },
}


export const qvevriDescriptionPopUp = {
  extend: RoomDescriptionPopUp,
  close: {},
  contentContainer: { description: { p: { extend: qvevriTextEng } } },
}