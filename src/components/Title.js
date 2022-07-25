'use strict'

export const Title = {
  tag: 'h1',
  props: {
    fontSize: 'I',
    text: 'BB Hospitality',
    color: 'gold',
    fontWeight: '100',
    margin: '0'
  }
}

export const TitleCaption = {
  props: {
    flexFlow: 'column',
    title: { text: 'BB Residence' },
    caption: {
      text: 'sololaki',
      color: 'cream2 .85',
      fontWeight: '900',
      fontSize: 'A',
      css: {
        textTransform: 'uppercase',
        alignSelf: 'flex-end',
        letterSpacing: '10px'
      }
    }
  },

  title: {
    proto: Title,
    props: 'match'
  },
  caption: {}
}
