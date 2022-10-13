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
    setUpdating(false)

    const response = await axios({
      method: "PATCH",
      url: `/api/scripts/${id}`,
      data: { updates: { name: titleState }, id },
    })

    if (response.status != 200) {
      console.error("did not update title correctly")
      // TODO: Set title back to old title
    }

    setTitleState(response.data.name)
  }

  return (
    <span id="script-title">
      <Container>
        <Row>
          <Col xs="9">
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
