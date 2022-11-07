import { getColumnRange } from "../../helper/functions"
import Action from "."

const insertAColumnsAfterColumnB = ({ action, setSingleAction }) => {
  const handleChange = (e, field) => {
    const actionCopy = { ...action }
    actionCopy[field] = parseInt(e.target.value)
    setSingleAction(actionCopy)
  }

  return (
    <div id="insertAColumnsAfterColumnB">
      Add
      <Action.TextField
        value={action.a}
        onChange={(e) => handleChange(e, "a")}
        type="number"
      />
      columns after Column
      <Action.SelectField
        options={getColumnRange()}
        value={action.b}
        onChange={(e) => handleChange(e, "b")}
      />
    </div>
  )
}

export default insertAColumnsAfterColumnB
