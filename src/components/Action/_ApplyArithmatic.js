import { getColumnRange } from "../../helper/functions"
import Action from "."

const _ApplyArithmatic = ({ action, setSingleAction }) => {
  const handleChange = (e, field) => {
    const actionCopy = { ...action }
    actionCopy[field] = e.target.value
    setSingleAction(actionCopy)
  }
  return (
    <div id="setCellValue">
      <Action.SelectField
        options={["Add", "Subtract", "Multiply", "Divide"]}
        value={action.operation}
        onChange={(e) => {
          handleChange(e, "operation")
        }}
      />
      Column
      <Action.SelectField
        value={action.column}
        options={getColumnRange()}
        onChange={(e) => handleChange(e, "column")}
        type="number"
      />
      by
      <Action.TextField
        value={action.value}
        onChange={(e) => handleChange(e, "value")}
        type="text"
        inputMode="decimal"
      />{" "}
    </div>
  )
}

export default _ApplyArithmatic
