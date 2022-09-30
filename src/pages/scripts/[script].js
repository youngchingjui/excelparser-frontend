import ActionsList from "../../components/ActionsList"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import DownloadButton from "../../components/DownloadButton"
import ExcelTable from "../../components/ExcelTable"
import FileUploadButton from "../../components/FileUploadButton"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import TestComponent from "../../components/Test"
import { useRouter } from "next/router"
import { useState } from "react"

const Script = () => {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [actions, setActions] = useState([])
  const [sheets, setSheets] = useState([])
  const [activeAction, setActiveAction] = useState(0)
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
            <TestComponent
              actions={actions}
              sheets={sheets}
              setSheets={setSheets}
            />
            <FileUploadButton />
            <ActionsList
              actions={actions}
              setActions={setActions}
              activeAction={activeAction}
              setActiveAction={setActiveAction}
            />
            <DownloadButton variant="secondary" downloadUrl={downloadUrl}>
              Download file
            </DownloadButton>
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
