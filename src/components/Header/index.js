import Link from "next/link"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/">
          <Navbar.Brand>Excel Parser</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
