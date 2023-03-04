'use strict'

export const commonToursProps = {
  style: {
    '> div:nth-child(odd)': {
      '> div > div': {
        borderRadius: `0 ${200 / 16}em ${200 / 16}em 0`,
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to right, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      }
    },

    '> div:nth-child(even)': {
      '> div > div': {
        borderRadius: `${200 / 16}em 0 0 ${200 / 16}em `,
        ':before': {
          top: '0',
          right: '0',
          background: 'linear-gradient(to left, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
        }
      },
      '> div > footer': { alignSelf: 'flex-end' },
      '> div > h5': { alignSelf: 'flex-end' }
    }
  }
}

export const commonTourProps = {
  margin: 'auto',
  gallery: {
    gallery: {
      round: 'G1 G1 0 0',
      width: 'H1',
      height: 'H',
      padding: 'D',
      ':before': {
        top: '0',
        left: '0',
        background: 'linear-gradient(to top, rgba(15, 49, 61, 1) 1%, rgba(15, 49, 61, 0) 100%)'
      }
    },
    footer: { width: '95%', margin: 'Z auto - auto' }
  }
}
