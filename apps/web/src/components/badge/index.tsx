import {
  BadgeVariantsProps,
  StyledBadge,
} from '@dew-org/components/badge/styles'
import { CSS } from '@nextui-org/react'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'

type Props = {
  className?: string
}

type NativeAttributes = Omit<HTMLAttributes<any>, keyof Props>

type BadgeProps = Props & NativeAttributes & BadgeVariantsProps & { css?: CSS }

const Badge: FC<PropsWithChildren<BadgeProps>> = ({ children, ...props }) => {
  return <StyledBadge {...props}>{children}</StyledBadge>
}

export default Badge
