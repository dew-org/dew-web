import { useTheme } from '@nextui-org/react'
import NextNProgress from 'nextjs-progressbar'

const Progress = () => {
  const { theme } = useTheme()

  return <NextNProgress color={theme.colors.gradient.value} />
}

export default Progress
