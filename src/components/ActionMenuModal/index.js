import Card from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal"

const ActionMenuModal = ({ actionList, addAction, ...props }) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionList.map((action, index) => {
          return (
            <Card key={index} onClick={() => addAction(action)}>
              <Card.Body>{action.mainText}</Card.Body>
            </Card>
          )
        })}
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
