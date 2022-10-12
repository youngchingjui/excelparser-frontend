import { Card, Modal } from "react-bootstrap"

const getActionList = () => {
  return [
    {
      type: "removeRows",
      mainText: "Remove x rows",
      value: 2,
    },
    {
      type: "removeColumns",
      mainText: "Remove x columns",
    },
  ]
}

const ActionMenuModal = ({ actions, setActions, handleClose, ...props }) => {
  // add this action to the action list state
  const addAction = (actionObject) => {
    actions.push(actionObject)
    setActions(actions)

    // close modal
    handleClose()
  }

  const actionList = getActionList()
  return (
    <Modal onHide={handleClose} {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionList.map((e, index) => {
          return (
            <Card key={index} onClick={() => addAction(e)}>
              {e.mainText}
            </Card>
          )
        })}
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
