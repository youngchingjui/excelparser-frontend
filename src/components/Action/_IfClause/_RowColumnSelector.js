import Action from ".."

const RowColumnSelector = ({ state }) => {
  const { rowColumnType, setRowColumnType } = state
  return (
    <Action.SelectField
      options={["column", "row"]}
      value={rowColumnType}
      onChange={(e) => {
        setRowColumnType(e.target.value)
      }}
    />
  )
}

export default RowColumnSelector
