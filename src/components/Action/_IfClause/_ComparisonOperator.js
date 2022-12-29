import { relationalOperatorMapping } from "../../../helper/mappings"
import Action from ".."

const _ComparisonOperator = ({ state }) => {
  const { comparisonOperator, setComparisonOperator } = state
  const handleChange = (e) => {
    setComparisonOperator(
      Object.keys(relationalOperatorMapping).find(
        (k) => relationalOperatorMapping[k] === e.target.value
      )
    )
  }

  return (
    <Action.SelectField
      id="relationalOperator"
      options={Object.values(relationalOperatorMapping)}
      value={relationalOperatorMapping[comparisonOperator]}
      onChange={handleChange}
    />
  )
}

export default _ComparisonOperator
