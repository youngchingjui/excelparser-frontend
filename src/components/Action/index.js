import _IfClause from "./_IfClause"
import _IfThen from "./_IfThen"
import _RemoveRows from "./_RemoveRows"
import _SelectField from "./_SelectField"
import _TextField from "./_TextField"
import _ThenClause from "./_ThenClause"

const Action = {
  RemoveRows: _RemoveRows,
  IfClause: _IfClause,
  IfThen: _IfThen,
  ThenClause: _ThenClause,
  TextField: _TextField,
  SelectField: _SelectField,
}
export default Action
