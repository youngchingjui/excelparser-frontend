import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import Action from "../Action"

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
            {action.type == "if" && (
              <Action.IfThen
                action={action}
                setSingleAction={setSingleAction}
              />
            )}
            {action.type == "removeRows" && (
              <Action.RemoveRows
                initialValue={action.value}
                action={action}
                setSingleAction={setSingleAction}
              />
            )}
            <Col>{id + " " + action.mainText}</Col>
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
