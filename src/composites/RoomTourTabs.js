'use strict'

import { Link, Img, Flex } from 'smbls'

import { RoomTourTab } from "../components"

const props = {
}

export const RoomTourTabs = {
  props,
  title: { tag: 'h5' },
  content: { childExtend: RoomTourTab }
}