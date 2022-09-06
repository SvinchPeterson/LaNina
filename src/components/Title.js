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
      color: 'cream2 .9',
      fontWeight: '900',
      fontSize: 'A',
      style: {
        textTransform: 'uppercase',
        alignSelf: 'flex-end',
        letterSpacing: '10px'
      }
    }
  },

  title: {
    extend: Title,
    props: 'match'
  },
  caption: {}
}
