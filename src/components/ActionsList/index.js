import ActionCard from "../ActionCard"
import { useState } from "react"

const ActionsList = ({ actions, setActions }) => {
  const [activeAction, setActiveAction] = useState(0)

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

  // TODO: Request sheet[id] from server, given this selected action and all before it
  // TODO: Load sheet[id] into ExcelTable component

  return (
    <>
      {actions &&
        actions.map((action, index) => (
          <ActionCard
            action={action}
            key={index}
            id={index}
            setSingleAction={(value) => {
              setSingleAction(index, value)
            }}
            deleteAction={() => deleteAction(index)}
            bg={activeAction == index && "primary"}
            text={activeAction == index && "white"}
            onClick={() => setActiveAction(index)}
          />
        ))}
    </>
  )
}

export default ActionsList
