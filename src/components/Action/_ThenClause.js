import { getColumnRange } from "../../helper/functions"
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
      assign the value in Column
      <Action.SelectField
        id="then-subject"
        options={getColumnRange()}
        value={then.a}
        onChange={(e) => setSingleForm("a", e.target.value)}
      />
      to Column
      <Action.SelectField
        id="then-value"
        options={getColumnRange()}
        value={then.b}
        onChange={(e) => setSingleForm("b", e.target.value)}
      />
    </span>
  )
}

export default _ThenClause
