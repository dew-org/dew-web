import NavbarMainContent from '@dew-org/components/navbar/NavbarMainContent'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from '@dew-org/components/navbar/styles'
import { Container } from '@nextui-org/react'

const Navbar = () => {
  return (
    <StyledNavMainContainer id="navbar-container">
      <StyledNavContainer detached={true} showBlur={true}>
        <Container
          alignItems="center"
          as="nav"
          display="flex"
          lg={true}
          wrap="nowrap"
        >
          <NavbarMainContent />
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default Navbar
