import { getColumnRange } from "../../../helper/functions"
import Action from ".."

// TODO: Don't use parseInt if ComparisonOperator is for strings
const _RowColumnValue = ({ state }) => {
  const { rowColumnValue, setRowColumnValue } = state

  return (
    <Action.SelectField
      id="a"
      options={getColumnRange()}
      value={rowColumnValue}
      onChange={(e) => {
        setRowColumnValue(e.target.value)
      }}
    />
  )
}

export default _RowColumnValue
