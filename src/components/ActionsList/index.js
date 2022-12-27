import { Reorder } from "framer-motion"
import { Card } from "react-bootstrap"

import ActionCard from "../ActionCard"

const ActionsList = ({
  actions,
  setActions,
  parseData,
  activeAction,
  setActiveAction,
  sheets,
}) => {
  const handleOnClick = (index) => {
    // Highlight action
    setActiveAction(index + 1)

    // Send all actions at index and above to server for parsing
    parseData(index)
  }

  const setSingleAction = (index, action) => {
    const actionsCopy = [...actions]
    actionsCopy[index] = action
    setActions(actionsCopy)
  }

  const deleteAction = (index) => {
    const actionsCopy = [...actions]
    actionsCopy.splice(index, 1)
    setActions(actionsCopy)
  }

  return (
    <>
      {sheets[0] && (
        <Card
          bg={activeAction == 0 && "primary"}
          text={activeAction == 0 && "white"}
          onClick={() => setActiveAction(0)}
        >
          <Card.Body>Original</Card.Body>
        </Card>
      )}
      <Reorder.Group axis="y" values={actions} onReorder={setActions} as="div">
        {actions &&
          actions.map((action, index) => (
            <Reorder.Item key={action._id} value={action} as="div">
              <ActionCard
                action={action}
                id={action._id}
                setSingleAction={(value) => {
                  setSingleAction(index, value)
                }}
                deleteAction={() => deleteAction(index)}
                bg={activeAction == index + 1 ? "primary" : undefined}
                text={activeAction == index + 1 && "white"}
                onClick={() => handleOnClick(index)}
              />
            </Reorder.Item>
          ))}
      </Reorder.Group>
    </>
  )
}

export default ActionsList
