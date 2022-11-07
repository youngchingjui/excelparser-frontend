import Action from "."

const _SetCellValue = ({ action, setSingleAction }) => {
  const handleChange = (e, field) => {
    const actionCopy = { ...action }
    if (e.target.type == "number") {
      // Set minimum to 1
      if (e.target.value < 1) {
        actionCopy[field] = 1
      } else {
        actionCopy[field] = parseInt(e.target.value)
      }
    } else {
      actionCopy[field] = e.target.value
    }
    setSingleAction(actionCopy)
  }
  return (
    <div id="setCellValue">
      Set cell in Column
      <Action.TextField
        value={action.column}
        onChange={(e) => handleChange(e, "column")}
        type="number"
      />
      , Row
      <Action.TextField
        value={action.row}
        onChange={(e) => handleChange(e, "row")}
        type="number"
      />{" "}
      to value{" "}
      <Action.TextField
        value={action.value}
        onChange={(e) => handleChange(e, "value")}
      />
    </div>
  )
}

export default _SetCellValue
