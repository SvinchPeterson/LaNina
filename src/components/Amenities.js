'use strict'

const list = {
  props: {
    flexAlign: 'flex-start flex-start',
    color: 'cream2 .75',
    padding: 'Z 0 0 X'
  },
  childExtend: {
    props: {
      lineHeight: '25px',
      fontSize: `${15 / 16}em`,
      flexFlow: 'column',
      color: 'cream2 .8',
      letterSpacing: '.3px'
    }
  },
  ...[
    {
      props: {
        position: 'relative',
        margin: '0 B1 0 0',
        padding: '0 B1 0 0',
        ':after': {
          content: '""',
          position: 'absolute',
          width: '1.1px',
          height: '100%',
          round: 'B',
          top: '50%',
          right: '0',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(rgba(248, 241, 227, .85), rgba(248, 241, 227, 0))'
        }
      },
      ...[
        { props: { text: 'Wifi' } },
        { props: { text: 'Open terrace' } },
        { props: { text: 'Private entrance' } },
        { props: { text: 'Air conditioning' } },
        { props: { text: 'Heating' } },
        { props: { text: 'Ironing facilities' } },
        { props: { text: 'Drying rack' } },
        { props: { text: 'Mosquito net' } },
        { props: { text: 'Carbon monoxide alarm' } }
      ]
    },

    {
      ...[
        { props: { text: 'Smoke alarm' } },
        { props: { text: 'Vinyl Media Player' } },
        { props: { text: 'Smart TV' } },
        { props: { text: 'Bed linens' } },
        { props: { text: 'Clothing storage' } },
        { props: { text: 'Hangers' } },
        { props: { text: 'Extra pillows and blankets' } },
        { props: { text: 'Robes & Slippers' } },
        { props: { text: 'Books and journals' } }
      ]
    }
  ]
}

const props = {
  title: {
    text: 'amenities',
    fontSize: 'Z',
    fontWeight: '700',
    color: 'cream2',
    textAlign: 'flex-start',
    letterSpacing: '5px',
    padding: '- - Y1 Y',
    style: {
      textTransform: 'uppercase'
    }
  }
}

export const Amenities = {
  props,

  title: {},
  list
}
