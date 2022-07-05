import { CSS, styled, Switch, Tooltip, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

type Props = {
  className?: string
  css?: CSS
}

const StyledSwitch = styled(Switch, {
  m: 0,
  p: 0,
  '& .material-symbols-rounded': {
    fontSize: '14px',
  },
})

export const ThemeToggle: FC<Props> = ({ className, css }) => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Tooltip
      placement="bottom"
      color="secondary"
      content={<FormattedMessage defaultMessage="Switch theme" />}
      css={{ zIndex: '$max' }}
      hideArrow
    >
      <StyledSwitch
        aria-label="toggle a light and dark color scheme"
        onChange={handleToggleTheme}
        checked={isDark}
        iconOn={<span className="material-symbols-rounded">light_mode</span>}
        iconOff={<span className="material-symbols-rounded"> dark_mode </span>}
      />
    </Tooltip>
  )
}

export default ThemeToggle
