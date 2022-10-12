import { Navbar } from '@nextui-org/react'
import { FC } from 'react'

type Props = {
  title: string
  path: string
}

const SimpleLink: FC<Props> = ({ title, path }) => {
  return <Navbar.Link href={path}>{title}</Navbar.Link>
}

export default SimpleLink
