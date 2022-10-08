import SelectColumn from "../SelectColumn"
import TextColumn from "../TextField"

const IfClause = ({ index, ifClause, setIfClause }) => {
  const setSingleForm = (id, value) => {
    const ifClauseCopy = { ...ifClause }
    ifClauseCopy[id]["value"] = value
    setIfClause(ifClauseCopy)
  }

  return (
    <span key={index}>
      <SelectColumn
        id="a"
        options={["date", "inflow", "outflow", "payee", "notes"]}
        value={ifClause.a.value}
        onChange={(e) => setSingleForm("a", e.target.value)}
      />
      {ifClause.relationalOperator}
      <TextColumn
        value={ifClause.b.value}
        onChange={(e) => setSingleForm("b", e.target.value)}
      />
    </span>
  )
}

export default IfClause
