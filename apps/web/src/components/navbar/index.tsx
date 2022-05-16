import NavbarActions from '@dew-org/components/navbar/NavbarActions'
import NavbarMainContent from '@dew-org/components/navbar/NavbarMainContent'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from '@dew-org/components/navbar/styles'
import { useMediaQuery } from '@dew-org/hooks/use-media-query'
import { useSidebarSettings } from '@dew-org/shared'
import { Container, Grid, Row } from '@nextui-org/react'
import { useRouter } from 'next/router'

const EXCLUDED_ACTIONS_PAGES = ['/']

const Navbar = () => {
  const isMobile = useMediaQuery(960)
  const router = useRouter()

  const showActions =
    !isMobile && !EXCLUDED_ACTIONS_PAGES.includes(router.pathname)

  const [routes] = useSidebarSettings()

  return (
    <StyledNavMainContainer id="navbar-container">
      <StyledNavContainer detached={true} showBlur={true}>
        <Container
          lg={true}
          as="nav"
          display="flex"
          alignItems="center"
          css={{ pt: '$8', pb: showActions ? '$2' : '$8' }}
        >
          <Row>
            <NavbarMainContent />
          </Row>

          {showActions && (
            <Row align="center" justify="center">
              <Grid.Container gap={1} justify="center">
                <NavbarActions routes={routes} />
              </Grid.Container>
            </Row>
          )}
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default Navbar
