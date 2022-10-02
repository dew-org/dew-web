import { Badge, Link, Row, Spacer, Text } from '@nextui-org/react'
import NextLink from 'next/link'

const NavbarBrand = () => {
  return (
    <Row justify="flex-start" align="center">
      <NextLink href="/" passHref>
        <Link href="/">
          <Text h3 css={{ m: 0 }}>
            Dew
          </Text>
        </Link>
      </NextLink>

      <Spacer x={0.4} />

      <Badge isSquared color="secondary" variant="flat">
        Beta
      </Badge>
    </Row>
  )
}

export default NavbarBrand
