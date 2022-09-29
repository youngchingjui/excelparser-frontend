import ActionsList from "../../components/ActionsList"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import ExcelTable from "../../components/ExcelTable"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import { useRouter } from "next/router"
import { useState } from "react"

const Script = () => {
  const [downloadUrl, setDownloadUrl] = useState(null)
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
            <ActionsList downloadUrl={downloadUrl} />
          </Col>
          <Col xs="8">
            <ExcelTable setDownloadUrl={setDownloadUrl} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Script
