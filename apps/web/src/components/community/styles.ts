import { StyledCardBlur } from '@dew-org/components/primitives'
import { lightTheme } from '@dew-org/theme'
import { styled } from '@nextui-org/react'

export const StyledCommunityCard = styled('a', StyledCardBlur, {
  width: '100%',
  minHeight: '140px',
  transition: '$default',
  [`.${lightTheme} &`]: {
    '& .github-icon > path': {
      fill: '#343434',
    },
  },
  '&:hover': {
    opacity: 0.8,
  },
})
