'use strict'
import { Box, Grid, Img } from '@symbo.ls/symbols'
import LOCATION_PNG from '../../assets/icons/location.png'
import DOOR_HANGER_PNG from '../../assets/icons/door-hanger.png'
import CLOCK_PNG from '../../assets/icons/clock.png'
import BUBBLE_PNG from '../../assets/icons/bubble.png'
import APRON_PNG from '../../assets/icons/frying-pan.png'
import DOCUMENT_PNG from '../../assets/icons/document.png'
import PLAY_PNG from '../../assets/icons/play.png'
import WINE_COFFEE from '../../assets/icons/wine-coffee.png'
import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'
import SHELF_JPG from '../../assets/images/sololaki/shelf.jpg'

export const placeFeature = {
  proto: [Box],
  props: {
    minHeight: '100%',
    flexAlign: 'center center'
  },
  style: {
    width: '100%'
    // backgroundAttachment: 'fixed',
    // backgroundImage: 'url(' + SHELF_JPG + ')',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // justifyContent: 'center',

    // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .4), rgba(42, 81, 61, .8))',
  },
  content: {
    proto: [Grid, Box],
    props: {
      columns: 'repeat(4, 270px)',
      gap: 'A2',
      rowGap: 'A2',
      padding: 'F1 0',
      position: 'relative'
    },
    style: {
      width: '100%',
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(' + SHELF_JPG + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'center',
      // height: '70%',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'linear-gradient(rgba(60, 84, 72, .35), rgba(60, 84, 72, .65))',
        // background: 'radial-gradient(rgba(60, 84, 72, .85),rgba(60, 84, 72, .9),rgba(60, 84, 72, 1), rgba(60, 84, 72, 1), rgba(60, 84, 72, .5))',
        zIndex: 5
        // backgroundAttachment: 'fixed'
      }
    },
    childProto: {
      proto: Box,
      props: {
        flexAlign: 'center flex-start',
        padding: 'A A2 A A1',
        // height: 'D',
        // background: 'cream2 .15',
        round: 'Y'
      },
      style: {
        zIndex: 10,
        backdropFilter: 'blur(2px)',
        // border: '1px solid rgba(220, 187, 140, .1)',
        background: 'radial-gradient(rgba(248, 241, 227, .75), rgba(248, 241, 227, .85))'
      },
      icon: null,
      paragraph: {
        proto: Box,
        props: {
          fontSize: 'Z',
          flexFlow: 'column',
          gap: '0',
          flexAlign: 'flex-start flex-start'
        },
        title: {
          tag: 'caption',
          proto: Box,
          props: {
            fontWeight: '700',
            color: 'black .75'
          },
          style: {
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            fontSize: '12.5px',
            letterSpacing: '.3px'
          }
        },
        p: {
          proto: Box,
          props: {
            padding: '0 0 0 U',
            color: 'black .65'
          },
          style: { letterSpacing: '.1px' }
        }
      }
    },

    ...[
      {
        paragraph: {
          title: { text: 'City center' },
          p: { text: '7 min from Liberty square' }
        }
      },

      {
        paragraph: {
          title: { text: 'Personal service' },
          p: { text: 'Feel yourself at home' }
        }
      },

      {
        paragraph: {
          title: { text: 'We work round the clock' },
          p: { text: 'Check-in possible 24 hours' }
        }
      },

      {
        paragraph: {
          title: { text: 'Housekeeping' },
          p: { text: 'Weekly housekeeping' }
        }
      },

      {
        paragraph: {
          title: { text: 'Kitchen inside' },
          p: { text: 'Cook at home' }
        }
      },

      {
        paragraph: {
          title: { text: 'Accounting documents' },
          p: { text: 'Complete kit of accounting' }
        }
      },

      {
        paragraph: {
          title: { text: 'Mutimediea' },
          p: { text: 'Vinyl player, Streaming' }
        }
      },

      {
        paragraph: {
          title: { text: 'with compliments' },
          p: { text: 'Georgian wine, Coffee & Tea' }
        }
      }
    ]

  }

}
