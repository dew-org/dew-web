import { styled } from '@nextui-org/react'

export const Title = styled('h1', {
  display: 'inline',
  fontWeight: '$bold',
  color: '$text',
  lh: '1.2',
  fs: '2.5rem',
  mb: 0,
  '@sm': {
    fs: '3rem',
  },
  '@lg': {
    fs: '3.5rem',
  },
  '&::selection': {
    WebkitTextFillColor: '$colors$text',
  },
  variants: {
    color: {
      violet: {
        textGradient: '180deg, #FF1CF7 25%, #b249f8 100%',
      },
      warning: {
        textGradient: '180deg, #f36534 25%, #F69F27 100%',
      },
      blue: {
        textGradient: '180deg, $blue300 25%, $blue500 100%',
      },
      cyan: {
        textGradient: '180deg, #00b7fa 25%, #01cfea 100%',
      },
      green: {
        textGradient: '180deg, #6FEE8D 25%, #17c964 100%',
      },
      pink: {
        textGradient: '180deg, #FF4ECD 25%, #F21361 100%',
      },
    },
    fullWidth: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
  },
})

export const Subtitle = styled('p', {
  pl: '$1',
  fs: '$sm',
  fontWeight: '$medium',
  color: '$accents6',
  display: 'block',
  mw: '100%',
  width: '100%',
  '@sm': {
    mw: '50%',
  },
})

export const Section = styled('section', {
  zIndex: '$2',
  width: '100%',
})

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
})

export const StyledCardBlur = styled('div', {
  background: '$accents1',
  boxShadow: '$sm',
  borderRadius: '$lg',
  display: 'flex',
  flexDirection: 'column',
  p: '$8',
  bf: 'saturate(180%) blur(14px)',
  bg: 'rgba(255, 255, 255, 0.05)',
})

export const StyledImg = styled('img', {})
