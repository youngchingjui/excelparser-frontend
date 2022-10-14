import Link from "next/link"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Link href="/" passHref>
            <Navbar.Brand>Excel Parser</Navbar.Brand>
          </Link>
          <Link href="/scripts" passHref>
            <Nav.Link>Scripts</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
