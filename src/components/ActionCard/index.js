import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import IfThenCard from "../Action/IfThenCard"

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
        {action.type == "if" && (
          <IfThenCard action={action} setSingleAction={setSingleAction} />
        )}
        <Container>
          <Row>
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
