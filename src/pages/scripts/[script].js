import Action from "../../components/Action"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import mockHttp from "../../api/Http"
import { useRouter } from "next/router"

const Script = ({ actions }) => {
  console.log(actions)
  const router = useRouter()
  const { script } = router.query

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Excel Parser</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            {actions &&
              actions.map((i) => (
                <Action body={`${i.id}. ${i.mainText}`} key={i.id} />
              ))}
            <Button>Add next instruction</Button>
          </Col>
          <Col xs="8">Excel window</Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const actions = await mockHttp("actions")
  return { props: { actions }, revalidate: 10 }
}

export const getStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default Script
