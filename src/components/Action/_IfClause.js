import { range } from "../../helper/functions"
import Action from "."

const _IfClause = ({ index, ifClause, setIfClause }) => {
  const setSingleForm = (id, value) => {
    const ifClauseCopy = { ...ifClause }
    ifClauseCopy[id]["value"] = value
    setIfClause(ifClauseCopy)
  }

  return (
    <span key={index}>
      <Action.SelectField
        id="a"
        options={range(1, 11, 1)}
        value={ifClause.a.value}
        onChange={(e) => setSingleForm("a", e.target.value)}
      />
      {ifClause.relationalOperator}
      <Action.TextField
        value={ifClause.b.value}
        onChange={(e) => setSingleForm("b", e.target.value)}
      />
    </span>
  )
}

export default _IfClause
