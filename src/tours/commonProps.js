'use strict'

export const commonToursProps = {
  padding: '- - E -',
  style: {
    scrollBehavior: 'smooth',
    overflowY: 'auto',
    '> div:nth-child(odd)': {
      gap: `${50 / 16}em`,
      '> div > div': {
        borderRadius: `${200 / 16}em 0 0 ${200 / 16}em `,
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      },
      '> div > footer': { alignSelf: 'flex-end' },
      '> div > h5': { alignSelf: 'flex-end' }
    },

    '> div:nth-child(even)': {
      '> div > div': {
        borderRadius: `0 ${200 / 16}em ${200 / 16}em 0`,
        ':before': {
          top: '0',
          right: '0',
          background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      }
    }
  }
}

export const commonTourProps = {
  align: 'center center',
  childProps: {
    gallery: {
      gallery: {
        round: 'G1 0 0 G1',
        width: 'H1',
        height: 'G3',
        padding: 'D',
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      },
      footer: {
        margin: 'Z2 A - -',
        alignSelf: 'flex-end'
      }
    }
  }
}
