import Action from "../../components/Action"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import ExcelTable from "../../components/ExcelTable"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import mockHttp from "../../api/Http"
import { useRouter } from "next/router"
import { useState } from "react"

const Script = ({ actions }) => {
  const [tableContents, updateTableContents] = useState(null)
  const router = useRouter()
  const { script } = router.query

  let fileReader

  const handleFileRead = (e) => {
    const content = fileReader.result
    updateTableContents(content)
    console.log(content)
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
  const actions = await mockHttp("actions")
  return { props: { actions } }
}

export default Script
