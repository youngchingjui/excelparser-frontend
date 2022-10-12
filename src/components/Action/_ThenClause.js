import Action from "."

const _ThenClause = ({ action, setThenClause, ...props }) => {
  const { then } = action

  const setSingleForm = (key, value) => {
    const thenClauseCopy = { ...then }
    thenClauseCopy[key] = value
    setThenClause(thenClauseCopy)
  }

  if (!action) {
    return <></>
  }

  return (
    <span {...props}>
      <Action.SelectField
        id="then-subject"
        options={["date", "inflow", "outflow", "payee", "notes"]}
        value={then.a}
        onChange={(e) => setSingleForm("a", e.target.value)}
      />
      =
      <Action.SelectField
        id="then-value"
        options={["date", "inflow", "outflow", "payee", "notes"]}
        value={then.b}
        onChange={(e) => setSingleForm("b", e.target.value)}
      />
    </span>
  )
}

export default _ThenClause
