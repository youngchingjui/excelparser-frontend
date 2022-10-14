import axios from "axios"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

const ScriptTitle = ({ title, id }) => {
  const [updating, setUpdating] = useState(false)
  const [titleState, setTitleState] = useState(title)

  const save = async (e) => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `/api/scripts/${id}`,
        data: { updates: { name: titleState } },
      })

      setTitleState(response.data.name)
    } catch (e) {
      console.error(e)
    }
    setUpdating(false)
  }

  return (
    <span id="script-title">
      <Container>
        <Row>
          <Col xs="auto">
            {updating ? (
              <Form.Control
                value={titleState}
                onChange={(e) => setTitleState(e.target.value)}
              />
            ) : (
              <h3>{titleState}</h3>
            )}
          </Col>
          <Col>
            {updating ? (
              <Button variant="primary" onClick={save}>
                Save
              </Button>
            ) : (
              <Button
                variant="outline-secondary"
                onClick={() => setUpdating(true)}
              >
                Edit
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </span>
  )
}

export default ScriptTitle
