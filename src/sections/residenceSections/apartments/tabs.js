'use strict'

import { RoomTourTabs } from "../../../composites"

export const tabs = {
  extend: RoomTourTabs,
  title: {props: { text: 'apartments'}},
  content: {
    ...[
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  }
}