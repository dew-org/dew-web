import { Card, styled } from '@nextui-org/react'

export const StyledCard = styled(Card, {
  py: '$2',
  mt: '$8',
  boxShadow: '$lg',
  br: '35px',
  ov: 'visible',
})

const BaseText = styled('p', {
  p: 0,
  m: 0,
  transformOrigin: 'left',
})

export const StyledTitle = styled(BaseText, {
  transformOrigin: 'left',
})

export const StyledSubtitle = styled(BaseText, {
  color: '$accents6',
  fontWeight: '$semibold',
  fontSize: '$base',
})

export const StyledPrice = styled(BaseText, {
  fontSize: '18px',
  fontWeight: '$bold',
})

export const StyledOldPrice = styled(BaseText, {
  ml: '$8',
  textDecorationLine: 'line-through',
  fontWeight: '$semibold',
  fontSize: '18px',
  color: '$accents6',
})

export const StyledDiscount = styled(BaseText, {
  ml: '$4',
  color: '$success',
  fontSize: '18px',
  fontWeight: '$semibold',
})
