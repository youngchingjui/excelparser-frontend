import { useEffect, useState } from "react"
import ActionsList from "../../components/ActionsList"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import DownloadButton from "../../components/DownloadButton"
import ExcelTable from "../../components/ExcelTable"
import FileUploadButton from "../../components/FileUploadButton"
import Header from "../../components/Header"
import Row from "react-bootstrap/Row"
import TestComponent from "../../components/Test"
import axios from "axios"
import { useRouter } from "next/router"

const Script = () => {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [actions, setActions] = useState([])
  const [sheets, setSheets] = useState([])
  const [activeAction, setActiveAction] = useState(0)
  const router = useRouter()
  const { script } = router.query

  // Load actions from database into state
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`/api/scripts/${script}`, {
        method: "GET",
      })
      const { actions } = response.data
      setActions(actions)
    }

    fetchData().catch(console.error)
  }, [setActions, script])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <TestComponent
              actions={actions}
              sheets={sheets}
              setSheets={setSheets}
            />
            <FileUploadButton setSheets={setSheets} />
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
            <ExcelTable sheets={sheets} setDownloadUrl={setDownloadUrl} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Script
