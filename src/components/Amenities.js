'use strict'

const list = {
  props: {
    flexAlign: 'flex-start flex-start',
    color: 'cream2',
    padding: 'Z 0 0 X'
    // css: { border: '1px solid red' }
  },
  childProto: {
    props: {
      lineHeight: '25px',
      fontSize: `${14 / 16}em`,
      flexFlow: 'column',
      // flexAlign: 'center flex-start',
      color: 'cream2 .8'
    }
  },
  ...[
    {
      props: {
        position: 'relative',
        margin: '0 B1 0 0',
        padding: '0 B1 0 0',
        css: {
          // textAlign: 'right',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '1.1px',
            borderRadius: '100%',
            height: '95%',
            top: '50%',
            right: '0',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(rgba(248, 241, 227, .85), rgba(248, 241, 227, 0))'
          }
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
    color: 'orange3 .95',
    // padding: '0 0 Y2 0',
    textAlign: 'flex-start',
    css: {
      textTransform: 'uppercase'
      // border: '1px solid red'
    }
  }
}

export const Amenities = {
  props,

  title: {},
  list
}

export const AmenitiesResponsive = {
  proto: Amenities
}
