import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import TrashIcon from "../../../public/static/assets/svg/trash.svg"
import Action from "../Action"

const ActionDispatch = {
  ifThenStatement: (action, setSingleAction) => (
    <Action.IfThen action={action} setSingleAction={setSingleAction} />
  ),
  removeRows: (action, setSingleAction) => (
    <Action.RemoveRows action={action} setSingleAction={setSingleAction} />
  ),
  removeColumns: (action, setSingleAction) => (
    <Action.RemoveColumns action={action} setSingleAction={setSingleAction} />
  ),
  removeAtoBRows: (action, setSingleAction) => (
    <Action.RemoveAToBRows action={action} setSingleAction={setSingleAction} />
  ),
  insertAColumnsAfterColumnB: (action, setSingleAction) => (
    <Action.InsertAColumnsAfterColumnB
      action={action}
      setSingleAction={setSingleAction}
    />
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
        <Row>
          <Col xs="10">
            {ActionDispatch.hasOwnProperty(action.type)
              ? ActionDispatch[action.type](action, setSingleAction)
              : action.mainText}
          </Col>
          <Col xs="2">
            <div className="trash">
              <TrashIcon onClick={deleteAction} />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ActionCard
