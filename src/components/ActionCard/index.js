import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import Action from "../Action"

const ActionDispatch = {
  if: (action, setSingleAction) => (
    <Action.IfThen action={action} setSingleAction={setSingleAction} />
  ),
  removeRows: (action, setSingleAction) => (
    <Action.RemoveRows action={action} setSingleAction={setSingleAction} />
  ),
  removeColumns: (action, setSingleAction) => (
    <Action.RemoveColumns action={action} setSingleAction={setSingleAction} />
  ),
}

const ActionCard = ({
  action,
  id,
  setSingleAction,
  deleteAction,
  ...props
}) => {
  return (
    <Card {...props}>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              {ActionDispatch.hasOwnProperty(action.type)
                ? ActionDispatch[action.type](action, setSingleAction)
                : action.mainText}
            </Col>
            <Col xs={1}>
              <Button variant="outline-danger" onClick={deleteAction}>
                D
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default ActionCard
