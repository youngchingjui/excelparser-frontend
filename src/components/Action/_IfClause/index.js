import _ComparisonOperator from "./_ComparisonOperator"
import _ComparisonValue from "./_ComparisonValue"
import _RowColumnSelector from "./_RowColumnSelector"
import _RowColumnValue from "./_RowColumnValue"

// BUG: When creating new actions (without saving), multiple ifThen clauses, the inputs will sync between IfClauses
const _IfClause = ({ index, ifClause, setIfClause }) => {
  const {
    a: rowColumnObject,
    relationalOperator: comparisonOperator,
    b: comparisonObject,
  } = ifClause

  const { type: rowColumnType, value: rowColumnValue } = rowColumnObject
  const { type: comparisonType, value: comparisonValue } = comparisonObject

  const setRowColumnType = (value) => {
    setIfClause({ ...ifClause, a: { type: value, value: rowColumnValue } })
  }

  const setRowColumnValue = (value) => {
    setIfClause({ ...ifClause, a: { type: rowColumnType, value } })
  }

  const setComparisonOperator = (value) => {
    setIfClause({ ...ifClause, relationalOperator: value })
  }

  const setComparisonValue = (value) => {
    setIfClause({ ...ifClause, b: { type: comparisonType, value } })
  }

  return (
    <span key={index}>
      <_RowColumnSelector state={{ rowColumnType, setRowColumnType }} />
      <_RowColumnValue state={{ rowColumnValue, setRowColumnValue }} />
      <_ComparisonOperator
        state={{ comparisonOperator, setComparisonOperator }}
      />
      <_ComparisonValue state={{ comparisonValue, setComparisonValue }} />
    </span>
  )
}

export default _IfClause
