import { getColumnRange } from "../../helper/functions"
import Action from "."

const _DeleteColumnsAToB = ({ action, setSingleAction }) => {
  const handleChange = (e, field) => {
    const actionCopy = { ...action }
    actionCopy[field] = parseInt(e.target.value)
    setSingleAction(actionCopy)
  }

  return (
    <div id="deleteColumnsAToB">
      Delete Columns
      <Action.SelectField
        value={action.a}
        options={getColumnRange()}
        onChange={(e) => handleChange(e, "a")}
        type="number"
      />
      to
      <Action.SelectField
        value={action.b}
        options={getColumnRange()}
        onChange={(e) => handleChange(e, "b")}
        type="number"
      />
    </div>
  )
}

export default _DeleteColumnsAToB
