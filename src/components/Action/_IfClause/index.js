import { getColumnRange } from "../../helper/functions"
import { relationalOperatorMapping } from "../../helper/mappings"
import Action from "."

// BUG: When creating new actions (without saving), multiple ifThen clauses, the inputs will sync between IfClauses
const _IfClause = ({ index, ifClause, setIfClause }) => {
  const handleChangeA = (value) => {
    const ifClauseCopy = { ...ifClause }
    ifClauseCopy["a"]["value"] = parseInt(value)
    setIfClause(ifClauseCopy)
  }
  const handleChangeB = (value) => {
    const ifClauseCopy = { ...ifClause }
    ifClauseCopy["b"]["value"] = value
    setIfClause(ifClauseCopy)
  }
  const handleRelationalOperatorChange = (id, value) => {
    const ifClauseCopy = { ...ifClause }
    ifClauseCopy[id] = value
    setIfClause(ifClauseCopy)
  }

  return (
    <span key={index}>
      <Action.SelectField
        id="a"
        options={getColumnRange()}
        value={ifClause.a.value}
        onChange={(e) => handleChangeA(e.target.value)}
      />
      <Action.SelectField
        id="relationalOperator"
        options={Object.values(relationalOperatorMapping)}
        value={relationalOperatorMapping[ifClause.relationalOperator]}
        onChange={(e) =>
          handleRelationalOperatorChange(
            "relationalOperator",
            Object.keys(relationalOperatorMapping).find(
              (k) => relationalOperatorMapping[k] === e.target.value
            )
          )
        }
      />
      <Action.TextField
        value={ifClause.b.value}
        onChange={(e) => handleChangeB(e.target.value)}
      />
    </span>
  )
}

export default _IfClause
