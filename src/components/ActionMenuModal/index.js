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
      value: 2,
    },
    { type: "addRows", mainText: "Add x rows", value: 2 },
    { type: "addColumns", mainText: "Add x columns", value: 2 },
    {
      type: "if",
      if: [
        {
          a: {
            type: "column",
            value: "inflow",
          },
          relationalOperator: "==",
          b: {
            type: "text",
            value: "tes text",
          },
        },
      ],
      then: {
        type: "assignment",
        a: "payee",
        b: "notes",
      },
      mainText: "If-Then logic",
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
              <Card.Body>{e.mainText}</Card.Body>
            </Card>
          )
        })}
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
