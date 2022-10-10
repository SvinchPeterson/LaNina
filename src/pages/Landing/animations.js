'use strict'
import { keyframes } from '@emotion/css'

export const animTitle = keyframes`
  from {
    letter-spacing: .5px;
    opacity: 0;
  }
  to {
    letter-spacing: 0px;
    opacity: 1;
  }
`

export const animContainer = keyframes`
  from {
    background-position: top 50 left 100px;
  }
  to {
    background-position: top center;
  }
`

export const animContainer2 = keyframes`
  from {
    background-position: center left -280px;
  }
  to {
    background-position: top 50px left -280px;
  }
`

export const animAfter = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const animContent = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
