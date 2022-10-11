import { Card, Modal } from "react-bootstrap"

const ActionMenuModal = ({ actions, setActions, handleClose, ...props }) => {
  const addAction = () => {
    // add this action to the action list state
    actions.push({
      type: "remove rows",
      mainText: "Remove x rows",
    })
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
        <Card onClick={addAction}>Remove x rows</Card>
        <Card>Remove x columns</Card>
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
