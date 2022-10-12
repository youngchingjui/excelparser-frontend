import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import Action from "../Action"

const ActionDispatch = ({ action, setSingleAction }) => {
  switch (action.type) {
    case "if":
      return <Action.IfThen action={action} setSingleAction={setSingleAction} />

    case "removeRows":
      return (
        <Action.RemoveRows action={action} setSingleAction={setSingleAction} />
      )

    default:
      return action.mainText
  }
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
            <Col>{ActionDispatch({ action, setSingleAction })}</Col>
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
