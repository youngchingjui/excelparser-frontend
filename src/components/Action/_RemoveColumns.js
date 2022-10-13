import Action from "."

const _RemoveColumns = ({ action, setSingleAction }) => {
  const handleChange = (e) => {
    const actionCopy = { ...action }
    actionCopy.value = e.target.value
    setSingleAction(actionCopy)
  }
  return (
    <div id="removeColumns">
      Remove first
      <Action.TextField
        value={action.value}
        onChange={handleChange}
        type="number"
      />
      columns
    </div>
  )
}

export default _RemoveColumns
