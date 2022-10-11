import { Card, Modal } from "react-bootstrap"

const ActionMenuModal = ({ ...props }) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>Remove x rows</Card>
        <Card>Remove x columns</Card>
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
