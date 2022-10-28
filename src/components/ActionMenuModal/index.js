import Card from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal"

const ActionMenuModal = ({
  actions,
  setActions,
  handleClose,
  actionList,
  ...props
}) => {
  // add this action to the action list state
  const addAction = (actionObject) => {
    actions.push(actionObject)
    setActions(actions)

    // close modal
    handleClose()
  }

  return (
    <Modal onHide={handleClose} {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionList.map((e, index) => {
          return (
            <Card key={index} onClick={() => addAction(e)}>
              <Card.Body>{e.mainText}</Card.Body>
            </Card>
          )
        })}
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
