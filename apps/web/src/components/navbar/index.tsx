import { useUser } from '@auth0/nextjs-auth0'
import NavbarActions from '@dew-org/components/navbar/NavbarActions'
import NavbarMainContent from '@dew-org/components/navbar/NavbarMainContent'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from '@dew-org/components/navbar/styles'
import { Container, Row, Spacer } from '@nextui-org/react'
import { useRouter } from 'next/router'

const EXCLUDED_ACTIONS_PAGES = ['/']

const Navbar = () => {
  const { user } = useUser()
  const router = useRouter()

  const showActions = !EXCLUDED_ACTIONS_PAGES.includes(router.pathname)

  return (
    <StyledNavMainContainer>
      <StyledNavContainer detached={true} showBlur={true}>
        <Container lg gap={0} as="nav">
          <Row>
            <NavbarMainContent />
          </Row>

          <Spacer y={0.5} x={0} />

          {showActions && user && (
            <Row justify="center">
              <NavbarActions />
            </Row>
          )}

          <Spacer y={0.5} x={0} />
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default Navbar
