import { useEffect, useState } from "react"
import Action from "../../components/Action"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import DownloadButton from "../../components/DownloadButton"
import ExcelTable from "../../components/ExcelTable"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import { useRouter } from "next/router"

const Script = ({ actions }) => {
  const [tableContents, setTableContents] = useState(null)
  const [downloadUrl, setDownloadUrl] = useState(null)

  const router = useRouter()
  const { script } = router.query

  useEffect(() => {
    // Don't run if tableContents is not yet set
    if (!tableContents) {
      return
    }

    const blob = new Blob([tableContents])
    setDownloadUrl(window.URL.createObjectURL(blob))
  }, [tableContents])

  let fileReader

  const handleFileRead = (e) => {
    const content = fileReader.result
    setTableContents(content)
  }

  const handleChosenFile = (file) => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }

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
            <Form>
              <Form.Group>
                <Form.Control
                  type="file"
                  accept=".csv"
                  name="fileUpload"
                  id="fileUpload"
                  onChange={(e) => handleChosenFile(e.target.files[0])}
                ></Form.Control>
              </Form.Group>
            </Form>
            {actions &&
              actions.map((i) => (
                <Action body={`${i.id}. ${i.mainText}`} key={i.id} />
              ))}
            <Button>Add next instruction</Button>
            <DownloadButton downloadUrl={downloadUrl}>
              Download file
            </DownloadButton>
          </Col>
          <Col xs="8">
            {tableContents && <ExcelTable contents={tableContents} />}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getServerSideProps = async () => {
  const actions = await new Promise((res) => {
    setTimeout(async () => {
      const fetched = await import(`../api/mocks/actions.json`)
      res(fetched.default)
    }, 50)
  })
  return { props: { actions } }
}

export default Script
