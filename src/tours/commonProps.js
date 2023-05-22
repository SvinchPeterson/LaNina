'use strict'

export const commonToursProps = {
  padding: '- - E -',
  border: '10px solid red',
  style: {
    scrollBehavior: 'smooth',
    overflowY: 'auto',
    '> div:nth-child(odd)': {
      gap: `${50 / 16}em`,
      '@media only screen and (max-width: 1366px)': {
        gap: `${25 / 16}em`,
      },

      '@media only screen and (max-width: 1024px)': {
        gap: `${25 / 16}em`,
        flexFlow: 'column'
      },
      '> div > div': {
        borderRadius: `${200 / 16}em 0 0 ${200 / 16}em `,
        '@media only screen and (max-width: 1024px)': {
          borderRadius: '0'
        },
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to left, rgba(0, 47, 57, 1) 1%, rgba(0, 47, 57, 0) 99%)'
        }
      },
      '> div > footer': {
        alignSelf: 'flex-end',
        paddingRight: `${10 / 16}em`
      },
      '> div > h5': { alignSelf: 'flex-end' }
    },

    '> div:nth-child(even)': {
      '@media only screen and (max-width: 1366px)': {
        gap: `${25 / 16}em`,
      },
      '@media only screen and (max-width: 1024px)': {
        flexFlow: 'column-reverse'
      },
      '> div > div': {
        borderRadius: `0 ${200 / 16}em ${200 / 16}em 0`,
        '@media only screen and (max-width: 1024px)': {
          borderRadius: '0'
        },
        ':before': {
          top: '0',
          right: '0',
          background: 'linear-gradient(to right,rgba(0, 47, 57, 1) 1%, rgba(0, 47, 57, 0) 99%)'
        },

      },

      '> div > footer': {
        paddingLeft: `${10 / 16}em`
      }
    }
  }
}

export const commonTourProps = {
  align: 'center center',
  childProps: {
    galleryContainer: {
      gallery: {
        round: 'G1 0 0 G1',
        width: 'H1',
        height: 'G3',
        padding: 'D',
        ':before': {
          top: '0',
          left: '0',
          background: 'linear-gradient(to left, rgba(0, 47, 57, 1) 1%, rgba(0, 47, 57, 0) 99%)'
        }
      },
      footer: {
        margin: 'Z2 A - -',
        alignSelf: 'flex-end'
      }
    }
  }
}
