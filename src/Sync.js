'use strict'

import { isNumber, deepMerge } from '@domql/utils'
import { init, send, connect, Notification } from 'smbls'
import { COMPONENTS } from './devFocus'

const define = {
  default: {
    settings: {
      gridOptions: { colspan: 3, rowspan: 2 }
    }
  }
}

const connectedToSymbols = (clientsCount, element, state) => {
  if (isNumber(clientsCount) && clientsCount > 1) {
    if (!state.connected) {
      state.notifications.connected = {
        title: 'Connected',
        message: 'to the Symbols live server'
      }

      state.update({ connected: true })

      const t = setTimeout(() => {
        delete state.notifications.connected
        element.notifications.content.connected
          .setProps({ animation: 'fadeOutDown' })
        state.update({ connected: true })
        clearTimeout(t)
      }, 3000)
    }
  } else {
    if (state.connected) {
      state.notifications.connected = {
        title: 'Disconnected',
        message: 'from the Symbols live server',
        type: 'error'
      }

      state.update({ connected: false })

      const t = setTimeout(() => {
        delete state.notifications.connected
        element.notifications.content.connected
          .setProps({ animation: 'fadeOutDown' })
        state.update({ connected: true })
        clearTimeout(t)
      }, 3000)
    }
  }
}

const a = (LIBRARY) => {
  const obj = {}

  for (const key in LIBRARY) {
    const { __hash, ...component } = LIBRARY[key]
    const base = define[key] || define.default
    obj[key] = deepMerge({
      key,
      component: { key, extend: component },
      props: {},
      code: { react: 'private', domql: 'private' }
    }, base)
  }

  return obj
}

const onConnect = (element, state) => {
  return (socketId, socket) => {
    send('components', { COMPONENTS: a(COMPONENTS) })
  }
}

const onDisconnect = (element, state) => {
  return () => {}
}

const onChange = (element, state) => {
  return (event, data) => {
    if (event === 'liveChange') {
      const obj = JSON.parse(data)
      const { STATE, ...system } = obj
      init(system)
      if (STATE) {
        state.update({ data: STATE })
      }
    }

    if (event === 'clientsCount') {
      connectedToSymbols(data, element, state)
    }
  }
}

const NOTIF_COLORS = {
  success: 'green',
  error: 'red',
  warning: 'yellow'
}

const Notifications = {
  props: {
    position: 'fixed',
    left: 'A2',
    bottom: 'Z2',
    zIndex: '999'
  },
  childExtend: {
    extend: [Notification],
    props: ({ state }) => ({
      animation: 'fadeInUp',
      animationDuration: 'C',
      background: NOTIF_COLORS[state.type || 'success'],
      icon: null,
      article: {
        title: { text: state.title },
        p: { text: state.message }
      }
    }),
    on: { click: (e, el) => el.setProps({ animation: 'fadeOutDown' }) }
  },
  $setCollection: ({ state }) => state.notifications
}

export const Sync = {
  notifications: Notifications,

  on: {
    render: (el, s) => {
      connect('lanina.symbo.ls', {
        source: 'client',
        // socketUrl: 'ws://socket.symbols.app',
        location: window.location.host,
        onConnect: onConnect(el, s),
        onDisconnect: onDisconnect(el, s),
        onChange: onChange(el, s)
      })
    }
  }
}
