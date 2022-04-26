import { useUser } from '@auth0/nextjs-auth0'
import AccountAvatar from '@dew-org/components/account-avatar'
import ThemeToggle from '@dew-org/components/theme-toggle'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from '@dew-org/layouts/styles'
import {
  Button,
  Col,
  Container,
  Loading,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { Login } from 'react-iconly'
import { FormattedMessage } from 'react-intl'

const Navbar = () => {
  const { user, isLoading } = useUser()

  return (
    <StyledNavMainContainer>
      <StyledNavContainer>
        <Container lg as="nav" display="flex" wrap="nowrap" alignItems="center">
          <Col
            css={{
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <Row justify="flex-start" align="center">
              <NextLink href="/" passHref>
                <Text h3>Dew</Text>
              </NextLink>
            </Row>
          </Col>

          <Col>
            <Row
              justify="flex-end"
              align="center"
              css={{
                position: 'initial',
                '@mdMax': {
                  jc: 'center',
                },
              }}
            >
              <Row
                justify="flex-end"
                align="center"
                gap={1}
                css={{
                  width: 'initial',
                  '@mdMax': {
                    d: 'none',
                  },
                }}
              >
                <ThemeToggle
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                />

                <Spacer x={1} />

                {isLoading && <Loading />}
                {!isLoading && user && <AccountAvatar />}
                {!isLoading && user === undefined && (
                  <NextLink href="/api/auth/login" passHref>
                    <Button auto flat size="sm" icon={<Login />} as="a">
                      <FormattedMessage defaultMessage="Sign In" />
                    </Button>
                  </NextLink>
                )}
              </Row>
            </Row>
          </Col>
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default Navbar
